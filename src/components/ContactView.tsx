import { useState, FormEvent, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Sparkles, Send, Trash2 } from 'lucide-react';

interface ContactViewProps {
  prefilledBrief: string;
  setPrefilledBrief: (brief: string) => void;
}

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
  timestamp: string;
}

export default function ContactView({ prefilledBrief, setPrefilledBrief }: ContactViewProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [reason, setReason] = useState('web-construction');
  const [message, setMessage] = useState('');
  
  const [submittedBriefs, setSubmittedBriefs] = useState<Inquiry[]>(() => {
    try {
      const saved = localStorage.getItem('vanguard_inquiries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Prefill the message when the services brief shifts
  useEffect(() => {
    if (prefilledBrief) {
      setMessage(prefilledBrief);
      setReason('web-construction');
      // Clean up prefill so navigating away/back doesn't lock it
      setPrefilledBrief('');
    }
  }, [prefilledBrief, setPrefilledBrief]);

  const handleSubmitInquiry = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setToastMessage({
        type: 'error',
        text: 'Form validation failed. Please fill in all required inputs.'
      });
      return;
    }

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || 'Independent Professional',
      reason,
      message: message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newInquiry, ...submittedBriefs];
    setSubmittedBriefs(updated);
    try {
      localStorage.setItem('vanguard_inquiries', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to persist inquiries', err);
    }

    // Set success toast
    setToastMessage({
      type: 'success',
      text: 'Project Brief registered. Our lead architect Freja has been notified.'
    });

    // Clear main fields
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');

    // Clear toast message automatically after 6 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const deleteInquiry = (id: string) => {
    const filtered = submittedBriefs.filter(item => item.id !== id);
    setSubmittedBriefs(filtered);
    try {
      localStorage.setItem('vanguard_inquiries', JSON.stringify(filtered));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id="contact-view" className="w-full">
      {/* Intro Header */}
      <section className="pt-36 pb-16 bg-linear-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Project Initiation</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight leading-none mb-6">
              Let\'s Construct Something Memorable.
            </h1>
            <p className="font-sans text-md text-zinc-600 leading-relaxed">
              We respond to all verified project briefs within 24 working hours. Fill out the scope specifications sheet below, or drop by our studio.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form Left, Details Right */}
      <section className="py-12 bg-white border-t border-zinc-150 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Form Section (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-50 p-6 sm:p-10 rounded-xl border border-zinc-200">
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-zinc-200/60">
                <h2 className="font-display font-bold text-xl text-zinc-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-zinc-900" />
                  Technical Briefing Form
                </h2>
                <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">Secure Protocol</span>
              </div>

              {/* Toast notifier */}
              {toastMessage && (
                <div
                  id="form-toast-alert"
                  className={`p-4 rounded-lg mb-6 flex items-start gap-3 border transition-all animate-fade-in ${
                    toastMessage.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                      : 'bg-rose-50 border-rose-200 text-rose-800'
                  }`}
                >
                  {toastMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600 mt-0.5" />
                  )}
                  <div>
                    <span className="text-xs font-bold block">
                      {toastMessage.type === 'success' ? 'Protocol Success' : 'Input Malfunction'}
                    </span>
                    <p className="text-xs mt-0.5">{toastMessage.text}</p>
                  </div>
                </div>
              )}

              {/* Form elements */}
              <form onSubmit={handleSubmitInquiry} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-client-name" className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Swede"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-lg text-sm transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-client-email" className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@swede-capital.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-lg text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-client-company" className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Swede Capital AB"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-lg text-sm transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label id="lbl-brief-reason" className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 font-bold">
                      Inquiry Category *
                    </label>
                    <select
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      <option value="brand-architecture">Visual Identity Design</option>
                      <option value="web-construction">Static Web Construction</option>
                      <option value="ergonomic-auditing">Interaction Auditing</option>
                      <option value="general-inquiry">General Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label id="lbl-brief-msg" className="font-mono text-[9px] uppercase tracking-wider text-zinc-505 font-bold">
                    Project Requirements / Message details *
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Provide details about pages, color wishes, target launch dates..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-zinc-200 focus:border-zinc-950 focus:outline-none rounded-lg text-sm transition-colors resize-y font-sans leading-relaxed"
                  />
                  {prefilledBrief && (
                    <span className="font-mono text-[9px] text-zinc-400">
                      * Pre-populated with details constructed inside the Services budget Estimator.
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  Authorize Project Brief
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Direct Connect Section (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Studio credentials card */}
              <div className="bg-zinc-950 text-white p-8 rounded-xl border border-zinc-900">
                <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Immediate Inbounds</span>
                <h3 className="font-display font-medium text-lg leading-snug mb-6">
                  Prefer direct audio channels or encrypted mail?
                </h3>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 flex-shrink-0">
                      <Mail className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-zinc-400 block mb-0.5">Project intake and RFP</span>
                      <a href="mailto:alahmad.firas@gmail.com" className="text-sm font-semibold hover:underline text-white">
                        partners@vanguard.digital
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center border border-zinc-800 flex-shrink-0">
                      <Phone className="w-4 h-4 text-zinc-300" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase text-zinc-400 block mb-0.5">Telephone exchange</span>
                      <a href="tel:+4681234567" className="text-sm font-semibold hover:underline text-white">
                        +46 (0) 8 123 45 67
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Studio Locations */}
              <div className="bg-white p-8 rounded-xl border border-zinc-200 flex flex-col gap-5">
                <h4 className="font-display font-bold text-sm text-zinc-950 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Physical Studios
                </h4>
                
                <div className="h-[1px] bg-zinc-100" />

                <div className="grid grid-cols-2 gap-6 text-xs text-zinc-600">
                  <div>
                    <span className="font-mono text-[9px] font-extrabold uppercase text-zinc-800 block mb-1">Stockholm (HQ)</span>
                    <p className="leading-relaxed">
                      Sveavägen 85, Penthouse<br />
                      113 50 Stockholm
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] font-extrabold uppercase text-zinc-800 block mb-1">Zurich Office</span>
                    <p className="leading-relaxed">
                      Bahnhofstrasse 12, Floor 4<br />
                      8001 Zürich
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submitted Inquiry simulated log console (Client-side view simulation) */}
          {submittedBriefs.length > 0 && (
            <div id="submissions-log-sandbox" className="mt-16 bg-zinc-50 border border-zinc-200 rounded-xl p-6 sm:p-8 animate-fade-in">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-4 border-b border-zinc-200">
                <div>
                  <h3 className="font-display font-extrabold text-sm text-zinc-950 uppercase tracking-wider">
                    Submitted Briefs Terminal Registry (Local Client Simulation)
                  </h3>
                  <p className="text-[10px] text-zinc-500 font-sans mt-0.5">
                    This lists registered inquiry submissions stored inside your local storage sandbox interface.
                  </p>
                </div>
                <button
                  id="clear-all-briefs-btn"
                  onClick={() => {
                    setSubmittedBriefs([]);
                    localStorage.removeItem('vanguard_inquiries');
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-zinc-200 hover:bg-zinc-150 text-zinc-700 hover:text-zinc-950 rounded text-xs transition-colors cursor-pointer font-semibold"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear Registry
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {submittedBriefs.map((brief) => (
                  <div
                    key={brief.id}
                    id={`submission-item-${brief.id}`}
                    className="bg-white border border-zinc-200 rounded-lg p-5 flex flex-col sm:flex-row justify-between items-start gap-4 transition-all hover:border-zinc-300"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <span className="font-display font-extrabold text-xs text-zinc-950">
                          {brief.name}
                        </span>
                        <span className="text-zinc-300 text-xs">|</span>
                        <span className="font-mono text-[10px] text-zinc-500 font-bold uppercase py-0.5 px-2 bg-zinc-100 rounded">
                          {brief.reason.replace('-', ' ')}
                        </span>
                        <span className="text-zinc-350 text-[10px]">{brief.email}</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-400 block mb-3">
                        Org: {brief.company}
                      </span>
                      <p className="font-mono text-[10px] text-zinc-600 bg-zinc-50 border border-zinc-100 p-3 rounded leading-relaxed whitespace-pre-wrap max-w-4xl">
                        {brief.message}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-end gap-3 justify-between w-full sm:w-auto">
                      <span className="font-mono text-[9px] text-zinc-400 block">
                        Received {brief.timestamp}
                      </span>
                      
                      <button
                        id={`delete-brief-${brief.id}`}
                        onClick={() => deleteInquiry(brief.id)}
                        className="p-1.5 hover:bg-zinc-50 text-zinc-400 hover:text-red-500 rounded transition-colors cursor-pointer"
                        aria-label="Delete Submission"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

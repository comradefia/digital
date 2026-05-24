import { useState, useMemo } from 'react';
import { Check, Compass, Code2, Cpu, BarChart4, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { Page, ServiceItem } from '../types';

interface ServicesViewProps {
  setCurrentPage: (page: Page) => void;
  setPrefilledBrief: (brief: string) => void;
}

export default function ServicesView({ setCurrentPage, setPrefilledBrief }: ServicesViewProps) {
  // Service configuration
  const servicesList: ServiceItem[] = [
    {
      id: 'ser-1',
      title: 'Visual Identity & Brand Architecture',
      description: 'We construct a customized visual design language, typographical grid principles, curated color systems, and responsive logo formats to secure brand authority.',
      priceEstimate: 3500,
      iconName: 'Compass',
      features: ['Full SVG logo suite', 'Typographical stylebook', 'Palette tokens', 'Layout grid templates']
    },
    {
      id: 'ser-2',
      title: 'Premium Web Construction & Clean Static Code',
      description: 'Handcrafted HTML, CSS, and TypeScript web systems utilizing React and Tailwind. High performance indices guaranteeing sub-second loading states.',
      priceEstimate: 5000,
      iconName: 'Code2',
      features: ['Perfect semantic code', '100 scores core web vitals', 'Mobile touch-ready design', 'Local search triggers']
    },
    {
      id: 'ser-3',
      title: 'Interaction Ergonomics & Visual Auditing',
      description: 'Full restructuring of existing platforms to align with strict responsive design break points, readability constraints, and layout design balance.',
      priceEstimate: 2900,
      iconName: 'Cpu',
      features: ['Ergonomics compliance report', 'Pristine touch target fixes', 'Contrast ratio verification', 'Load assets optimization']
    }
  ];

  // Pricing Interactive state variables
  const [selectedServices, setSelectedServices] = useState<string[]>(['ser-2']);
  const [pageCount, setPageCount] = useState<number>(4);
  const [timelineUrgency, setTimelineUrgency] = useState<string>('standard'); // urgent, standard, flexible
  const [includeHighPerformanceGuarantee, setIncludeHighPerformanceGuarantee] = useState<boolean>(true);
  const [includeCopywriting, setIncludeCopywriting] = useState<boolean>(false);

  const calculateEstimate = useMemo(() => {
    let base = 0;
    
    // Add up base rates of selected services
    servicesList.forEach(srv => {
      if (selectedServices.includes(srv.id)) {
        base += srv.priceEstimate;
      }
    });

    if (base === 0) return 0;

    // Multiply or modify by page count
    // Base pricing assumes up to 4 pages. Additional pages cost 250 each.
    if (pageCount > 4) {
      base += (pageCount - 4) * 250;
    }

    // Timeline factor
    if (timelineUrgency === 'urgent') {
      base *= 1.25; // 25% rush markup
    } else if (timelineUrgency === 'flexible') {
      base *= 0.95; // 5% discount
    }

    // Add-on options
    if (includeHighPerformanceGuarantee) {
      base += 400;
    }
    if (includeCopywriting) {
      base += 800;
    }

    return Math.round(base);
  }, [selectedServices, pageCount, timelineUrgency, includeHighPerformanceGuarantee, includeCopywriting]);

  const toggleServiceElection = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(srvId => srvId !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleExportBrief = () => {
    const selectedServiceNames = servicesList
      .filter(s => selectedServices.includes(s.id))
      .map(s => s.title)
      .join(', ');

    const briefText = `Interested in a dynamic custom project package:
- Elected Services: ${selectedServiceNames || 'None selected'}
- Target Page Count: ${pageCount} pages
- Timeframe Urgency: ${timelineUrgency.toUpperCase()}
- 100 Performance Score Guarantee: ${includeHighPerformanceGuarantee ? 'YES' : 'NO'}
- Technical Copywriting Add-on: ${includeCopywriting ? 'YES' : 'NO'}
- Calculated Budget Estimate: $${calculateEstimate.toLocaleString()} USD`;

    setPrefilledBrief(briefText);
    setCurrentPage(Page.Contact);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="services-view" className="w-full">
      {/* Services Title section */}
      <section className="pt-36 pb-20 bg-linear-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Service Catalog</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight leading-none mb-6">
              Our Digital Layout Capabilities.
            </h1>
            <p className="font-sans text-md text-zinc-600 leading-relaxed">
              We focus purely on crafting fast, gorgeous, and responsive static-feeling website systems. We handle everything starting from typography pairings and mood definitions, to complete standards-compliant HTML, CSS, and React assemblies.
            </p>
          </div>
        </div>
      </section>

      {/* Services detailed blocks */}
      <section className="py-20 bg-white border-t border-zinc-150">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {servicesList.map((service) => {
              return (
                <div
                  key={service.id}
                  id={`service-block-${service.id}`}
                  className="bg-zinc-50 rounded-xl border border-zinc-200 p-8 flex flex-col justify-between transition-all hover:border-zinc-300"
                >
                  <div>
                    {/* Render matching icon */}
                    <div className="w-12 h-12 rounded-lg bg-zinc-950 text-white flex items-center justify-center mb-6">
                      {service.iconName === 'Compass' && <Compass className="w-5 h-5" />}
                      {service.iconName === 'Code2' && <Code2 className="w-5 h-5" />}
                      {service.iconName === 'Cpu' && <Cpu className="w-5 h-5" />}
                    </div>

                    <h3 className="font-display font-extrabold text-lg text-zinc-950 mb-3 leading-snug">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <h4 className="font-mono text-[10px] uppercase tracking-widest font-extrabold text-zinc-400 mb-3 border-t border-zinc-200/60 pt-6">
                      Included Capabilities
                    </h4>
                    <ul className="flex flex-col gap-2.5 mb-8">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-zinc-700">
                          <Check className="w-4 h-4 text-zinc-950 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 block">Baseline Pricing</span>
                      <span className="font-display font-bold text-lg text-zinc-800">${service.priceEstimate.toLocaleString()}</span>
                    </div>
                    <button
                      id={`calc-select-btn-${service.id}`}
                      onClick={() => {
                        if (!selectedServices.includes(service.id)) {
                          setSelectedServices([...selectedServices, service.id]);
                        }
                        const el = document.getElementById('budget-simulator');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2 hover:bg-zinc-950 hover:text-white border border-zinc-300 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Calculate estimate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Budget Calculator / Project Brief Planner */}
      <section id="budget-simulator" className="py-24 bg-zinc-900 text-white border-y border-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Live Estimation Machine</span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white mb-2">
              Interactive Project Planner
            </h2>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed">
              Synthesize your target project configuration in real-time. Select the capabilities, determine timelines, and add features to get an immediate budget summary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Control Form (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-8 rounded-xl border border-zinc-800 flex flex-col gap-8">
              
              {/* Step 1: Services Toggles */}
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider block mb-4 font-extrabold">
                  01. Choose Core Design Capabilities
                </span>
                <div className="flex flex-col gap-3">
                  {servicesList.map(srv => {
                    const isChecked = selectedServices.includes(srv.id);
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        id={`simulator-toggle-${srv.id}`}
                        onClick={() => toggleServiceElection(srv.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-lg border text-left cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-zinc-900 border-white text-white shadow-sm'
                            : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                        }`}
                      >
                        <div className="flex gap-3 items-center">
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-white border-white' : 'border-zinc-700'
                          }`}>
                            {isChecked && <Check className="w-3.5 h-3.5 text-zinc-950 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="font-display font-medium text-xs sm:text-sm block">{srv.title}</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-zinc-400">${srv.priceEstimate}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Slider for Page Count */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider font-extrabold">
                    02. Scope Scale (Page Count: {pageCount})
                  </span>
                  <span className="font-mono text-xs text-zinc-500">
                    {pageCount <= 4 ? 'Baseline Rate Included' : `+$${((pageCount - 4) * 250).toLocaleString()} USD`}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  id="simulator-page-slider"
                  value={pageCount}
                  onChange={(e) => setPageCount(Number(e.target.value))}
                  className="w-full accent-white bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between font-mono text-[9px] text-zinc-600 mt-2">
                  <span>1 Page Landing</span>
                  <span>4 Pages Standard</span>
                  <span>10 Pages</span>
                  <span>20 Pages Studio</span>
                </div>
              </div>

              {/* Step 3: Urgency Selector Toggles */}
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider block mb-3.5 font-extrabold">
                  03. Timeframe Urgency
                </span>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { val: 'flexible', label: 'Flexible', desc: 'Slight Discount (-5%)' },
                    { val: 'standard', label: 'Standard', desc: 'Base Pricing' },
                    { val: 'urgent', label: 'Urgent System', desc: 'Rush Priority (+25%)' }
                  ].map((t) => (
                    <button
                      key={t.val}
                      type="button"
                      id={`simulator-urgency-${t.val}`}
                      onClick={() => setTimelineUrgency(t.val)}
                      className={`p-3 rounded-lg border text-center transition-all cursor-pointer ${
                        timelineUrgency === t.val
                          ? 'bg-white border-white text-zinc-950 font-bold'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className="font-display text-xs block">{t.label}</span>
                      <span className="font-mono text-[8px] text-zinc-500 block mt-0.5">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Add-on Checkboxes */}
              <div>
                <span className="font-mono text-[10px] uppercase text-zinc-400 tracking-wider block mb-3.5 font-extrabold">
                  04. Premium Enhancements
                </span>
                <div className="flex flex-col gap-3">
                  <label
                    id="perf-addon-label"
                    className="flex justify-between items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700"
                  >
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeHighPerformanceGuarantee}
                        onChange={(e) => setIncludeHighPerformanceGuarantee(e.target.checked)}
                        className="w-4 h-4 rounded accent-white cursor-pointer bg-zinc-950"
                      />
                      <div>
                        <span className="font-display text-xs font-semibold block">100/100 Lighthouse Performance Index</span>
                        <span className="font-sans text-[10px] text-zinc-500 block">Strict optimization guaranteeing immediate page speed metric.</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 flex-shrink-0 ml-4">+$400</span>
                  </label>

                  <label
                    id="copy-addon-label"
                    className="flex justify-between items-center p-3.5 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer hover:border-zinc-700"
                  >
                    <div className="flex gap-3 items-center">
                      <input
                        type="checkbox"
                        checked={includeCopywriting}
                        onChange={(e) => setIncludeCopywriting(e.target.checked)}
                        className="w-4 h-4 rounded accent-white cursor-pointer bg-zinc-950"
                      />
                      <div>
                        <span className="font-display text-xs font-semibold block">Technical Copywriting & Layout Auditing</span>
                        <span className="font-sans text-[10px] text-zinc-500 block">We write all core narrative blocks, taglines, and feature content.</span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-zinc-400 flex-shrink-0 ml-4">+$800</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Display Budget Estimate (5 cols) */}
            <div className="lg:col-span-5 bg-white text-zinc-950 p-8 rounded-xl border border-zinc-200 shadow-2xl sticky top-28 flex flex-col justify-between min-h-[480px]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart4 className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold">
                    Estimate Output Console
                  </span>
                </div>
                
                <h3 className="font-display font-extrabold text-2xl text-zinc-950 tracking-tight">
                  Brief Blueprint Summary
                </h3>
                
                <div className="h-[1px] bg-zinc-100 my-5" />

                {selectedServices.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="font-sans text-xs text-zinc-400 italic">
                      Please select at least one design capability in step 01 to initialize estimate.
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-600 font-medium">Core Services Rate:</span>
                      <span className="font-mono text-xs font-bold">
                        ${servicesList
                          .filter(s => selectedServices.includes(s.id))
                          .reduce((sum, s) => sum + s.priceEstimate, 0)
                          .toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-600 font-medium font-sans">Pages Rate ({pageCount} Pages):</span>
                      <span className="font-mono text-xs font-bold">
                        {pageCount <= 4 ? '$0 (Baseline Included)' : `+$${((pageCount - 4) * 250).toLocaleString()}`}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-xs text-zinc-600 font-medium">Urgency Factor ({timelineUrgency.toUpperCase()}):</span>
                      <span className="font-mono text-xs font-bold">
                        {timelineUrgency === 'flexible' && '-5% discount'}
                        {timelineUrgency === 'standard' && 'Standard rate'}
                        {timelineUrgency === 'urgent' && '+25% rush charge'}
                      </span>
                    </div>

                    {includeHighPerformanceGuarantee && (
                      <div className="flex justify-between">
                        <span className="text-xs text-zinc-600 font-medium">Lighthouse 100 Guarantee:</span>
                        <span className="font-mono text-xs font-bold">+$400</span>
                      </div>
                    )}

                    {includeCopywriting && (
                      <div className="flex justify-between">
                        <span className="text-xs text-zinc-600 font-medium">Technical Copywriting:</span>
                        <span className="font-mono text-xs font-bold">+$800</span>
                      </div>
                    )}

                    <div className="h-[1px] bg-zinc-100 my-2" />
                  </div>
                )}
              </div>

              <div>
                {selectedServices.length > 0 && (
                  <div className="mb-6 flex flex-col gap-1 text-center bg-zinc-50 p-4 rounded-lg">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">Calculated Value Investment</span>
                    <span className="font-display font-black text-3xl text-zinc-950 tracking-tight">
                      ${calculateEstimate.toLocaleString()} <span className="text-xs font-medium text-zinc-500">USD</span>
                    </span>
                  </div>
                )}

                <button
                  id="simulator-export-btn"
                  disabled={selectedServices.length === 0}
                  onClick={handleExportBrief}
                  className={`w-full group py-4 flex items-center justify-center gap-2 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors ${
                    selectedServices.length === 0
                      ? 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                      : 'bg-zinc-950 hover:bg-zinc-800 cursor-pointer'
                  }`}
                >
                  Forward Project Brief
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

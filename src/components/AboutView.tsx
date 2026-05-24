import { useState } from 'react';
import { Award, Eye, Heart, Check, Users, ShieldCheck, Milestone } from 'lucide-react';
import { TeamMember } from '../types';

interface MilestoneItem {
  year: string;
  title: string;
  subtitle: string;
  details: string;
}

export default function AboutView() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  const milestones: MilestoneItem[] = [
    {
      year: '2022',
      title: 'Founding of Vanguard',
      subtitle: 'Stockholm, Sweden',
      details: 'Vanguard was initialized inside a small design loft in Sweden by three creative engineers with the vision to make client-side web interfaces feel like cohesive, instant, and tactile machines.'
    },
    {
      year: '2023',
      title: 'Expansion & W3C Standards Focus',
      subtitle: 'Zurich Lab Launch',
      details: 'Established a core development think-tank focusing deeply on responsive layouts, strict typescript systems, and absolute accessibility compliance for global financial products.'
    },
    {
      year: '2024',
      title: 'High Performance & CSS Architecture',
      subtitle: 'CSS System Patents',
      details: 'Pioneered custom atomic layout patterns in Tailwind and compiled fluid rendering engines, ensuring all client websites score 100 on standard core web vitals.'
    },
    {
      year: '2025',
      title: 'Vanguard Global Launch',
      subtitle: 'Web3 & Beyond',
      details: 'Opened Swede Penthouse Headquarters and grew to supporting enterprise networks globally with high-contrast web blueprints and complex visual frameworks.'
    }
  ];

  const team: TeamMember[] = [
    {
      id: 'team-1',
      name: 'Freja Lindqvist',
      role: 'Founding Partner & Lead Architect',
      bio: 'Freja has spent 12 years engineering layout blueprints. She ensures every structural frame satisfies exact math ratios and visual proportions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=350&q=80',
      skills: ['TypeScript', 'Visual Grids', 'W3C Ergonomics']
    },
    {
      id: 'team-2',
      name: 'Arvid Sjöberg',
      role: 'Lead Developer & Interaction Designer',
      bio: 'Arvid translates complex canvas specifications into lightning-fast React components, keeping main thread rendering times under 50ms.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=350&q=80',
      skills: ['CSS Optimization', 'Micro-Animations', 'Accessibility']
    },
    {
      id: 'team-3',
      name: 'Elena Kaelis',
      role: 'Principal Fluid designer',
      bio: 'Elena designs state transitions and responsive color frameworks that look consistent from compact mobile screens to massive grid displays.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=350&q=80',
      skills: ['Color Grids', 'UX Resiliency', 'Branding']
    }
  ];

  return (
    <div id="about-view" className="w-full">
      {/* Intro Header */}
      <section className="pt-36 pb-20 bg-linear-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Our Core Story</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-indigo-950 tracking-tight leading-tight mb-6">
              A studio built on mathematical balance and pristine aesthetics.
            </h1>
            <p className="font-sans text-md text-zinc-600 leading-relaxed">
              We started Vanguard because we were tired of "AI slop" and automated visual templates that look identical and render sluggishly. We believe every brand deserves a custom-designed, pixel-perfect, highly optimized, and responsive static presence that communicates authority.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="py-20 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Left intro col */}
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold text-zinc-505 uppercase tracking-widest block mb-3">Operational Values</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
                  How we approach digital construction
                </h2>
              </div>
              <p className="font-sans text-xs text-zinc-500 leading-relaxed mt-6 hidden md:block">
                We design with strict compliance parameters. Performance, accessibility, and architectural layout rules are never treated as secondary.
              </p>
            </div>

            {/* Right values col (8 cols) */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 mt-1">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-zinc-950 mb-1.5">Meticulous Craftsmanship</h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    We select every margins, typeface, and color palette with dedicated logical intent. Every code block is written by experienced professionals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 mt-1">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-zinc-950 mb-1.5">No-Friction Communication</h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    We deliver clear blueprint files, exact functional interactive mockups, and respond to design requirements within hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 mt-1">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-zinc-950 mb-1.5">Complete Visual Authority</h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    Our digital designs are unique to your brand\'s authority. We avoid default generic layouts to guarantee immediate visual differentiation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-950 mt-1">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-zinc-950 mb-1.5">Persistent Performance</h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    We support static-feel layouts that loads in less than 1 second, resulting in optimal organic SEO positioning and premium conversions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Story Timeline */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-150">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3 animate-pulse">
              Interactive Chronicle
            </span>
            <h2 className="font-display text-3xl font-bold text-zinc-950 tracking-tight">
              Our Journey Through Time
            </h2>
            <p className="font-sans text-xs text-zinc-500 mt-2">
              Select any year block to reveal details about milestones and technical growth phases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Year selectors (4 cols) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-4 lg:pb-0 scrollbar-none">
              {milestones.map((item, index) => (
                <button
                  key={index}
                  id={`milestone-btn-${item.year}`}
                  onClick={() => setActiveMilestoneIndex(index)}
                  className={`flex-shrink-0 flex items-center gap-4 text-left p-5 rounded-lg border cursor-pointer transition-all ${
                    activeMilestoneIndex === index
                      ? 'bg-zinc-950 text-white border-zinc-950 shadow-md'
                      : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <span className="font-mono text-xl font-black">{item.year}</span>
                  <div className="hidden sm:block">
                    <span className="font-display text-xs font-bold block">{item.title}</span>
                    <span className={`text-[10px] block ${activeMilestoneIndex === index ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {item.subtitle}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Display detail (8 cols) */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-xl border border-zinc-200 shadow-xs h-[300px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Milestone className="w-5 h-5 text-zinc-500" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Phase 0{activeMilestoneIndex + 1} System
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-zinc-950 mb-4">
                  {milestones[activeMilestoneIndex].title} — {milestones[activeMilestoneIndex].subtitle}
                </h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  {milestones[activeMilestoneIndex].details}
                </p>
              </div>

              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-zinc-900" />
                <span>ACTIVE Blueprints & Technical logs cleared.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Our Architects</span>
            <h2 className="font-display text-3xl font-bold text-zinc-950 tracking-tight">
              An assembly of highly focused engineers & stylists.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                id={`team-card-${member.id}`}
                className="group bg-zinc-50 rounded-xl border border-zinc-150 overflow-hidden hover:border-zinc-300 hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden bg-zinc-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display font-extrabold text-lg text-zinc-950 leading-none mb-1">
                    {member.name}
                  </h3>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500 block mb-4">
                    {member.role}
                  </span>
                  
                  <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-200">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="font-mono text-[9px] font-semibold bg-white border border-zinc-200 text-zinc-700 px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

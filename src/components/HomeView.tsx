import { useState } from 'react';
import { ArrowRight, Code, PenTool, Layers, ExternalLink, X, Plus } from 'lucide-react';
import { Page, Project } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: Page) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects: Project[] = [
    {
      id: 'proj-1',
      title: 'Aether Capital',
      category: 'Design & Engineering Identity',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      description: 'A complete brand visual system and high-contrast responsive interface for Stockholm\'s leading investment network.',
      year: '2026'
    },
    {
      id: 'proj-2',
      title: 'Verve Smart Logistics',
      category: 'Interactive Dashboard Ecology',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      description: 'A real-time routing platform emphasizing visual data hierarchy, typography tracking, and low-latency rendering grids.',
      year: '2025'
    },
    {
      id: 'proj-3',
      title: 'Helix Autonomous Lab',
      category: 'Web3 & Node Framework System',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      description: 'An architectural showcase of physical biotech installations translated to WebGL-immersed web controls.',
      year: '2025'
    }
  ];

  return (
    <div id="home-view" className="w-full">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-linear-to-b from-zinc-50 to-white overflow-hidden">
        {/* Subtle decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-800 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-zinc-950 animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Now booking for Q3 2026</span>
            </div>
            
            {/* Title display */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 leading-[1.1] mb-8">
              Exceptional digital design. Built on absolute <span className="underline decoration-2 underline-offset-8 decoration-zinc-900">architectural honesty</span>.
            </h1>
            
            <p className="font-sans text-lg text-zinc-600 leading-relaxed mb-10 max-w-2xl">
              We construct clean, incredibly fast web layouts, visual design systems, and responsive layouts that perform flawlessly under any scale. No visual slop, just pure craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="hero-cta-contact"
                onClick={() => setCurrentPage(Page.Contact)}
                className="group flex items-center justify-center gap-2 px-7 py-4 bg-zinc-950 hover:bg-zinc-800 text-white font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                Initiate Project Brief
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                id="hero-cta-services"
                onClick={() => setCurrentPage(Page.Services)}
                className="px-7 py-4 bg-white hover:bg-zinc-50 text-zinc-950 border border-zinc-200 font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-all cursor-pointer text-center"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Core Pillars Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-zinc-200">
            <div>
              <span className="font-mono text-3xl font-bold text-zinc-950 block">100%</span>
              <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1 block">W3C Compliance</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-zinc-950 block">12+</span>
              <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Industry Awards</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-zinc-950 block">98%</span>
              <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1 block">Satisfaction Score</span>
            </div>
            <div>
              <span className="font-mono text-3xl font-bold text-zinc-950 block">&lt; 1s</span>
              <span className="font-sans text-xs text-zinc-500 uppercase tracking-widest mt-1 block">FCP Load Speed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section with beautiful 3-grid Cards */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Our Core Philosophy</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Crafted meticulously. Decided with absolute intent.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all flex flex-col gap-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-zinc-200 shadow-xs">
                <PenTool className="w-6 h-6 text-zinc-950" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-zinc-950 mb-2">Impeccable Visual Integrity</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  We create tailored color grids, bespoke responsive frames, and pristine typography pairings to elevate your unique identity.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all flex flex-col gap-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-zinc-200 shadow-xs">
                <Code className="w-6 h-6 text-zinc-950" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-zinc-950 mb-2">Next-Gen Clean Code</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  Every interface is hand-constructed with optimized TypeScript, fully typed properties, semantic nesting, and lightning-fast asset pipelines.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-100 hover:border-zinc-300 transition-all flex flex-col gap-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-zinc-200 shadow-xs">
                <Layers className="w-6 h-6 text-zinc-950" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-zinc-950 mb-2">Ergonomic Architecture</h3>
                <p className="font-sans text-sm text-zinc-600 leading-relaxed">
                  We build with logical screen density, ensuring accessibility compliance, full mobile responsive ergonomics, and high readability index.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Grid (Selected projects) */}
      <section className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3">Recent Deployments</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
                Selected Works
              </h2>
            </div>
            <button
              id="view-all-services-link"
              onClick={() => setCurrentPage(Page.Services)}
              className="group flex items-center gap-1.5 font-display text-sm font-semibold text-zinc-950 hover:opacity-80 transition-opacity cursor-pointer"
            >
              See Service Capabilities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group bg-white rounded-xl border border-zinc-150 overflow-hidden hover:shadow-xl transition-all duration-350 flex flex-col"
              >
                {/* Image container */}
                <div className="relative aspect-video overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[9px] font-extrabold uppercase tracking-widest bg-zinc-950 text-white px-2.5 py-1 rounded">
                    {project.year}
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-zinc-950 mb-3 group-hover:text-zinc-800">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <button
                    id={`project-btn-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 bg-zinc-50 hover:bg-zinc-950 hover:text-white text-zinc-800 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    Examine Project
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct CTA Section */}
      <section className="py-24 bg-zinc-950 text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="font-mono text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-4">Are you ready to build?</span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-8">
            Let's construct a premium digital presence for your brand.
          </h2>
          <p className="font-sans text-md text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Send us your core project brief. Our engineers and designers will construct a comprehensive timeline and visual prototype within 48 hours.
          </p>
          <button
            id="home-cta-bottom-btn"
            onClick={() => setCurrentPage(Page.Contact)}
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white hover:bg-zinc-200 text-zinc-950 font-display text-xs font-bold uppercase tracking-widest rounded-lg transition-colors cursor-pointer"
          >
            Initiate Project Brief
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Project Detail Dialog Modal */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-16/9 bg-zinc-950 flex items-center justify-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                id="close-modal-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal details */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-4 gap-4">
                <div>
                  <span className="font-mono text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-zinc-950 mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                <div className="font-mono text-sm font-semibold text-zinc-400">
                  {selectedProject.year}
                </div>
              </div>

              <div className="h-[1px] bg-zinc-100 my-5" />

              <p className="font-sans text-sm text-zinc-600 leading-relaxed mb-6">
                {selectedProject.description} We used architectural typography principles and robust grid hierarchies to build a cohesive visual layout. Every margin, padding element, responsive break point, and layout block is optimized for maximum screen responsiveness and touch interaction on mobile devices.
              </p>

              <div className="grid grid-cols-2 gap-4 bg-zinc-50 p-4 rounded-lg mb-8">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">Development Tech</span>
                  <span className="text-xs font-medium text-zinc-800">HTML5, CSS3, ES2022, React</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 block">Performance Index</span>
                  <span className="text-xs font-medium text-zinc-800">99/100 Google Lighthouse</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  id="modal-cta-get-started"
                  onClick={() => {
                    setSelectedProject(null);
                    setCurrentPage(Page.Contact);
                  }}
                  className="flex-1 py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-widest rounded-lg transition-colors text-center cursor-pointer"
                >
                  Request Similar System
                </button>
                <button
                  id="modal-cta-close"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-zinc-200 hover:bg-zinc-50 text-zinc-800 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors text-center cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

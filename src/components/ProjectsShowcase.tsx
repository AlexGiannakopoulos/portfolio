import React from 'react';
import { CheckCircle, Sparkles } from 'lucide-react';
import { FEATURED_CASE_STUDIES } from '../data/portfolioData';
import { CornerScrews, VentCluster } from './common/Screws';
import { LedIndicator } from './common/LedIndicator';

export const ProjectsShowcase: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              SECTION 03 // ARCHITECTURAL BLUEPRINTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight drop-shadow-[0_1px_0_#ffffff]">
            Featured Systems & Case Studies
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-muted max-w-md">
          Deep dives into Agentic AI orchestrations, MCP testing engines, and high-performance automation frameworks.
        </p>
      </div>

      {/* Grid of Case Studies */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {FEATURED_CASE_STUDIES.map((project) => (
          <div
            key={project.id}
            className="relative rounded-2xl bg-chassis p-6 sm:p-7 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] border border-white/60 hover:-translate-y-1 hover:shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff] transition-all duration-300 flex flex-col justify-between group"
          >
            <CornerScrews inset={12} />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-borderNeumorphic-dark/20">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 bg-chassis rounded shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]">
                  {project.badge}
                </span>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-emerald-600 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    {project.status}
                  </span>
                  <VentCluster count={2} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-extrabold text-ink-primary drop-shadow-[0_1px_0_#ffffff] group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>

              {/* Category */}
              <p className="font-mono text-xs font-bold text-ink-muted uppercase tracking-wide mb-3">
                {project.category}
              </p>

              {/* Description */}
              <p className="text-sm text-ink-primary/90 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Architecture Blueprint Well */}
              <div className="p-3.5 rounded-xl bg-recessed shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] mb-4 space-y-1.5">
                <span className="font-mono text-[10px] font-bold uppercase text-ink-muted tracking-wider block mb-1">
                  SYSTEM BLUEPRINT:
                </span>
                {project.architecture.map((arch, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-ink-primary">
                    <CheckCircle size={12} className="text-accent mt-0.5 shrink-0" />
                    <span className="leading-snug">{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Impact & Tags */}
            <div className="space-y-3 pt-3 border-t border-borderNeumorphic-dark/20">
              {/* Impact Callout */}
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent">
                <Sparkles size={14} className="shrink-0" />
                <span>{project.impact}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] font-bold text-ink-muted bg-chassis px-2 py-0.5 rounded shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

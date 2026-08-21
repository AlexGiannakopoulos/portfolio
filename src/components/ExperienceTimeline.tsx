import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/portfolioData';
import { CornerScrews } from './common/Screws';
import { LedIndicator } from './common/LedIndicator';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              SECTION 02 // CAREER MISSIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight drop-shadow-[0_1px_0_#ffffff]">
            Professional Experience
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-muted max-w-md">
          Chronological record of agentic AI systems engineering, and QA.
        </p>
      </div>

      {/* Timeline Experience Cards */}
      <div className="relative space-y-10">
        {/* Physical Pipe Conduit connecting the cards vertically */}
        <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-2 rounded-full bg-recessed shadow-[inset_1px_1px_3px_rgba(0,0,0,0.3),inset_-1px_-1px_2px_rgba(255,255,255,0.8)] z-0" />

        {WORK_EXPERIENCES.map((exp, index) => {
          const isActive = exp.status === 'active';

          return (
            <div
              key={exp.id}
              className="relative z-10 lg:pl-16 transition-all duration-300"
            >
              {/* Pipe Junction Node (Desktop) */}
              <div
                className="hidden lg:flex absolute left-6 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-chassis shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] items-center justify-center border border-white/60 z-20"
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    isActive ? 'bg-accent shadow-[0_0_8px_rgba(255,71,87,0.8)] animate-pulse' : 'bg-[#a0aec0]'
                  }`}
                />
              </div>

              {/* Bolted Module Card */}
              <div
                className="relative rounded-2xl bg-chassis p-6 sm:p-8 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] border border-white/60 hover:shadow-[12px_12px_24px_#babecc,-12px_-12px_24px_#ffffff] transition-all group"
              >
                <CornerScrews inset={14} />

                {/* Card Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 mb-4 border-b border-borderNeumorphic-dark/20">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-accent uppercase tracking-wider">
                        MISSION #{String(index + 1).padStart(2, '0')}
                      </span>
                      {isActive && (
                        <span className="font-mono text-[10px] bg-emerald-500/15 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                          ACTIVE STATION
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-extrabold text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
                      {exp.role}
                    </h3>
                    <div className="text-lg font-bold text-accent">
                      {exp.company}
                    </div>
                  </div>

                  {/* Metadata Plate */}
                  <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-ink-muted">
                    <div className="flex items-center gap-1.5 bg-recessed px-2.5 py-1 rounded shadow-[inset_1px_1px_2px_#babecc]">
                      <Calendar size={13} className="text-accent" />
                      <span className="font-bold text-ink-primary">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-ink-muted" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Quantified Metric Badge (if present) */}
                {exp.metrics && (
                  <div className="mb-4 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#283038] text-white shadow-[inset_1px_1px_3px_rgba(0,0,0,0.6)]">
                    <TrendingUp size={14} className="text-accent" />
                    <span className="font-mono text-xs font-bold text-accent">
                      {exp.metrics.value}
                    </span>
                    <span className="font-mono text-[11px] text-gray-300">
                      {exp.metrics.label}
                    </span>
                  </div>
                )}

                {/* Achievements List */}
                <div className="space-y-2.5 my-4">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-ink-primary leading-relaxed">
                      <div className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Hardware Tags */}
                <div className="pt-4 border-t border-borderNeumorphic-dark/20 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase text-ink-muted tracking-wider mr-1">
                    TECH DEPLOYED:
                  </span>
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-recessed text-ink-primary font-mono text-[11px] font-bold shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

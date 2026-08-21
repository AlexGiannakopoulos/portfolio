import React from 'react';
import { GraduationCap, Award, Globe, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_DATA, SPECIAL_ACADEMIC_CREDENTIALS, SPOKEN_LANGUAGES } from '../data/portfolioData';
import { CornerScrews, VentCluster } from './common/Screws';
import { LedIndicator } from './common/LedIndicator';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              SECTION 05 // ACADEMIC ACCREDITATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight drop-shadow-[0_1px_0_#ffffff]">
            Education & Certifications
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-muted max-w-md">
          Higher education degrees, university validation committee participation, and multilingual credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Higher Degrees (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={edu.id}
              className="relative rounded-2xl bg-chassis p-6 sm:p-7 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] border border-white/60 group hover:shadow-[10px_10px_20px_#babecc,-10px_-10px_20px_#ffffff] transition-all"
            >
              <CornerScrews inset={12} />

              <div className="flex flex-wrap items-start justify-between gap-2 pb-3 mb-3 border-b border-borderNeumorphic-dark/20">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-recessed text-accent shadow-[inset_1px_1px_2px_#babecc]">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                      ACADEMIC TIER 0{idx + 1}
                    </span>
                    <h3 className="text-xl font-extrabold text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {edu.highlight && (
                  <span className="font-mono text-[10px] font-bold uppercase text-accent bg-chassis px-2.5 py-1 rounded shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]">
                    {edu.highlight}
                  </span>
                )}
              </div>

              <div className="space-y-1 mb-3">
                <div className="text-sm font-bold text-ink-primary">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-ink-muted">
                  {edu.affiliation}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-ink-muted mb-4">
                <div className="flex items-center gap-1.5 bg-recessed px-2.5 py-0.5 rounded shadow-[inset_1px_1px_2px_#babecc]">
                  <Calendar size={12} className="text-accent" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={12} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink-primary/90 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Validation Board & Languages (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Validation Board Stamped Plaque */}
          {SPECIAL_ACADEMIC_CREDENTIALS.map((cred, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-[#283038] text-white p-6 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff,inset_1px_1px_1px_rgba(255,255,255,0.15)] border border-[#1d232a]"
            >
              <CornerScrews inset={12} />

              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-accent flex items-center gap-1.5">
                  <Award size={14} />
                  {cred.stamp}
                </span>
                <VentCluster count={2} />
              </div>

              <h4 className="text-base font-extrabold text-white mb-1">
                {cred.title}
              </h4>
              <p className="font-mono text-[11px] text-gray-400 mb-3">
                {cred.institution}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed font-sans">
                {cred.description}
              </p>
            </div>
          ))}

          {/* Spoken Languages Module */}
          <div className="relative rounded-2xl bg-chassis p-6 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] border border-white/60">
            <CornerScrews inset={12} />

            <div className="flex items-center justify-between pb-3 mb-4 border-b border-borderNeumorphic-dark/20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-recessed text-accent shadow-[inset_1px_1px_2px_#babecc]">
                  <Globe size={16} />
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary">
                  Language Matrix
                </h4>
              </div>
              <span className="font-mono text-[10px] text-ink-muted">3 CODES</span>
            </div>

            <div className="space-y-3">
              {SPOKEN_LANGUAGES.map((lang) => (
                <div
                  key={lang.code}
                  className="p-3 rounded-xl bg-recessed shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-chassis font-mono font-bold text-xs text-accent flex items-center justify-center shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]">
                      {lang.code}
                    </span>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-ink-primary">
                        {lang.name}
                      </div>
                      <div className="text-[11px] text-ink-muted">
                        {lang.proficiency}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] font-bold uppercase text-ink-primary bg-chassis px-2 py-1 rounded shadow-inner">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

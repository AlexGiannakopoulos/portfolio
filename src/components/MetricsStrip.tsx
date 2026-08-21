import React from 'react';
import { QUANTIFIED_METRICS } from '../data/portfolioData';
import { CornerScrews, VentCluster } from './common/Screws';

export const MetricsStrip: React.FC = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 max-w-7xl mx-auto">
      {/* Dark Technical Chassis Plate */}
      <div className="relative rounded-2xl bg-[#283038] p-6 sm:p-8 shadow-[10px_10px_24px_#babecc,-10px_-10px_24px_#ffffff,inset_1px_1px_1px_rgba(255,255,255,0.15)] border border-[#1b2126] text-white">
        <CornerScrews inset={14} />

        {/* Top Header of the Plate */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(255,71,87,0.9)] animate-pulse" />
            <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-gray-200">
              OPERATIONAL TELEMETRY & QUANTIFIED IMPACT
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="font-mono text-[10px] text-gray-400">BENCHMARK: EMPIRICAL CV DATA</span>
            <VentCluster count={4} />
          </div>
        </div>

        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUANTIFIED_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className="relative p-4 sm:p-5 rounded-xl bg-[#1d232a] border border-white/5 shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6),inset_-1px_-1px_3px_rgba(255,255,255,0.05)] group hover:border-accent/40 transition-all duration-300"
            >
              {/* Metric Code Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                  {metric.code}
                </span>
                <span className="font-mono text-[9px] text-gray-500">0{idx + 1} // RAW</span>
              </div>

              {/* Large Embossed Numeric Display */}
              <div className="font-mono text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] group-hover:text-accent transition-colors">
                {metric.value}
              </div>

              {/* Label */}
              <div className="font-mono text-xs sm:text-sm font-bold text-gray-200 mt-2 uppercase tracking-wide">
                {metric.label}
              </div>

              {/* Subtext Context */}
              <p className="text-[11px] text-gray-400 mt-1 leading-snug font-sans">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LedIndicator } from './common/LedIndicator';
import { CornerScrews, VentCluster } from './common/Screws';
import { GithubIcon, LinkedinIcon } from './common/Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-borderNeumorphic-dark/30 pt-12 pb-16 px-4 sm:px-6 lg:px-12 bg-chassis text-ink-primary">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Main Footer Chassis Box */}
        <div className="relative rounded-2xl bg-chassis p-6 sm:p-8 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] border border-white/60">
          <CornerScrews inset={14} />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Operator Identifier */}
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center gap-2">
                <LedIndicator color="green" size="sm" />
                <span className="font-mono text-xs font-black tracking-widest text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
                  ANG-OS TELEMETRY DEPLOYMENT // 2026
                </span>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed font-mono">
                ENGINEER: {PERSONAL_INFO.fullName} <br />
                MSc Data Analytics & Tech // EY Greece Data Scientist
              </p>
            </div>

            {/* Middle: Stamped Serial Plate */}
            <div className="md:col-span-3 flex md:justify-center">
              <div className="p-3 rounded-xl bg-recessed shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] font-mono text-[10px] text-ink-muted space-y-1">
                <div>CHASSIS: INDUSTRIAL-SKEUOMORPH</div>
                <div>HOST: GITHUB-PAGES-IO</div>
                <div className="text-accent font-bold">STATUS: OPERATIONAL 100%</div>
              </div>
            </div>

            {/* Right: Social Hub & Return to Top */}
            <div className="md:col-span-3 flex flex-col sm:flex-row md:flex-col items-start md:items-end justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-chassis shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-accent active:shadow-pressed transition-all"
                  title="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-chassis shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-accent active:shadow-pressed transition-all"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-chassis shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-accent active:shadow-pressed transition-all"
                  title="Direct Email"
                >
                  <Mail size={16} />
                </a>
              </div>

              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-chassis shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] active:shadow-pressed font-mono text-[10px] font-bold uppercase text-ink-primary hover:text-accent transition-all"
              >
                <ArrowUp size={14} />
                <span>TOP OF DECK</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Small Print */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-muted/80 gap-2">
          <span>&copy; {new Date().getFullYear()} Alexandros-Nektarios Giannakopoulos. All Systems Verified.</span>
          <div className="flex items-center gap-2">
            <span>DESIGN STYLE: INDUSTRIAL SKEUOMORPHISM</span>
            <VentCluster count={2} />
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { Download, Mail, ArrowRight, Cpu, Code2, Database, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TactileButton } from './common/TactileButton';
import { LedIndicator } from './common/LedIndicator';
import { TelemetryConsole } from './TelemetryConsole';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column (60% on desktop: 7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Industrial Identity Plate */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-chassis shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/40">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary">
              EY GREECE // DATA SCIENTIST
            </span>
            <span className="text-borderNeumorphic-dark">|</span>
            <span className="font-mono text-[11px] text-accent font-bold">
              AGENTIC AI & AUTOMATION
            </span>
          </div>

          {/* Main Hero Typography */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-primary leading-[1.08] drop-shadow-[0_1px_1px_#ffffff]">
              Alexandros - Nektarios <br className="hidden sm:inline" />
              <span className="text-accent">Giannakopoulos</span>
            </h1>

            <p className="font-mono text-base sm:text-lg lg:text-xl font-bold text-ink-muted uppercase tracking-wide">
              {PERSONAL_INFO.headline}
            </p>
          </div>

          {/* Bio Description (60-65 chars per line for optimal reading ergonomics) */}
          <p className="text-base sm:text-lg text-ink-primary/90 leading-relaxed max-w-2xl font-normal">
            {PERSONAL_INFO.bio}
          </p>

          {/* Quick Hardware Spec Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { icon: <Cpu size={13} />, label: 'Agentic AI / MS Framework' },
              { icon: <Code2 size={13} />, label: 'Python & PyTorch' },
              { icon: <Terminal size={13} />, label: 'MCP Protocol' },
              { icon: <Database size={13} />, label: 'SQL / Neo4j / Postgres' },
            ].map((spec, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-recessed font-mono text-[11px] font-bold text-ink-primary shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]"
              >
                <span className="text-accent">{spec.icon}</span>
                <span>{spec.label}</span>
              </div>
            ))}
          </div>

          {/* Action Control Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
            <TactileButton
              variant="primary"
              size="lg"
              href="#contact"
              icon={<Mail size={16} />}
              className="shadow-button-accent"
            >
              DISPATCH TRANSMISSION
            </TactileButton>

            <TactileButton
              variant="chassis"
              size="lg"
              href="#experience"
              icon={<ArrowRight size={16} />}
              iconPosition="right"
            >
              MISSION LOGS
            </TactileButton>

            <TactileButton
              variant="recessed"
              size="lg"
              href={PERSONAL_INFO.resumePath}
              download="Alexandros-Nektarios-Giannakopoulos-CV.pdf"
              icon={<Download size={16} />}
            >
              CV (PDF)
            </TactileButton>
          </div>
        </div>

        {/* Right Column (40% on desktop: 5 cols) - Telemetry Terminal & 3D CSS Device */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <TelemetryConsole />
        </div>
      </div>
    </section>
  );
};

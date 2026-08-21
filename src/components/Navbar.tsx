import React, { useState } from 'react';
import { Download, Menu, X, Terminal, Cpu, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { VentCluster } from './common/Screws';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Experience', href: '#experience', icon: <Briefcase size={15} /> },
    { name: 'Case Studies', href: '#projects', icon: <Cpu size={15} /> },
    { name: 'Skill Matrix', href: '#skills', icon: <Terminal size={15} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={15} /> },
    { name: 'Transmission', href: '#contact', icon: <Mail size={15} /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-12 pt-3 pb-2 backdrop-blur-md bg-chassis/90 border-b border-borderNeumorphic-dark/20 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Hardware Plaque */}
        <a
          href="#"
          className="flex items-center gap-3 p-1.5 sm:px-3 sm:py-2 rounded-xl bg-chassis shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] border border-white/40 group hover:shadow-[6px_6px_12px_#babecc,-6px_-6px_12px_#ffffff] transition-all"
        >
          {/* Hardware Stamp */}
          <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-mono font-black text-sm shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),2px_2px_4px_rgba(0,0,0,0.2)]">
            AG
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono font-extrabold text-xs sm:text-sm tracking-wider text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
                ALEXANDROS.G
              </span>
              <span className="hidden sm:inline-block font-mono text-[9px] font-bold text-accent bg-recessed px-1.5 py-0.2 rounded shadow-inner">
                v2.6
              </span>
            </div>
            <span className="font-mono text-[9px] text-ink-muted uppercase tracking-widest">
              DATA SCIENTIST // AI
            </span>
          </div>
        </a>

        {/* Operational Telemetry LED (Desktop) */}
        <div className="hidden lg:flex items-center gap-4 px-4 py-2 rounded-lg bg-chassis shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/30">
          <LedIndicator color="green" label="SYS: OPERATIONAL" subLabel="EY GREECE // DATA SCIENTIST" size="sm" />
          <VentCluster count={3} />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider text-ink-primary hover:text-accent hover:shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] transition-all flex items-center gap-1.5"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <TactileButton
            variant="primary"
            size="sm"
            href={PERSONAL_INFO.resumePath}
            download="Alexandros-Nektarios-Giannakopoulos-CV.pdf"
            icon={<Download size={14} />}
            className="shadow-button-accent"
          >
            <span className="hidden sm:inline">GET RESUME</span>
            <span className="sm:hidden">CV</span>
          </TactileButton>

          {/* Mobile Menu Actuator */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-lg bg-chassis shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] text-ink-primary hover:text-accent transition-all"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Physical drop panel) */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 p-4 rounded-2xl bg-chassis shadow-[inset_4px_4px_8px_#babecc,inset_-4px_-4px_8px_#ffffff] border border-white/50 space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-borderNeumorphic-dark/30">
            <LedIndicator color="green" label="ONLINE" subLabel="ATHENS, GR" size="sm" />
            <span className="font-mono text-[10px] text-ink-muted">SYS_ID: ANG-2026</span>
          </div>

          <div className="grid grid-cols-1 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-chassis shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] font-mono text-xs font-bold uppercase tracking-wider text-ink-primary active:shadow-pressed"
              >
                <span className="text-accent">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-2">
            <TactileButton
              variant="primary"
              size="md"
              fullWidth
              href={PERSONAL_INFO.resumePath}
              download="Alexandros-Nektarios-Giannakopoulos-CV.pdf"
              icon={<Download size={15} />}
            >
              DOWNLOAD OFFICIAL CV (PDF)
            </TactileButton>
          </div>
        </div>
      )}
    </header>
  );
};

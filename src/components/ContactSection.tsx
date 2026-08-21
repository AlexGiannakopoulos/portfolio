import React, { useState } from 'react';
import { Mail, Phone, Send, Copy, Check, Terminal, ExternalLink, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CornerScrews, VentCluster } from './common/Screws';
import { LedIndicator } from './common/LedIndicator';
import { TactileButton } from './common/TactileButton';
import { GithubIcon, LinkedinIcon } from './common/Icons';

type SubmitStatus = 'IDLE' | 'TRANSMITTING' | 'SUCCESS' | 'ERROR';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('IDLE');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim() || !formData.email.trim() || !formData.name.trim()) return;

    setSubmitStatus('TRANSMITTING');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '4cb47120-8200-4e8f-8d01-f551815a4258',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Inquiry from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio Inquiry)`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('SUCCESS');
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.75 },
          colors: ['#ff4757', '#2ed573', '#e0e5ec', '#2d3436'],
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('ERROR');
        setErrorMessage(result.message || 'Signal transmission failed. Please try again.');
      }
    } catch {
      setSubmitStatus('ERROR');
      setErrorMessage('Network connection error. Please verify connection or use direct email.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              SECTION 06 // COMMS CONSOLE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight drop-shadow-[0_1px_0_#ffffff]">
            Dispatch Transmission
          </h2>
        </div>
        <p className="font-mono text-xs text-ink-muted max-w-md">
          Open a direct channel for AI research inquiries, data science collaborations, or enterprise consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Communication Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Channel Card: Email */}
          <div className="relative rounded-2xl bg-chassis p-5 shadow-[6px_6px_14px_#babecc,-6px_-6px_14px_#ffffff] border border-white/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                PRIMARY COMMS
              </span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-1.5 rounded bg-chassis shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff] active:shadow-pressed text-ink-muted hover:text-accent transition-all"
                title="Copy to clipboard"
              >
                {copiedKey === 'email' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-recessed text-accent shadow-[inset_2px_2px_4px_#babecc]">
                <Mail size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-mono text-ink-muted block">Direct Email</span>
                <span className="text-sm font-bold text-ink-primary group-hover:text-accent transition-colors truncate block">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>
          </div>

          {/* Channel Card: Phone */}
          <div className="relative rounded-2xl bg-chassis p-5 shadow-[6px_6px_14px_#babecc,-6px_-6px_14px_#ffffff] border border-white/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                VOICE TELEPHONY
              </span>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-1.5 rounded bg-chassis shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff] active:shadow-pressed text-ink-muted hover:text-accent transition-all"
                title="Copy to clipboard"
              >
                {copiedKey === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              </button>
            </div>
            <a
              href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-recessed text-accent shadow-[inset_2px_2px_4px_#babecc]">
                <Phone size={20} />
              </div>
              <div>
                <span className="text-xs font-mono text-ink-muted block">Direct Line</span>
                <span className="text-sm font-bold text-ink-primary group-hover:text-accent transition-colors block">
                  {PERSONAL_INFO.phone}
                </span>
              </div>
            </a>
          </div>

          {/* Channel Card: LinkedIn */}
          <div className="relative rounded-2xl bg-chassis p-5 shadow-[6px_6px_14px_#babecc,-6px_-6px_14px_#ffffff] border border-white/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                PROFESSIONAL NETWORK
              </span>
              <ExternalLink size={14} className="text-ink-muted" />
            </div>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-recessed text-accent shadow-[inset_2px_2px_4px_#babecc]">
                <LinkedinIcon size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-mono text-ink-muted block">LinkedIn Profile</span>
                <span className="text-sm font-bold text-ink-primary group-hover:text-accent transition-colors truncate block">
                  alexandros-giannakopoulos99
                </span>
              </div>
            </a>
          </div>

          {/* Channel Card: GitHub */}
          <div className="relative rounded-2xl bg-chassis p-5 shadow-[6px_6px_14px_#babecc,-6px_-6px_14px_#ffffff] border border-white/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                CODE BASE & REPOSITORIES
              </span>
              <ExternalLink size={14} className="text-ink-muted" />
            </div>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="p-2.5 rounded-xl bg-recessed text-accent shadow-[inset_2px_2px_4px_#babecc]">
                <GithubIcon size={20} />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs font-mono text-ink-muted block">GitHub Profile</span>
                <span className="text-sm font-bold text-ink-primary group-hover:text-accent transition-colors truncate block">
                  AlexGiannakopoulos
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Tactile Message Dispatch Console (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleFormSubmit}
            className="relative rounded-2xl bg-chassis p-6 sm:p-8 shadow-[8px_8px_18px_#babecc,-8px_-8px_18px_#ffffff] border border-white/60 space-y-4"
          >
            <CornerScrews inset={14} />

            <div className="flex items-center justify-between pb-3 border-b border-borderNeumorphic-dark/20">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary flex items-center gap-2">
                <Terminal size={14} className="text-accent" />
                TRANSMISSION FORM // SLOT-01
              </span>
              <VentCluster count={3} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] font-bold uppercase text-ink-muted">
                  Operator / Sender Name
                </label>
                <div className="p-1 rounded-xl bg-chassis shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3 py-2.5 bg-transparent font-mono text-xs text-ink-primary placeholder:text-ink-muted/50 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block font-mono text-[11px] font-bold uppercase text-ink-muted">
                  Return Signal / Email
                </label>
                <div className="p-1 rounded-xl bg-chassis shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@enterprise.com"
                    className="w-full px-3 py-2.5 bg-transparent font-mono text-xs text-ink-primary placeholder:text-ink-muted/50 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] font-bold uppercase text-ink-muted">
                Mission Subject
              </label>
              <div className="p-1 rounded-xl bg-chassis shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]">
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Enterprise Agentic AI Opportunity / Consultation"
                  className="w-full px-3 py-2.5 bg-transparent font-mono text-xs text-ink-primary placeholder:text-ink-muted/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block font-mono text-[11px] font-bold uppercase text-ink-muted">
                Transmission Payload / Message
              </label>
              <div className="p-1 rounded-xl bg-chassis shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff]">
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your requirements, project scope, or opportunity..."
                  className="w-full px-3 py-2.5 bg-transparent font-mono text-xs text-ink-primary placeholder:text-ink-muted/50 focus:outline-none resize-none"
                />
              </div>
            </div>

            {submitStatus === 'SUCCESS' && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 font-mono text-xs flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                <span>SIGNAL RECEIVED // Transmission delivered successfully to Alexandros.</span>
              </div>
            )}

            {submitStatus === 'ERROR' && (
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 text-accent font-mono text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0 text-accent" />
                <span>SIGNAL FAILURE // {errorMessage || 'Could not dispatch message. Please retry or use direct email.'}</span>
              </div>
            )}

            <div className="pt-2">
              <TactileButton
                variant={submitStatus === 'SUCCESS' ? 'chassis' : 'primary'}
                size="lg"
                fullWidth
                type="submit"
                disabled={submitStatus === 'TRANSMITTING'}
                icon={
                  submitStatus === 'TRANSMITTING' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : submitStatus === 'SUCCESS' ? (
                    <Check size={16} className="text-emerald-600" />
                  ) : (
                    <Send size={16} />
                  )
                }
                className={submitStatus === 'SUCCESS' ? 'border-emerald-500/40 text-emerald-700' : 'shadow-button-accent'}
              >
                {submitStatus === 'TRANSMITTING'
                  ? 'DISPATCHING SIGNAL...'
                  : submitStatus === 'SUCCESS'
                  ? 'TRANSMISSION CONFIRMED (SEND ANOTHER)'
                  : submitStatus === 'ERROR'
                  ? 'RETRY TRANSMISSION'
                  : 'DISPATCH TRANSMISSION'}
              </TactileButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

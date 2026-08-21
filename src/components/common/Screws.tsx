import React from 'react';

interface CornerScrewsProps {
  className?: string;
  inset?: number;
}

export const CornerScrews: React.FC<CornerScrewsProps> = ({ inset = 12 }) => {
  return (
    <>
      {/* Top Left Screw */}
      <div
        className="absolute pointer-events-none w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff,1px_1px_2px_rgba(0,0,0,0.15)]"
        style={{ top: `${inset}px`, left: `${inset}px` }}
        title="Chassis Fastener"
      >
        <div className="w-2 h-[1px] bg-[#636e72] transform rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
      </div>

      {/* Top Right Screw */}
      <div
        className="absolute pointer-events-none w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff,1px_1px_2px_rgba(0,0,0,0.15)]"
        style={{ top: `${inset}px`, right: `${inset}px` }}
        title="Chassis Fastener"
      >
        <div className="w-2 h-[1px] bg-[#636e72] transform -rotate-30 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
      </div>

      {/* Bottom Left Screw */}
      <div
        className="absolute pointer-events-none w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff,1px_1px_2px_rgba(0,0,0,0.15)]"
        style={{ bottom: `${inset}px`, left: `${inset}px` }}
        title="Chassis Fastener"
      >
        <div className="w-2 h-[1px] bg-[#636e72] transform rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
      </div>

      {/* Bottom Right Screw */}
      <div
        className="absolute pointer-events-none w-3.5 h-3.5 rounded-full flex items-center justify-center bg-[#d1d9e6] shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_2px_#ffffff,1px_1px_2px_rgba(0,0,0,0.15)]"
        style={{ bottom: `${inset}px`, right: `${inset}px` }}
        title="Chassis Fastener"
      >
        <div className="w-2 h-[1px] bg-[#636e72] transform rotate-75 shadow-[0_1px_0_rgba(255,255,255,0.5)]" />
      </div>
    </>
  );
};

export const VentCluster: React.FC<{ count?: number; className?: string }> = ({ count = 3, className = '' }) => {
  return (
    <div className={`flex gap-1 items-center ${className}`} title="Ventilation Array">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-1 h-5 rounded-full bg-recessed shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3),inset_-1px_-1px_1px_rgba(255,255,255,0.7)]"
        />
      ))}
    </div>
  );
};

export const HardwareBezelHeader: React.FC<{
  title: string;
  code?: string;
  badge?: string;
  className?: string;
}> = ({ title, code, badge, className = '' }) => {
  return (
    <div className={`flex items-center justify-between border-b border-borderNeumorphic-dark/20 pb-3 mb-4 ${className}`}>
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,71,87,0.8)]" />
        <span className="font-mono text-xs font-bold tracking-wider uppercase text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
          {title}
        </span>
        {code && (
          <span className="font-mono text-[10px] text-ink-muted bg-recessed px-1.5 py-0.5 rounded shadow-[inset_1px_1px_1px_#babecc]">
            {code}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {badge && (
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent px-2 py-0.5 bg-chassis rounded shadow-[inset_1px_1px_2px_#babecc,inset_-1px_-1px_2px_#ffffff]">
            {badge}
          </span>
        )}
        <VentCluster count={3} />
      </div>
    </div>
  );
};

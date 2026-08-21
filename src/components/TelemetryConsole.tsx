import React, { useState, useRef, useEffect } from 'react';
import { Cpu, Download, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, QUANTIFIED_METRICS, TERMINAL_COMMANDS_HELP, SKILL_CATEGORIES } from '../data/portfolioData';

type ConsoleTab = 'TERMINAL' | 'DIAGNOSTICS' | 'AGENTIC_SYS';

interface HistoryItem {
  type: 'input' | 'output' | 'system' | 'error' | 'success';
  text: string;
  timestamp: string;
}

export const TelemetryConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ConsoleTab>('TERMINAL');
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      type: 'system',
      text: 'ANG-OS v2.6 [INITIALIZED] // CORE: AGENTIC-AI-ENGINE',
      timestamp: '00:00:01',
    },
    {
      type: 'system',
      text: 'OPERATOR: Alexandros-Nektarios Giannakopoulos [EY Greece / Omilia Alumni]',
      timestamp: '00:00:02',
    },
    {
      type: 'output',
      text: 'Type "help" to list available telemetry commands or "download-cv" for resume.',
      timestamp: '00:00:03',
    },
  ]);

  const [activeAgentStep, setActiveAgentStep] = useState(1);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll terminal
  useEffect(() => {
    if (activeTab === 'TERMINAL') {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  // Agentic workflow simulation tick
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAgentStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const getTimestamp = () => {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const time = getTimestamp();

    if (!trimmed) return;

    const newHistory: HistoryItem[] = [...history, { type: 'input', text: `$ ${cmd}`, timestamp: time }];

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: TERMINAL_COMMANDS_HELP.map((c) => `  ${c.cmd.padEnd(14)} - ${c.desc}`).join('\n'),
          timestamp: time,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `NAME: ${PERSONAL_INFO.fullName}\nROLE: ${PERSONAL_INFO.headline}\nLOCATION: ${PERSONAL_INFO.location}\nSTATUS: Active Data Scientist at EY Greece`,
          timestamp: time,
        });
        break;

      case 'skills':
        const skillsSummary = SKILL_CATEGORIES.map(
          (cat) => `[${cat.category.toUpperCase()}]\n` + cat.skills.map((s) => `  • ${s.name} (${s.level}%)`).join(', ')
        ).join('\n\n');
        newHistory.push({
          type: 'output',
          text: skillsSummary,
          timestamp: time,
        });
        break;

      case 'metrics':
        newHistory.push({
          type: 'output',
          text: QUANTIFIED_METRICS.map((m) => `  [${m.code}] ${m.value.padEnd(8)} -> ${m.label} (${m.subtext})`).join('\n'),
          timestamp: time,
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `1. EY Greece (Data Scientist, March 2026-Present)\n   - Microsoft Agentic Framework, Enterprise Banking Automation (+20% efficiency)\n2. Omilia Ltd. (Delivery QA Engineer, Oct 2024-March 2026)\n   - MCP Framework, CI/CD, Python Automation (-25% bugs, 2h saved daily)\n3. New York College (IT Support Technician, Dec 2022-July 2023)`,
          timestamp: time,
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `• MSc Data Analytics and Technologies (Univ. of Greater Manchester, 2025-2027)\n• BSc (Hons) Computing (Data Analyst) (Univ. of Greater Manchester, 2022-2025)\n• Board Member: MSc Validation Board at Univ. of Greater Manchester`,
          timestamp: time,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${PERSONAL_INFO.email}\nPhone:    ${PERSONAL_INFO.phone}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub:   ${PERSONAL_INFO.github}`,
          timestamp: time,
        });
        break;

      case 'download-cv':
      case 'download':
      case 'resume':
        newHistory.push({
          type: 'success',
          text: `Initiating download of official resume -> ${PERSONAL_INFO.resumePath}...`,
          timestamp: time,
        });
        window.open(PERSONAL_INFO.resumePath, '_blank');
        break;

      case 'clear':
      case 'cls':
        setHistory([
          {
            type: 'system',
            text: 'ANG-OS v2.6 [SCREEN BUFFER RESET]',
            timestamp: time,
          },
        ]);
        setInputVal('');
        return;

      case 'date':
      case 'time':
        newHistory.push({
          type: 'output',
          text: `SYSTEM CLOCK: ${new Date().toISOString()}`,
          timestamp: time,
        });
        break;

      case 'matrix':
        newHistory.push({
          type: 'success',
          text: `01000001 01001100 01000101 01011000 // AGENTIC PIPELINE ENGAGED`,
          timestamp: time,
        });
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" for active command index.`,
          timestamp: time,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="relative group w-full">
      {/* 3D Hardware Bezel Enclosure */}
      <div className="relative rounded-2xl bg-[#2d3436] p-3 sm:p-4 md:p-5 shadow-[12px_12px_28px_#babecc,-12px_-12px_28px_#ffffff,inset_1px_1px_1px_rgba(255,255,255,0.2)] border-2 border-[#1e272e]">
        {/* Top Hardware Strip */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* Screws */}
            <div className="w-3 h-3 rounded-full bg-[#4a5568] flex items-center justify-center shadow-[inset_1px_1px_2px_#000,1px_1px_1px_rgba(255,255,255,0.2)]">
              <div className="w-1.5 h-[1px] bg-[#a0aec0] rotate-45" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-400">
                ANG-TELEMETRY-UNIT // 01
              </span>
            </div>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center gap-1 bg-[#1e272e] p-1 rounded-lg border border-white/5 shadow-inner">
            {(['TERMINAL', 'DIAGNOSTICS', 'AGENTIC_SYS'] as ConsoleTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-150 ${
                  activeTab === tab
                    ? 'bg-accent text-white shadow-[0_0_8px_rgba(255,71,87,0.6)]'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                {tab === 'AGENTIC_SYS' ? 'AGENTIC' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* CRT Screen Outer Rim */}
        <div className="relative rounded-xl bg-[#121619] p-3 sm:p-4 shadow-[inset_0_4px_16px_rgba(0,0,0,0.9),inset_0_-2px_6px_rgba(255,255,255,0.05)] border border-[#22272b] crt-scanlines">
          {/* CRT Screen Glare & Lighting Hotspot */}
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none rounded-t-xl" />

          {/* TAB 1: INTERACTIVE TERMINAL */}
          {activeTab === 'TERMINAL' && (
            <div className="h-[280px] sm:h-[320px] flex flex-col justify-between font-mono text-xs text-gray-300">
              <div className="overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-gray-700">
                {history.map((item, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {item.type === 'system' && (
                      <div className="text-emerald-400 font-semibold flex items-center gap-1.5 text-[11px]">
                        <span className="opacity-60">[{item.timestamp}]</span>
                        <span>{item.text}</span>
                      </div>
                    )}
                    {item.type === 'input' && (
                      <div className="text-amber-400 font-bold flex items-center gap-1.5">
                        <span className="text-gray-500 text-[10px]">[{item.timestamp}]</span>
                        <span>{item.text}</span>
                      </div>
                    )}
                    {item.type === 'output' && (
                      <pre className="text-gray-300 whitespace-pre-wrap font-mono text-[11px] pl-3 border-l border-emerald-500/30 my-1">
                        {item.text}
                      </pre>
                    )}
                    {item.type === 'error' && (
                      <div className="text-accent font-bold pl-3 border-l border-accent/50 text-[11px]">
                        {item.text}
                      </div>
                    )}
                    {item.type === 'success' && (
                      <div className="text-sky-400 font-bold pl-3 border-l border-sky-400/50 text-[11px]">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Recessed Prompt Input */}
              <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help', 'skills', 'experience'..."
                  className="w-full bg-transparent text-emerald-300 placeholder:text-gray-600 focus:outline-none font-mono text-xs"
                />
                <button
                  onClick={() => handleCommand(inputVal)}
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-1"
                  title="Execute Command"
                >
                  <CornerDownLeft size={14} />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE DIAGNOSTICS */}
          {activeTab === 'DIAGNOSTICS' && (
            <div className="h-[280px] sm:h-[320px] flex flex-col justify-between font-mono text-xs text-gray-300 py-1">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1a202c] p-2.5 rounded border border-white/5 shadow-inner">
                    <span className="text-[10px] text-gray-400 uppercase">SYS ARCHITECTURE</span>
                    <p className="text-emerald-400 font-bold text-sm">x86_64 / AGENTIC-V2</p>
                  </div>
                  <div className="bg-[#1a202c] p-2.5 rounded border border-white/5 shadow-inner">
                    <span className="text-[10px] text-gray-400 uppercase">THROUGHPUT GAIN</span>
                    <p className="text-accent font-bold text-sm">+20% BANKING OPT</p>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                      <span>PYTHON / PYTORCH CORE</span>
                      <span className="text-emerald-400">95% STABILITY</span>
                    </div>
                    <div className="h-2 w-full bg-black/60 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                      <span>MICROSOFT AGENTIC FRAMEWORK</span>
                      <span className="text-accent">92% ORCHESTRATION</span>
                    </div>
                    <div className="h-2 w-full bg-black/60 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-accent rounded-full w-[92%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                      <span>MODEL CONTEXT PROTOCOL (MCP) QA</span>
                      <span className="text-sky-400">90% COVERAGE</span>
                    </div>
                    <div className="h-2 w-full bg-black/60 rounded-full overflow-hidden border border-white/10">
                      <div className="h-full bg-sky-400 rounded-full w-[90%]" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-400 pt-2 border-t border-white/10">
                  <span>LOCATION: ATHENS, GREECE</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    ALL SYSTEMS GO
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleCommand('download-cv')}
                  className="w-full py-2 bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 font-mono text-[11px] font-bold rounded flex items-center justify-center gap-1.5 transition-all"
                >
                  <Download size={13} />
                  DOWNLOAD OFFICIAL CV
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: AGENTIC WORKFLOW VISUALIZER */}
          {activeTab === 'AGENTIC_SYS' && (
            <div className="h-[280px] sm:h-[320px] flex flex-col justify-between font-mono text-xs text-gray-300 py-1">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-bold uppercase flex items-center gap-1.5">
                    <Cpu size={14} />
                    MULTI-AGENT EXECUTION CYCLE
                  </span>
                  <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    STEP {activeAgentStep} OF 4
                  </span>
                </div>

                {/* Pipeline Nodes */}
                <div className="space-y-2">
                  {[
                    { id: 1, name: 'Task Decomposition Agent', role: 'Deconstruct complex enterprise requirement', color: 'emerald' },
                    { id: 2, name: 'MCP Tool-Calling Agent', role: 'Query backend APIs & database schemas', color: 'sky' },
                    { id: 3, name: 'Verification & QA Evaluator', role: 'Deterministic safeguard & regression check', color: 'amber' },
                    { id: 4, name: 'Synthesis & Dispatch Node', role: 'Final output delivery to banking client', color: 'accent' },
                  ].map((node) => {
                    const isCurrent = activeAgentStep === node.id;
                    return (
                      <div
                        key={node.id}
                        className={`p-2 rounded border transition-all duration-300 ${
                          isCurrent
                            ? 'bg-white/10 border-accent text-white shadow-[0_0_10px_rgba(255,71,87,0.3)]'
                            : 'bg-black/40 border-white/5 text-gray-400'
                        }`}
                      >
                        <div className="flex items-center justify-between text-[11px]">
                          <span className={`font-bold ${isCurrent ? 'text-accent' : ''}`}>
                            {node.id}. {node.name}
                          </span>
                          {isCurrent && (
                            <span className="text-[9px] bg-accent text-white px-1.5 py-0.2 rounded animate-pulse">
                              EXECUTING
                            </span>
                          )}
                        </div>
                        <p className="text-[10px] text-gray-400 mt-0.5">{node.role}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-400">
                <span>FRAMEWORK: MICROSOFT AGENTIC + MCP</span>
                <span className="text-emerald-400">STATUS: LIVE IN PRODUCTION</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Hardware Bezel Buttons & Connectors */}
        <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1e272e] flex items-center justify-center border border-white/10 shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400">
              PWR: 100% NOMINAL
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {['CLR', 'EXP', 'CV'].map((label) => (
              <button
                key={label}
                onClick={() => {
                  if (label === 'CLR') handleCommand('clear');
                  if (label === 'EXP') handleCommand('experience');
                  if (label === 'CV') handleCommand('download-cv');
                }}
                className="px-2 py-0.5 rounded bg-[#3b444b] hover:bg-[#4a5568] text-[9px] font-mono font-bold text-gray-300 border border-white/10 active:translate-y-0.5 transition-all shadow-[1px_1px_2px_rgba(0,0,0,0.5)]"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

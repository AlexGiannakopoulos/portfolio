import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  User,
  Sparkles,
  Download,
  Mail,
  ExternalLink,
  Briefcase,
  Cpu,
  RefreshCw,
  Award,
  ChevronRight,
  Play,
  RotateCcw,
  Code2,
  GraduationCap,
} from 'lucide-react';
import {
  PERSONAL_INFO,
  QUANTIFIED_METRICS,
  SPOKEN_LANGUAGES,
} from '../data/portfolioData';

type AssistantTab = 'CHAT' | 'HIGHLIGHTS' | 'AGENTIC_DEMO';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  category?: 'welcome' | 'about' | 'experience' | 'skills' | 'metrics' | 'education' | 'contact' | 'cv' | 'languages' | 'custom';
  actions?: Array<{
    label: string;
    onClick?: () => void;
    href?: string;
    download?: string;
    icon?: React.ReactNode;
    primary?: boolean;
  }>;
}

const QUICK_PROMPTS = [
  { label: '✨ About Alex', query: 'Tell me about Alexandros' },
  { label: '💼 Experience', query: 'What is his work experience?' },
  { label: '🎯 Top Skills', query: 'What are his main skills & tech stack?' },
  { label: '🎓 Education', query: 'Tell me about his education' },
  { label: '📊 Key Impact', query: 'Show his quantified achievements' },
  { label: '📄 Resume (PDF)', query: 'How can I download his CV?' },
  { label: '📬 Contact Info', query: 'How do I get in touch with him?' },
];

export const TelemetryConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AssistantTab>('CHAT');
  const [isTyping, setIsTyping] = useState(false);
  const [activeAgentStep, setActiveAgentStep] = useState(1);
  const [isAgentSimulating, setIsAgentSimulating] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const initialMessages: ChatMessage[] = [
    {
      id: 'msg-init-1',
      sender: 'bot',
      category: 'welcome',
      timestamp: getTimestamp(),
      text: `👋 Hello! I'm **Alex AI Assistant**.

You can view information about Alexandros's work as a **Data Scientist at EY Greece**, his expertise in **Agentic AI & Python**, or choose a topic below:`,
      actions: [
        {
          label: 'Download CV (PDF)',
          href: PERSONAL_INFO.resumePath,
          download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
          icon: <Download size={13} />,
          primary: true,
        },
        {
          label: 'Send Email',
          href: '#contact',
          icon: <Mail size={13} />,
        },
      ],
    },
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  // Auto-scroll chat container directly without scrolling the browser window
  useEffect(() => {
    if (activeTab === 'CHAT' && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, activeTab]);

  // Agentic simulation loop when active
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (activeTab === 'AGENTIC_DEMO' && isAgentSimulating) {
      interval = setInterval(() => {
        setActiveAgentStep((prev) => (prev >= 4 ? 1 : prev + 1));
      }, 2400);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [activeTab, isAgentSimulating]);

  const generateBotResponse = (query: string): ChatMessage => {
    const q = query.toLowerCase().trim();
    const time = getTimestamp();

    // 1. Greetings
    if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'start' || q === 'help') {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'welcome',
        timestamp: time,
        text: `Hello! 👋 How can I help you today? You can ask about:

• **Higher Education** (MSc & BSc with Honors)
• **Current Role & Experience** (EY Greece & Omilia)
• **Technical Skills** (Agentic AI, Python, MCP, PyTorch, SQL)
• **Quantified Impact** (+20% efficiency, -25% bug reduction)
• **Resume Download** or **Direct Contact Details**`,
        actions: [
          {
            label: 'View Education',
            onClick: () => handleSend('Tell me about his education'),
            icon: <GraduationCap size={13} />,
          },
          {
            label: 'Quick Overview',
            onClick: () => handleSend('Tell me about Alexandros'),
            icon: <Sparkles size={13} />,
          },
          {
            label: 'Download Resume',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
        ],
      };
    }

    // 2. Education / Degree / Academic Background
    if (
      q.includes('education') ||
      q.includes('degree') ||
      q.includes('academic') ||
      q.includes('university') ||
      q.includes('msc') ||
      q.includes('bsc') ||
      q.includes('bachelor') ||
      q.includes('master') ||
      q.includes('study') ||
      q.includes('studies') ||
      q.includes('thesis') ||
      q.includes('curriculum') ||
      q.includes('board') ||
      q.includes('validation') ||
      q.includes('graduat') ||
      q.includes('diploma')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'education',
        timestamp: time,
        text: `Here is Alexandros's higher education background:

🎓 **MSc in Data Analytics and Technologies** **(Active MSc Candidate)**
• **Institution**: University of Greater Manchester (UK)
• **Affiliation**: In attendance at New York College, Athens
• **Period**: Nov. 2025 – Jan 2027 | Athens / United Kingdom
• **Curriculum & Focus**: Postgraduate focus on predictive modeling, enterprise data pipelines, deep learning architectures, statistical hypothesis testing, and CRISP-DM methodology.

🎓 **BSc (Hons) in Computing (Data Analyst)** **(Graduated with Honors)**
• **Institution**: University of Greater Manchester (UK)
• **Affiliation**: In attendance at New York College, Athens
• **Period**: Oct. 2022 – May 2025 | Athens / United Kingdom
• **Curriculum & Focus**: Rigorous curriculum spanning algorithms, relational & NoSQL databases, object-oriented design patterns, distributed data systems, and machine learning analytics.

🏅 **Official Validation Board Member**:
• **University of Greater Manchester & New York College**: Selected to participate in the formal academic validation process for the new MSc in Data Analytics and Technologies program.`,
        actions: [
          {
            label: 'Download CV (PDF)',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'View Work Experience',
            onClick: () => handleSend('What is his work experience?'),
            icon: <Briefcase size={13} />,
          },
          {
            label: 'Check Top Skills',
            onClick: () => handleSend('What are his main skills & tech stack?'),
            icon: <Code2 size={13} />,
          },
        ],
      };
    }

    // 3. Experience / Work History / Companies
    if (
      q.includes('experience') ||
      q.includes('job') ||
      q.includes('work') ||
      /\bey\b/.test(q) ||
      q.includes('omilia') ||
      q.includes('career') ||
      q.includes('history') ||
      q.includes('role') ||
      q.includes('company') ||
      q.includes('banking')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'experience',
        timestamp: time,
        text: `Here is a summary of Alexandros's career history:

1. **EY Greece** — **Data Scientist** (March 2026 – Present)
   • Engineered agentic AI workflows with **Microsoft Agentic Framework** for major banking clients
   • Boosted cross-functional team efficiency by **+20%**
   • Authored technical specifications for high-throughput enterprise pipelines

2. **Omilia Ltd.** — **Delivery QA Engineer** (Oct 2024 – March 2026)
   • Pioneered testing framework utilizing **Model Context Protocol (MCP)**
   • Reduced post-release bugs by **25%** and saved **2h+ daily** per engineer
   • Built automated CI/CD pipelines & Python testing scripts

3. **New York College** — **IT Support Technician** (2022 – 2023)
   • Supported 500+ students and campus lab network infrastructure`,
        actions: [
          {
            label: 'Download Full CV',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'Education',
            onClick: () => handleSend('Tell me about his education'),
            icon: <GraduationCap size={13} />,
          },
          {
            label: 'Check Top Skills',
            onClick: () => handleSend('What are his main skills & tech stack?'),
            icon: <Code2 size={13} />,
          },
        ],
      };
    }

    // 4. Skills / Tech Stack / Tools
    if (
      q.includes('skill') ||
      q.includes('tech') ||
      q.includes('stack') ||
      q.includes('python') ||
      q.includes('pytorch') ||
      q.includes('mcp') ||
      q.includes('agentic') ||
      q.includes('sql') ||
      q.includes('tool') ||
      q.includes('git') ||
      q.includes('docker') ||
      q.includes('database') ||
      q.includes('graph')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'skills',
        timestamp: time,
        text: `Alexandros's core competencies span:

• **AI & Agentic Systems**: Microsoft Agentic Framework, Model Context Protocol (MCP), Autonomous Multi-Agent Workflows, LLM Tool-Calling
• **Languages**: Python (95%), SQL (90%), Bash/Shell (85%), Java, C#, C++
• **Data & ML**: PyTorch, Pandas, NumPy, NLP, Sentiment Analysis, CRISP-DM
• **Databases & DevOps**: PostgreSQL, Neo4j (Graph DB), MongoDB, Docker, Git CI/CD, Playwright Automation`,
        actions: [
          {
            label: 'See Profile Tab',
            onClick: () => setActiveTab('HIGHLIGHTS'),
            icon: <Award size={13} />,
          },
          {
            label: 'View Agentic Demo',
            onClick: () => setActiveTab('AGENTIC_DEMO'),
            icon: <Cpu size={13} />,
          },
          {
            label: 'Download Resume',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
        ],
      };
    }

    // 5. Quantified Metrics / Impact
    if (
      q.includes('metric') ||
      q.includes('impact') ||
      q.includes('achievement') ||
      q.includes('result') ||
      q.includes('statistic') ||
      q.includes('number') ||
      q.includes('roi') ||
      q.includes('benefit')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'metrics',
        timestamp: time,
        text: `Key business impact and quantified results:

🚀 **+20% Team Velocity** — Enterprise banking Agentic AI automation at EY Greece
🛡️ **-25% Defect Rate** — Post-release bug reduction using MCP testing at Omilia
⏱️ **2+ Hours Saved Daily** — Automated Python scripts & CI/CD pipeline optimization
⚡ **+30% Pipeline Acceleration** — Engineered Bash & Git automated delivery workflows`,
        actions: [
          {
            label: 'Download Official CV',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'View Experience',
            onClick: () => handleSend('What is his work experience?'),
            icon: <Briefcase size={13} />,
          },
        ],
      };
    }

    // 6. Languages
    if (q.includes('language') || q.includes('greek') || q.includes('english') || q.includes('french')) {
      const langs = SPOKEN_LANGUAGES.map((l) => `• **${l.name}**: ${l.proficiency} (${l.level})`).join('\n');
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'languages',
        timestamp: time,
        text: `Language proficiencies:

${langs}`,
        actions: [
          {
            label: 'Download Resume',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
        ],
      };
    }

    // 7. Resume / CV / Download
    if (
      q.includes('cv') ||
      q.includes('resume') ||
      q.includes('download') ||
      q.includes('pdf') ||
      q.includes('file')
    ) {
      window.open(PERSONAL_INFO.resumePath, '_blank');
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'cv',
        timestamp: time,
        text: `📄 Opening Alexandros's official CV for you now!

If the download did not start automatically, please click the button below:`,
        actions: [
          {
            label: 'Download CV (PDF)',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'Get in Touch',
            onClick: () => handleSend('How do I get in touch with him?'),
            icon: <Mail size={13} />,
          },
        ],
      };
    }

    // 8. Contact / Email / LinkedIn / Phone
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('linkedin') ||
      q.includes('github') ||
      q.includes('hire') ||
      q.includes('interview') ||
      q.includes('reach') ||
      q.includes('touch') ||
      q.includes('location') ||
      q.includes('city') ||
      q.includes('athens')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'contact',
        timestamp: time,
        text: `You can reach Alexandros directly via:

• **Email**: [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})
• **Phone**: ${PERSONAL_INFO.phone}
• **LinkedIn**: [linkedin.com/in/alexandros-giannakopoulos99](${PERSONAL_INFO.linkedin})
• **GitHub**: [github.com/AlexGiannakopoulos](${PERSONAL_INFO.github})
• **Location**: Athens, Greece (Open to hybrid & remote opportunities)`,
        actions: [
          {
            label: 'Send Email',
            href: '#contact',
            icon: <Mail size={13} />,
            primary: true,
          },
          {
            label: 'Open LinkedIn Profile',
            href: PERSONAL_INFO.linkedin,
            icon: <ExternalLink size={13} />,
          },
        ],
      };
    }

    // 9. About / Summary / Bio / Overview (generic catch-all for Alex's profile)
    if (
      q.includes('about') ||
      q.includes('who') ||
      q.includes('bio') ||
      q.includes('summary') ||
      q.includes('intro') ||
      q.includes('alex') ||
      q.includes('background') ||
      q.includes('overview')
    ) {
      return {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        category: 'about',
        timestamp: time,
        text: `**Alexandros - Nektarios Giannakopoulos** is a **Data Scientist & Agentic AI Engineer** (MSc candidate) based in **Athens, Greece**.

• **Current Role**: Data Scientist at **EY Greece** (March 2026 – Present)
• **Specialization**: Enterprise Agentic AI frameworks, automated testing with MCP, Python, and data intelligence
• **Key Metric**: +20% team velocity boost for major banking clients
• **Education**: MSc in Data Analytics Candidate & BSc (Hons) Computing
• **Status**: Active & Open to Hybrid/Remote Collaborations`,
        actions: [
          {
            label: 'Education',
            onClick: () => handleSend('Tell me about his education'),
            icon: <GraduationCap size={13} />,
          },
          {
            label: 'View Experience',
            onClick: () => handleSend('What is his work experience?'),
            icon: <Briefcase size={13} />,
          },
          {
            label: 'Download CV',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'Contact Info',
            onClick: () => handleSend('How do I get in touch with him?'),
            icon: <Mail size={13} />,
          },
        ],
      };
    }

    // 10. Default fallback
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      category: 'custom',
      timestamp: time,
      text: `Thanks for asking! Alexandros is an active **Data Scientist at EY Greece** specializing in **Agentic AI**, **MCP protocols**, and **Python automation**.

Would you like to review his work experience, top skills, or download his resume?`,
      actions: [
        {
          label: 'Work Experience',
          onClick: () => handleSend('What is his work experience?'),
          icon: <Briefcase size={13} />,
        },
        {
          label: 'Top Skills',
          onClick: () => handleSend('What are his main skills & tech stack?'),
          icon: <Code2 size={13} />,
        },
        {
          label: 'Download Resume',
          href: PERSONAL_INFO.resumePath,
          download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
          icon: <Download size={13} />,
          primary: true,
        },
      ],
    };
  };

  const handleSend = (textToSend: string) => {
    const query = textToSend.trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: getTimestamp(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    if (activeTab !== 'CHAT') {
      setActiveTab('CHAT');
    }

    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 400);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-reset-${Date.now()}`,
        sender: 'bot',
        category: 'welcome',
        timestamp: getTimestamp(),
        text: `Conversation reset. How can I assist you today?`,
        actions: [
          {
            label: 'Download Resume (PDF)',
            href: PERSONAL_INFO.resumePath,
            download: 'Alexandros-Nektarios-Giannakopoulos-CV.pdf',
            icon: <Download size={13} />,
            primary: true,
          },
          {
            label: 'About Alexandros',
            onClick: () => handleSend('Tell me about Alexandros'),
            icon: <Sparkles size={13} />,
          },
        ],
      },
    ]);
  };

  const renderFormattedText = (content: string) => {
    const textLines = content.split('\n');
    return textLines.map((line, idx) => {
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      return (
        <p key={idx} className={`${line === '' ? 'h-2' : 'min-h-[1.25rem]'} leading-relaxed`}>
          {parts.map((part, pIdx) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-semibold text-ink-primary">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
              const textMatch = part.match(/\[(.*?)\]/);
              const urlMatch = part.match(/\((.*?)\)/);
              if (textMatch && urlMatch) {
                return (
                  <a
                    key={pIdx}
                    href={urlMatch[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline font-medium hover:text-accent-hover inline-flex items-center gap-0.5"
                  >
                    {textMatch[1]}
                    <ExternalLink size={10} className="inline ml-0.5" />
                  </a>
                );
              }
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Neumorphic Chatbot Window Chassis */}
      <div className="relative rounded-3xl bg-chassis p-3.5 sm:p-4 shadow-[10px_10px_24px_#babecc,-10px_-10px_24px_#ffffff] border border-white/80 transition-all duration-300 flex flex-col h-[520px] sm:h-[540px]">
        
        {/* Chatbot Window Top Header Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-borderNeumorphic-dark/20 px-1">
          {/* Avatar & Identity Info */}
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-9 h-9 rounded-2xl bg-recessed shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center border border-white/50 text-accent">
                <Bot size={18} />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-chassis shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-mono text-xs font-bold text-ink-primary uppercase tracking-tight">
                  Alex AI Copilot
                </h3>
                <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-accent/10 text-accent border border-accent/20">
                  EY Greece
                </span>
              </div>
              <p className="text-[11px] text-ink-muted leading-none">
                Data Scientist & AI Assistant
              </p>
            </div>
          </div>

          {/* Mode Switchers & Actions */}
          <div className="flex items-center gap-1">
            <div className="flex items-center p-0.5 rounded-xl bg-recessed shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/40">
              <button
                onClick={() => setActiveTab('CHAT')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase transition-all ${
                  activeTab === 'CHAT'
                    ? 'bg-chassis text-accent shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]'
                    : 'text-ink-muted hover:text-ink-primary'
                }`}
                title="Chat with Recruiter Copilot"
              >
                Chat
              </button>

              <button
                onClick={() => setActiveTab('HIGHLIGHTS')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase transition-all ${
                  activeTab === 'HIGHLIGHTS'
                    ? 'bg-chassis text-accent shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]'
                    : 'text-ink-muted hover:text-ink-primary'
                }`}
                title="View Quick Highlights & Metrics"
              >
                Profile
              </button>

              <button
                onClick={() => setActiveTab('AGENTIC_DEMO')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase transition-all ${
                  activeTab === 'AGENTIC_DEMO'
                    ? 'bg-chassis text-accent shadow-[2px_2px_4px_#babecc,-2px_-2px_4px_#ffffff]'
                    : 'text-ink-muted hover:text-ink-primary'
                }`}
                title="Interactive Agentic Workflow Demo"
              >
                Demo
              </button>
            </div>

            {activeTab === 'CHAT' && (
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-xl bg-chassis shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-accent text-ink-muted transition-all active:translate-y-0.5 border border-white/40"
                title="Restart Conversation"
              >
                <RefreshCw size={13} />
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: CHATBOT VIEW */}
        {activeTab === 'CHAT' && (
          <div className="flex-1 flex flex-col min-h-0 pt-2">
            {/* Messages Scroll Area */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto px-1 py-2 space-y-3 scrollbar-thin scrollbar-thumb-borderNeumorphic-dark/40 pr-2"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Sparkles size={11} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl text-xs transition-all ${
                      msg.sender === 'user'
                        ? 'bg-accent text-white p-3 rounded-tr-xs shadow-[3px_3px_8px_rgba(255,71,87,0.35)]'
                        : 'bg-panel text-ink-primary p-3.5 rounded-tl-xs shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff] border border-white/90'
                    }`}
                  >
                    <div className="text-xs leading-relaxed text-inherit font-sans space-y-1">
                      {renderFormattedText(msg.text)}
                    </div>

                    {/* Action buttons inside message bubble */}
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-borderNeumorphic-dark/20">
                        {msg.actions.map((act, aIdx) => {
                          if (act.href) {
                            return (
                              <a
                                key={aIdx}
                                href={act.href}
                                target={act.href.startsWith('mailto:') || act.href.startsWith('#') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                download={act.download}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold tracking-wide transition-all duration-150 active:translate-y-0.5 ${
                                  act.primary
                                    ? 'bg-accent text-white shadow-[2px_2px_6px_rgba(255,71,87,0.4)] hover:bg-[#ff5263]'
                                    : 'bg-chassis text-ink-primary shadow-[2px_2px_5px_#babecc,-2px_-2px_5px_#ffffff] hover:text-accent border border-white/60'
                                }`}
                              >
                                {act.icon}
                                <span>{act.label}</span>
                              </a>
                            );
                          }
                          return (
                            <button
                              key={aIdx}
                              onClick={act.onClick}
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg font-mono text-[10px] font-bold tracking-wide transition-all duration-150 active:translate-y-0.5 ${
                                act.primary
                                  ? 'bg-accent text-white shadow-[2px_2px_6px_rgba(255,71,87,0.4)] hover:bg-[#ff5263]'
                                  : 'bg-chassis text-ink-primary shadow-[2px_2px_5px_#babecc,-2px_-2px_5px_#ffffff] hover:text-accent border border-white/60'
                              }`}
                            >
                              {act.icon}
                              <span>{act.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div
                      className={`text-[9px] mt-1.5 font-mono text-right ${
                        msg.sender === 'user' ? 'text-white/70' : 'text-ink-muted/70'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-recessed text-ink-muted flex items-center justify-center shrink-0 mt-0.5 border border-white/40 shadow-inner">
                      <User size={12} />
                    </div>
                  )}
                </div>
              ))}

              {/* Bot Typing Indicator */}
              {isTyping && (
                <div className="flex gap-2 items-center">
                  <div className="w-6 h-6 rounded-full bg-accent/10 border border-accent/30 text-accent flex items-center justify-center shrink-0">
                    <Sparkles size={11} />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-xs bg-panel shadow-[3px_3px_8px_#babecc,-3px_-3px_8px_#ffffff] border border-white/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="font-mono text-[10px] text-ink-muted ml-1">Alex AI is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Recruiter Quick-Prompt Chips */}
            <div className="pt-2 pb-2">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {QUICK_PROMPTS.map((prompt, pIdx) => (
                  <button
                    key={pIdx}
                    onClick={() => handleSend(prompt.query)}
                    className="shrink-0 px-2.5 py-1 rounded-full bg-chassis text-ink-muted hover:text-accent font-mono text-[10px] font-bold tracking-wide shadow-[2px_2px_5px_#babecc,-2px_-2px_5px_#ffffff] hover:shadow-[3px_3px_7px_#babecc,-3px_-3px_7px_#ffffff] border border-white/60 active:translate-y-[1px] transition-all"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>


          </div>
        )}

        {/* TAB 2: PROFILE & HIGHLIGHTS VIEW */}
        {activeTab === 'HIGHLIGHTS' && (
          <div className="flex-1 overflow-y-auto px-1 py-3 space-y-3.5 scrollbar-thin scrollbar-thumb-borderNeumorphic-dark/40 pr-1">
            {/* Quick Executive Status Card */}
            <div className="p-3.5 rounded-2xl bg-panel shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff] border border-white/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-accent tracking-wider">
                  CURRENT ROLE & STATUS
                </span>
                <span className="flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-ink-primary">
                  Data Scientist @ EY Greece
                </h4>
                <p className="text-xs text-ink-muted mt-0.5">
                  MSc in Data Analytics Candidate • Athens, Greece (Hybrid/Remote)
                </p>
              </div>
            </div>

            {/* Top Quantified Metrics Strip */}
            <div className="grid grid-cols-2 gap-2.5">
              {QUANTIFIED_METRICS.slice(0, 2).map((m) => (
                <div
                  key={m.id}
                  className="p-3 rounded-xl bg-recessed shadow-[inset_2px_2px_4px_#babecc,inset_-2px_-2px_4px_#ffffff] border border-white/30"
                >
                  <div className="font-mono text-xl font-extrabold text-accent">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-bold text-ink-primary uppercase tracking-tight mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[10px] text-ink-muted mt-0.5 line-clamp-1">
                    {m.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Competency Meters */}
            <div className="p-3.5 rounded-2xl bg-panel shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff] border border-white/80 space-y-2.5">
              <span className="font-mono text-[10px] font-bold uppercase text-ink-muted tracking-wider block">
                CORE TECHNICAL COMPETENCIES
              </span>

              {[
                { name: 'Agentic AI / Microsoft Framework', level: 94, color: 'bg-accent' },
                { name: 'Python, PyTorch & Data Pipelines', level: 95, color: 'bg-emerald-500' },
                { name: 'Model Context Protocol (MCP) & QA', level: 90, color: 'bg-sky-500' },
                { name: 'SQL, PostgreSQL & Neo4j Graph', level: 88, color: 'bg-amber-500' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="font-medium text-ink-primary">{item.name}</span>
                    <span className="font-mono font-bold text-ink-muted">{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-recessed shadow-inner overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex gap-2 pt-1">
              <a
                href={PERSONAL_INFO.resumePath}
                download="Alexandros-Nektarios-Giannakopoulos-CV.pdf"
                className="flex-1 py-2.5 px-3 rounded-xl bg-accent text-white font-mono text-xs font-bold text-center flex items-center justify-center gap-1.5 shadow-button-accent hover:bg-[#ff5263] transition-all"
              >
                <Download size={14} />
                DOWNLOAD OFFICIAL CV
              </a>

              <button
                onClick={() => {
                  setActiveTab('CHAT');
                  handleSend('Tell me about Alexandros');
                }}
                className="py-2.5 px-3 rounded-xl bg-chassis text-ink-primary font-mono text-xs font-bold shadow-[3px_3px_6px_#babecc,-3px_-3px_6px_#ffffff] hover:text-accent transition-all flex items-center gap-1 border border-white/60"
              >
                <Bot size={14} />
                ASK CHAT
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: AGENTIC AI SIMULATION VIEW */}
        {activeTab === 'AGENTIC_DEMO' && (
          <div className="flex-1 overflow-y-auto px-1 py-2 space-y-3 scrollbar-thin scrollbar-thumb-borderNeumorphic-dark/40 pr-1 flex flex-col justify-between">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-xs font-bold text-ink-primary uppercase tracking-tight flex items-center gap-1.5">
                    <Cpu size={14} className="text-accent" />
                    Agentic AI Pipeline Simulator
                  </h4>
                  <p className="text-[11px] text-ink-muted">
                    Click steps below to explore how Alexandros's agentic systems work:
                  </p>
                </div>

                <button
                  onClick={() => setIsAgentSimulating(!isAgentSimulating)}
                  className={`px-2 py-1 rounded-lg font-mono text-[10px] font-bold flex items-center gap-1 transition-all ${
                    isAgentSimulating
                      ? 'bg-accent text-white shadow-sm animate-pulse'
                      : 'bg-recessed text-ink-primary border border-white/40 shadow-inner'
                  }`}
                >
                  {isAgentSimulating ? <RotateCcw size={10} /> : <Play size={10} />}
                  {isAgentSimulating ? 'SIMULATING' : 'AUTO-PLAY'}
                </button>
              </div>

              {/* Step Flow Nodes */}
              <div className="space-y-2">
                {[
                  {
                    step: 1,
                    title: '1. Task Decomposition Agent',
                    role: 'Deconstructs complex banking requests into structured micro-tasks.',
                    business: 'Translates high-level business goals into deterministic sub-workflows.',
                  },
                  {
                    step: 2,
                    title: '2. MCP Tool-Calling Agent',
                    role: 'Queries backend databases and microservices securely via Model Context Protocol.',
                    business: 'Automates data retrieval without manual human intervention.',
                  },
                  {
                    step: 3,
                    title: '3. Verification & QA Evaluator',
                    role: 'Deterministic safeguards, compliance checks, and regression safeguards.',
                    business: 'Eliminates hallucinations and guarantees enterprise reliability (-25% defects).',
                  },
                  {
                    step: 4,
                    title: '4. Synthesis & Dispatch Node',
                    role: 'Aggregates validated outputs and dispatches final results to users.',
                    business: 'Delivers +20% efficiency velocity for banking clients.',
                  },
                ].map((item) => {
                  const isActive = activeAgentStep === item.step;
                  return (
                    <button
                      key={item.step}
                      onClick={() => setActiveAgentStep(item.step)}
                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 border ${
                        isActive
                          ? 'bg-panel border-accent/40 shadow-[4px_4px_10px_#babecc,-4px_-4px_10px_#ffffff] text-ink-primary'
                          : 'bg-chassis/60 border-transparent hover:bg-panel text-ink-muted'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-xs font-bold ${isActive ? 'text-accent' : 'text-ink-primary'}`}>{item.title}</span>
                        {isActive && (
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-bold bg-accent text-white shadow-xs animate-pulse">
                            ACTIVE NODE
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-ink-primary/90 mt-1 leading-tight">
                        {item.role}
                      </p>
                      {isActive && (
                        <div className="mt-2 pt-1.5 border-t border-borderNeumorphic-dark/20 text-[10px] font-medium text-emerald-700 bg-emerald-500/10 p-1.5 rounded-md">
                          💡 <strong>Recruiter Takeaway</strong>: {item.business}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="pt-2 border-t border-borderNeumorphic-dark/20 flex items-center justify-between">
              <span className="font-mono text-[10px] text-ink-muted">
                FRAMEWORK: MICROSOFT AGENTIC + MCP
              </span>
              <button
                onClick={() => {
                  setActiveTab('CHAT');
                  handleSend('Tell me about his work with Agentic AI and MCP');
                }}
                className="font-mono text-[11px] font-bold text-accent hover:underline flex items-center gap-0.5"
              >
                Ask Copilot <ChevronRight size={12} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Search, Code2, BrainCircuit, Cpu, Database, TerminalSquare, Boxes } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CornerScrews, VentCluster } from './common/Screws';
import { LedIndicator } from './common/LedIndicator';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIconMap: Record<string, React.ReactNode> = {
    'Languages & Core': <Code2 size={16} />,
    'Data & Machine Learning': <BrainCircuit size={16} />,
    'AI & Agentic Systems': <Cpu size={16} />,
    'Databases & Storage': <Database size={16} />,
    'DevOps & Tooling': <TerminalSquare size={16} />,
    'Methodologies & Soft Skills': <Boxes size={16} />,
  };

  const categories = useMemo(() => ['ALL', ...SKILL_CATEGORIES.map((c) => c.category)], []);

  const filteredCategories = useMemo(() => {
    return SKILL_CATEGORIES.filter((cat) => {
      if (activeCategory !== 'ALL' && cat.category !== activeCategory) {
        return false;
      }
      return true;
    }).map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    }).filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <LedIndicator color="green" size="sm" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
              SECTION 04 // TECHNICAL SPECIFICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-primary tracking-tight drop-shadow-[0_1px_0_#ffffff]">
            Skill Matrix & Tooling Deck
          </h2>
        </div>

        {/* Recessed Search Input Well */}
        <div className="w-full sm:w-72 relative">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-chassis shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] border border-white/40">
            <Search size={16} className="text-ink-muted shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies..."
              className="w-full bg-transparent font-mono text-xs text-ink-primary placeholder:text-ink-muted/60 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-[10px] font-mono font-bold text-accent uppercase"
              >
                CLR
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Recessed Category Selector Switches */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-3.5 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-wider transition-all duration-150 active:translate-y-[1px] ${
                isSelected
                  ? 'bg-recessed text-accent shadow-[inset_3px_3px_6px_#babecc,inset_-3px_-3px_6px_#ffffff] border border-accent/30'
                  : 'bg-chassis text-ink-muted shadow-[4px_4px_8px_#babecc,-4px_-4px_8px_#ffffff] hover:text-ink-primary hover:shadow-[5px_5px_10px_#babecc,-5px_-5px_10px_#ffffff]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Skill Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => (
          <div
            key={cat.category}
            className="relative rounded-2xl bg-chassis p-5 sm:p-6 shadow-[8px_8px_16px_#babecc,-8px_-8px_16px_#ffffff] border border-white/60 group hover:shadow-[10px_10px_20px_#babecc,-10px_-10px_20px_#ffffff] transition-all"
          >
            <CornerScrews inset={10} />

            {/* Category Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-borderNeumorphic-dark/20">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-recessed text-accent shadow-[inset_1px_1px_2px_#babecc]">
                  {categoryIconMap[cat.category] || <Cpu size={16} />}
                </div>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ink-primary drop-shadow-[0_1px_0_#ffffff]">
                  {cat.category}
                </h3>
              </div>

              <VentCluster count={2} />
            </div>

            {/* Skills Level Meters */}
            <div className="space-y-3.5">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-medium text-ink-primary flex items-center gap-1.5">
                      {skill.name}
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" title="Core Specialization" />
                      )}
                    </span>
                    <span className="font-mono text-[11px] font-bold text-ink-muted">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Recessed Progress Well */}
                  <div className="h-2 w-full rounded-full bg-recessed shadow-[inset_1px_1px_2px_#a3b1c6,inset_-1px_-1px_1px_#ffffff] p-0.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.highlight
                          ? 'bg-accent shadow-[0_0_6px_rgba(255,71,87,0.6)]'
                          : 'bg-[#576574]'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

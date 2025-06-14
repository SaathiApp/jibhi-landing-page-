import React from 'react';
import type { Heading } from '@/utils/mdx';

interface Props {
  headings: Heading[];
}

const TableOfContents = ({ headings }: Props) => {
  if (!headings || headings.length === 0) return null;

  const getIndent = (level: number) => {
    if (level >= 3) return 'ml-6';
    if (level === 2) return 'ml-3';
    return '';
  };

  return (
    <nav
      className="rounded-lg bg-white p-4 sm:p-6 shadow-sm border border-slate-200 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto"
      aria-label="Table of contents"
    >
      <h2 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-brand-dark border-b border-slate-200 pb-2">
        Table of Contents
      </h2>
      <ul className="space-y-1 sm:space-y-2 text-slate-700 text-xs sm:text-sm">
        {headings.map(h => (
          <li key={h.id} className={getIndent(h.level)}>
            <a
              href={`#${h.id}`}
              className="block py-1 text-slate-600 hover:text-brand-accent transition-colors duration-200 hover:font-medium"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;

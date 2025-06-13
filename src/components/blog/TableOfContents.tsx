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
    <nav className="mb-8 rounded-lg bg-gray-50 p-4" aria-label="Table of contents">
      <h2 className="mb-2 text-lg font-semibold text-slate-800">Table of Contents</h2>
      <ul className="space-y-1 text-slate-700 text-sm">
        {headings.map(h => (
          <li key={h.id} className={getIndent(h.level)}>
            <a href={`#${h.id}`} className="hover:text-brand-accent">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;

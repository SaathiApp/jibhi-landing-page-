import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => (
  <nav className="w-full bg-transparent font-inter text-[#22225a]">
    <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      {/* Logo + Brand (left) */}
      <Link href="/" className="flex select-none items-center gap-2">
        <Image
          src="/assets/images/jibhi-logo.png"
          alt="Jibhi.ai"
          width={26}
          height={26}
          className="size-7"
          priority
        />
        <span className="text-lg font-semibold tracking-tight">Jibhi.ai</span>
      </Link>
      {/* Nav Links (centered) */}
      <div className="hidden md:flex items-center justify-center gap-7 text-base font-normal">
        <a href="#how" className="transition-colors hover:text-[#605CD4]">How it works</a>
        <a href="#benefits" className="transition-colors hover:text-[#605CD4]">Benefits</a>
        <a href="#faq" className="transition-colors hover:text-[#605CD4]">FAQ</a>
        <a href="/blog" className="transition-colors hover:text-[#605CD4]">Blog</a>
      </div>
      {/* CTA (right) */}
      <div className="flex items-center gap-4">
        <button className="md:hidden" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link
          href="#hero"
          className="rounded-full border border-[#605CD4] bg-white/80 px-5 py-1.5 font-semibold text-[#605CD4] transition-colors hover:bg-[#605CD4] hover:text-white"
          style={{ boxShadow: 'none' }}
        >
          Get Started
        </Link>
      </div>
    </div>
  </nav>
);

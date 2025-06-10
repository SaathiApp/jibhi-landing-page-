import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => (
  <nav className="w-full bg-transparent font-inter text-[#22225a]">
    <div className="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-4">
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
      <div className="flex items-center justify-center gap-7 text-base font-normal">
        <a href="#how" className="transition-colors hover:text-[#605CD4]">How it works</a>
        <a href="#benefits" className="transition-colors hover:text-[#605CD4]">Benefits</a>
        <a href="#faq" className="transition-colors hover:text-[#605CD4]">FAQ</a>
      </div>
      {/* CTA (right) */}
      <div className="flex justify-end">
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

import Link from 'next/link';

export const DemoBanner = () => (
  <div className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#605CD4] to-[#8e8aff] px-2 py-3 text-center font-inter text-base font-semibold text-white">
    <span className="animate-bounce text-xl">🚀</span>
    Over 1,200 travelers planned their dream trip with Jibhi this month.
    <Link
      href="#hero"
      className="ml-3 rounded-full bg-white px-5 py-2 font-bold text-[#605CD4] shadow transition hover:bg-gray-100"
    >
      Get Started
    </Link>
  </div>
);

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center bg-white pb-10 pt-20 md:pt-32">
      {/* BG Gradient */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#605CD4]/20 via-[#8e8aff]/10 to-white" />
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6">
        {/* Hero Headline */}
        <h1 className="mb-4 text-center font-inter text-4xl font-extrabold text-[#22225a] sm:text-6xl">
          {t('title')}
        </h1>
        {/* Hero Subheadline */}
        <p className="mb-8 text-center font-inter text-lg text-gray-600 sm:text-2xl">
          {t('description')}
        </p>
        {/* CTA */}
        <a
          href="https://chat.saathi.app"
          className="mb-2 rounded-full bg-gradient-to-r from-[#605CD4] to-[#8e8aff] px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-105"
        >
          {t('primary_button')}
        </a>
        {/* Trust Text */}
        <p className="mb-2 font-inter text-sm italic text-gray-500">
          {/* This line can be added to translations if you want, or left as-is */}
          No credit card required.
        </p>
        {/* Hero Image */}
        <div id="how" className="mt-8 flex w-full justify-center">
          <Image
            src="/assets/images/venice.jpg"
            alt="Dream trip Venice"
            width={680}
            height={420}
            className="rounded-xl border border-[#605CD4]/10 object-cover shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

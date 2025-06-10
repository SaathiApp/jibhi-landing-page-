import { useTranslations } from 'next-intl';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <section
      id="cta"
      className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-[#605CD4] to-[#8A7FFF] px-4 py-16 text-center text-white"
    >
      <h2 className="mb-4 text-3xl font-bold">{t('title')}</h2>
      <p className="mb-8 max-w-xl">{t('description')}</p>
      <a
        href="#hero"
        className="rounded-full bg-white px-6 py-3 font-bold text-[#605CD4] transition hover:bg-gray-100"
      >
        {t('button_text')}
      </a>
    </section>
  );
};

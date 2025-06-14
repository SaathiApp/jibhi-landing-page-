import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/templates/CTA';
import { FAQ } from '@/templates/FAQ';
import { Features } from '@/templates/Features';
import { Footer } from '@/templates/Footer';
import { Hero } from '@/templates/Hero';
import { Sponsors } from '@/templates/Sponsors';
import { Testimonials } from '@/templates/Testimonials';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>

      <Hero />
      <Sponsors />
      <Features />
      {/* <Pricing /> */}
      <FAQ />
      <CTA />
      <Testimonials />
      <Footer />
    </>
  );
};

export default IndexPage;

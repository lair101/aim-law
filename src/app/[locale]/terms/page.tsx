'use client';

import { useTranslations } from 'next-intl';
import { Link } from "@/i18n/routing";

export default function TermsPage() {
  const t = useTranslations('terms');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead">
              {t('intro')}
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              {t('generalUse.title')}
            </h2>
            <p>
              {t('generalUse.content')}
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              {t('noLegalAdvice.title')}
            </h2>
            <p>
              {t('noLegalAdvice.content')}
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              {t('noLawyerClient.title')}
            </h2>
            <p>
              {t('noLawyerClient.content')}
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              {t('privacyPolicy.title')}
            </h2>
            <p>
              {t('privacyPolicy.content')} <Link href="/privacy" className="text-[#1B2D4F] underline hover:no-underline">{t('privacyLink')}</Link>.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              {t('governingLaw.title')}
            </h2>
            <p>
              {t('governingLaw.content')}
            </p>

            <p className="mt-8 text-sm text-slate-500">
              {t('lastUpdated')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


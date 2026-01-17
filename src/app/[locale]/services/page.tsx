import type { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Globe, Heart, Scale, Home, FileCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/services`,
    },
  };
}

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Heart,
  Scale,
  Home,
  FileCheck,
};

const services = [
  { key: 'immigration', icon: 'Globe', id: 'immigration', areaKeys: ['expressEntry', 'pnp', 'business', 'categoryBased', 'familySponsorship', 'humanitarian', 'workPermits', 'studyPermits', 'visitorVisas', 'citizenship'] },
  { key: 'familyLaw', icon: 'Heart', id: 'family-law', areaKeys: ['divorce', 'custody', 'support', 'agreements'] },
  { key: 'smallClaims', icon: 'Scale', id: 'small-claims', areaKeys: ['debtRecovery', 'contractDisputes', 'propertyDamage', 'consumerDisputes'] },
  { key: 'landlordTenant', icon: 'Home', id: 'landlord-tenant', areaKeys: ['ltb', 'eviction', 'lease', 'rent'] },
  { key: 'notaryPublic', icon: 'FileCheck', id: 'notary-public', areaKeys: ['affidavits', 'certifiedCopies', 'authentication', 'witness'] },
];

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {t('services.headline')}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t('services.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Scale;
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={service.key}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-start ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#1B2D4F]/10 flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-[#1B2D4F]" />
                      </div>
                      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2D4F]">
                        {t(`services.${service.key}.title`)}
                      </h2>
                    </div>
                    <p className="text-slate-600 text-lg mb-6">
                      {t(`services.${service.key}.description`)}
                    </p>
                    <Button asChild>
                      <Link href={`/services/${service.id}`}>
                        {t('services.learnMore')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className={`${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.areaKeys.slice(0, 4).map((areaKey) => (
                        <div key={areaKey} className="flex items-start gap-3 p-4 rounded-lg bg-slate-50">
                          <CheckCircle className="h-5 w-5 text-[#1B2D4F] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-slate-900 text-sm">
                              {t(`services.${service.key}.areas.${areaKey}.title`)}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
            {t('services.needLegalAssistance')}
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            {t('services.contactUsToday')}
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              {t('common.bookConsultation')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}


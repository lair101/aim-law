import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, ArrowLeft, Globe, Heart, Scale, Home, FileCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site-content";

const iconMap: Record<string, React.ElementType> = {
  Globe, Heart, Scale, Home, FileCheck,
};

const services = [
  { id: 'immigration', key: 'immigration', icon: 'Globe', areaKeys: ['judicialReview', 'immigrationAppeals', 'expressEntry', 'pnp', 'business', 'familySponsorship', 'humanitarian', 'workPermits', 'studyPermits', 'visitorVisas', 'citizenship', 'prCardRenewal'] },
  { id: 'family-law', key: 'familyLaw', icon: 'Heart', areaKeys: ['divorce', 'custody', 'support', 'agreements'] },
  { id: 'small-claims', key: 'smallClaims', icon: 'Scale', areaKeys: ['debtRecovery', 'contractDisputes', 'propertyDamage', 'consumerDisputes'] },
  { id: 'landlord-tenant', key: 'landlordTenant', icon: 'Home', areaKeys: ['ltb', 'eviction', 'lease', 'rent'] },
  { id: 'notary-public', key: 'notaryPublic', icon: 'FileCheck', areaKeys: ['affidavits', 'certifiedCopies', 'authentication', 'witness'] },
];

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  const t = await getTranslations({ locale, namespace: 'services' });
  return {
    title: t(`${service.key}.title`),
    description: t(`${service.key}.description`),
    alternates: { canonical: `${siteConfig.url}/${locale}/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();

  return <ServiceContent service={service} />;
}

function ServiceContent({ service }: { service: typeof services[0] }) {
  const t = useTranslations();
  const IconComponent = iconMap[service.icon] || Scale;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/services" className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('services.backToServices')}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold">
              {t(`services.${service.key}.title`)}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
            {t(`services.${service.key}.description`)}
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-8 text-center">
            {t('services.ourServicesIn', { service: t(`services.${service.key}.title`) })}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.areaKeys.map((areaKey) => (
              <Card key={areaKey} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1B2D4F] flex-shrink-0 mt-0.5" />
                    <span className="font-playfair text-xl text-[#1B2D4F]">
                      {t(`services.${service.key}.areas.${areaKey}.title`)}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    {t(`services.${service.key}.areas.${areaKey}.description`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
            {t('services.needHelp', { service: t(`services.${service.key}.title`) })}
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            {t('services.scheduleConsultation')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t('common.bookConsultation')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">{t('services.viewAll')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}


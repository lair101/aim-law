import { useTranslations } from 'next-intl';
import { ArrowRight, Globe, Heart, Scale, Home, FileCheck, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site-content";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Heart,
  Scale,
  Home,
  FileCheck,
};

const serviceKeys = [
  { key: 'immigration', icon: 'Globe', href: '/services/immigration' },
  { key: 'familyLaw', icon: 'Heart', href: '/services/family-law' },
  { key: 'smallClaims', icon: 'Scale', href: '/services/small-claims' },
  { key: 'landlordTenant', icon: 'Home', href: '/services/landlord-tenant' },
  { key: 'notaryPublic', icon: 'FileCheck', href: '/services/notary-public' },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#1B2D4F] hover:bg-slate-100" asChild>
                <Link href="/contact">
                  {t('hero.scheduleConsultation')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B2D4F]" asChild>
                <Link href="/services">
                  {t('hero.ourServices')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-4">
              {t('services.headline')}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {t('services.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((service) => {
              const IconComponent = iconMap[service.icon] || Scale;
              return (
                <Card key={service.key} className="group hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B2D4F] transition-colors">
                      <IconComponent className="h-6 w-6 text-[#1B2D4F] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-[#1B2D4F]">
                      {t(`services.${service.key}.title`)}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {t(`services.${service.key}.shortDescription`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#1B2D4F] font-medium hover:underline"
                    >
                      {t('services.learnMore')}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
                {t('common.whyChooseUs')}
              </h2>
              <div className="space-y-6">
                {['expertise', 'personalized', 'accessible'].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-[#1B2D4F] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {t(`common.whyChooseUsItems.${item}.title`)}
                      </h3>
                      <p className="text-slate-600">
                        {t(`common.whyChooseUsItems.${item}.description`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1B2D4F] to-[#2A4066] rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                {t('common.readyToStart')}
              </h3>
              <p className="text-slate-200 mb-6">
                {t('common.scheduleConsultation')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-slate-300" />
                  <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="text-lg hover:underline">
                    {siteConfig.phone}
                  </a>
                </div>
                <Button className="w-full bg-white text-[#1B2D4F] hover:bg-slate-100" size="lg" asChild>
                  <Link href="/contact">
                    {t('common.bookConsultation')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


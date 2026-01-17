import type { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Target, Award, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/about`,
    },
  };
}

const valueIcons: Record<string, React.ElementType> = {
  integrity: Shield,
  excellence: Award,
  accessibility: Users,
  clientFocused: Target,
};

const valueKeys = ['integrity', 'excellence', 'accessibility', 'clientFocused'] as const;

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {t('about.headline')}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
              {t('about.title')}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              {t('about.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-12 text-center">
            {t('about.ourValues')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueKeys.map((key) => {
              const IconComponent = valueIcons[key];
              return (
                <Card key={key} className="text-center border-slate-200 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-[#1B2D4F]/10 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-[#1B2D4F]" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-[#1B2D4F]">
                      {t(`about.values.${key}.title`)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      {t(`about.values.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1B2D4F] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            {t('about.readyToWork')}
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            {t('about.contactTeam')}
          </p>
          <Button size="lg" className="bg-white text-[#1B2D4F] hover:bg-slate-100" asChild>
            <Link href="/contact">
              {t('about.scheduleConsultation')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}


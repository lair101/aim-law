import type { Metadata } from "next";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/contact`,
    },
  };
}

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {t('contact.headline')}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {t('contact.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="border-slate-200 sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#1B2D4F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{t('contact.address')}</h3>
                      <p className="text-slate-600 text-sm">
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#1B2D4F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{t('contact.phone')}</h3>
                      <a
                        href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                        className="text-[#1B2D4F] hover:underline text-sm"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#1B2D4F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{t('contact.email')}</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-[#1B2D4F] hover:underline text-sm"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-[#1B2D4F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{t('contact.officeHours')}</h3>
                      <p className="text-slate-600 text-sm">{siteConfig.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mb-6">
                {t('contact.sendMessage')}
              </h2>
              <Card className="border-slate-200">
                <CardContent className="p-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


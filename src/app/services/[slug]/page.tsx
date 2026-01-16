import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, Globe, Heart, Scale, Home, FileCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesContent, siteConfig } from "@/config/site-content";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Heart,
  Scale,
  Home,
  FileCheck,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicesContent.services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesContent.services.find((s) => s.id === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `${siteConfig.url}/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesContent.services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon] || Scale;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            href="/services"
            className="inline-flex items-center text-slate-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold">
              {service.title}
            </h1>
          </div>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-8 text-center">
            Our {service.title} Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.areas.map((area) => (
              <Card key={area.title} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1B2D4F] flex-shrink-0 mt-0.5" />
                    <span className="font-playfair text-xl text-[#1B2D4F]">{area.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{area.description}</p>
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
            Need Help With {service.title}?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Our experienced legal team is ready to assist you. Schedule a consultation to discuss your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}


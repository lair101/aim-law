import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Heart, Scale, Home, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesContent, siteConfig } from "@/config/site-content";

export const metadata: Metadata = {
  title: "Our Services",
  description: servicesContent.description,
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Heart,
  Scale,
  Home,
  FileCheck,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {servicesContent.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {servicesContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {servicesContent.services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Scale;
              const isReversed = index % 2 === 1;
              
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={isReversed ? "lg:col-start-2" : ""}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-[#1B2D4F]/10 flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-[#1B2D4F]" />
                      </div>
                      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-[#1B2D4F]">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <Card className={`border-slate-200 ${isReversed ? "lg:col-start-1" : ""}`}>
                    <CardHeader>
                      <CardTitle className="font-playfair text-lg text-[#1B2D4F]">
                        Key Practice Areas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.areas.map((area) => (
                          <li key={area.title} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#1B2D4F] mt-2 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-slate-900">{area.title}</p>
                              <p className="text-sm text-slate-600">{area.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
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
            Need Legal Assistance?
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your case. Our experienced team is ready to provide the guidance you need.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}


import Link from "next/link";
import { ArrowRight, Globe, Heart, Scale, Home, FileCheck, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { heroContent, servicesContent, aboutContent, siteConfig } from "@/config/site-content";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Heart,
  Scale,
  Home,
  FileCheck,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNHMtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {heroContent.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              {heroContent.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#1B2D4F] hover:bg-slate-100" asChild>
                <Link href={heroContent.cta.primary.href}>
                  {heroContent.cta.primary.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1B2D4F]" asChild>
                <Link href={heroContent.cta.secondary.href}>
                  {heroContent.cta.secondary.text}
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
              {servicesContent.headline}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              {servicesContent.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesContent.services.map((service) => {
              const IconComponent = iconMap[service.icon] || Scale;
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow duration-300 border-slate-200">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#1B2D4F]/10 flex items-center justify-center mb-4 group-hover:bg-[#1B2D4F] transition-colors">
                      <IconComponent className="h-6 w-6 text-[#1B2D4F] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-[#1B2D4F]">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-[#1B2D4F] font-medium hover:underline"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
                Why Choose AIM Law?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {aboutContent.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutContent.values.map((value) => (
                  <div key={value.title} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1B2D4F] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[#1B2D4F]">{value.title}</h3>
                      <p className="text-slate-600 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1B2D4F] to-[#2A4066] rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-slate-200 mb-6">
                Schedule a consultation with our experienced legal team today.
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
                    Book a Free Consultation
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

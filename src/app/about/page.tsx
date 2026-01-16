import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Users, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { aboutContent, siteConfig } from "@/config/site-content";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutContent.description,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              {aboutContent.headline}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
              {aboutContent.description}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {aboutContent.mission}
              </p>
              <p className="text-slate-600 leading-relaxed">
                With years of experience serving clients across Canada, AIM Law has built a reputation for delivering results while maintaining the highest ethical standards. We believe that everyone deserves access to quality legal representation, regardless of the complexity of their case.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "Years of Experience", value: "15+" },
                { icon: Users, label: "Clients Served", value: "5000+" },
                { icon: Shield, label: "Cases Won", value: "95%" },
                { icon: Briefcase, label: "Practice Areas", value: "5" },
              ].map((stat) => (
                <Card key={stat.label} className="text-center p-6">
                  <CardContent className="p-0">
                    <stat.icon className="h-8 w-8 text-[#1B2D4F] mx-auto mb-3" />
                    <p className="font-playfair text-3xl font-bold text-[#1B2D4F]">{stat.value}</p>
                    <p className="text-slate-600 text-sm">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2D4F] mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do at AIM Law.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutContent.values.map((value) => (
              <Card key={value.title} className="border-slate-200">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-[#1B2D4F] mb-4" />
                  <h3 className="font-playfair text-xl font-semibold text-[#1B2D4F] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#1B2D4F] text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-slate-200 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to schedule a consultation and learn how we can help you with your legal needs.
          </p>
          <Button size="lg" className="bg-white text-[#1B2D4F] hover:bg-slate-100" asChild>
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}


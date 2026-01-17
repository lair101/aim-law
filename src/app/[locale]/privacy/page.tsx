import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
import { siteConfig } from "@/config/site-content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name} - how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead">
              {siteConfig.legalName} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {siteConfig.domain} (the &quot;Website&quot;).
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you fill out a contact form, request a consultation, subscribe to our newsletter, or communicate with us.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We may use the information we collect to respond to your inquiries, provide legal services, send you information about our services, improve our Website, and comply with legal obligations.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your information.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please <Link href="/contact" className="text-[#1B2D4F] underline hover:no-underline">contact us</Link>.
            </p>

            <p className="mt-8 text-sm text-slate-500">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


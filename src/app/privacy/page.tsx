import type { Metadata } from "next";
import Link from "next/link";
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
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out a contact form on our Website</li>
              <li>Request a consultation or our services</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Communicate with us via email, phone, or other means</li>
            </ul>
            <p>
              This information may include your name, email address, phone number, mailing address, and any other information you choose to provide.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Automatically Collected Information
            </h2>
            <p>
              When you visit our Website, we may automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide legal services</li>
              <li>Send you information about our services that may be of interest to you</li>
              <li>Improve our Website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and interests</li>
            </ul>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Disclosure of Your Information
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To trusted third parties who assist us in operating our Website or conducting our business, so long as those parties agree to keep this information confidential</li>
              <li>When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&apos; rights, property, or safety</li>
              <li>With your consent</li>
            </ul>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our Website may use cookies and similar tracking technologies to enhance your experience. You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. If you disable or refuse cookies, please note that some parts of the Website may become inaccessible or not function properly.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Your Rights
            </h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to withdraw consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Third-Party Links
            </h2>
            <p>
              Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
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


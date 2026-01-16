import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site-content";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer",
  description: `Terms and conditions for using the ${siteConfig.name} website.`,
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1B2D4F] via-[#2A4066] to-[#1B2D4F] text-white py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Disclaimer & Terms of Use
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our website.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto prose prose-slate prose-lg">
            <p className="lead">
              Welcome to {siteConfig.legalName}&apos;s website (the &quot;Website&quot;). By accessing or using the Website, you agree to be bound by the following terms and conditions (the &quot;Terms of Use&quot;).
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              General Use and Acceptance
            </h2>
            <p>
              This &quot;Terms of Use Agreement&quot; is a legal document between you and {siteConfig.legalName} and its associates (&quot;{siteConfig.legalName}&quot;), who are the owners and operators of {siteConfig.domain} including all content on the Website, unless stated otherwise. This agreement outlines the Terms and Conditions that govern your access and use of the Website. Your decision to access and use the Website indicates your acceptance of the Terms and Conditions of this Agreement. If you do not agree with these terms, you must refrain from accessing or using the website. {siteConfig.legalName} has the right to update this Agreement at any time by publishing the revised terms. Continued use of the website after such changes are made signifies your acceptance of the revised terms.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              No Legal Advice Given
            </h2>
            <p>
              The Website provided by {siteConfig.legalName} is intended solely for informational purposes. The information contained on the Site is not meant to serve as legal advice, and it cannot be used as such. It is not advisable to rely on or take any action based on the information provided on the Website. It is crucial to seek current and up-to-date legal advice directly related to your situation and not to delay seeking legal or other professional advice because of anything you have read on this Website. If you require legal advice, we recommend that you contact {siteConfig.legalName} directly, and we will be pleased to assist you or refer you to other professionals as appropriate.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              No Lawyer-Client Relationship Established
            </h2>
            <p>
              Please note that the presentation of information on this Website or your use of, or reliance upon such information does not create a lawyer-client relationship between you and {siteConfig.legalName} or any of its professionals. Additionally, it is important to be aware that sending or receiving information over the Internet is generally not secure. As a result, {siteConfig.legalName} cannot guarantee the security or privacy of any communication (in any form) to the Website.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              No Lawyer-Client Relationship Through Forms
            </h2>
            <p>
              The information you obtain at this site is not and is not intended to be legal advice. You should consult an attorney for advice regarding your individual situation. Contacting us or filling out forms does not create an attorney-client relationship. Please do not send any confidential information to us until such time as an attorney-client relationship has been established.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Ownership of Content
            </h2>
            <p>
              All materials accessible through this Website, including but not limited to text, graphics, videos, photos, trade-marks, logos, and other materials (collectively referred to as &quot;Content&quot;), are protected by copyright and trade-mark laws and are the property of {siteConfig.legalName} or the party that has been credited as the provider of the Content. Any use of the Content, including modification, transmission, presentation, distribution, republication, or any other form of exploitation of the Website or its Content, whether in whole or in part, is strictly prohibited without the express prior written consent of {siteConfig.legalName}, except as granted in the limited license herein.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Limited License
            </h2>
            <p>
              Subject to the Terms and Conditions of this Agreement, a limited, non-exclusive, and non-transferable license is granted to you to access, view and use the Website for personal, non-commercial use. You are also allowed to download, store, and print single copies of items that make up the Content for your personal, non-commercial use, as long as you maintain all copyright and other notices present in such Content.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Use of Content
            </h2>
            <p>
              You may use the content on this Website for informational purposes only, and may not modify, copy, reproduce, publish, transmit, distribute, display, or sell any such content without the express written permission of {siteConfig.legalName}.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Links to Third Party Websites
            </h2>
            <p>
              This Website may contain links to third-party websites provided solely for your convenience and not as an endorsement by {siteConfig.legalName} of their content. {siteConfig.legalName} neither endorses nor controls these websites and makes no representation about their content or accuracy. By accessing any third-party websites linked to this Site, you do so at your own risk.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Disclaimer of Warranties
            </h2>
            <p>
              The Website and its Content are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without any warranty or condition, whether express or implied. {siteConfig.legalName} explicitly disclaims all warranties and conditions, including but not limited to any implied warranties of merchantability, fitness for a particular purpose, title, quiet enjoyment or non-infringement, to the fullest extent permitted by applicable law.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Limitation of Liability
            </h2>
            <p>
              {siteConfig.legalName} and its associates, employees, consultants, agents, or licensors shall not be liable for any damages of any kind, including but not limited to direct, special, indirect, punitive, incidental, or consequential damages, including any loss or damages related to lost business, lost savings, lost data, and/or lost profits arising from your use of, reliance upon, or inability to use the Website or the Content, regardless of the cause and whether arising in contract (including fundamental breach), tort (including negligence), or otherwise.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Privacy Policy
            </h2>
            <p>
              {siteConfig.legalName} will treat any personal information that you submit through this Website according to its <Link href="/privacy" className="text-[#1B2D4F] underline hover:no-underline">Privacy Policy</Link>. By using the Website, you consent to the use of your Personal Information by {siteConfig.legalName} in accordance with the Privacy Policy.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p>
              The Website is operated by {siteConfig.legalName} from its offices in the Province of British Columbia, Canada. By accessing or using the Website, you agree that all matters relating to your access to or use of the Website and its Content shall be governed by the laws of the Province of British Columbia and the federal laws of Canada, without regard to conflict of laws principles. You agree and submit to the non-exclusive jurisdiction of the courts of the Province of British Columbia with respect to all matters relating to your access to and use of the Website.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Termination
            </h2>
            <p>
              {siteConfig.legalName} may cancel or terminate your right to use the Website, or any part of the Website, at any time without notice. In the event of termination, you are no longer authorized to access the Website or the part of the Website affected by such cancellation or termination.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Changes to These Terms
            </h2>
            <p>
              {siteConfig.legalName} reserves the right to modify these Terms of Use at any time without prior notice. Your continued use of the Site after any changes to these Terms of Use will constitute your acceptance of such changes.
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


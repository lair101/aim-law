import type { Metadata } from "next";
import { Link } from "@/i18n/routing";
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
              This &quot;Terms of Use Agreement&quot; is a legal document between you and {siteConfig.legalName} and its associates (&quot;{siteConfig.legalName}&quot;), who are the owners and operators of {siteConfig.domain} including all content on the Website, unless stated otherwise.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              No Legal Advice Given
            </h2>
            <p>
              The Website provided by {siteConfig.legalName} is intended solely for informational purposes. The information contained on the Site is not meant to serve as legal advice, and it cannot be used as such.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              No Lawyer-Client Relationship Established
            </h2>
            <p>
              Please note that the presentation of information on this Website or your use of, or reliance upon such information does not create a lawyer-client relationship between you and {siteConfig.legalName} or any of its professionals.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Privacy Policy
            </h2>
            <p>
              {siteConfig.legalName} will treat any personal information that you submit through this Website according to its <Link href="/privacy" className="text-[#1B2D4F] underline hover:no-underline">Privacy Policy</Link>.
            </p>

            <h2 className="font-playfair text-2xl font-bold text-[#1B2D4F] mt-8 mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p>
              The Website is operated by {siteConfig.legalName} from its offices in the Province of British Columbia, Canada. By accessing or using the Website, you agree that all matters relating to your access to or use of the Website and its Content shall be governed by the laws of the Province of British Columbia and the federal laws of Canada.
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


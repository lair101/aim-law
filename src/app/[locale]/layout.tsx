import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site-content";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: `${siteConfig.name} | ${locale === 'zh' ? '加拿大专业法律服务' : 'Expert Legal Services in Canada'}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: locale === 'zh' 
      ? 'AIM律师事务所提供移民法、家庭法、小额索赔、房东租客事务及公证服务。' 
      : siteConfig.description,
    keywords: locale === 'zh' 
      ? ["加拿大移民律师", "家庭法律师", "小额索赔法庭", "房东租客律师", "公证服务", "移民法", "多伦多律师"]
      : ["immigration lawyer Canada", "family law attorney Toronto", "small claims court lawyer", "landlord tenant lawyer Ontario", "notary public services"],
    openGraph: {
      type: "website",
      locale: locale === 'zh' ? 'zh_CN' : 'en_CA',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: `${siteConfig.name} | ${locale === 'zh' ? '加拿大专业法律服务' : 'Expert Legal Services in Canada'}`,
      description: locale === 'zh' 
        ? 'AIM律师事务所提供移民法、家庭法、小额索赔、房东租客事务及公证服务。' 
        : siteConfig.description,
    },
    alternates: {
      canonical: siteConfig.url,
      languages: {
        'en': `${siteConfig.url}/en`,
        'zh': `${siteConfig.url}/zh`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en' | 'zh')) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: siteConfig.name,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.province,
                postalCode: siteConfig.address.postalCode,
                addressCountry: siteConfig.address.country,
              },
              areaServed: {
                "@type": "Country",
                name: "Canada",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 09:00-17:00",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


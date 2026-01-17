"use client"

import Image from "next/image"
import { useTranslations } from 'next-intl'
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "@/i18n/routing"
import { siteConfig, footerContent } from "@/config/site-content"

const navKeys = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'contact', href: '/contact' },
] as const;

const serviceKeys = [
  { key: 'immigration', href: '/services/immigration' },
  { key: 'familyLaw', href: '/services/family-law' },
  { key: 'smallClaims', href: '/services/small-claims' },
  { key: 'landlordTenant', href: '/services/landlord-tenant' },
  { key: 'notaryPublic', href: '/services/notary-public' },
] as const;

export function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-[#1B2D4F] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="AIM Law Firm Logo"
                width={140}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {navKeys.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {t(`nav.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {serviceKeys.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {t(`services.${item.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.province} {siteConfig.address.postalCode}
                </span>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  <span className="text-sm">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-slate-400 text-xs leading-relaxed mb-4">
            {t('footer.disclaimer')}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-400 text-sm">
              {footerContent.copyright}
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                {t('footer.termsOfUse')}
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


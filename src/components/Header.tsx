"use client"

import Image from "next/image"
import { useState } from "react"
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { siteConfig } from "@/config/site-content"
import { cn } from "@/lib/utils"

const navKeys = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'contact', href: '/contact' },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const t = useTranslations()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: 'en' | 'zh') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#1B2D4F]/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="AIM Law Firm Logo"
            width={160}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navKeys.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-[#1B2D4F] transition-colors"
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={() => switchLocale(locale === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#1B2D4F] transition-colors px-2 py-1 rounded-md hover:bg-slate-100"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {locale === 'en' ? '中文' : 'EN'}
          </button>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-[#1B2D4F]"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button asChild>
            <Link href="/contact">{t('header.bookConsultation')}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-4 py-6 bg-white border-t border-[#1B2D4F]/10">
          {navKeys.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-700 hover:text-[#1B2D4F]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => {
                switchLocale(locale === 'en' ? 'zh' : 'en')
                setMobileMenuOpen(false)
              }}
              className="flex items-center gap-2 text-base font-medium text-slate-700 hover:text-[#1B2D4F]"
            >
              <Globe className="h-5 w-5" />
              {locale === 'en' ? '切换到中文' : 'Switch to English'}
            </button>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 text-base font-medium text-slate-700"
            >
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </a>
            <Button asChild className="w-full">
              <Link href="/contact">{t('header.bookConsultation')}</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}


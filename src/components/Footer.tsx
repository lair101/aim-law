import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { siteConfig, navigationLinks, servicesContent, footerContent } from "@/config/site-content"

export function Footer() {
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
              {footerContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesContent.services.map((service) => (
                <li key={service.id}>
                  <Link href={service.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Contact Us</h3>
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
            {footerContent.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-slate-400 text-sm">
              {footerContent.copyright}
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="text-slate-400 hover:text-white transition-colors text-sm">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


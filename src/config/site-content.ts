export const siteConfig = {
  name: "AIM Law",
  legalName: "Aim Law Professional Corporation",
  domain: "aim-law.ca",
  url: "https://aim-law.ca",
  description: "AIM Law provides expert legal services in Immigration, Family Law, Small Claims, Landlord & Tenant, and Notary Public services across Canada.",
  phone: "(778) 865-3090",
  email: "info@aim-law.ca",
  address: {
    street: "123 Legal Street, Suite 400",
    city: "Toronto",
    province: "ON",
    postalCode: "M5V 1A1",
    country: "Canada"
  },
  hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  social: {
    linkedin: "https://linkedin.com/company/aim-law",
    twitter: "https://twitter.com/aimlaw"
  }
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" }
];

export const heroContent = {
  headline: "Strategic Legal Solutions for Your Future",
  subheadline: "AIM Law delivers expert guidance in Immigration, Family Law, Small Claims, Landlord & Tenant matters, and Notary Public services.",
  cta: {
    primary: { text: "Schedule a Consultation", href: "/contact" },
    secondary: { text: "Our Services", href: "/services" }
  }
};

export const aboutContent = {
  title: "About AIM Law",
  headline: "Committed to Your Legal Success",
  description: "At AIM Law, we understand that navigating the legal system can be complex and overwhelming. Our dedicated team of legal professionals is committed to providing personalized, strategic solutions tailored to your unique situation.",
  mission: "Our mission is to deliver accessible, professional legal services that empower our clients to achieve their goals. Whether you're starting a new chapter in Canada, resolving family matters, or protecting your rights as a landlord or tenant, AIM Law is your trusted partner.",
  values: [
    { title: "Integrity", description: "We uphold the highest ethical standards in all our dealings." },
    { title: "Excellence", description: "We strive for exceptional results in every case we handle." },
    { title: "Accessibility", description: "We make quality legal services available to everyone." },
    { title: "Client-Focused", description: "Your needs and goals drive everything we do." }
  ]
};

export const servicesContent = {
  title: "Our Services",
  headline: "Comprehensive Legal Solutions",
  description: "AIM Law offers a full range of legal services designed to meet your needs. From immigration matters to family disputes, we're here to help.",
  services: [
    {
      id: "immigration",
      title: "Immigration Law",
      shortDescription: "Navigate Canada's immigration system with confidence.",
      description: "Our immigration practice helps individuals and families achieve their Canadian dreams. We provide expert guidance through all stages of the immigration process.",
      icon: "Globe",
      href: "/services/immigration",
      areas: [
        { title: "Visitor & Work Visas", description: "Temporary resident permits, work permits, and visa extensions." },
        { title: "Permanent Residence", description: "Express Entry, Provincial Nominee Programs, and family sponsorship." },
        { title: "Canadian Citizenship", description: "Citizenship applications, test preparation, and ceremony guidance." },
        { title: "Family Sponsorship", description: "Sponsor your spouse, children, parents, or grandparents." }
      ]
    },
    {
      id: "family-law",
      title: "Family Law",
      shortDescription: "Compassionate support through life's transitions.",
      description: "We provide sensitive, skilled representation in all family law matters, helping you navigate difficult times with dignity and clarity.",
      icon: "Heart",
      href: "/services/family-law",
      areas: [
        { title: "Divorce & Separation", description: "Contested and uncontested divorce proceedings." },
        { title: "Child Custody & Access", description: "Parenting arrangements and custody agreements." },
        { title: "Child & Spousal Support", description: "Fair support calculations and enforcement." },
        { title: "Domestic Agreements", description: "Prenuptial, cohabitation, and separation agreements." }
      ]
    },
    {
      id: "small-claims",
      title: "Small Claims",
      shortDescription: "Effective resolution for civil disputes.",
      description: "We represent clients in Small Claims Court, helping resolve disputes efficiently and cost-effectively.",
      icon: "Scale",
      href: "/services/small-claims",
      areas: [
        { title: "Debt Recovery", description: "Collection of outstanding debts and unpaid invoices." },
        { title: "Contract Disputes", description: "Breach of contract claims and defenses." },
        { title: "Property Damage", description: "Claims for damage to personal or real property." },
        { title: "Consumer Disputes", description: "Issues with goods, services, or warranties." }
      ]
    },
    {
      id: "landlord-tenant",
      title: "Landlord & Tenant",
      shortDescription: "Protecting your rights in rental matters.",
      description: "Whether you're a landlord or tenant, we provide expert guidance on residential tenancy issues and represent clients before the Landlord and Tenant Board.",
      icon: "Home",
      href: "/services/landlord-tenant",
      areas: [
        { title: "LTB Proceedings", description: "Representation at Landlord and Tenant Board hearings." },
        { title: "Eviction Matters", description: "Eviction applications and defenses." },
        { title: "Lease Agreements", description: "Drafting and reviewing residential lease agreements." },
        { title: "Rent Disputes", description: "Rent arrears, increases, and above-guideline applications." }
      ]
    },
    {
      id: "notary-public",
      title: "Notary Public",
      shortDescription: "Professional document authentication services.",
      description: "Our notary public services ensure your documents are properly authenticated and legally valid.",
      icon: "FileCheck",
      href: "/services/notary-public",
      areas: [
        { title: "Affidavits & Declarations", description: "Sworn statements and statutory declarations." },
        { title: "Certified Copies", description: "Certification of document copies." },
        { title: "Document Authentication", description: "Notarization for domestic and international use." },
        { title: "Witness Services", description: "Professional witnessing of signatures." }
      ]
    }
  ]
};

export const contactContent = {
  title: "Contact Us",
  headline: "Get in Touch",
  description: "Ready to discuss your legal needs? Contact AIM Law today for a consultation. We're here to help you navigate your legal journey.",
  caslConsent: "I consent to receive electronic communications from AIM Law regarding my inquiry and related legal services. I understand I can withdraw my consent at any time.",
  pipedaDisclaimer: "Your privacy is important to us. The personal information you provide will be collected, used, and disclosed in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). We will only use your information to respond to your inquiry and provide legal services. For more information, please review our Privacy Policy."
};

export const footerContent = {
  description: "AIM Law provides expert legal services in Immigration, Family Law, Small Claims, Landlord & Tenant, and Notary Public services.",
  copyright: `© ${new Date().getFullYear()} Aim Law Professional Corporation. All rights reserved.`,
  disclaimer: "The information on this website is for general informational purposes only and does not constitute legal advice. Please consult with a qualified legal professional for advice regarding your specific situation."
};


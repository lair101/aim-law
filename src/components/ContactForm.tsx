"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from 'next-intl';
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { contactContent } from "@/config/site-content";
import { submitContactForm } from "@/app/actions/contact";

const serviceKeys = ['immigration', 'familyLaw', 'smallClaims', 'landlordTenant', 'notaryPublic'] as const;

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
  caslConsent: z.literal(true, { message: "You must consent to receive communications" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      caslConsent: false as unknown as true,
    },
  });

  const caslConsent = watch("caslConsent");

  const onSubmit = (data: ContactFormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    startTransition(async () => {
      const result = await submitContactForm(data);

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || t('contact.form.error'));
      }
    });
  };

  if (submitStatus === "success") {
    return (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
        <h3 className="font-playfair text-2xl font-bold text-[#1B2D4F] mb-2">{t('contact.form.success').split('.')[0]}!</h3>
        <p className="text-slate-600 mb-6">
          {t('contact.form.success')}
        </p>
        <Button variant="outline" onClick={() => setSubmitStatus("idle")}>
          {t('contact.sendMessage')}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitStatus === "error" && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
          <Input id="firstName" placeholder="John" {...register("firstName")} aria-invalid={!!errors.firstName} />
          {errors.firstName && <p className="text-sm text-red-600">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
          <Input id="lastName" placeholder="Doe" {...register("lastName")} aria-invalid={!!errors.lastName} />
          {errors.lastName && <p className="text-sm text-red-600">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.form.email')} *</Label>
          <Input id="email" type="email" placeholder="john@example.com" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t('contact.form.phone')} *</Label>
          <Input id="phone" type="tel" placeholder="(416) 555-0123" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t('contact.form.serviceArea')} *</Label>
        <select
          id="service"
          {...register("service")}
          className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2D4F] focus-visible:border-[#1B2D4F] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          aria-invalid={!!errors.service}
        >
          <option value="">{t('contact.form.selectService')}</option>
          {serviceKeys.map((key) => (
            <option key={key} value={key}>{t(`services.${key}.title`)}</option>
          ))}
        </select>
        {errors.service && <p className="text-sm text-red-600">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t('contact.form.message')} *</Label>
        <Textarea id="message" placeholder={t('contact.form.howCanWeHelp')} rows={5} {...register("message")} aria-invalid={!!errors.message} />
        {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
      </div>

      {/* CASL Consent */}
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox id="caslConsent" checked={caslConsent} onCheckedChange={(checked) => setValue("caslConsent", checked as true)} aria-invalid={!!errors.caslConsent} />
          <Label htmlFor="caslConsent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
            {t('contact.form.consent')}
          </Label>
        </div>
        {errors.caslConsent && <p className="text-sm text-red-600">{errors.caslConsent.message}</p>}
      </div>

      {/* PIPEDA Disclaimer */}
      <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
        <p className="text-xs text-slate-500 leading-relaxed">{contactContent.pipedaDisclaimer}</p>
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={isPending}>
        {isPending ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />{t('contact.form.submitting')}</>) : (t('contact.form.submit'))}
      </Button>
    </form>
  );
}


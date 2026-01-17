"use server";

import { z } from "zod";
import { Resend } from "resend";
import { siteConfig, servicesContent } from "@/config/site-content";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().min(10).max(20),
  service: z.string().min(1),
  message: z.string().min(10).max(1000),
  caslConsent: z.literal(true),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Find the service name
    const serviceName =
      servicesContent.services.find((s) => s.id === validatedData.service)
        ?.title || validatedData.service;

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission (no email sent - Resend not configured):", {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
        email: validatedData.email,
        phone: validatedData.phone,
        service: serviceName,
        message: validatedData.message,
        caslConsent: validatedData.caslConsent,
        timestamp: new Date().toISOString(),
      });
      
      return { success: true };
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: `${siteConfig.name} <noreply@${siteConfig.domain}>`,
      to: [siteConfig.email],
      replyTo: validatedData.email,
      subject: `New Contact Form Submission - ${serviceName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone}</p>
        <p><strong>Service Required:</strong> ${serviceName}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>CASL Consent: Provided at ${new Date().toISOString()}</small></p>
        <p><small>This email was sent from the contact form on ${siteConfig.url}</small></p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: `${siteConfig.name} <noreply@${siteConfig.domain}>`,
      to: [validatedData.email],
      subject: `Thank you for contacting ${siteConfig.name}`,
      html: `
        <h2>Thank you for contacting ${siteConfig.name}</h2>
        <p>Dear ${validatedData.firstName},</p>
        <p>We have received your inquiry regarding ${serviceName}. Our team will review your message and get back to you within 24 hours.</p>
        <p>If you need immediate assistance, please call us at ${siteConfig.phone}.</p>
        <br>
        <p>Best regards,</p>
        <p>The ${siteConfig.name} Team</p>
        <hr>
        <p><small>Phone: ${siteConfig.phone} | Email: ${siteConfig.email}</small></p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs.",
      };
    }

    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}


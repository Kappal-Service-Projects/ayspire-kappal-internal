"use client";
import React from "react";

import ContactForm from "@/components/email-components/forms/contactForm";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-950 dark:to-blue-950">
      <ContactForm />
      <ScrollToTop />
    </main>
  );
}

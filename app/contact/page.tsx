"use client";
import React from "react";
import { Input, Textarea, Button } from "@heroui/react";

export default function ContactPage() {
  return (
    <main className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4">
      <section className="w-full max-w-xl mx-auto flex flex-col items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight text-center">
          Contact Us
        </h1>
        <p className="text-gray-700 dark:text-gray-200 text-lg mb-8 text-center">
          Have a question, partnership inquiry, or want to learn more? Fill out
          the form below and our team will get back to you soon.
        </p>
        <form className="w-full flex flex-col gap-6">
          <Input
            required
            className="w-full"
            label="Name"
            name="name"
            placeholder="Your Name"
            size="lg"
            variant="bordered"
          />
          <Input
            required
            className="w-full"
            label="Email"
            name="email"
            placeholder="you@email.com"
            size="lg"
            type="email"
            variant="bordered"
          />
          <Textarea
            required
            className="w-full"
            label="Message"
            minRows={4}
            name="message"
            placeholder="How can we help you?"
            size="lg"
            variant="bordered"
          />
          <Button
            className="w-full font-semibold text-lg mt-2"
            color="primary"
            size="lg"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </section>
    </main>
  );
}

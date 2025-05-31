import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Ayspire",
  description:
    "Learn about Ayspire Inc, our story, our mission, and our vision for intelligent solutions in Canada and beyond.",
};

export default function AboutPage() {
  return (
    <main className="min-h-[90vh] w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 flex flex-col items-center justify-center py-12 px-4">
      {/* Hero/Intro Section */}
      <section className="w-full max-w-4xl mx-auto flex flex-col items-center text-center mb-16">
        <Image
          alt="Ayspire Logo"
          className="mb-6 drop-shadow-lg"
          height={90}
          src="/logo.svg"
          width={90}
        />
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
          About Ayspire
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-6">
          Empowering organizations to make smarter decisions, faster. Born in
          Canada, built for the world.
        </p>
      </section>

      {/* Story Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
            Ayspire was founded in 2021 in Toronto, Canada, by a group of
            passionate technologists and business leaders who saw a gap in how
            organizations approached performance, planning, and analytics.
            Frustrated by the complexity and rigidity of legacy systems, they
            envisioned a new kind of company—one that would blend deep industry
            expertise with the agility of modern cloud and AI technologies.
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
            The name &quot;Ayspire&quot; is a fusion of &quot;AI&quot; and
            &quot;aspire&quot;—reflecting our mission to help clients reach new
            heights through intelligent, data-driven solutions. From our
            earliest days, we have been committed to making advanced analytics,
            planning, and automation accessible to organizations of all sizes,
            not just the Fortune 500.
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-lg">
            Today, Ayspire is a trusted partner to enterprises across North
            America and beyond, delivering transformative solutions in EPM, ERP,
            and AI-powered business applications. Our Canadian roots keep us
            grounded in values of trust, innovation, and inclusivity.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            alt="Ayspire Team Collaboration"
            className="rounded-2xl shadow-xl object-cover"
            height={320}
            src="/images/background/home-page-about-us.png"
            width={420}
          />
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-16">
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-lg mb-4">
            To empower organizations to unlock the full value of their data,
            streamline operations, and drive growth through intelligent,
            user-friendly technology.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-8">
            Our Vision
          </h2>
          <p className="text-gray-800 dark:text-gray-200 text-lg">
            To be the most trusted partner for digital transformation,
            recognized for our innovation, integrity, and impact on the future
            of work.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            alt="Innovation Partner"
            className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4"
            height={120}
            src="/images/clients/oracle.svg"
            width={120}
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Our Values
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md px-8 py-6 min-w-[220px]">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              We challenge the status quo and embrace new ideas to deliver
              lasting value.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md px-8 py-6 min-w-[220px]">
            <h3 className="text-lg font-semibold text-primary mb-2">Trust</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              We build relationships on transparency, reliability, and respect.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md px-8 py-6 min-w-[220px]">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Inclusivity
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              We celebrate diversity and create opportunities for all voices to
              be heard.
            </p>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-md px-8 py-6 min-w-[220px]">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Customer Success
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              We measure our success by the success of our clients and partners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

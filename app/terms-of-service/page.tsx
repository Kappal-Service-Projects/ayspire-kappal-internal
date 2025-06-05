import { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service - Ayspire",
  description:
    "Read Ayspire's Terms of Service to understand the rules and regulations for using our website, products, and services. Learn about your rights and responsibilities.",
  openGraph: {
    title: "Terms of Service - Ayspire",
    description:
      "Read Ayspire's Terms of Service to understand the rules and regulations for using our website, products, and services.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="px-4 pt-32 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              className="text-center"
              gradientText="of Service"
              primaryText="Terms"
              size="lg"
            />
            <p className="text-center text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Please read these Terms of Service carefully before using our
              website, products, or services.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 lg:p-12">
                <p className="text-muted-foreground mb-8">
                  <strong>Last updated:</strong>{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                {/* Introduction */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Introduction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to the official website of Ayspire Technologies
                    Private Limited (&quot;Ayspire&quot;). By accessing or using
                    our website, products, or services, you agree to comply with
                    and be bound by the following Terms of Use. If you do not
                    agree with these terms, you should not use our website or
                    services.
                  </p>
                </section>

                {/* Modifications to Terms */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Modifications to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ayspire reserves the right to modify these Terms of Use at
                    any time without prior notice. Any such changes will be
                    effective immediately upon being posted on our website. Your
                    continued use of the site after changes are posted
                    constitutes your acceptance of the updated terms.
                  </p>
                </section>

                {/* Intellectual Property */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Intellectual Property Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content provided on this website, including but not
                    limited to text, graphics, logos, images, software, and
                    digital downloads, is the property of Ayspire or its content
                    suppliers and is protected by applicable copyright,
                    trademark, and intellectual property laws. Unauthorized use
                    of any materials on this website may violate these laws and
                    result in legal action.
                  </p>
                </section>

                {/* Acceptable Use */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Acceptable Use
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You may use our website only for lawful purposes and in
                    accordance with these Terms. You agree not to use the
                    website in any way that could damage, disable, overburden,
                    or impair our services, or interfere with any other
                    party&apos;s use and enjoyment of the website.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You must not attempt to gain unauthorized access to any part
                    of the website, accounts, or systems connected to the
                    website, through hacking, password mining, or other means.
                  </p>
                </section>

                {/* Third-Party Links */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Third-Party Links and Services
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites or
                    services that are not owned or controlled by Ayspire. We are
                    not responsible for the content, privacy policies, or
                    practices of any third-party sites. You acknowledge and
                    agree that Ayspire shall not be held liable for any damage
                    or loss caused by or in connection with use of such
                    third-party websites or services.
                  </p>
                </section>

                {/* Disclaimers */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Disclaimers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The information on our website is provided &quot;as is&quot;
                    and without warranties of any kind, either express or
                    implied. While Ayspire makes every effort to ensure the
                    accuracy and reliability of the content, we do not warrant
                    that the site will be uninterrupted or error-free, nor do we
                    make any guarantees regarding the completeness, accuracy, or
                    reliability of any content or materials.
                  </p>
                </section>

                {/* Limitation of Liability */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ayspire shall not be held liable for any direct, indirect,
                    incidental, consequential, or punitive damages arising from
                    your access to or use of our website, services, or any
                    content therein. This includes, but is not limited to,
                    damages for errors, omissions, interruptions, defects,
                    delays, computer viruses, loss of data, or unauthorized
                    access.
                  </p>
                </section>

                {/* Trademarks */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Trademarks and Service Marks
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All trademarks, service marks, and logos displayed on this
                    site are the registered or unregistered trademarks of
                    Ayspire or third parties. Nothing contained on this site
                    should be construed as granting any license or right to use
                    any trademark without the written permission of Ayspire or
                    the respective owner.
                  </p>
                </section>

                {/* Governing Law */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Governing Law and Jurisdiction
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms of Use are governed by the laws of India. Any
                    disputes arising under or in connection with these terms
                    shall be subject to the exclusive jurisdiction of the courts
                    located in Canada.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="mb-0">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you have any questions about these Terms of Use, please
                    contact us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p>
                      <strong className="text-foreground">Company:</strong>{" "}
                      Ayspire Technologies Private Limited
                    </p>
                    <p>
                      <strong className="text-foreground">Email:</strong>{" "}
                      info@ayspireinfotech.com
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

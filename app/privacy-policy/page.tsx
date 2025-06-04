import { Metadata } from "next";

import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy - Ayspire",
  description:
    "Learn how Ayspire protects your privacy and handles your personal information. Our comprehensive privacy policy outlines our data practices and your rights.",
  openGraph: {
    title: "Privacy Policy - Ayspire",
    description:
      "Learn how Ayspire protects your privacy and handles your personal information.",
  },
};

export default function PrivacyPolicyPage() {
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
              gradientText="Policy"
              primaryText="Privacy"
              size="lg"
            />
            <p className="text-center text-lg text-muted-foreground mt-6 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we
              collect, use, and protect your personal information.
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
                    Ayspire (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                    is committed to protecting your privacy and ensuring the
                    security of your personal information. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website, use our services, or
                    interact with us.
                  </p>
                </section>

                {/* Information We Collect */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Information We Collect
                  </h2>

                  <h3 className="text-xl font-medium mb-3 text-foreground">
                    Personal Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We may collect personal information that you voluntarily
                    provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                    <li>
                      Name and contact information (email address, phone number,
                      mailing address)
                    </li>
                    <li>
                      Professional information (job title, company name,
                      industry)
                    </li>
                    <li>Account credentials and profile information</li>
                    <li>Information provided in forms, surveys, or feedback</li>
                    <li>Communication preferences and marketing consents</li>
                  </ul>

                  <h3 className="text-xl font-medium mb-3 text-foreground">
                    Technical Information
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We automatically collect certain technical information when
                    you use our services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      Device information (IP address, browser type, operating
                      system)
                    </li>
                    <li>
                      Usage data (pages visited, time spent, navigation
                      patterns)
                    </li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Log files and analytics data</li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect for various purposes,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and communications</li>
                    <li>Personalizing your experience</li>
                    <li>Improving our products and services</li>
                    <li>Analyzing usage patterns and trends</li>
                    <li>
                      Sending marketing and promotional materials (with your
                      consent)
                    </li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting against fraud and security threats</li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information in the
                    following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Service Providers:</strong> With trusted
                      third-party service providers who assist in operating our
                      business
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law
                      or to protect our rights and safety
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In connection with
                      mergers, acquisitions, or asset sales
                    </li>
                    <li>
                      <strong>Consent:</strong> With your explicit consent for
                      specific purposes
                    </li>
                  </ul>
                </section>

                {/* Data Security */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    These measures include encryption, secure servers, access
                    controls, and regular security assessments. However, no
                    method of transmission over the internet is 100% secure, and
                    we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Your Rights */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Your Rights and Choices
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights
                    regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      <strong>Access:</strong> Request access to your personal
                      information
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of
                      inaccurate information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your
                      personal information
                    </li>
                    <li>
                      <strong>Portability:</strong> Request a copy of your data
                      in a portable format
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing of your
                      personal information
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request restriction of
                      processing
                    </li>
                    <li>
                      <strong>Withdraw Consent:</strong> Withdraw consent where
                      processing is based on consent
                    </li>
                  </ul>
                </section>

                {/* Cookies */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Cookies and Tracking Technologies
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website. Cookies are small files
                    stored on your device that help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Improve website functionality and performance</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    You can control cookies through your browser settings.
                    However, disabling cookies may affect the functionality of
                    our website.
                  </p>
                </section>

                {/* Data Retention */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information only as long as
                    necessary to fulfill the purposes outlined in this Privacy
                    Policy, comply with legal obligations, resolve disputes, and
                    enforce our agreements. When we no longer need your personal
                    information, we will securely delete or anonymize it.
                  </p>
                </section>

                {/* International Transfers */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    International Data Transfers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your information may be transferred to and processed in
                    countries other than your own. We ensure that such transfers
                    comply with applicable data protection laws and implement
                    appropriate safeguards to protect your personal information.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Children&apos;s Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for individuals under the age
                    of 13. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected
                    personal information from a child under 13, we will take
                    steps to delete such information promptly.
                  </p>
                </section>

                {/* Third-Party Links */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Third-Party Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our website may contain links to third-party websites or
                    services. We are not responsible for the privacy practices
                    or content of these third parties. We encourage you to
                    review the privacy policies of any third-party sites you
                    visit.
                  </p>
                </section>

                {/* Changes to Policy */}
                <section className="mb-12">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices or legal requirements. We
                    will notify you of any material changes by posting the
                    updated policy on our website and updating the &quot;Last
                    updated&quot; date. Your continued use of our services after
                    such changes constitutes acceptance of the updated Privacy
                    Policy.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="mb-0">
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">
                    Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact
                    us:
                  </p>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <p>
                      <strong className="text-foreground">Email:</strong>{" "}
                      privacy@ayspire.com
                    </p>
                    <p>
                      <strong className="text-foreground">Address:</strong>{" "}
                      Ayspire Privacy Team
                      <br />
                      info@ayspireinfotech.com
                      <br />
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

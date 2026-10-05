import React from "react";
import {
  CheckCircle2,
  ShieldCheck,
  Lock,
  FileText,
  Database,
  Globe,
  Link as LinkIcon,
  Clock,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 px-8 py-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm mb-3 uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5" />
              Legal Information
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 px-3.5 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                <strong>Last Updated:</strong> 28th Mrach-2025
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-10 py-10 space-y-10">
          {/* Introduction */}
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p className="p-4 bg-indigo-50/50 border-l-4 border-indigo-600 rounded-r-xl">
              <strong className="text-slate-900">
                Vpack Machine Pvt. Ltd.
              </strong>{" "}
              (“Company,” “we,” “our,” or “us”) is committed to safeguarding
              your privacy. This Privacy Policy outlines how we collect,
              process, store, and protect your personal information when you
              interact with our website, products, and services.
            </p>
            <p>
              By accessing or using our website, you acknowledge and agree to
              the terms outlined in this Privacy Policy.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                1
              </span>
              Information We Collect
            </h2>
            <p className="text-slate-600">
              We collect personal and non-personal data to improve our services
              and provide a seamless user experience.
            </p>

            <div className="space-y-4 pl-4 sm:pl-6 border-l-2 border-indigo-100">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  1.1 Personal Data
                </h3>
                <p className="text-slate-600 mb-3">
                  We collect personal information when you:
                </p>
                <ul className="space-y-2 text-slate-600 mb-4 list-disc pl-5">
                  <li>Fill out contact forms or request a quote</li>
                  <li>Communicate with us via email or phone</li>
                  <li>Subscribe to newsletters or marketing materials</li>
                  <li>Purchase or inquire about our products and services</li>
                </ul>
                <p className="text-slate-600 mb-2 font-medium">
                  This data may include:
                </p>
                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                  <li>
                    Full name, email address, phone number, and company details
                  </li>
                  <li>Billing and shipping addresses (if applicable)</li>
                  <li>
                    Payment information (processed securely through third-party
                    payment providers)
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  1.2 Non-Personal Data
                </h3>
                <p className="text-slate-600 mb-2">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                  <li>IP address, browser type, and operating system</li>
                  <li>
                    Pages visited, time spent on the site, and referral source
                  </li>
                  <li>
                    Cookies and tracking technologies (detailed in Section 5)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                2
              </span>
              How We Use Your Information
            </h2>
            <p className="text-slate-600">
              We use collected data for the following purposes:
            </p>
            <div className="grid grid-cols-1 gap-3">
              {[
                {
                  title: "To Provide Services",
                  desc: "Process inquiries, fulfill orders, and manage customer relationships.",
                },
                {
                  title: "To Improve User Experience",
                  desc: "Analyze website traffic and optimize our platform.",
                },
                {
                  title: "To Communicate With You",
                  desc: "Send updates, promotional offers, and respond to inquiries.",
                },
                {
                  title: "To Ensure Security",
                  desc: "Prevent fraud, unauthorized access, and protect our systems.",
                },
                {
                  title: "To Comply With Legal Obligations",
                  desc: "Meet regulatory requirements and enforce agreements.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100/60 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    <strong className="text-slate-900 font-semibold">
                      {item.title}:
                    </strong>{" "}
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                3
              </span>
              Legal Basis for Processing
            </h2>
            <p className="text-slate-600">
              We process your personal data based on:
            </p>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                <strong>Contractual necessity</strong> (fulfilling service
                requests and transactions)
              </li>
              <li>
                <strong>Legitimate business interests</strong> (website
                optimization, customer support)
              </li>
              <li>
                <strong>Legal compliance</strong> (fulfilling regulatory
                requirements)
              </li>
              <li>
                <strong>Consent</strong> (for marketing communications)
              </li>
            </ul>
            <p className="text-slate-600 italic text-sm bg-amber-50/60 border border-amber-100 p-3 rounded-lg">
              You may withdraw consent at any time by contacting us or using the
              “unsubscribe” option in emails.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                4
              </span>
              Data Sharing & Disclosure
            </h2>
            <p className="text-slate-600">
              We <strong className="text-slate-900">do not</strong> sell, trade,
              or rent your personal information. However, we may share data
              under the following circumstances:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Service Providers",
                  desc: "Trusted third-party vendors for payment processing, marketing, analytics, and IT support.",
                },
                {
                  title: "Legal Compliance",
                  desc: "When required by law or to protect rights, property, or safety.",
                },
                {
                  title: "Business Transfers",
                  desc: "If we undergo a merger, acquisition, or asset sale, your data may be transferred.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0 mt-2"></span>
                  <span className="text-slate-700 text-sm sm:text-base">
                    <strong className="text-slate-900 font-semibold">
                      {item.title}:
                    </strong>{" "}
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              All third parties are contractually obligated to handle your data
              securely and confidentially.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                5
              </span>
              Cookies & Tracking Technologies
            </h2>
            <p className="text-slate-600">
              We use cookies and similar tracking technologies to enhance
              website functionality and analyze user behavior.
            </p>

            <div className="space-y-4 pl-4 sm:pl-6 border-l-2 border-indigo-100">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  5.1 Types of Cookies We Use
                </h3>
                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                  <li>
                    <strong>Essential Cookies:</strong> Required for website
                    operation.
                  </li>
                  <li>
                    <strong>Analytical Cookies:</strong> Help us understand user
                    interactions and improve the site.
                  </li>
                  <li>
                    <strong>Marketing Cookies:</strong> Enable personalized ads
                    and promotional campaigns.
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  5.2 Managing Cookies
                </h3>
                <p className="text-slate-600">
                  You can adjust your browser settings to disable cookies.
                  However, this may affect website performance.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                6
              </span>
              Data Security & Storage
            </h2>
            <p className="text-slate-600">
              We implement robust security measures to protect your personal
              data, including:
            </p>
            <div className="space-y-2.5">
              {[
                "Secure servers and encrypted storage",
                "Restricted access to authorized personnel only",
                "Regular security audits and compliance checks",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/40 border border-amber-100/60 text-slate-700"
                >
                  <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm italic">
              While we take industry-standard precautions, no system is 100%
              secure. Users should exercise caution when sharing personal
              information online.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                7
              </span>
              Your Rights & Choices
            </h2>
            <p className="text-slate-600">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <div className="space-y-2">
              {[
                {
                  title: "Access",
                  desc: "Request a copy of the personal data we hold about you.",
                },
                {
                  title: "Correction",
                  desc: "Update or correct inaccurate information.",
                },
                {
                  title: "Deletion",
                  desc: "Request deletion of your data (subject to legal requirements).",
                },
                {
                  title: "Data Portability",
                  desc: "Receive your data in a structured format.",
                },
                {
                  title: "Marketing Opt-Out",
                  desc: "Unsubscribe from promotional emails at any time.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm sm:text-base">
                    <strong className="text-slate-900 font-semibold">
                      {item.title}:
                    </strong>{" "}
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-sm">
              To exercise these rights, contact us using the details below.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                8
              </span>
              International Data Transfers
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you are accessing our website from outside India, please note
              that your data may be transferred to and processed in India and
              other jurisdictions with different data protection laws.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using our services, you consent to such transfers as necessary
              for service fulfillment.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                9
              </span>
              Third-Party Links & Services
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy policies, and we encourage you to
              review their terms before submitting personal data.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                10
              </span>
              Retention Policy
            </h2>
            <p className="text-slate-600">
              We retain personal data only as long as necessary for:
            </p>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Legal and regulatory compliance</li>
              <li>Business operations and service fulfillment</li>
              <li>Security and fraud prevention</li>
            </ul>
            <p className="text-slate-600 text-sm">
              When no longer needed, data is securely deleted or anonymized.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                11
              </span>
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in regulations or business practices. Updates will be
              posted on this page with a revised effective date.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We encourage users to review this policy periodically.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 12 - Contact Us */}
          <section className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                12
              </span>
              Contact Us
            </h2>
            <p className="text-slate-600">
              For any privacy-related inquiries, requests, or concerns, please
              contact us at:
            </p>
            <div className="space-y-3 pt-2 text-slate-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="font-semibold text-slate-900">
                  Vpack Machine Pvt. Ltd.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <a
                  href="mailto:suman@vermaprocesspack.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  <strong>Email:</strong> suman@vermaprocesspack.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-indigo-600 shrink-0 mt-1" />

                <div className="flex ">
                  <strong>Phone:</strong>

                  <a
                    href="tel:+919135636541"
                    className="w-fit hover:text-indigo-600 hover:underline transition-colors duration-200 mr-4"
                  >
                    +91 91356 36541
                  </a>

                  <a
                    href="tel:+918448868851"
                    className="w-fit hover:text-indigo-600 hover:underline transition-colors duration-200"
                  >
                    +91 84488 68851
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

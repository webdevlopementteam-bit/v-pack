import React from "react";
import {
  FileText,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Truck,
  ShieldAlert,
  Scale,
  Link as LinkIcon,
  Mail,
  Globe,
} from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 text-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 px-8 py-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-indigo-400 font-medium text-sm mb-3 uppercase tracking-wider">
              <FileText className="w-5 h-5" />
              Legal Agreements
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/50 px-3.5 py-1.5 rounded-full text-xs text-slate-300 backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>
                <strong>Last Updated:</strong> 28th April
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-10 py-10 space-y-10">
          {/* Introduction Statement */}
          <div className="space-y-4 text-slate-600 text-base leading-relaxed">
            <p className="p-4 bg-indigo-50/50 border-l-4 border-indigo-600 rounded-r-xl">
              Welcome to <strong className="text-slate-900">VPack Media</strong>
              ! These Terms and Conditions (“Terms”) govern your access to and
              use of our website (
              <a
                href="https://www.vpackmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 underline font-medium"
              >
                www.vpackmedia.in
              </a>
              ) and the products, services, and solutions we provide in the{" "}
              <strong className="text-slate-900">
                industrial machinery, packaging, and manufacturing sectors
              </strong>
              . By accessing or using our website, you{" "}
              <strong className="text-slate-900">
                agree to comply with these Terms
              </strong>
              . If you do not agree, please{" "}
              <strong className="text-slate-900">do not use</strong> our
              website.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                1
              </span>
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed">
              VPack Media specializes in{" "}
              <strong className="text-slate-900">
                manufacturing and supplying advanced machinery for the water,
                beverage, pharmaceutical, and cosmetics industries
              </strong>
              . Our website provides industry insights, product information, and
              business solutions. These Terms apply to{" "}
              <strong className="text-slate-900">
                all users, clients, and visitors
              </strong>{" "}
              of our site and services.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                2
              </span>
              Use of Our Website & Services
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  You must be{" "}
                  <strong className="text-slate-900">
                    at least 18 years old
                  </strong>{" "}
                  or{" "}
                  <strong className="text-slate-900">legally authorized</strong>{" "}
                  to represent a business entity to access our services.
                </span>
              </li>
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  You agree to use our website{" "}
                  <strong className="text-slate-900">
                    for lawful business purposes only
                  </strong>
                  , such as{" "}
                  <strong className="text-slate-900">
                    exploring industrial solutions, requesting quotes, or
                    engaging in professional inquiries
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3 p-3.5 rounded-xl bg-amber-50/50 border border-amber-100 text-slate-700">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  Unauthorized activities, including data mining, scraping,
                  hacking, or using our website for{" "}
                  <strong className="text-slate-900">
                    fraudulent transactions
                  </strong>
                  , are strictly prohibited.
                </span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                3
              </span>
              Product & Service Information
            </h2>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                The descriptions, specifications, and images of our{" "}
                <strong className="text-slate-900">
                  packaging, bottling, and industrial machinery
                </strong>{" "}
                are for{" "}
                <strong className="text-slate-900">
                  informational purposes only
                </strong>
                .
              </li>
              <li>
                We reserve the right to{" "}
                <strong className="text-slate-900">
                  modify, update, or discontinue
                </strong>{" "}
                any product without prior notice.
              </li>
              <li>
                While we strive for accuracy, we{" "}
                <strong className="text-slate-900">do not guarantee</strong>{" "}
                that all product details, pricing, or availability are
                error-free.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                4
              </span>
              Orders, Payments & Pricing
            </h2>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                All{" "}
                <strong className="text-slate-900">quotes and pricing</strong>{" "}
                provided are subject to change{" "}
                <strong className="text-slate-900">without notice</strong>,
                depending on market conditions, raw material costs, and industry
                regulations.
              </li>
              <li>
                Orders are subject to{" "}
                <strong className="text-slate-900">
                  availability, production timelines, and compliance
                  requirements
                </strong>
                .
              </li>
              <li>
                Payments must be made through{" "}
                <strong className="text-slate-900">
                  authorized payment channels
                </strong>
                , and we reserve the right to cancel orders for{" "}
                <strong className="text-slate-900">
                  non-compliance or fraudulent activities
                </strong>
                .
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                5
              </span>
              Shipping & Delivery
            </h2>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                We coordinate shipping and delivery for industrial machinery{" "}
                <strong className="text-slate-900">
                  based on location, order size, and logistics feasibility
                </strong>
                .
              </li>
              <li>
                Delivery timelines are{" "}
                <strong className="text-slate-900">estimates</strong> and may
                vary due to factors like{" "}
                <strong className="text-slate-900">
                  customs clearance, supply chain disruptions, or force majeure
                  events
                </strong>
                .
              </li>
              <li>
                Any additional taxes, duties, or import/export regulations are
                the{" "}
                <strong className="text-slate-900">
                  responsibility of the buyer
                </strong>
                .
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                6
              </span>
              Warranty & Liability
            </h2>
            <p className="text-slate-600">
              Our machinery and equipment are covered by{" "}
              <strong className="text-slate-900">
                standard manufacturer warranties
              </strong>{" "}
              as specified in the product documentation.
            </p>
            <p className="text-slate-600">
              Warranty claims must be submitted within the{" "}
              <strong className="text-slate-900">stipulated period</strong> and
              are subject to{" "}
              <strong className="text-slate-900">
                inspection and approval
              </strong>
              .
            </p>
            <p className="text-slate-600 font-medium">
              We{" "}
              <strong className="text-slate-900">
                do not accept liability
              </strong>{" "}
              for:
            </p>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                Improper installation, misuse, or unauthorized modifications of
                our machines.
              </li>
              <li>
                Downtime, production losses, or indirect damages resulting from
                machine malfunctions.
              </li>
              <li>Non-compliance with maintenance and operating guidelines.</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                7
              </span>
              Intellectual Property & Content Use
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All trademarks, product designs, images, videos, and technical
              resources on our website are{" "}
              <strong className="text-slate-900">
                intellectual property of VPack Media
              </strong>{" "}
              or licensed from third parties.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You may not{" "}
              <strong className="text-slate-900">
                copy, distribute, or reproduce
              </strong>{" "}
              our content without prior written consent.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                8
              </span>
              Third-Party Links & References
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain references to{" "}
              <strong className="text-slate-900">
                industry partners, suppliers, or third-party service providers
              </strong>
              .
            </p>
            <p className="text-slate-600 leading-relaxed">
              We do not{" "}
              <strong className="text-slate-900">
                endorse, control, or assume responsibility
              </strong>{" "}
              for third-party websites, products, or policies.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                9
              </span>
              Limitation of Liability
            </h2>
            <p className="text-slate-600">
              To the{" "}
              <strong className="text-slate-900">
                maximum extent permitted by law
              </strong>
              , VPack Media, its employees, affiliates, and partners shall not
              be held responsible for:
            </p>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>
                Any{" "}
                <strong className="text-slate-900">
                  business losses, production delays, or indirect damages
                </strong>{" "}
                caused by equipment failure.
              </li>
              <li>
                Temporary website unavailability due to{" "}
                <strong className="text-slate-900">
                  technical issues, maintenance, or cyber threats
                </strong>
                .
              </li>
              <li>
                Data loss, security breaches, or unauthorized access to client
                information.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                10
              </span>
              Indemnification
            </h2>
            <p className="text-slate-600 leading-relaxed">
              You agree to{" "}
              <strong className="text-slate-900">
                defend, indemnify, and hold harmless
              </strong>{" "}
              VPack Media from any claims, damages, legal expenses, or disputes
              arising from:
            </p>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Improper use of our machinery.</li>
              <li>Violation of regulatory standards in your industry.</li>
              <li>
                Misuse or unauthorized distribution of our intellectual
                property.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                11
              </span>
              Governing Law & Dispute Resolution
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms are governed by the{" "}
              <strong className="text-slate-900">laws of India</strong> and
              applicable{" "}
              <strong className="text-slate-900">
                international trade regulations
              </strong>
              .
            </p>
            <p className="text-slate-600 leading-relaxed">
              Any disputes shall be resolved through{" "}
              <strong className="text-slate-900">
                arbitration or courts within the jurisdiction of India
              </strong>
              .
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                12
              </span>
              Amendments & Updates
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms from time to time to reflect{" "}
              <strong className="text-slate-900">
                industry standards, regulatory changes, or business policies
              </strong>
              . Continued use of our website after any modifications indicates{" "}
              <strong className="text-slate-900">
                acceptance of the revised Terms
              </strong>
              .
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 13 - Contact Us */}
          <section className="space-y-4 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200/60">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 text-sm font-semibold">
                13
              </span>
              Contact Us
            </h2>
            <p className="text-slate-600">
              For any inquiries regarding these Terms, our products, or business
              policies, please contact us at:
            </p>
            <div className="space-y-3 pt-2 text-slate-700">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-600 shrink-0" />
                <a
                  href="mailto:suman@vermaprocesspack.com"
                  className="hover:text-indigo-600 transition-colors"
                >
                  <strong>Email:</strong> suman@vermaprocesspack.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

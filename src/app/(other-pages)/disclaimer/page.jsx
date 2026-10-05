"use client";

import React from "react";
import { motion } from "framer-motion";

const slideLeftVariant = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const slideRightVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Last Updated Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariant}
          className="text-sm sm:text-base lg:text-[18px] text-gray-700 font-medium"
        >
          <span className="font-bold">Last Updated:</span> 29th April
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightVariant}
          className="text-base lg:text-[18px] leading-relaxed text-gray-800"
        >
          The information provided on{" "}
          <span className="font-bold">VPack Media&apos;s</span> website (
          <a
            href="https://www.vpackmedia.in"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.vpackmedia.in
          </a>
          ) is for{" "}
          <span className="font-bold">informational purposes only</span>. While
          we strive to ensure accuracy, completeness, and reliability, we{" "}
          <span className="font-bold">
            make no warranties or representations
          </span>
          , express or implied, regarding the content&apos;s correctness,
          suitability, or availability.
        </motion.div>

        {/* No Warranties & General Information */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            No Warranties &amp; General Information
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            All content, including text, graphics, images, and resources, is
            provided <span className="font-bold">&ldquo;as is&rdquo;</span> and{" "}
            <span className="font-bold">&ldquo;as available&rdquo;</span>{" "}
            without any guarantees. The information presented did not constitute{" "}
            <span className="font-bold">
              professional, legal, financial, or technical advice
            </span>
            , and users should seek{" "}
            <span className="font-bold">expert consultation</span> before making
            any business or operational decisions based on it.
          </p>
        </motion.section>

        {/* Third-Party Links & External Content */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Third-Party Links &amp; External Content
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            Our website may contain references or links to{" "}
            <span className="font-bold">
              third-party websites, products, or services
            </span>{" "}
            for additional insights. These links are provided{" "}
            <span className="font-bold">solely for convenience</span>, and{" "}
            <span className="font-bold">
              VPack Media does not endorse, control, or take responsibility
            </span>{" "}
            for the accuracy, legality, or reliability of external content.
            Users should review third-party policies before engaging with such
            sites.
          </p>
        </motion.section>

        {/* Limitation of Liability */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Limitation of Liability
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            To the fullest extent permitted by law,{" "}
            <span className="font-bold">
              VPack Media, its directors, employees, affiliates, and partners
            </span>{" "}
            shall not be held liable for any{" "}
            <span className="font-bold">
              direct, indirect, incidental, consequential, or special damages
            </span>{" "}
            resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base lg:text-[18px] text-gray-800">
            <li>The use or inability to use this website</li>
            <li>Errors, inaccuracies, or omissions in the content</li>
            <li>Any reliance placed on the information provided</li>
            <li>
              Cybersecurity risks, including viruses or unauthorized access
            </li>
          </ul>
        </motion.section>

        {/* Intellectual Property & Use Restrictions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Intellectual Property &amp; Use Restrictions
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            All content, trademarks, and proprietary materials on this website
            are the property of <span className="font-bold">VPack Media</span>{" "}
            or their respective owners and may not be{" "}
            <span className="font-bold">
              reproduced, distributed, or exploited
            </span>{" "}
            without prior written permission.
          </p>
        </motion.section>

        {/* Changes to Disclaimer */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Changes to Disclaimer
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            VPack Media reserves the right to{" "}
            <span className="font-bold">modify, update, or remove</span> this
            disclaimer at any time without prior notice. Your continued use of
            this website signifies{" "}
            <span className="font-bold">acceptance of the updated terms</span>.
          </p>
        </motion.section>

        {/* Governing Law & Jurisdiction */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRightVariant}
          className="space-y-4"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Governing Law &amp; Jurisdiction
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            This disclaimer is governed by the{" "}
            <span className="font-bold">laws of India</span>, and any disputes
            arising from its interpretation or use shall be subject to the{" "}
            <span className="font-bold">
              exclusive jurisdiction of Indian courts
            </span>
            .
          </p>
        </motion.section>

        {/* Contact Us */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeftVariant}
          className="space-y-4 pb-12"
        >
          <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-gray-900">
            Contact Us
          </h2>
          <p className="text-base lg:text-[18px] leading-relaxed text-gray-800">
            For any concerns or inquiries regarding this disclaimer, please
            contact us at suman@vermaprocesspack.com, +91 91356 36541 , +91
            8448868851
          </p>
        </motion.section>
      </div>
    </div>
  );
}

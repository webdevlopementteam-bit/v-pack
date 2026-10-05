// File: app/water-issues/page.jsx (or pages/water-issues.jsx depending on your Next.js structure)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WaterIssuesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 text-[16px] lg:text-[18px] pb-16">
      {/* Top Hero Banner */}
      <div className="w-full bg-gray-400 shadow-sm border-b border-gray-200 min-h-[80px] md:min-h-[110px] flex items-center justify-center px-4 md:px-8 mb-8">
        <h1 className="text-xl  md:text-2xl font-bold text-white">
          Water Plant Common Issues & Solutions
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Top Image Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-gray-100 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full relative h-[200px] md:h-[500px] rounded-xl overflow-hidden shadow-inner bg-gray-100">
            <Image
              src="/images/water-issue.png"
              alt="Water Issue Overview"
              fill
              className=" object-contain md:object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔧</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  1. Inconsistent Bottle Filling
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Issue:</strong> Uneven fill levels
                damage customer trust, increase product waste, and lead to
                compliance issues.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Causes:</strong> Worn-out filling
                valves, fluctuating water pressure, sensor errors.
              </p>
              <p className="font-bold mb-1">Fixes:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Maintain filling nozzles regularly</li>
                <li>Calibrate level sensors</li>
                <li>
                  Upgrade to flow meters or servo-controlled filling systems
                </li>
              </ul>
              <p>
                <strong className="font-bold">Expert Tip:</strong> Opt for
                gravity or volumetric fillers with auto shut-off for precise
                fills.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧫</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  2. Poor Sanitation & Contamination Risk
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Issue:</strong> Dirty tanks,
                pipelines, and bottles promote microbial growth, risking product
                safety and BIS standards.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Causes:</strong> Infrequent
                cleaning, low-quality packaging, contaminated raw water.
              </p>
              <p className="font-bold mb-1">Fixes:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Schedule daily and weekly CIP cycles</li>
                <li>Install UV and ozone sterilization systems</li>
                <li>
                  Use SS 304/316 stainless steel for all water-contact parts
                </li>
              </ul>
              <p>
                <strong className="font-bold">Must-Have:</strong> Include RO
                systems with activated carbon and micron filters for reliable
                water purity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏷️</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  3. Labeling & Packaging Errors
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Issue:</strong> Misaligned,
                peeling labels degrade brand image and shelf appeal.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Causes:</strong> Weak adhesives,
                poorly configured labeling machines, humidity issues.
              </p>
              <p className="font-bold mb-1">Fixes:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Use high-quality labels with strong adhesive</li>
                <li>Adjust conveyor speed and calibrate sensors</li>
                <li>Maintain dry, temperature-controlled labeling zones</li>
              </ul>
              <p>
                <strong className="font-bold">SEO Tip:</strong> Include your
                brand name and license number on labels for better traceability
                and authenticity.
              </p>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔄</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  4. High Bottle Rejection Rate
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Issue:</strong> Frequent
                rejections due to dents, overfills, or mis-capsates lead to lost
                time and resources.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Causes:</strong> Cheap preforms,
                malfunctioning cappers, manual errors.
              </p>
              <p className="font-bold mb-1">Fixes:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Choose BIS/ISI-certified preforms and caps</li>
                <li>Install automatic capping machines with cap orientation</li>
                <li>Use sensors to detect faulty bottles early</li>
              </ul>
              <p>
                <strong className="font-bold">Profit Tip:</strong> Reducing
                rejection rates directly improves profitability by saving
                materials and labor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section 5 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⚙️</span>
            <h2 className="text-xl md:text-2xl font-bold">
              5. Frequent Machine Downtime
            </h2>
          </div>
          <p className="mb-2">
            <strong className="font-bold">Issue:</strong> Breakdowns halt
            production, delay deliveries, and increase maintenance costs.
          </p>
          <p className="mb-2">
            <strong className="font-bold">Causes:</strong> No preventive care,
            outdated parts, untrained staff.
          </p>
          <p className="font-bold mb-1">Fixes:</p>
          <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
            <li>Establish a monthly preventive-maintenance routine</li>
            <li>Upgrade to PLC machines with built-in diagnostics</li>
            <li>Train staff on troubleshooting basics</li>
          </ul>
          <p>
            <strong className="font-bold">Pro Tip:</strong> Implement IoT
            monitoring to spot issues before they cause breakdowns.
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl md:text-2xl font-bold">Conclusion</h2>
          </div>
          <p>
            Operational hiccups are inevitable, but proactive planning makes all
            the difference. Use high-grade equipment, standard operating
            procedures, and regular maintenance to keep your{" "}
            <strong className="font-bold">24, 30, 60, or 90 BPM</strong> plant
            running efficiently.
          </p>
          <p>
            At <strong className="font-bold">VPACK MACHINE PVT. LTD.</strong>,
            we offer advanced{" "}
            <Link href="/contact" className="text-blue-600 ">
              bottling solutions
            </Link>
            , Annual Maintenance Contracts (AMC), on-site support, and custom
            plant configurations suited for all business scales.
          </p>

          <div className="pt-4 border-t border-gray-100">
            <p className="flex items-center gap-2 mb-2 font-bold">
              <span>📞</span> Need help optimizing your bottling line?
            </p>
            <p className="text-gray-700">
              Contact us today or visit{" "}
              <a
                href="https://www.vpackmachine.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 "
              >
                www.vpackmachine.com
              </a>{" "}
              for expert advice and support. Let’s build better, together.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="tel:+919135636541"
                className="inline-block bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Call Now (+91 9135636541)
              </a>
              <Link
                href="/contact"
                className="inline-block bg-gray-800 text-white font-bold px-6 py-2.5 rounded-lg shadow hover:bg-gray-900 transition"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500 pt-4 border-t border-gray-100 space-y-1">
            <p className="font-bold">Sources</p>
            <p>Ask ChatGPT</p>
            <p className="pt-2">
              By{" "}
              <Link href="/contact" className="text-blue-600 ">
                Vpack Machine
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

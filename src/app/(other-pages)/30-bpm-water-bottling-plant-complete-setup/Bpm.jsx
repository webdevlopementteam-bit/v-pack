// File: app/30-bpm-plant/page.jsx (or pages/30-bpm-plant.jsx depending on your Next.js structure)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThirtyBpmPlantPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 text-[16px] lg:text-[18px] pb-16">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Top Image Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-md p-4 md:p-6 border border-gray-100 flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="w-full relative h-[200px] md:h-[450px] rounded-xl overflow-hidden shadow-inner bg-gray-100">
            <Image
              src="/images/30-bpm.png"
              alt="30 BPM Water Bottling Plant"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4"
        >
          <p>
            Looking to enter the packaged drinking water business in India? A{" "}
            <strong className="font-bold">30 BPM Water Bottling Plant</strong>{" "}
            is the ideal mid-scale solution to kick-start your journey. With
            rising consumer demand for safe and clean drinking water, this
            industry offers strong returns — and it all begins with the right
            machinery setup.
          </p>
          <p>
            In this detailed guide, we’ll walk you through everything you need
            to know about setting up a{" "}
            <strong className="font-bold">30 BPM water bottling plant</strong> —
            including price, working process, machinery, space, and licenses.
          </p>
        </motion.div>

        {/* What is a 30 BPM Water Bottling Plant? */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📌</span>
            <h2 className="text-xl md:text-2xl font-bold">
              What is a 30 BPM Water Bottling Plant?
            </h2>
          </div>
          <p>
            A{" "}
            <strong className="font-bold">
              30 BPM (Bottles Per Minute) water bottling plant
            </strong>{" "}
            can produce{" "}
            <strong className="font-bold">1,800 bottles per hour</strong>,
            making it a highly efficient and cost-effective setup for
            medium-scale businesses. It typically includes an{" "}
            <strong className="font-bold">RFC Machine</strong> (Rinsing,
            Filling, and Capping), and the setup can be either{" "}
            <strong className="font-bold">
              semi-automatic or fully automatic
            </strong>
            , depending on your budget and production goals.
          </p>
        </motion.div>

        {/* Machinery in a 30 BPM Bottling Plant & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⚙️</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Machinery in a 30 BPM Bottling Plant
                </h2>
              </div>
              <p className="mb-3 text-gray-700">
                The following machines form the backbone of a 30 BPM packaged
                water plant setup:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                <li>
                  <strong className="font-bold">Rinsing Machine</strong> – Used
                  to clean empty PET bottles before filling.
                </li>
                <li>
                  <strong className="font-bold">Filling Machine</strong> – Fills
                  purified water into the bottles with precision.
                </li>
                <li>
                  <strong className="font-bold">Capping Machine</strong> – Caps
                  the bottles securely using pneumatic pressure.
                </li>
                <li>
                  <strong className="font-bold">Conveyor System</strong> –
                  Transports bottles smoothly from one station to the next.
                </li>
                <li>
                  <strong className="font-bold">
                    Labeling Machine (Optional)
                  </strong>{" "}
                  – For applying printed branding labels.
                </li>
                <li>
                  <strong className="font-bold">
                    Shrink Wrapping Machine (Optional)
                  </strong>{" "}
                  – Wraps bottles into batches for easier packaging.
                </li>
              </ul>
              <p>
                All equipment is made from{" "}
                <strong className="font-bold">
                  SS 304 food-grade stainless steel
                </strong>
                , ensuring hygiene, durability, and long-lasting performance.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">💰</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Price of 30 BPM Water Bottling Plant in India (2025)
                </h2>
              </div>
              <p className="mb-3 text-gray-700">
                The cost of setting up a{" "}
                <strong className="font-bold">
                  30 BPM water bottling plant in India
                </strong>{" "}
                varies depending on the type of automation and features:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                <li>
                  <strong className="font-bold">Semi-Automatic Plant</strong> –
                  ₹21,00,000 to ₹27,00,000
                </li>
                <li>
                  <strong className="font-bold">Fully Automatic Plant</strong> –
                  ₹35,00,000 and above (based on specific needs)
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic mb-4">
                Note: GST and installation charges are extra.
              </p>
              <p>
                For the{" "}
                <strong className="font-bold">best factory-direct price</strong>
                , contact{" "}
                <Link href="/" className="text-blue-600 ">
                  Vpack Machine Pvt. Ltd.
                </Link>{" "}
                — trusted across India for quality bottling machinery.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Working Process & Licenses & Approvals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🔄</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Working Process of a 30 BPM Bottling Plant
                </h2>
              </div>
              <p className="mb-3 text-gray-700">
                The entire process is smooth, streamlined, and optimized for
                efficiency:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="font-bold">Bottle Loading</strong> –
                  Bottles are placed manually or automatically on the conveyor.
                </li>
                <li>
                  <strong className="font-bold">Rinsing</strong> – Each bottle
                  is thoroughly cleaned with high-pressure water jets.
                </li>
                <li>
                  <strong className="font-bold">Filling</strong> – Purified
                  water is dispensed into bottles using gravity or
                  pressure-based filling.
                </li>
                <li>
                  <strong className="font-bold">Capping</strong> – Pneumatic
                  pressure systems cap the bottles tightly.
                </li>
                <li>
                  <strong className="font-bold">Inspection</strong> – Bottles
                  are visually or sensor-checked for quality.
                </li>
                <li>
                  <strong className="font-bold">Labeling & Packaging</strong> –
                  Labeled bottles are packed for distribution via shrink
                  wrapping.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📋</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Licenses & Approvals Required in India
                </h2>
              </div>
              <p className="mb-3 text-gray-700">
                To legally run a{" "}
                <strong className="font-bold">
                  packaged drinking water bottling business
                </strong>
                , you’ll need the following:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                <li>
                  <strong className="font-bold">
                    BIS Certification (ISI Mark)
                  </strong>
                </li>
                <li>
                  <strong className="font-bold">FSSAI License</strong>
                </li>
                <li>
                  <strong className="font-bold">Ground Water Permission</strong>{" "}
                  (if using borewell water)
                </li>
                <li>
                  <strong className="font-bold">
                    Pollution Control Board NOC
                  </strong>
                </li>
                <li>
                  <strong className="font-bold">
                    Factory Registration & Trade License
                  </strong>
                </li>
              </ul>
              <p>
                Make sure to consult a compliance expert or our team to assist
                with the documentation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Area, Setup & Infrastructure Needed & FAQs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏗️</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Area, Setup & Infrastructure Needed
                </h2>
              </div>
              <p className="mb-3 text-gray-700">
                To set up a{" "}
                <strong className="font-bold">
                  30 BPM water bottling plant
                </strong>
                , you’ll require the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong className="font-bold">Minimum Area Required</strong> –
                  1,000 to 1,500 sq. ft.
                </li>
                <li>
                  <strong className="font-bold">RO Water Plant</strong> – For
                  pre-treatment and purification of raw water
                </li>
                <li>
                  <strong className="font-bold">Storage Tanks</strong> – For
                  both raw and treated water
                </li>
                <li>
                  <strong className="font-bold">Electricity Connection</strong>{" "}
                  – 3-phase power is mandatory
                </li>
                <li>
                  <strong className="font-bold">Manpower</strong> – 2 to 4 staff
                  members (based on automation level)
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">❓</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  Frequently Asked Questions (FAQs)
                </h2>
              </div>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-bold">
                    Q1. Is a 30 BPM bottling plant suitable for rural markets?
                  </p>
                  <p>
                    Absolutely. It is well-suited for both rural and urban
                    regions where there’s consistent water demand.
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    Q2. What is the average monthly profit?
                  </p>
                  <p>
                    Profits may vary but typically range between ₹80,000 to
                    ₹1,50,000 per month depending on volume and distribution.
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    Q3. How long does installation take?
                  </p>
                  <p>
                    The full setup including machine trial and training usually
                    takes{" "}
                    <strong className="font-bold">7 to 10 working days</strong>.
                  </p>
                </div>
                <div>
                  <p className="font-bold">
                    Q4. Can I expand this setup later?
                  </p>
                  <p>
                    Yes, the 30 BPM plant is scalable. You can upgrade both
                    automation and capacity as your business grows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer / Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📞</span>
            <h2 className="text-xl md:text-2xl font-bold">
              Ready to Start Your Bottling Business?
            </h2>
          </div>
          <p>
            <strong className="font-bold">Vpack Machine Pvt. Ltd.</strong> is a
            leading Indian manufacturer of{" "}
            <strong className="font-bold">
              affordable and high-quality water bottling plants
            </strong>
            . From design to setup, we help you at every step to ensure you
            launch smoothly and successfully.
          </p>

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <p className="flex items-center gap-2 font-bold">
              <span>📞</span> Call/WhatsApp:{" "}
              <a href="tel:+919821372504" className="text-blue-600 ">
                +91-9821372504
              </a>
            </p>
            <p>
              Website:{" "}
              <Link href="/" className="text-blue-600 ">
                www.vpackmachine.com
              </Link>
            </p>
            <p className="font-bold">
              Start building your water brand with confidence —{" "}
              <strong className="font-bold">
                Choose Vpack. Built to Deliver.
              </strong>
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

          <div className="pt-4 border-t border-gray-100 space-y-1">
            <ul className="list-disc list-inside text-blue-600 space-y-1">
              <li>
                <Link href="/water-bottling-plant-manufacturer" className="">
                  How the Right Water Bottling Plant Manufacturer In Delhi
                  Boosts Business Growth
                </Link>
              </li>
              <li>
                <Link href="/liquid-filling-plant-manufacturer" className="">
                  Best Liquid Filling Plant Manufacturer in Delhi — Everything
                  You Need to Know Before Buying
                </Link>
              </li>
              <li>
                <Link href="/soda-plant-manufacturer" className="">
                  7 Expert Tips to Choose the Best Soda Plant Manufacturer for
                  Your Business
                </Link>
              </li>
              <li>
                <Link
                  href="/packaged-drinking-water-plant-manufacturer-in-delhi"
                  className=""
                >
                  Best Tips to Choose the Right Packaged Drinking Water Plant
                  Manufacturer: Complete Guide 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/mineral-water-business-plan-machines-investment-profits"
                  className=""
                >
                  💧 Mineral Water Business Plan – Machines, Investment &
                  Profits (2026)
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-500 pt-4 border-t border-gray-100">
            By{" "}
            <Link href="/" className="text-blue-600 ">
              Vpack Machine
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

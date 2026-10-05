// File: app/how-to-choose/page.jsx (or pages/how-to-choose.jsx depending on your Next.js structure)
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HowToChoosePage() {
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
          <div className="w-full relative h-[200px] md:h-[500px] rounded-xl overflow-hidden shadow-inner bg-gray-100">
            <Image
              src="/images/how-to-choose.png"
              alt="How to Choose Bottling Plant Capacity"
              fill
              className="object-contain md:object-cover"
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
            If you’re planning to start a{" "}
            <strong className="font-bold">packaged drinking water plant</strong>{" "}
            or expand your current{" "}
            <strong className="font-bold">bottling business</strong>, choosing
            the right{" "}
            <strong className="font-bold">Bottles Per Minute (BPM)</strong>{" "}
            capacity is a critical step. Whether it’s a 24 BPM, 30 BPM, 60 BPM,
            or 90 BPM plant, your selection will directly impact production
            efficiency, staffing, infrastructure, and your return on investment
            (ROI).
          </p>
          <p>
            In this complete guide, we break down the{" "}
            <strong className="font-bold">
              benefits, limitations, and ideal use-cases
            </strong>{" "}
            of each plant capacity to help you make an informed decision.
          </p>
        </motion.div>

        {/* What Does BPM Mean? */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔍</span>
            <h2 className="text-xl md:text-2xl font-bold">
              What Does BPM Mean?
            </h2>
          </div>
          <p>
            <strong className="font-bold">BPM</strong> stands for{" "}
            <strong className="font-bold">Bottles Per Minute</strong> – it
            represents how many bottles your bottling line can rinse, fill, and
            cap every minute.
          </p>
          <h3 className="text-xl md:text-2xl font-bold pt-2">
            Bottling Capacity Breakdown:
          </h3>
          <ul className="list-none space-y-1 text-gray-700">
            <li>
              <strong className="font-bold">24 BPM</strong> = 1,440 bottles/hour
              ≈ 11,500 bottles/day
            </li>
            <li>
              <strong className="font-bold">30 BPM</strong> = 1,800 bottles/hour
              ≈ 14,400 bottles/day
            </li>
            <li>
              <strong className="font-bold">60 BPM</strong> = 3,600 bottles/hour
              ≈ 28,800 bottles/day
            </li>
            <li>
              <strong className="font-bold">90 BPM</strong> = 5,400 bottles/hour
              ≈ 43,200 bottles/day
            </li>
          </ul>
          <p className="text-sm text-gray-500 pt-2">
            Note: Actual output may vary slightly based on bottle size,
            downtime, and operator efficiency.
          </p>
        </motion.div>

        {/* Plant 1 & Plant 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. 24 BPM Water Bottling Plant */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  1. 24 BPM Water Bottling Plant
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Best For:</strong> Small-scale
                startups or rural areas with limited demand
              </p>
              <p className="mb-2">
                <strong className="font-bold">Type:</strong> Semi-automatic or
                low-end automatic
              </p>
              <p className="mb-2">
                <strong className="font-bold">Space Required:</strong> 1200–1500
                sq. ft.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Manpower:</strong> 4–5 workers
              </p>
              <p className="mb-4">
                <strong className="font-bold">Price Range:</strong> ₹10 – ₹18
                lakhs
              </p>
              <p className="font-bold mb-1">Pros:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Low investment</li>
                <li>Simple to operate</li>
              </ul>
              <p className="font-bold mb-1">Cons:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Limited production, not scalable for higher demand</li>
              </ul>
            </div>
          </motion.div>

          {/* 2. 30 BPM Water Bottling Plant */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  2. 30 BPM Water Bottling Plant
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Best For:</strong> Medium-scale
                businesses with consistent local demand
              </p>
              <p className="mb-2">
                <strong className="font-bold">Type:</strong> Fully automatic RFC
                (Rinsing-Filling-Capping) line
              </p>
              <p className="mb-2">
                <strong className="font-bold">Space Required:</strong> 2000 sq.
                ft.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Manpower:</strong> 3–4 workers
              </p>
              <p className="mb-4">
                <strong className="font-bold">Price Range:</strong> ₹21 – ₹27
                lakhs
              </p>
              <p className="font-bold mb-1">Pros:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Balanced investment vs. output</li>
                <li>Ideal for local distributors and steady retail supply</li>
              </ul>
              <p className="font-bold mb-1">Cons:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>May not keep up with fast-growing demand</li>
              </ul>
              <p>
                <strong className="font-bold">Recommended For:</strong>{" "}
                Businesses aiming for 10,000–15,000 bottles/day.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Plant 3 & Plant 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 3. 60 BPM Bottling Plant */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  3. 60 BPM Bottling Plant
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Best For:</strong> Growing
                businesses with regional or city-level reach
              </p>
              <p className="mb-2">
                <strong className="font-bold">Type:</strong> Fully automatic
                machinery line
              </p>
              <p className="mb-2">
                <strong className="font-bold">Space Required:</strong> 2000–2500
                sq. ft.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Manpower:</strong> 4–6 skilled
                operators
              </p>
              <p className="mb-4">
                <strong className="font-bold">Price Range:</strong> ₹35 – ₹65
                lakhs
              </p>
              <p className="font-bold mb-1">Pros:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>High-speed production</li>
                <li>Ideal for long-term scaling</li>
                <li>Lower per-unit cost</li>
              </ul>
              <p className="font-bold mb-1">Cons:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Requires higher upfront capital and technical staff</li>
              </ul>
              <p>
                <strong className="font-bold">Recommended For:</strong> Bulk
                production, B2B, distributors, and regional brands.
              </p>
            </div>
          </motion.div>

          {/* 4. 90 BPM Bottling Plant */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✅</span>
                <h2 className="text-xl md:text-2xl font-bold">
                  4. 90 BPM Bottling Plant
                </h2>
              </div>
              <p className="mb-2">
                <strong className="font-bold">Best For:</strong> Large-scale
                production or third-party contract packaging
              </p>
              <p className="mb-2">
                <strong className="font-bold">Type:</strong> High-speed
                automatic bottling lines
              </p>
              <p className="mb-2">
                <strong className="font-bold">Space Required:</strong> 3000+ sq.
                ft.
              </p>
              <p className="mb-2">
                <strong className="font-bold">Manpower:</strong> 4–5 trained
                staff
              </p>
              <p className="mb-4">
                <strong className="font-bold">Price Range:</strong> ₹80 – ₹95+
                lakhs
              </p>
              <p className="font-bold mb-1">Pros:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Maximum output</li>
                <li>Best cost-efficiency at scale</li>
                <li>Suited for large distribution and export</li>
              </ul>
              <p className="font-bold mb-1">Cons:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 text-gray-700">
                <li>Needs excellent supply chain and higher maintenance</li>
              </ul>
              <p>
                <strong className="font-bold">Recommended For:</strong>{" "}
                Established water brands, commercial packaging plants.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Factors to Consider Before Selecting BPM Capacity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔑</span>
            <h2 className="text-xl md:text-2xl font-bold">
              Key Factors to Consider Before Selecting BPM Capacity
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                  1
                </span>
                <h3 className="text-xl md:text-2xl font-bold">
                  Estimate Daily Demand
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                <li>
                  For 10,000 bottles/day →{" "}
                  <strong className="font-bold">30 BPM</strong>
                </li>
                <li>
                  For 25,000+ bottles/day →{" "}
                  <strong className="font-bold">60 or 90 BPM</strong>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                  2
                </span>
                <h3 className="text-xl md:text-2xl font-bold">
                  Set Your Investment Budget
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                <li>Lower BPM = low cost, more manual work</li>
                <li>Higher BPM = higher automation, better long-term ROI</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                  3
                </span>
                <h3 className="text-xl md:text-2xl font-bold">
                  Analyze Staff Requirements
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                <li>Small plants need more hands-on work</li>
                <li>
                  Bigger plants need skilled operators and maintenance teams
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                  4
                </span>
                <h3 className="text-xl md:text-2xl font-bold">
                  Define Your Business Model
                </h3>
              </div>
              <div className="overflow-x-auto mt-2">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-200 p-2 font-bold">
                        Business Type
                      </th>
                      <th className="border border-gray-200 p-2 font-bold">
                        Suggested BPM
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-2">
                        Local Retail Supply
                      </td>
                      <td className="border border-gray-200 p-2">
                        24 or 30 BPM
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">
                        Regional Distributor
                      </td>
                      <td className="border border-gray-200 p-2">60 BPM</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">
                        Private Label / Bulk Orders
                      </td>
                      <td className="border border-gray-200 p-2">
                        60 or 90 BPM
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-2">
                        Export / High Volume
                      </td>
                      <td className="border border-gray-200 p-2">90 BPM+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-600 text-white text-sm font-bold px-2 py-0.5 rounded">
                  5
                </span>
                <h3 className="text-xl md:text-2xl font-bold">
                  Consider Future Scalability
                </h3>
              </div>
              <p className="text-gray-700">
                If you expect demand to double within a year, choose at least a{" "}
                <strong className="font-bold">60 BPM plant</strong> or install
                an upgradeable system.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Real-Life Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📦</span>
            <h2 className="text-xl md:text-2xl font-bold">Real-Life Example</h2>
          </div>
          <p>
            <strong className="font-bold">Mr. Arvind from Uttar Pradesh</strong>{" "}
            started with a 30 BPM plant in 2022. Within one year, demand grew in
            5 nearby towns.
          </p>
          <p>
            In 2023, he upgraded to a 60 BPM plant in the{" "}
            <strong className="font-bold">same premises</strong> by installing
            high-capacity machines and expanding conveyor lines.
          </p>
          <p>
            <strong className="font-bold">Lesson:</strong> Start small but plan
            for expansion.
          </p>
        </motion.div>

        {/* Final Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100 space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <h2 className="text-xl md:text-2xl font-bold">
              Final Recommendation: Which Bottling Plant is Right for You?
            </h2>
          </div>
          <div className="overflow-x-auto mt-2">
            <table className="w-full text-left border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-2 font-bold">
                    Plant Capacity
                  </th>
                  <th className="border border-gray-200 p-2 font-bold">
                    Choose If You...
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-2 font-bold">
                    24 BPM
                  </td>
                  <td className="border border-gray-200 p-2">
                    Want to start small with low risk
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2 font-bold">
                    30 BPM
                  </td>
                  <td className="border border-gray-200 p-2">
                    Need moderate output and better profit control
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2 font-bold">
                    60 BPM
                  </td>
                  <td className="border border-gray-200 p-2">
                    Are aiming for large supply and fast scaling
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-2 font-bold">
                    90 BPM
                  </td>
                  <td className="border border-gray-200 p-2">
                    Already have a big brand or large-scale plans
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

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
              Need Help Deciding Your Bottling Capacity?
            </h2>
          </div>
          <p>
            At <strong className="font-bold">VPACK MACHINE PVT. LTD.</strong>,
            we manufacture and supply high-quality bottling machinery – from{" "}
            <strong className="font-bold">
              24 BPM to fully automatic 120 BPM
            </strong>{" "}
            production lines.
          </p>
          <p>
            From planning and installation to training and after-sales support –
            we’re your full-service partner in the{" "}
            <strong className="font-bold">
              packaged drinking water industry
            </strong>
            .
          </p>

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <p className="flex items-center gap-2 font-bold">
              <span>📱</span> Call or WhatsApp Now:{" "}
              <a href="tel:+919821372504" className="text-blue-600 ">
                +91-9821372504
              </a>{" "}
              |{" "}
              <a href="tel:+918448868851" className="text-blue-600 ">
                +91-8448868851
              </a>
            </p>
            <p>
              Website:{" "}
              <Link href="/www.vpackmachine.in" className="text-blue-600 ">
                www.vpackmachine.in
              </Link>
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

          <div className="text-sm text-gray-500 pt-4 border-t border-gray-100">
            By{" "}
            <Link href="/contact" className="text-blue-600 ">
              Vpack Machine
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

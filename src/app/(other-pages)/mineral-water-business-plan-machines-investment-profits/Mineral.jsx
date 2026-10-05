"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MineralWaterPlantPage() {
  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased text-[16px] lg:text-[18px] selection:bg-cyan-200">
      {}
      <header className="relative w-full bg-slate-50 py-4 md:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8">
          <motion.div
            className="relative w-full h-[220px] sm:h-[300px] md:h-[300px] lg:h-[700px] overflow-hidden rounded-2xl md:rounded-3xl bg-white border border-slate-200 shadow-lg ring-1 ring-slate-900/5"
            initial="hidden"
            animate="visible"
            variants={slideRight}
          >
            <Image
              src="/images/products/mineral-water.png"
              alt="Mineral Water Bottling Plant"
              fill
              priority
              sizes="100vw"
              className="object-contain lg:object-cover p-2 sm:p-3 md:p-5 lg:p-6"
            />
          </motion.div>
        </div>
      </header>

      {}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* Section 0: Intro Title Banner */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-slate-900">
            Starting a{" "}
            <Link
              href="/water-bottling-plant-manufacturer"
              className="text-blue-600  hover:text-blue-800  transition-colors"
            >
              mineral water bottling plant in 2026
            </Link>{" "}
            is among the most profitable and scalable businesses in India.
          </h1>
          <p className="text-slate-700 text-[16px] lg:text-[18px] leading-relaxed">
            With the rising demand for clean and safe drinking water, this
            venture promises a strong return on investment. Whether you&apos;re
            a budding entrepreneur or a seasoned investor, this detailed
            business plan will walk you through everything — from required
            machinery to investment costs and profit potential.
          </p>
        </motion.section>

        {/* Section 1: Market Potential in 2026 */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              1.
            </span>{" "}
            Market Potential in 2026
          </h2>
          <p className="leading-relaxed text-slate-700">
            India&apos;s bottled water industry is witnessing rapid growth due
            to urbanization, increasing health awareness, and rising tourism.
            The demand for a{" "}
            <Link
              href="/water-bottling-plant-manufacturer"
              className="text-blue-600  hover:text-blue-800 font-medium"
            >
              Mineral Water Plant in India
            </Link>{" "}
            is increasing rapidly as the packaged drinking water market is
            projected to hit ₹400 billion by 2025, growing at a CAGR of 11–12%.
            This makes mineral water manufacturing a future-ready business
            opportunity for entrepreneurs and investors.
          </p>
        </motion.section>

        {/* Section 2: Business Model Options */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              2.
            </span>{" "}
            Business Model Options
          </h2>
          <p className="leading-relaxed text-slate-700 mb-4">
            You can set up your{" "}
            <span className="font-bold">mineral water plant</span> in multiple
            formats based on budget and demand:
          </p>
          <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
            <li className="font-medium text-slate-800">
              <span className="font-bold">Small-Scale Plant</span> – 2000–3000
              bottles/day
            </li>
            <li className="font-medium text-slate-800">
              <span className="font-bold">Medium-Scale Plant</span> – 5000–8000
              bottles/day
            </li>
            <li className="font-medium text-slate-800">
              <span className="font-bold">Large-Scale Plant</span> – 10,000+
              bottles/day
            </li>
          </ul>
          <p className="mt-4 text-slate-700">
            Choose the right capacity depending on your market reach and budget.
          </p>
        </motion.section>

        {/* Section 3: Licenses & Certifications Required */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              3.
            </span>{" "}
            Licenses & Certifications Required
          </h2>
          <p className="leading-relaxed text-slate-700 mb-4">
            To legally operate a{" "}
            <span className="font-bold">
              mineral water bottling plant in India
            </span>
            , you need the following:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-3 bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 font-medium">
              <span>✅</span>{" "}
              <span>
                <strong>ISI Certification</strong> (from BIS – Bureau of Indian
                Standards)
              </span>
            </li>
            <li className="flex items-center gap-3 bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 font-medium">
              <span>✅</span>{" "}
              <span>
                <strong>FSSAI License</strong>
              </span>
            </li>
            <li className="flex items-center gap-3 bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 font-medium">
              <span>✅</span>{" "}
              <span>
                <strong>GST Registration</strong>
              </span>
            </li>
            <li className="flex items-center gap-3 bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 font-medium">
              <span>✅</span>{" "}
              <span>
                <strong>Pollution Control Board NOC</strong>
              </span>
            </li>
            <li className="flex items-center gap-3 bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 font-medium">
              <span>✅</span>{" "}
              <span>
                <strong>Factory License</strong>
              </span>
            </li>
          </ul>
          <p className="text-slate-700 font-medium">
            Ensure all legal approvals are in place to avoid future bottlenecks.
          </p>
        </motion.section>

        {/* Section 4: Required Machines & Setup */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              4.
            </span>{" "}
            Required Machines & Setup
          </h2>
          <p className="leading-relaxed text-slate-700 mb-6">
            The exact list of{" "}
            <span className="font-bold">mineral water plant machinery</span>{" "}
            will depend on your BPM (bottles per minute) capacity. For a{" "}
            <span className="font-bold">30 BPM mineral water plant</span>, the
            following setup is typical:
          </p>

          <div className="space-y-6">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <span>✅</span> Water Treatment System:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                <li>Pressure sand filter</li>
                <li>Activated carbon filter</li>
                <li>RO plant</li>
                <li>UV & Ozonation system</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <span>✅</span> Bottling Line:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                <li>Bottle rinsing machine</li>
                <li>Bottle filling machine</li>
                <li>Capping machine</li>
                <li>Labeling machine</li>
                <li>Shrink wrapping machine</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                <span>✅</span> Packaging Area:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2">
                <li>Carton packing table</li>
                <li>Weighing scale</li>
                <li>Conveyor belts</li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-slate-700 font-medium">
            All machines should be made with{" "}
            <span className="font-bold">SS 304 food-grade stainless steel</span>{" "}
            for hygiene compliance.
          </p>
        </motion.section>

        {/* Section 5: Investment Breakdown */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              5.
            </span>{" "}
            Investment Breakdown
          </h2>
          <p className="leading-relaxed text-slate-700 mb-6">
            Here&apos;s an estimated cost structure for setting up a{" "}
            <span className="font-bold">30 BPM mineral water plant</span>:
          </p>

          <ul className="space-y-3 mb-6 bg-slate-50 p-5 rounded-xl border border-slate-200">
            <li>
              <span className="font-bold">Land & Building (Rent/Buy):</span> ₹5
              – ₹10 Lakhs
            </li>
            <li>
              <span className="font-bold">Machinery & Equipment:</span> ₹12 –
              ₹20 Lakhs (depends on production scale)
            </li>
            <li>
              <span className="font-bold">Licenses & Certification:</span> ₹1 –
              ₹5 Lakhs
            </li>
            <li>
              <span className="font-bold">Initial Raw Materials:</span> ₹1 – ₹2
              Lakhs
            </li>
            <li>
              <span className="font-bold">Staff & Overhead:</span> ₹2 – ₹3 Lakhs
            </li>
            <li>
              <span className="font-bold">Marketing & Branding:</span> ₹1 – ₹2
              Lakhs
            </li>
          </ul>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl mb-4 font-bold text-amber-900 text-lg md:text-xl flex items-center gap-3">
            <span>🔸</span> Total Investment: ₹20 – ₹45 Lakhs
          </div>

          <p className="text-slate-500 italic text-sm">
            (Note: Costs may vary depending on location, scale, and technology.)
          </p>
        </motion.section>

        {/* Section 6: Profit Margin & ROI */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              📈
            </span>{" "}
            6. Profit Margin & ROI
          </h2>
          <p className="leading-relaxed text-slate-700 mb-6">
            Let&apos;s break down the profit potential of your{" "}
            <span className="font-bold">
              mineral water manufacturing business
            </span>
            :
          </p>

          <ul className="space-y-3 bg-slate-50 p-5 rounded-xl border border-slate-200 mb-6">
            <li>
              <span className="font-bold">Per Bottle Production Cost:</span>{" "}
              ₹3.5 – ₹5.5
            </li>
            <li>
              <span className="font-bold">Wholesale Selling Price:</span> ₹8 –
              ₹10
            </li>
            <li>
              <span className="font-bold">Profit per Bottle:</span> ₹1.5 – ₹2
            </li>
            <li>
              <span className="font-bold">Production (30 BPM, 8 hours):</span>{" "}
              7,200 bottles/day
            </li>
            <li>
              <span className="font-bold">Daily Profit:</span> ₹18,000 – ₹28,000
            </li>
            <li>
              <span className="font-bold">Monthly Profit:</span> ₹5 – ₹8 Lakhs
            </li>
          </ul>

          <div className="bg-emerald-50 text-emerald-900 p-4 rounded-xl border border-emerald-200 font-medium">
            ✅ <span className="font-bold">ROI Timeline:</span> You can recover
            your total investment within{" "}
            <span className="font-bold">6–12 months</span> with effective
            distribution and sales.
          </div>
        </motion.section>

        {/* Section 7: Marketing & Sales Strategy */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              7.
            </span>{" "}
            Marketing & Sales Strategy
          </h2>
          <p className="leading-relaxed text-slate-700 mb-4">
            A good{" "}
            <span className="font-bold">
              marketing strategy for mineral water plants in India
            </span>{" "}
            is crucial for success in 2025:
          </p>
          <ul className="space-y-2 list-disc list-inside text-slate-700 pl-2">
            <li>
              Supply to{" "}
              <span className="font-bold">
                retailers, hospitals, restaurants, schools, and event venues
              </span>
            </li>
            <li>
              Build a{" "}
              <span className="font-bold">
                strong distributor and dealer network
              </span>
            </li>
            <li>
              Use <span className="font-bold">Google Ads & Facebook Ads</span>{" "}
              to generate leads
            </li>
            <li>
              List your business on{" "}
              <span className="font-bold">
                B2B platforms like IndiaMART, TradeIndia
              </span>
            </li>
            <li>
              Create a professional{" "}
              <span className="font-bold">website with SEO blogs</span> to build
              organic reach
            </li>
          </ul>
        </motion.section>

        {/* Section 8: Challenges & Tips for Success */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={slideRight}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100"
        >
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-lg text-lg">
              8.
            </span>{" "}
            Challenges & Tips for Success
          </h2>

          <h3 className="font-bold text-slate-900 text-lg mb-2">
            Common Challenges:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-slate-700 pl-2 mb-6">
            <li>Tough competition from big brands</li>
            <li>Consistently maintaining water purity & hygiene</li>
            <li>Managing distribution logistics</li>
          </ul>

          <h3 className="font-bold text-slate-900 text-lg mb-2">Pro Tips:</h3>
          <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-700">
            <li>
              Prioritize{" "}
              <span className="font-bold">automation & hygiene standards</span>
            </li>
            <li>
              Offer <span className="font-bold">competitive pricing</span>
            </li>
            <li>
              Target{" "}
              <span className="font-bold">both rural and urban markets</span>
            </li>
          </ul>
        </motion.section>

        {/* Final Thoughts & Expert Guidance */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-cyan-900 to-blue-950 text-white p-6 md:p-10 rounded-2xl shadow-xl space-y-6"
        >
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-3">
              Final Thoughts
            </h2>
            <p className="text-slate-200 leading-relaxed">
              Starting a{" "}
              <span className="font-bold">
                mineral water plant in India in 2025
              </span>{" "}
              is a high-potential business with great returns. It not only meets
              a basic human need but also supports employment and public health.
              With the{" "}
              <span className="font-bold">
                right setup, licenses, and marketing plan
              </span>
              , you can establish a{" "}
              <span className="font-bold">
                profitable packaged drinking water business
              </span>{" "}
              in no time.
            </p>
          </div>

          <div className="border-t border-cyan-800/60 pt-6 space-y-4">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2 text-cyan-300">
              <span>📞</span> Need Expert Guidance?
            </h3>
            <p className="text-slate-200">
              At <span className="font-bold">VPACK MACHINE PVT. LTD.</span>, we
              specialize in turnkey mineral water bottling plant solutions. From
              machine manufacturing to installation and training — we handle it
              all.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+919135636541"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg text-base"
              >
                <span>👉 Call/WhatsApp:</span> +91-9135636541
              </a>
              <Link
                href="/www.vpackmachine.in"
                className="inline-flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg text-base"
              >
                <span>🌐 Visit:</span> www.vpackmachine.com
              </Link>
            </div>
          </div>

          <div className="text-xs text-cyan-400/80 pt-4 border-t border-cyan-800/40">
            By{" "}
            <Link href="/contact" className=" hover:text-cyan-200">
              Vpack Machine
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

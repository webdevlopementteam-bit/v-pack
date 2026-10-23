"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BoldList,
  DataTable,
  FaqList,
  QuickAnswer,
} from "@/components/ContentBlocks";
import { faqs } from "./faqs";

const specifications = [
  ["Capacity", "24, 30, 60, 90 BPM"],
  ["Pack sizes", "200 ml – 2 L bottles, 20 L jars"],
  ["RO plant", "500 – 10,000 LPH, 55–60% recovery"],
  ["Filling", "Bottle RFC machine — rinse, fill, cap in one pass"],
  [
    "30 BPM machine",
    "6 rinsing, 6 filling, 3 capping heads; ±1% accuracy",
  ],
  ["Contact parts", "SS 304 / SS 316 food-grade"],
  ["Capping", "PVC / metal caps, up to 1,200 bottles/hour"],
  ["Line options", "PET bottle line, 20 L jar line, or both"],
  ["Space needed", "1,500 – 3,000 sq. ft. covered"],
  ["Installation", "15 – 45 days, with operator training"],
];

const services = [
  [
    "Consultation & capacity planning",
    "We help you pick the right BPM, pack sizes and line type for your market",
  ],
  ["Plant layout", "A practical layout for your space, machines and utilities"],
  [
    "Machine manufacturing",
    "RO, tanks, RFC, capper, labeler, shrink wrapper built at our Delhi factory",
  ],
  ["Installation & commissioning", "On-site setup in 15–45 days"],
  [
    "Operator training",
    "Your team learns daily operation, cleaning and basic upkeep",
  ],
  [
    "AMC & spare parts",
    "Scheduled servicing and genuine parts after handover",
  ],
  ["Upgrades", "Add capacity, a jar line or PET bottle making as you grow"],
];

const processSteps = [
  [
    "Raw water storage",
    "borewell or municipal water is collected in a tank.",
  ],
  ["Pre-treatment", "filters remove mud, smell and chlorine before RO."],
  ["Reverse osmosis (RO)", "removes dissolved salts and impurities."],
  [
    "Disinfection",
    "the treated water is disinfected so it stays safe inside the sealed bottle.",
  ],
  ["Treated water storage", "in an SS 304 tank, ready for filling."],
  [
    "Rinsing, filling and capping",
    "one Bottle RFC machine does all three.",
  ],
  ["Labeling and batch coding", "BOPP or sticker labels."],
  ["Shrink packing and dispatch", "bottles are bundled and sent out."],
];

const machines = [
  {
    name: "Industrial RO Plant",
    href: "/industrial-ro-plant",
    role: "Purifies raw water, 500–10,000 LPH",
  },
  {
    name: "SS Water Storage Tank",
    href: "/ss-water-storage-tank",
    role: "Stores treated water hygienically",
  },
  {
    name: "Bottle RFC Machine",
    role: "Rinses, fills and caps at 24–90 BPM",
  },
  {
    name: "Capper Machine (VPCL-40M)",
    href: "/capper-machine-vpcl-40m",
    role: "Seals PVC/metal caps, up to 1,200 bottles/hour",
  },
  {
    name: "BOPP / Sticker Labeling Machine",
    href: "/bopp-labelor",
    role: "Brand labels and batch details",
  },
  {
    name: "Shrink Wrapping Machine",
    href: "/semi-automatic-shrink-wrapping-machine",
    role: "Packs bottles for transport",
  },
  {
    name: "PET Blow Moulding Machine (optional)",
    href: "/pet-blow-moulding-machine",
    role: "Makes up to 1,200 bottles/hour in-house",
  },
];

const lineTypes = [
  ["PET bottle line", "200 ml, 500 ml, 1 L, 2 L", "Shops, hotels, events, travel"],
  ["20 L jar line", "20-litre jars", "Offices, homes, institutions"],
  ["Combined", "Bottles + jars", "Brands serving both markets"],
];

const capacityGuide = [
  ["24 BPM", "~11,500", "New brands, local supply"],
  ["30 BPM", "~14,400", "Small brands, one district"],
  ["60 BPM", "~28,800", "Regional brands"],
  ["90 BPM", "~43,200", "Large producers"],
];

const checklist = [
  [
    "Manufacturer or trader",
    "A manufacturer can repair, modify and supply parts directly",
    "Machines built at our own factory in Pooth Khurd, New Delhi",
  ],
  [
    "Contact-part material",
    "Low-grade steel rusts and affects water quality",
    "SS 304 / SS 316 food-grade",
  ],
  [
    "RO matched to filling speed",
    "An undersized RO starves the filler and cuts output",
    "RO from 500–10,000 LPH, sized to your BPM",
  ],
  [
    "Installation and training",
    "A plant is only as good as its setup and operators",
    "Installed in 15–45 days, operators trained before handover",
  ],
  [
    "After-sales service",
    "Every breakdown day is a lost sales day",
    "AMC and spare parts, quick visits across Delhi NCR",
  ],
];

const benefits = [
  [
    "One machine, three jobs",
    "rinse, fill and cap in a single RFC machine, saving space and manpower.",
  ],
  [
    "Accurate fills",
    "±1% filling accuracy means less waste and no under-filled bottles.",
  ],
  [
    "Small team",
    "a 30 BPM line runs with one skilled operator and one helper.",
  ],
  [
    "Hygienic design",
    "SS 304/316 contact parts, with no rubber gaskets in filling crevices.",
  ],
  [
    "Flexible",
    "bottles from 200 ml to 2 L, plus a 20 L jar line if you need it.",
  ],
  ["Grows with you", "start at 24–30 BPM, move to 60–90 BPM later."],
  ["Long life", "10–15+ years with regular maintenance."],
];

const audience = [
  "New entrepreneurs starting a water brand",
  "Jar suppliers moving from manual filling to automatic lines",
  "Hotels, resorts and institutions that want their own branded water",
  "Beverage companies adding a water line",
  "Exporters buying lines for markets such as Dubai, Kenya, Uganda and Sri Lanka",
];

const whyChoose = [
  [
    "14 years of experience",
    "a packaged drinking water plant manufacturer with 3,000+ installations.",
  ],
  [
    "Manufacturer, not trader",
    "every machine is built at our own factory in Pooth Khurd, New Delhi.",
  ],
  ["Expert-led team", "led by industry expert Suman Verma."],
  ["Trusted by brands", "clients include DS Group and Paras Dairy."],
  [
    "One team, end to end",
    "layout, manufacturing, installation, training and AMC.",
  ],
  ["Local service", "quick visits and spare parts across Delhi NCR."],
];

const quickFacts = [
  [
    "Manufacturer:",
    "Vpack Machine Pvt. Ltd., Pooth Khurd, New Delhi — 14 years of experience",
  ],
  ["Capacity:", "24, 30, 60 and 90 bottles per minute"],
  ["Pack sizes:", "200 ml – 2 L bottles, 20 L jars"],
  ["RO plant:", "500 – 10,000 LPH"],
  ["Material:", "SS 304 / SS 316 food-grade"],
  ["Installation:", "15 – 45 days, with training and AMC"],
  ["Space:", "1,500 – 3,000 sq. ft. covered"],
  [
    "Contact:",
    <a key="tel" href="tel:+919135636541" className="text-blue-600 font-bold">
      +91 91356 36541
    </a>,
  ],
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function PackagedDrinkingWaterPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Hero Banner */}
      <div className="w-full bg-slate-200 flex items-center justify-center px-4 py-4 min-h-[120px] md:min-h-[140px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Packaged Drinking Water Plant{" "}
          <span className="text-blue-500">Manufacturer In Delhi</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Section: Left & Right split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Part (Moves Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
          >
            <div className="relative w-full h-[320px] mb-4">
              <Image
                src="/images/products/packaged.webp"
                alt="Packaged drinking water plant by Vpack Machine, Delhi"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain rounded-md"
                priority
              />
            </div>

            <div className="flex items-center gap-1 text-yellow-400 mb-3 text-lg">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Packaged Drinking Water Plant
            </h2>

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-6">
              RO to shrink packing, 24–90 BPM, for 200 ml bottles to 20-litre
              jars — installed in 15–45 days with operator training and AMC.
            </p>

            <a
              href="tel:+919135636541"
              className="inline-flex items-center justify-center w-full bg-white border border-orange-500 text-orange-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-50 transition-colors"
            >
              Call Now <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Right Part (Moves Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <QuickAnswer>
                Vpack Machine Pvt. Ltd. is a{" "}
                <span className="font-bold text-gray-900">
                  packaged drinking water plant manufacturer in Delhi
                </span>{" "}
                that designs, builds and installs complete plants — RO
                purification, storage tanks, bottle rinsing-filling-capping,
                labeling and shrink packing — from 24 to 90 bottles per minute,
                for 200 ml bottles to 20-litre jars. Plants are installed in
                15–45 days with operator training and AMC, backed by 14 years of
                experience.
              </QuickAnswer>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <DataTable
              headers={["Specification", "Vpack packaged drinking water plant"]}
              rows={specifications}
            />
          </motion.div>
        </div>

        {/* Detailed Description Content Section */}
        <div className="mt-12 space-y-10 text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Is a Packaged Drinking Water Plant?
            </h2>
            <p className="font-medium text-gray-900">
              A packaged drinking water plant purifies water from any safe
              source and fills it into sealed bottles or jars that are ready to
              sell.
            </p>
            <p className="mt-3">
              Unlike natural mineral water, packaged drinking water doesn&apos;t
              need a spring — borewell or municipal water works fine, because
              the plant treats it fully before bottling. That&apos;s why most
              water brands in India, from local jar suppliers to big retail
              names, actually run packaged drinking water plants. Choosing the
              right{" "}
              <span className="font-bold text-gray-900">
                packaged drinking water plant manufacturer
              </span>{" "}
              decides how reliably your water passes testing, day after day.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Our Packaged Drinking Water Plant Services
            </h2>
            <p className="mb-4">
              As a packaged drinking water plant manufacturer, Vpack Machine
              handles your project end to end — you deal with one team from the
              first call to the first bottle.
            </p>
            <DataTable headers={["Service", "What you get"]} rows={services} />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              How Does a Packaged Drinking Water Plant Work? (Step by Step)
            </h2>
            <p className="mb-3">
              A packaged drinking water plant works in 8 steps, from raw water
              to a packed bottle:
            </p>
            <BoldList items={processSteps} ordered />
            <p className="mt-3">
              Each step protects the next. Skip or under-size one, and it
              usually shows up later as a failed lab test — which is exactly
              what a well-planned line avoids.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Which Machines Does Vpack Supply?
            </h2>
            <DataTable
              headers={["Machine", "What it does"]}
              rows={machines.map(({ name, href, role }) => [
                href ? (
                  <Link href={href} className="text-blue-600 font-semibold">
                    {name}
                  </Link>
                ) : (
                  name
                ),
                role,
              ])}
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Bottle Line or 20-Litre Jar Line?
            </h2>
            <p className="font-medium text-gray-900 mb-4">
              Choose by who you sell to: bottles for retail, jars for offices
              and homes — or both on the same RO water.
            </p>
            <div className="mb-4">
              <DataTable
                headers={["Line type", "Pack sizes", "Typical buyers"]}
                rows={lineTypes}
              />
            </div>
            <p>
              A jar line is quicker to start and builds steady repeat orders. A
              bottle line reaches retail shelves and earns more per litre. Many
              of our customers start with one and add the other within a year.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Which Capacity Should You Choose?
            </h2>
            <p className="font-medium text-gray-900 mb-4">
              Pick capacity from your daily sales target. A 24 or 30 BPM plant
              suits most new brands; 60 or 90 BPM suits regional supply.
            </p>
            <DataTable
              headers={[
                "Capacity",
                "Bottles per 8-hour shift (approx.)",
                "Best for",
              ]}
              rows={capacityGuide}
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Should You Check Before Choosing a Packaged Drinking Water
              Plant Manufacturer?
            </h2>
            <p className="font-medium text-gray-900 mb-4">
              Before you choose a packaged drinking water plant manufacturer,
              check five things: who builds the machines, the steel grade,
              RO-to-filler matching, installation support and after-sales
              service.
            </p>
            <div className="mb-4">
              <DataTable
                headers={["What to check", "Why it matters", "At Vpack Machine"]}
                rows={checklist}
              />
            </div>
            <p>
              A plant runs for 10–15 years, so the company you buy from matters
              as much as the machine itself.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Benefits of a Vpack Packaged Drinking Water Plant
            </h2>
            <BoldList items={benefits} />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Who Is This Plant For?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Choose Vpack Machine as Your Packaged Drinking Water Plant
              Manufacturer in Delhi
            </h2>
            <BoldList items={whyChoose} />
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Quick Facts: Vpack Packaged Drinking Water Plants
            </h2>
            <BoldList items={quickFacts} separator=" " />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Start Your Packaged Drinking Water Plant with Vpack Machine
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors"
              >
                Get a Quote <span className="ml-2">→</span>
              </Link>
              <a
                href="tel:+919135636541"
                className="inline-flex items-center justify-center bg-white border border-orange-500 text-orange-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-orange-50 transition-colors"
              >
                Call Now <span className="ml-2">→</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            FAQs
          </h2>
          <FaqList faqs={faqs} />
        </div>
      </div>
    </div>
  );
}

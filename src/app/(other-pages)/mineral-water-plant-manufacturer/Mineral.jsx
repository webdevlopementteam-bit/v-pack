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

const machineImages = [
  {
    src: "/images/products/p1.png",
    title: "BOTTLE RFC MACHINE 30 BPM",
    link: "/products",
  },
  {
    src: "/images/products/boop.png",
    title: "BOPP LABELOR",
    link: "/bopp-labelor",
  },
  {
    src: "/images/products/ro-plant.png",
    title: "INDUSTRIAL RO PLANT",
    link: "/industrial-ro-plant",
  },
  {
    src: "/images/products/power-pack.png",
    title: "SHRINK WRAPPING MACHINE",
    link: "/semi-automatic-shrink-wrapping-machine",
  },
  {
    src: "/images/products/ss-water.png",
    title: "SS WATER STORAGE TANK",
    link: "/ss-water-storage-tank",
  },
  {
    src: "/images/products/sticker.png",
    title: "STICKER LABELOR MACHINE",
    link: "/sticker-labelor-machine",
  },
  {
    src: "/images/products/capper.png",
    title: "CAPPER MACHINE VPCL-40M",
    link: "/capper-machine-vpcl-40m",
  },
];

const specifications = [
  ["Manufacturer", "Vpack Machine Pvt. Ltd"],
  ["Capacity", "24, 30, 60, 90 BPM"],
  ["Pack sizes", "200 ml – 20 L"],
  ["Contact parts", "SS 304 food-grade"],
  ["Installation", "15–45 days, with training"],
  ["Space needed", "1,500–3,000 sq. ft. covered"],
  ["Licence (2026)", "FSSAI licence + FSSAI testing scheme"],
  ["Support", "Nationwide AMC and spare parts"],
  [
    "Water treatment",
    "Industrial RO plant, 500–10,000 LPH, 55–60% recovery",
  ],
  ["Automation", "Semi-automatic or fully automatic"],
  ["Optional", "PET blow moulding, up to 1,200 bottles/hour"],
];

const processSteps = [
  [
    "Raw water intake",
    "borewell or municipal water into a raw water tank.",
  ],
  [
    "Pre-treatment",
    "sand filter and activated carbon filter remove mud, smell and chlorine.",
  ],
  ["Micron filtration", "removes fine particles before RO."],
  [
    "Reverse osmosis (RO)",
    "removes dissolved salts and impurities.",
  ],
  ["Mineral dosing", "adds minerals back for taste."],
  [
    "Ozonation and UV",
    "kill bacteria and keep water safe inside the bottle.",
  ],
  [
    "Bottle making (optional)",
    "PET blow moulding turns preforms into bottles.",
  ],
  [
    "Rinsing, filling and capping",
    "one Bottle RFC machine does all three.",
  ],
  ["Labeling and batch coding.", ""],
  ["Shrink packing, lab testing and dispatch.", ""],
];

const machines = [
  {
    name: "Industrial RO Plant",
    href: "/industrial-ro-plant",
    role: "Removes dissolved salts, bacteria and impurities",
  },
  {
    name: "SS 304 Water Storage Tank",
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
    role: "Wrap-around or front/back labels",
  },
  {
    name: "Shrink Wrapping Machine",
    href: "/semi-automatic-shrink-wrapping-machine",
    role: "Bundles bottles for transport",
  },
  {
    name: "PET Blow Moulding Machine (optional)",
    href: "/pet-blow-moulding-machine",
    role: "Makes up to 1,200 bottles/hour in-house",
  },
];

const capacityGuide = [
  ["24 BPM", "~1,440", "~11,500", "New startups, local supply"],
  ["30 BPM", "~1,800", "~14,400", "Small brands, one district"],
  ["60 BPM", "~3,600", "~28,800", "Regional brands"],
  ["90 BPM", "~5,400", "~43,200", "Large producers"],
];

const licences = [
  ["FSSAI licence", "apply on the FoSCoS portal."],
  [
    "FSSAI testing scheme",
    "from 1 January 2026, water must be tested (microbiological, chemical, radiological) at FSSAI-notified NABL-accredited labs, with batch records kept for at least five years.",
  ],
  [
    "State Pollution Control Board consent",
    "to establish and operate.",
    " ",
  ],
  ["Groundwater NOC", "if you draw borewell water.", " "],
  [
    "GST registration, Udyam (MSME) registration",
    "and a trademark for your brand name.",
    " ",
  ],
];

const setupSteps = [
  ["Consultation", "budget, target capacity and space."],
  [
    "Plant layout and machine list",
    "RO, RFC, labeling and packing sized together.",
  ],
  ["Manufacturing and trial run", "at our Delhi factory.", " "],
  ["Installation and commissioning", "in 15–45 days.", " "],
  ["Operator training and handover.", ""],
  ["AMC and spare parts", "after installation.", " "],
];

const whyChoose = [
  [
    "Manufacturer, not trader",
    "machines built at our own factory in Pooth Khurd, New Delhi",
  ],
  [
    "3,000+ installations across India;",
    "exports to Dubai, Kenya, Uganda and Sri Lanka",
    " ",
  ],
  [
    "Trusted by brands",
    "including DS Group, Paras Dairy and Old Monk",
    " ",
  ],
  [
    "One supplier for the whole line",
    "RO to shrink packing, plus PET bottle making",
  ],
  [
    "Fast service in Delhi NCR and nationwide AMC;",
    "machine life of 10–15+ years with maintenance",
    " ",
  ],
];

const quickFacts = [
  [
    "Manufacturer:",
    "Vpack Machine Pvt. Ltd., Pooth Khurd, New Delhi — 14 years of experience",
  ],
  ["Capacity:", "24, 30, 60 and 90 bottles per minute"],
  ["Pack sizes:", "200 ml bottles to 20-litre jars"],
  ["RO plant:", "500 – 10,000 LPH, 55–60% recovery"],
  ["Material:", "SS 304 food-grade contact parts"],
  ["Installation:", "15 – 45 days, with operator training"],
  ["Space needed:", "1,500 – 3,000 sq. ft. covered"],
  [
    "Licence (2026):",
    "FSSAI licence + FSSAI testing scheme; BIS no longer mandatory",
  ],
  [
    "Contact:",
    <a key="tel" href="tel:+919135636541" className="text-blue-600 font-bold">
      +91 91356 36541
    </a>,
  ],
];

export default function MineralWaterManufacturerPage() {
  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const reveal = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    variants: fadeIn,
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 text-[16px] lg:text-[18px] leading-relaxed">
      {/* Top Hero Header */}
      <header className="relative w-full min-h-[120px] md:min-h-[140px] bg-slate-200 flex items-center justify-center px-4 py-4 shadow-sm overflow-hidden">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-slate-900">
              Mineral Water Plant Manufacturer In Delhi -
            </span>{" "}
            <span className="text-blue-500">Vpack Machine</span>
          </h1>
        </motion.div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-12">
        {/* Quick Answer */}
        <motion.div {...reveal}>
          <QuickAnswer>
            Vpack Machine Pvt. Ltd. is a{" "}
            <span className="font-bold text-gray-900">
              mineral water plant manufacturer
            </span>{" "}
            based in Pooth Khurd, New Delhi. It builds complete plants —
            Industrial RO, storage tanks, bottle rinsing-filling-capping,
            labeling and shrink packing — at 24, 30, 60 or 90 bottles per minute
            for 200 ml bottles to 20-litre jars, installed in 15–45 days. With
            14 years of experience, Vpack has 3,000+ installations across India
            and exports to Dubai, Kenya, Uganda and Sri Lanka.
          </QuickAnswer>
        </motion.div>

        {/* Section: Machine Images Showcase */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machineImages.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={idx % 2 === 0 ? slideLeft : slideRight}
              className="w-full"
            >
              <Link href={item.link} className="block w-full">
                <motion.div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-between w-full cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-68 rounded-lg overflow-hidden bg-gray-50 mb-4">
                    <Image
                      src={item.src}
                      alt={`${item.title.toLowerCase()} for mineral water plant`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <span className="text-center font-bold text-sm bg-blue-100 text-blue-800 px-3 py-1.5 rounded w-full">
                    {item.title}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </section>

        {/* Technical Specifications */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Technical Specifications
          </h2>
          <DataTable
            headers={["Specification", "Vpack mineral water plant"]}
            rows={specifications}
          />
        </motion.section>

        {/* What Is a Mineral Water Plant? */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            What Is a Mineral Water Plant?
          </h2>
          <p className="font-medium text-gray-900">
            A mineral water plant is a complete production line that purifies
            raw water and fills it into sealed, labeled bottles or jars ready
            for sale.
          </p>
          <p>
            Think of a mineral water plant as a small factory with one job:
            turning ordinary raw water into clean, sealed bottles you can sell.
            It works in two halves. The first half cleans the water — sand and
            carbon filters, RO, mineral dosing and disinfection. The second half
            bottles it — rinsing, filling, capping, labeling and packing.
          </p>
          <p>
            Here&apos;s something many first-time buyers don&apos;t know: in
            India, most so-called &quot;mineral water plants&quot; actually make
            packaged drinking water — purified water from any safe source, with
            minerals added back for taste. Natural mineral water is different;
            it has to come from a protected underground source. As a{" "}
            <span className="font-bold">mineral water plant manufacturer</span>,
            Vpack builds lines for both. The bottling machines stay the same —
            only the water treatment changes.
          </p>
        </motion.section>

        {/* Why Buy from One Supplier */}
        <motion.section
          {...reveal}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Why Buy a Complete Mineral Water Plant from One Supplier?
          </h2>
          <p className="font-medium text-gray-900">
            Buying the whole line from one supplier means every machine runs at
            the same speed, and one team is responsible for installation,
            training and service.
          </p>
          <p>
            Let&apos;s be honest — starting a water brand isn&apos;t just about
            buying machines. Your plant has to produce safe water every single
            day, pass FSSAI testing and run smoothly with a small team.
            That&apos;s why most buyers prefer one mineral water plant
            manufacturer who designs, builds, installs and services the whole
            line, instead of chasing three different vendors when something
            goes wrong.
          </p>
          <p>
            Vpack Machine has been building water and beverage machinery for 14
            years at its factory in Pooth Khurd, New Delhi. In that time, our
            team has seen almost every problem a plant can face — leaking caps,
            uneven fills, labels slipping, TDS going up and down. Every machine
            we build today is designed so you don&apos;t have to deal with those
            problems from day one.
          </p>
        </motion.section>

        {/* How Does It Work */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            How Does a Mineral Water Plant Work? (Step by Step)
          </h2>
          <p>
            A mineral water plant works in 10 steps — from raw water intake to a
            packed, tested bottle ready for dispatch:
          </p>
          <BoldList items={processSteps} ordered />
        </motion.section>

        {/* Machines Needed */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Which Machines Are Needed for a Mineral Water Plant?
          </h2>
          <p>
            A complete{" "}
            <span className="font-bold">mineral water plant machine</span> setup
            has six core machines — an RO plant, storage tank, RFC machine,
            capper, labeler and shrink wrapper — plus an optional PET blow
            moulding machine. Vpack Machine makes all of them:
          </p>
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
          <p>
            One thing people often miss: every mineral water plant machine in
            the line has to work as a team. The RO plant should make a little
            more water than the RFC machine can fill, the labeler has to keep up
            with the filler, and the shrink wrapper has to pack bottles as fast
            as they arrive. Buy from different vendors, and the slowest machine
            decides the speed of your whole line. Vpack Machine matches every
            machine to your chosen BPM, so nothing holds the line back.
          </p>
          <p>
            Want the full technical details of the bottling machine? See our{" "}
            <Link
              href="/30-bpm-water-bottling-plant-complete-setup"
              className="text-blue-600 font-bold"
            >
              30 BPM bottling machine specs
            </Link>
            .
          </p>
        </motion.section>

        {/* Capacity */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Which Mineral Water Plant Capacity Should You Choose?
          </h2>
          <p className="font-medium text-gray-900">
            Choose capacity from your daily sales target. A 24 or 30 BPM plant
            suits most new brands; 60 or 90 BPM suits regional and large
            producers.
          </p>
          <DataTable
            headers={[
              "Capacity",
              "Bottles per hour (approx.)",
              "Bottles per 8-hour shift",
              "Best for",
            ]}
            rows={capacityGuide}
          />
          <p>
            Our advice? Most new brands start with a 24 or 30 BPM plant on one
            shift. When orders grow, they add a second shift first, and only
            then move up to a 60 BPM line. If you plan your building and
            electrical load for the next size from day one, that upgrade later
            is quick and affordable.
          </p>
        </motion.section>

        {/* Licences */}
        <motion.section
          {...reveal}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            What Licences Do You Need for a Mineral Water Plant in 2026?
          </h2>
          <p>
            Good news if you&apos;re starting now: the rules have become
            simpler. BIS certification is no longer mandatory for packaged
            drinking water and natural mineral water. Here&apos;s what you need
            instead:
          </p>
          <BoldList items={licences} />
          <p>
            Rules do change from time to time, so always double-check with your
            consultant before you apply — a good mineral water plant
            manufacturer will happily guide you through the process. Vpack
            plants use SS 304 contact parts and a stainless steel RO plant,
            which helps your water pass these tests consistently.
          </p>
        </motion.section>

        {/* Profitability */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Is a Mineral Water Plant Profitable?
          </h2>
          <p>
            Yes — as long as you have steady distribution. IMARC&apos;s
            estimates for bottled water plants in India show 35–45% gross
            margin, 15–25% net margin and a 2–4 year payback. Your biggest
            running cost will be packaging (PET preforms, caps and labels),
            which is why many brands later add their own PET blow moulding
            machine. And with GST on packaged drinking water cut to 5% from 22
            September 2025, your bottles are now easier on your customers&apos;
            pockets too.
          </p>
        </motion.section>

        {/* Setup Time */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            How Long Does It Take to Set Up a Mineral Water Plant?
          </h2>
          <p>
            Vpack Machine installs a complete mineral water plant in 15–45 days,
            depending on capacity and site readiness. Here&apos;s how the
            project runs:
          </p>
          <BoldList items={setupSteps} ordered />
        </motion.section>

        {/* Why Choose */}
        <motion.section
          {...reveal}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Why Choose Vpack Machine as Your Mineral Water Plant Manufacturer
          </h2>
          <BoldList items={whyChoose} />
        </motion.section>

        {/* About */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            About Vpack Machine — 14 Years of Experience
          </h2>
          <p>
            Vpack Machine Pvt. Ltd. is a{" "}
            <span className="font-bold">
              mineral water plant manufacturer in Delhi
            </span>{" "}
            that has spent 14 years designing and building water, beverage and
            liquid packaging machinery. Led by industry expert Suman Verma, we
            make every machine at our own factory in Pooth Khurd, New Delhi, and
            have completed more than 3,000 installations across India and in
            Dubai, Kenya, Uganda and Sri Lanka.
          </p>
          <p>
            Some of our customers are first-time entrepreneurs setting up a
            small water plant; others are established names like DS Group,
            Paras Dairy and Old Monk. Everyone gets the same support from us — a
            free plant layout, factory testing before dispatch, on-site
            installation, operator training and AMC.
          </p>
        </motion.section>

        {/* Quick Facts */}
        <motion.section
          {...reveal}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Quick Facts: Vpack Mineral Water Plants
          </h2>
          <BoldList items={quickFacts} separator=" " />
        </motion.section>

        {/* CTA */}
        <motion.section {...reveal} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Start Your Mineral Water Plant with Vpack Machine
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
        </motion.section>

        {/* FAQs */}
        <section className="pt-8 border-t border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
            FAQs
          </h2>
          <FaqList faqs={faqs} />
        </section>
      </main>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { faqs } from "./faqs";

const specifications = [
  ["Capacity", "30 bottles per minute (~1,800/hour)"],
  ["Machine type", "Automatic"],
  ["Application", "PET bottle filling"],
  ["Material", "SS 304 stainless steel"],
  ["Power", "About 5 kW"],
  ["Supply", "440 V, 50 Hz, three phase"],
  ["Guarding", "Transparent and SS cover"],
  ["Bottle size range", "200 ml – 2 L"],
  ["Heads", "6 rinsing, 6 filling, 3 capping"],
  ["Filling accuracy", "±1%"],
  ["Air pressure", "6–8 bar"],
  ["Liquids", "Non-carbonated (water, juice)"],
];

const machines = [
  {
    name: "Industrial RO Plant",
    href: "/industrial-ro-plant",
    role: "Purifies raw water",
    range: "500–10,000 LPH",
  },
  {
    name: "SS Water Storage Tank",
    href: "/ss-water-storage-tank",
    role: "Holds treated water",
    range: "SS 304, custom capacity",
  },
  {
    name: "Bottle RFC Machine",
    role: "Rinses, fills, caps",
    range: "24, 30, 60, 90 BPM",
  },
  {
    name: "Capper Machine",
    href: "/capper-machine-vpcl-40m",
    role: "Seals PVC/metal caps, up to 1,200 bottles/hour",
    range: "VPCL-40M",
  },
  {
    name: "BOPP / Sticker Labeler",
    href: "/bopp-labelor",
    role: "Brand labels",
    range: "Automatic",
  },
  {
    name: "Shrink Wrapping Machine",
    href: "/semi-automatic-shrink-wrapping-machine",
    role: "Bundles for dispatch",
    range: "Semi-automatic",
  },
  {
    name: "PET Blow Moulding Machine",
    href: "/pet-blow-moulding-machine",
    role: "Makes your own bottles",
    range: "2-cavity, up to 1,200 bottles/hour",
  },
];

const processSteps = [
  [
    "Raw water storage",
    "borewell or municipal water is collected in a tank.",
  ],
  [
    "Purification",
    "the Industrial RO plant (500–10,000 LPH, 55–60% recovery) removes dissolved salts and impurities.",
  ],
  [
    "Treated water storage",
    "clean water is held in an SS 304 tank, ready for filling.",
  ],
  ["Rinsing", "empty PET bottles are rinsed on 6 rinsing heads."],
  ["Filling", "6 filling heads fill each bottle with ±1% accuracy."],
  ["Capping", "3 capping heads seal each bottle."],
  ["Labeling", "BOPP or sticker labels are applied."],
  ["Shrink packing", "bottles are bundled and sent for dispatch."],
];

const capacityGuide = [
  ["Up to ~11,000 bottles", "up to 23 BPM", "24 BPM"],
  ["Up to ~14,000 bottles", "up to 29 BPM", "30 BPM"],
  ["Up to ~28,000 bottles", "up to 58 BPM", "60 BPM"],
  ["Up to ~43,000 bottles", "up to 89 BPM", "90 BPM"],
];

const benefits = [
  [
    "Three jobs, one machine",
    "the RFC machine rinses, fills and caps in one pass, saving floor space, power and manpower.",
  ],
  [
    "Accurate fills",
    "±1% filling accuracy means less water wasted and fewer under-filled bottles.",
  ],
  [
    "Small team",
    "a 30 BPM machine needs only one skilled operator and one helper.",
  ],
  [
    "Hygienic design",
    "SS 304/316 contact parts in 3 mm thick steel, with no rubber gaskets in the filling crevices where bacteria can grow.",
  ],
  [
    "Flexible pack sizes",
    "one machine fills bottles from 200 ml to 2 litres with simple changeover parts.",
  ],
  [
    "Grows with your business",
    "start at 24 or 30 BPM and move to 60 or 90 BPM as demand rises.",
  ],
  [
    "Lower bottle cost",
    "add a PET blow moulding machine to make up to 1,200 bottles per hour in-house.",
  ],
  [
    "Fast start",
    "installation in 15–45 days, with operator training included.",
  ],
  [
    "Local support",
    "a factory in New Delhi means quick service visits and spare parts across Delhi NCR.",
  ],
  [
    "Long life",
    "with regular maintenance, the machinery lasts 10–15 years or more.",
  ],
];

const chooseChecklist = [
  [
    "Manufacturer or trader?",
    "Visit the factory. Vpack builds machines at its own unit in Pooth Khurd, New Delhi.",
  ],
  [
    "Material grade.",
    "All product-contact parts should be SS 304 or better.",
  ],
  [
    "Full line from one supplier.",
    "Mixed vendors cause speed mismatches between RO, filler and labeler.",
  ],
  [
    "Installation and training on site.",
    "Vpack installs in 15–45 days and trains your operators.",
  ],
  [
    "Spare parts and service nearby.",
    "Ask how fast a technician reaches your plant.",
  ],
  [
    "Running plants to see.",
    "Ask for client references; Vpack has 3,000+ installations.",
  ],
];

const audience = [
  "New entrepreneurs starting a packaged drinking water brand",
  "Existing water brands moving from manual or semi-automatic filling to automatic lines",
  "Hotels, resorts and institutions that want their own branded water",
  "Beverage companies adding a water line next to soda or juice",
  "Exporters supplying bottling lines to markets such as Dubai, Kenya, Uganda and Sri Lanka",
];

const whyChoose = [
  [
    "14 years of experience",
    "a water bottling plant manufacturer with 3,000+ installations across India and abroad.",
  ],
  [
    "Manufacturer, not trader",
    "as a water bottling plant manufacturer, we build every machine at our own factory in Pooth Khurd, New Delhi.",
  ],
  ["Expert-led team", "led by industry expert Suman Verma."],
  [
    "Trusted by brands",
    "DS Group, Paras Dairy and Old Monk; exports to Dubai, Kenya, Uganda and Sri Lanka.",
  ],
  [
    "Tested before dispatch",
    "factory trial run, installation in 15–45 days and operator training.",
  ],
  [
    "Local after-sales support",
    "AMC, genuine spare parts and quick service across Delhi NCR from a water bottling plant manufacturer close to you.",
  ],
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

function DataTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            {headers.map((header) => (
              <th
                key={header}
                className="p-3 text-[16px] lg:text-[18px] font-bold text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-[16px] lg:text-[18px]">
          {rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`p-3 ${i === 0 ? "text-gray-600" : "text-gray-800"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BoldList({ items, separator = " — " }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map(([title, detail]) => (
        <li key={title}>
          <span className="font-bold text-gray-900">{title}</span>
          {separator}
          {detail}
        </li>
      ))}
    </ul>
  );
}

export default function WaterBottlingPlantPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Top Hero Banner */}
      <div className="w-full bg-slate-200 flex items-center justify-center px-4 py-4 min-h-[80px] md:min-h-[110px]">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Water Bottling Plant Manufacturer In Delhi -{" "}
          <span className="text-blue-500">Vpack Machine</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Main Section: Left & Right split with Framer Motion */}
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
                src="/images/products/water.png"
                alt="30 BPM water bottling plant RFC machine by Vpack Machine, Delhi"
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

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-4">
              The 30 BPM{" "}
              <span className="font-bold text-gray-800">
                Water Bottling Machine
              </span>{" "}
              rinses, fills and caps in one pass, with a transparent and SS
              guard cover and no rubber gaskets in the filling crevices.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Water bottling plant
            </h2>

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
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-sm p-4 sm:p-5 mb-8 text-[16px] lg:text-[18px] text-gray-700">
              <p>
                <span className="font-bold text-gray-900">Quick Answer:</span>{" "}
                Vpack Machine Pvt. Ltd. is a{" "}
                <span className="font-bold text-gray-900">
                  water bottling plant manufacturer in New Delhi
                </span>{" "}
                that builds complete lines — RO plant, storage tanks, bottle
                rinsing-filling-capping (RFC) machine, labeling, shrink packing
                and PET blow moulding — from 24 to 90 bottles per minute with SS
                304 contact parts. Its standard 30 BPM machine has 6 rinsing, 6
                filling and 3 capping heads, and plants are installed in 15–45
                days, backed by 14 years of experience.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <DataTable
              headers={["Specification", "Value"]}
              rows={specifications}
            />
          </motion.div>
        </div>

        {/* Detailed Description Content Section */}
        <div className="mt-12 space-y-10 text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Is a Water Bottling Plant?
            </h2>
            <p>
              A water bottling plant is a production line that turns raw water
              into sealed, labeled bottles ready for sale. Water is first
              purified in an RO plant, then the bottles are rinsed, filled and
              capped in one machine, labeled and packed for dispatch. A
              well-designed line needs only a small team because most steps are
              automatic.
            </p>
            <p className="mt-3">
              Water bottling plants are used to make packaged drinking water,
              mineral water and soda water. The bottling machines are largely
              the same; what changes is the water treatment before filling.
              Vpack Machine builds the full line at its factory in Pooth Khurd,
              New Delhi.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What a Water Bottling Plant Manufacturer Supplies
            </h2>
            <div className="mb-4">
              <DataTable
                headers={["Machine", "Role", "Vpack range"]}
                rows={machines.map(({ name, href, role, range }) => [
                  href ? (
                    <Link href={href} className="text-blue-600 font-semibold">
                      {name}
                    </Link>
                  ) : (
                    name
                  ),
                  role,
                  range,
                ])}
              />
            </div>
            <p>
              A complete water bottling line works like a chain. Raw water is
              purified in the RO plant, stored in a steel tank, then pumped to
              the RFC machine, where empty bottles are rinsed, filled and capped
              in one pass. Bottles then move on a conveyor to the labeler and
              finally to the shrink wrapper, ready for dispatch.
            </p>
            <p className="mt-3">
              With 14 years of experience building these lines, Vpack Machine
              designs the layout so bottles flow in a straight, easy-to-clean
              path with minimal manual handling.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              How a Water Bottling Plant Works: Step by Step
            </h2>
            <ol className="list-decimal pl-6 space-y-2">
              {processSteps.map(([step, detail]) => (
                <li key={step}>
                  <span className="font-bold text-gray-900">{step}</span> —{" "}
                  {detail}
                </li>
              ))}
            </ol>
            <p className="mt-3">
              Steps 4 to 6 happen inside one Bottle RFC machine, which is why a
              30 BPM line runs with just one skilled operator and one helper.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Which Capacity Do You Need?
            </h2>
            <p className="mb-4">
              Divide your daily bottle target by working minutes. One 8-hour
              shift = 480 minutes.
            </p>
            <div className="mb-4">
              <DataTable
                headers={["Daily target (one shift)", "Needed speed", "Choose"]}
                rows={capacityGuide}
              />
            </div>
            <p>
              Plan 15–20% extra for changeovers and breaks. Example: 10,000
              bottles a day needs about 21 BPM, so a 24 or 30 BPM plant fits
              with room to grow.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Benefits of a Vpack Water Bottling Plant
            </h2>
            <BoldList items={benefits} />
            <p className="mt-3">
              For a new water brand, these benefits add up to lower running
              costs per bottle and fewer production stops — the two things that
              decide profit in the packaged water business.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              How to Choose a Water Bottling Plant Manufacturer
            </h2>
            <BoldList items={chooseChecklist} separator=" " />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Who Is a Water Bottling Plant For?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Choose Vpack Machine as Your Water Bottling Plant Manufacturer
              in Delhi
            </h2>
            <BoldList items={whyChoose} />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Set Up Your Water Bottling Plant with Vpack Machine
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

          <div className="space-y-6 text-[16px] lg:text-[18px]">
            {faqs.map(({ question, answer }, i) => (
              <div key={question}>
                <h3 className="font-bold text-gray-900 mb-1">
                  {i + 1}. {question}
                </h3>
                <p className="text-gray-700">{answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

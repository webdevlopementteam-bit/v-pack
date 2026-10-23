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
  ["Carbonation capacity", "250 – 10,000 LPH"],
  ["CO₂ working pressure", "2 – 4 bar, adjustable"],
  ["Water temperature before carbonation", "5°C or lower"],
  ["Contact material", "SS 304 / SS 316 food-grade"],
  ["Control", "Manual, semi-automatic or PLC + HMI"],
  [
    "Syrup section",
    "Sugar syrup tank, 1,000 L mixing tank with agitator, filter press",
  ],
  [
    "Safety",
    "Pressure release valve, overload protection, CO₂ flow meter",
  ],
  ["Carbonator power", "2 – 10 kW (by capacity)"],
  ["Products", "Plain soda, zera soda, masala & lemon soda, soft drinks"],
  ["Still zera drink add-on", "Pasteurizer + cooling tunnel"],
  ["Carbonator warranty", "1 year"],
];

const processSteps = [
  ["Water treatment", "RO-purified water is the base of every drink."],
  [
    "Chilling",
    "an industrial chiller cools the water to about 5°C or lower; cold water holds more CO₂.",
  ],
  [
    "Syrup preparation",
    "sugar is dissolved in a heated syrup tank. For soda, flavour and colour are added; for zera soda, cumin, black salt and spices go into the mixing tank with an agitator.",
  ],
  [
    "Filtration",
    "a filter press clears the syrup. This step matters most for zera soda, where spice particles must be removed.",
  ],
  ["Carbonation", "the carbonator dissolves food-grade CO₂ at 2–4 bar."],
  [
    "Filling and capping",
    "a soft drink filling machine fills bottles under pressure so the fizz stays in.",
  ],
  [
    "Labeling and shrink packing",
    "bottles are labeled, coded and packed for dispatch.",
  ],
];

const machines = [
  {
    name: "Industrial RO Plant",
    href: "/industrial-ro-plant",
    role: "Purifies water",
  },
  {
    name: "Industrial Chiller",
    href: "/industrial-chiller-machine",
    role: "Cools water before carbonation",
  },
  {
    name: "Sugar Syrup Preparation Tank",
    href: "/sugar-syrup-preparation-tank",
    role: "Dissolves sugar with heating",
  },
  {
    name: "Mixing Tank with Agitator (1,000 L)",
    href: "/mixing-tank-1000-l-capacity",
    role: "Keeps syrup, flavour and zera spices evenly mixed",
  },
  {
    name: "Filter Press",
    href: "/filterpress",
    role: "Clears syrup and removes spice particles",
  },
  {
    name: "Carbonator",
    href: "/carbonator",
    role: "Mixes CO₂ into water, 250–10,000 LPH",
  },
  {
    name: "Soft Drink Filling Machine",
    role: "Fills and caps carbonated drinks",
  },
  {
    name: "Pasteurizer + Cooling Tunnel (optional)",
    role: "Shelf life for still zera drinks",
  },
  {
    name: "Labeling and Shrink Wrapping",
    role: "Finishes and packs bottles",
  },
];

const drinks = [
  "Plain soda and club soda",
  "Zera soda and zera masala drink",
  "Lemon soda and masala soda",
  "Carbonated soft drinks — cola, lime, orange",
  "Sparkling water and sparkling juice",
];

const capacityGuide = [
  ["Startup", "250 – 500 LPH", "New soda or zera soda brands"],
  ["Small plant", "1,000 – 2,000 LPH", "Local and district-level brands"],
  ["Commercial", "3,000 – 5,000 LPH", "Regional beverage units"],
  ["Large-scale", "6,000 – 10,000 LPH", "Large soft drink manufacturing"],
];

const benefits = [
  [
    "Two products, one line",
    "make plain soda and zera soda on the same machines.",
  ],
  [
    "Consistent fizz",
    "chiller and carbonator are sized together, so every bottle has the same gas level.",
  ],
  [
    "Clean spice drinks",
    "agitator tank and filter press keep zera syrup uniform and particle-free.",
  ],
  ["Hygienic build", "SS 304/316 food-grade carbonators and tanks."],
  [
    "Safe operation",
    "pressure release valve, overload protection and CO₂ flow meter.",
  ],
  [
    "Easy control",
    "choose manual, semi-automatic or PLC + HMI automatic carbonation.",
  ],
  ["Grows with you", "start at 250–500 LPH and scale up to 10,000 LPH."],
];

const whyChoose = [
  [
    "14 years of experience",
    "a soda plant manufacturer with 3,000+ installations across India and abroad.",
  ],
  [
    "Manufacturer, not trader",
    "every machine is built at our own factory in Pooth Khurd, New Delhi.",
  ],
  [
    "Soda and zera expertise",
    "one zera plant manufacturer and soda specialist for your whole beverage line.",
  ],
  ["Trusted by brands", "beverage clients include DS Group and Old Monk."],
  [
    "Complete support",
    "installation, operator training and spare parts.",
  ],
  [
    "Local service",
    "quick visits across Delhi NCR from our Delhi factory.",
  ],
];

const quickFacts = [
  [
    "Manufacturer:",
    "Vpack Machine Pvt. Ltd., Pooth Khurd, New Delhi — 14 years of experience",
  ],
  [
    "Products:",
    "Soda, zera soda, masala & lemon soda, soft drinks, sparkling water",
  ],
  ["Carbonation:", "250 – 10,000 LPH at 2 – 4 bar"],
  ["Chilling:", "Water cooled to 5°C or lower before carbonation"],
  ["Material:", "SS 304 / SS 316 food-grade"],
  ["Control:", "Manual, semi-automatic or PLC + HMI"],
  ["Warranty:", "1 year on carbonators"],
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

export default function SodaPlantPage() {
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
          Soda & Zera Plant Manufacturer In Delhi -{" "}
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
                src="/images/products/soda.png"
                alt="Soda and zera plant carbonator by Vpack Machine, Delhi"
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

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-green-600">✅</span> Precision Carbonation{" "}
              <br />– Powered by Vpack
            </h2>

            <p className="text-xs text-gray-500 mb-3 font-semibold uppercase tracking-wider">
              Perfect Fizz. Every Time.
            </p>

            <p className="text-[16px] lg:text-[18px] text-gray-600 mb-6">
              Carbonators from 250 to 10,000 LPH at 2–4 bar, sized together with
              the chiller so every bottle of soda or zera soda has the same
              fizz.
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
                  soda plant manufacturer in Delhi
                </span>{" "}
                that builds complete soda and zera soda plants. Each line chills
                RO water to about 5°C, prepares and filters flavoured syrup,
                dissolves food-grade CO₂ at 2–4 bar in a carbonator (250–10,000
                litres per hour) and fills it into sealed bottles. The same
                plant can make plain soda, zera soda, masala soda and soft
                drinks — backed by 14 years of experience.
              </QuickAnswer>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Technical Specifications
            </h2>
            <DataTable
              headers={["Specification", "Vpack soda & zera plant"]}
              rows={specifications}
            />
          </motion.div>
        </div>

        {/* Detailed Description Content Section */}
        <div className="mt-12 space-y-10 text-[16px] lg:text-[18px] text-gray-700 leading-relaxed">
          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Is a Soda Plant?
            </h2>
            <p className="font-medium text-gray-900">
              A soda plant is a production line that turns purified water, CO₂
              and flavoured syrup into sealed bottles of soda or soft drink.
            </p>
            <p className="mt-3">
              Put simply, it does four things in a row: purifies the water,
              chills it, adds fizz and fills it into bottles. The trick is doing
              all four the same way every time, so every bottle tastes and
              fizzes the same. That consistency is what separates a brand people
              trust from one they try once — and it&apos;s why choosing the
              right{" "}
              <span className="font-bold text-gray-900">
                soda plant manufacturer
              </span>{" "}
              matters so much.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Is a Zera Plant?
            </h2>
            <p className="font-medium text-gray-900">
              A zera plant — also written zeera — is a soda plant set up to make
              zera soda or zera masala drink.
            </p>
            <p className="mt-3">
              Zera soda is a favourite across India — tangy, a little spicy and
              perfect with Indian food. The machines are almost the same as a
              regular soda line. The difference is the syrup: cumin, black salt
              and spices need an agitator tank so they stay evenly mixed, and a
              filter press so no spice particles end up in the bottle.
              That&apos;s why many buyers look for a{" "}
              <span className="font-bold text-gray-900">
                zera plant manufacturer
              </span>{" "}
              who also understands soda lines — because one plant can run both.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              How Does a Soda or Zera Plant Work? (Step by Step)
            </h2>
            <p className="mb-3">
              A soda or zera plant works in 7 steps, from raw water to a packed,
              fizzy bottle:
            </p>
            <BoldList items={processSteps} ordered />
            <p className="mt-3">
              For a still (non-carbonated) zera drink, the carbonator is skipped
              and a pasteurizer and cooling tunnel are added for shelf life.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Which Machines Are Needed for a Soda or Zera Plant?
            </h2>
            <p className="mb-4">
              A soda or zera plant needs nine machines working together. Vpack
              Machine, as a soda plant manufacturer and zera plant manufacturer,
              builds all of them:
            </p>
            <div className="mb-4">
              <DataTable
                headers={["Machine", "Role in the line"]}
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
            </div>
            <p>
              Here&apos;s a tip from the shop floor: most fizz complaints in
              beverage plants trace back to an undersized chiller. That&apos;s
              why Vpack, as an experienced soda plant manufacturer, sizes the
              chiller first, then matches the carbonator and filler to it.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              What Drinks Can You Make with One Plant?
            </h2>
            <p className="mb-3">
              One Vpack line can make all of these, with a simple cleaning
              changeover between flavours:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {drinks.map((drink) => (
                <li key={drink}>{drink}</li>
              ))}
            </ul>
            <p className="mt-3">
              Many regional brands start with plain and zera soda, see what
              sells in their market, and add new flavours later — all on the
              same equipment. A good zera plant manufacturer will plan your line
              for this from day one.
            </p>
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Which Capacity Should You Choose?
            </h2>
            <p className="mb-4">
              Start from your daily sales target — any good soda plant
              manufacturer will ask you this first. A 250–500 LPH line suits a
              new local brand; larger lines suit regional and national supply.
            </p>
            <DataTable
              headers={["Scale", "Carbonation capacity", "Best for"]}
              rows={capacityGuide}
            />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Benefits of a Vpack Soda & Zera Plant
            </h2>
            <BoldList items={benefits} />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Why Choose Vpack Machine as Your Soda Plant Manufacturer in Delhi
            </h2>
            <BoldList items={whyChoose} />
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
              Quick Facts: Vpack Soda & Zera Plants
            </h2>
            <BoldList items={quickFacts} separator=" " />
          </motion.div>

          <motion.div {...fadeUp}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Start Your Soda or Zera Plant with Vpack Machine
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

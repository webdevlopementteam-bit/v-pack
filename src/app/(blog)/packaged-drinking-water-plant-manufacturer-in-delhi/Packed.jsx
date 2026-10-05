"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PackagedDrinkingWaterPlantPage() {
  const [commentForm, setCommentForm] = useState({
    comment: "",
    name: "",
    email: "",
    website: "",
    saveInfo: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission logic here
    alert("Comment submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Main Container */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-5xl mx-auto px-4 py-10 text-[16px] lg:text-[18px] leading-relaxed"
      >
        {/* Top Image Banner Section */}
        <div className="mb-10 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-50 flex justify-center p-4">
          <Image
            src="/images/blog/water-bottle.png"
            alt="Packaged Drinking Water Plant Manufacturer"
            width={1200}
            height={450}
            className="w-full max-h-[450px] object-cover rounded"
          />
        </div>

        {/* Quick Answer Section */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Quick Answer
          </h2>

          <p className="mb-4">
            A packaged drinking water plant manufacturer is a company that
            designs, builds, and installs complete water bottling setups. To
            choose the right one, check their experience, certifications like
            ISO and BIS, machine quality, after-sales support, and pricing. A
            trusted manufacturer like Vpack Machine in Delhi offers end-to-end
            solutions at honest prices.
          </p>

          <p className="mb-4">
            Imagine this. You are drinking a bottle of water right now. Have you
            ever stopped to think — where did this come from? Who made the
            machines that filled it? Who made sure it was actually clean and
            safe for you?
          </p>

          <p className="mb-4">
            That is exactly what a{" "}
            <Link
              href="/packaged-drinking-water-plant-manufacturer-in-delhi"
              className="text-blue-600 font-medium "
            >
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            does. Quietly. Every single day.
          </p>

          <p className="mb-4">
            The packaged drinking water business is booming in India right now.
            And honestly, it makes complete sense. People are more
            health-conscious than ever before. They no longer trust tap water
            blindly. They want clean, sealed, and certified water — whether they
            are at home, at the office, travelling, or at a function.
          </p>

          <p className="mb-4 font-semibold text-slate-900">
            This is your opportunity.
          </p>

          <p className="mb-4">
            But here is the truth — starting a water plant is not just about
            buying machines and switching them on. The real game begins with one
            very important decision:{" "}
            <strong className="text-slate-900">
              choosing the right Packaged Drinking Water Plant Manufacturer in
              Delhi.
            </strong>
          </p>

          <p className="mb-4">
            Pick the wrong one and you could end up with machines that break
            down every other month, water that fails quality tests, and a plant
            that never gets its BIS license. That is a nightmare no entrepreneur
            wants to go through.
          </p>

          <p className="mb-4">
            Pick the right one and you get a smooth setup, certified machines,
            complete installation support, and a business that starts earning
            from day one.
          </p>

          <p className="mb-4">
            In this complete 2026 guide, we are going to walk you through
            everything — what to look for, what questions to ask, what mistakes
            to avoid, and why{" "}
            <strong className="text-slate-900">Vpack Machine</strong> in Delhi
            has become one of the most trusted names in this industry.
          </p>

          <p className="font-medium text-slate-800">Let’s get started.</p>
        </motion.section>

        {/* What Is a Packaged Drinking Water Plant? */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            What Is a Packaged Drinking Water Plant?
          </h2>

          <p className="mb-4">Let’s keep this simple.</p>

          <p className="mb-4">
            A packaged drinking water plant is a full setup that takes raw
            water, purifies it completely, fills it into bottles or pouches,
            seals them, and gets them ready for sale. Think of it as a small
            factory — but for water.
          </p>

          <p className="mb-4">
            It is not just one machine. It is a series of machines working
            together in a smooth sequence.
          </p>

          <p className="mb-3 font-semibold text-slate-900">
            A standard plant includes:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              Water purification system — RO, UV, and UF filters working
              together
            </li>
            <li>Bottle washing machine to clean every bottle before filling</li>
            <li>Automatic water filling machine</li>
            <li>Capping and sealing machine</li>
            <li>Labelling machine</li>
            <li>Final packing and shrink wrap machine</li>
          </ul>

          <p className="mb-4">
            Every step matters. If even one machine underperforms, your entire
            production gets affected. That is why the{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            you choose must understand this entire process inside and out — not
            just sell you individual machines.
          </p>
        </motion.section>

        {/* Why Does Choosing the Right Manufacturer Matter? */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Why Does Choosing the Right Manufacturer Matter?
          </h2>

          <p className="mb-4">Here is something most people get wrong.</p>

          <p className="mb-4">
            They spend weeks researching plant locations, brand names, and
            bottle designs. But when it comes to choosing the manufacturer, they
            go with whoever gives the lowest quote. And that is where the real
            problem starts.
          </p>

          <p className="mb-4">
            A low price today can mean very high costs tomorrow.
          </p>

          <p className="mb-4">
            Think about it — if your machines break down constantly, you lose
            production time. If your water fails quality tests, you lose
            customers and face legal trouble. If your manufacturer disappears
            after delivery, you are left dealing with technical problems
            completely on your own.
          </p>

          <p className="mb-3 font-semibold text-slate-900">
            The right Packaged Drinking Water Plant Manufacturer protects you
            from all of this:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              They give you machines that are BIS and FSSAI compliant from day
              one
            </li>
            <li>
              They come to your site for proper installation and staff training
            </li>
            <li>They keep spare parts ready so you never face long downtime</li>
            <li>They offer service support when you actually need it</li>
            <li>They help you grow and scale when your business picks up</li>
          </ul>

          <p>
            The manufacturer is not just a supplier. They become your long-term
            business partner. Choose them like one.
          </p>
        </motion.section>

        {/* Key Features to Look for in a Packaged Drinking Water Plant Manufacturer in Delhi */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Key Features to Look for in a Packaged Drinking Water Plant
            Manufacturer in Delhi
          </h2>

          <p className="mb-6">
            So what actually separates a good manufacturer from a bad one? Here
            is what you should be looking at — beyond just the brochure.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                1.) Machine Quality and Material
              </h3>
              <p>
                This is non-negotiable. Always check if the machines are made
                from food-grade stainless steel — SS 304 or SS 316. This keeps
                your water hygienic and your machines running for years. Some
                manufacturers use low-grade materials to cut costs. Do not fall
                for that.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                2.) Certifications and Legal Compliance
              </h3>
              <p>
                Any serious{" "}
                <Link href="/contact" className="text-blue-600 font-medium ">
                  Packaged Drinking Water Plant Manufacturer
                </Link>{" "}
                will have ISO certification, BIS approval, and CE marking on
                their machines. These are not just fancy labels. They prove the
                machines meet safety and quality standards. Without these, you
                cannot legally run a packaged water business in India.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                3.) Production Capacity Range
              </h3>
              <p>
                Make sure the manufacturer offers options — from small plants
                producing 1,000 litres per hour to large setups producing
                10,000+ litres per hour. You should be able to start small and
                upgrade the same plant later as your business grows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                4.) Turnkey Project Delivery
              </h3>
              <p>
                A turnkey solution means the manufacturer handles everything
                from start to finish — design, machine supply, installation,
                testing, and final commissioning. This takes a huge load off
                your shoulders and reduces the risk of costly errors during
                setup.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                5.) After-Sales Support That Actually Works
              </h3>
              <p>
                This is where many manufacturers fail. Ask them directly — what
                happens if a machine breaks down at 2 AM on a Sunday? Do they
                have a helpline? How soon can their engineer reach your site? A
                good{" "}
                <Link href="/contact" className="text-blue-600 font-medium ">
                  Packaged Drinking Water Plant Manufacturer in Delhi
                </Link>{" "}
                has clear and honest answers to these questions.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Types of Packaged Drinking Water Plants */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Types of Packaged Drinking Water Plants
          </h2>

          <p className="mb-6">
            Not every business needs the same kind of plant. Here is a simple
            breakdown to help you figure out what fits your situation.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-6">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-3.5 font-bold text-slate-900 border-r border-gray-200">
                    Plant Type
                  </th>
                  <th className="p-3.5 font-bold text-slate-900 border-r border-gray-200">
                    Best For
                  </th>
                  <th className="p-3.5 font-bold text-slate-900">
                    Capacity Range
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                    Mini Water Plant
                  </td>
                  <td className="p-3.5 text-gray-700 border-r border-gray-200">
                    Startups, small towns
                  </td>
                  <td className="p-3.5 text-gray-700">500–2,000 LPH</td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                    Semi-Automatic Plant
                  </td>
                  <td className="p-3.5 text-gray-700 border-r border-gray-200">
                    Growing businesses
                  </td>
                  <td className="p-3.5 text-gray-700">2,000–5,000 LPH</td>
                </tr>

                <tr className="border-b border-gray-200">
                  <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                    Fully Automatic Plant
                  </td>
                  <td className="p-3.5 text-gray-700 border-r border-gray-200">
                    Large-scale production
                  </td>
                  <td className="p-3.5 text-gray-700">5,000–20,000 LPH</td>
                </tr>

                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                    Pouch Packing Plant
                  </td>
                  <td className="p-3.5 text-gray-700 border-r border-gray-200">
                    Budget-focused buyers
                  </td>
                  <td className="p-3.5 text-gray-700">1,000–5,000 PPH</td>
                </tr>

                <tr>
                  <td className="p-3.5 font-semibold text-gray-800 border-r border-gray-200">
                    Jar Filling Plant
                  </td>
                  <td className="p-3.5 text-gray-700 border-r border-gray-200">
                    Water delivery companies
                  </td>
                  <td className="p-3.5 text-gray-700">200–500 Jars/hr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            A good{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            will not push you towards the most expensive option. They will
            honestly help you pick the right plant based on your local demand,
            budget, and long-term business plans.
          </p>
        </motion.section>

        {/* Benefits of Setting Up a Packaged Drinking Water Plant */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Benefits of Setting Up a Packaged Drinking Water Plant
          </h2>

          <p className="mb-4">
            Let’s talk about why this business actually makes sense in 2026.
          </p>

          <p className="mb-4">
            The packaged drinking water market in India is growing every single
            year. And it is not slowing down anytime soon. Here is why so many
            smart entrepreneurs are getting into this space right now:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Demand never stops</strong> — People need water every day,
              no matter what season it is
            </li>
            <li>
              <strong>Recurring customers</strong> — Once people trust your
              brand, they keep buying
            </li>
            <li>
              <strong>Low raw material cost</strong> — Water is your main input,
              and purification is affordable at scale
            </li>
            <li>
              <strong>Easy to start small</strong> — You do not need a massive
              budget to get going
            </li>
            <li>
              <strong>Government support</strong> — MSME loans and subsidies are
              available for water businesses
            </li>
            <li>
              <strong>Strong margins</strong> — Branded bottled water earns
              20–40% profit margins regularly
            </li>
          </ul>

          <p>
            With the right{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            beside you, this business is very much achievable — even for a
            first-time entrepreneur.
          </p>
        </motion.section>

        {/* Complete Buying Guide to Choose a Packaged Drinking Water Plant Manufacturer in Delhi */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Complete Buying Guide to Choose a Packaged Drinking Water Plant
            Manufacturer in Delhi
          </h2>

          <p className="mb-6">
            Here is a simple, practical guide to help you make the right choice
            without getting overwhelmed.
          </p>

          <div className="space-y-4">
            <p>
              <strong>Step 1 — Know Your Scale First</strong> Before talking to
              any manufacturer, decide how many litres per day you want to
              produce. This one number drives everything else — machine size,
              budget, and space required.
            </p>

            <p>
              <strong>Step 2 — Set a Complete Budget</strong> Do not just budget
              for the machines. Include installation charges, civil work,
              utility setup, licensing fees, and 3 months of working capital.
              Surprises here are expensive.
            </p>

            <p>
              <strong>Step 3 — Research Before You Call</strong> Look for
              manufacturers with 5+ years of experience, real customer reviews,
              and a proper factory — not just a small office. If possible, visit
              them in person. Delhi has several options, so take your time and
              compare properly.
            </p>

            <p>
              <strong>Step 4 — Always Ask for Certificates</strong> ISO and BIS
              certificates are mandatory. Ask for them before any price
              discussion. A manufacturer who hesitates to show these is a red
              flag.
            </p>

            <p>
              <strong>Step 5 — Visit a Live Plant</strong> Ask the manufacturer
              to take you to one of their existing customer installations.
              Seeing a real running plant tells you more than any brochure ever
              will.
            </p>

            <p>
              <strong>Step 6 — Understand the Service Plan Clearly</strong> Ask
              about AMC costs, spare parts availability, engineer response time,
              and what is covered under warranty. Get it in writing.
            </p>

            <p>
              <strong>Step 7 — Compare at Least 3 Quotes</strong> Always. No
              exceptions. Comparing three different manufacturers gives you a
              realistic picture of the market and helps you negotiate better.
            </p>
          </div>
        </motion.section>

        {/* Why Choose Vpack Machine in Delhi? */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Why Choose Vpack Machine in Delhi?
          </h2>

          <p className="mb-4">
            Now let’s talk about a name that consistently comes up when people
            in Delhi and across India search for a reliable{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            — Vpack Machine.
          </p>

          <p className="mb-4">
            <Link href="/" className="text-blue-600 font-medium ">
              Vpack Machine
            </Link>{" "}
            is not just another machine supplier. They are a complete water
            plant solutions company with years of real project experience and
            hundreds of successful plant installations delivered across India.
          </p>

          <p className="mb-3 font-semibold text-slate-900">
            What makes them genuinely different?
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              They offer <strong>complete turnkey projects</strong> — from
              planning your layout to running the first batch of water from your
              plant
            </li>
            <li>
              Every machine they supply is{" "}
              <strong>ISO certified, BIS compliant, and FSSAI ready</strong>
            </li>
            <li>
              They use <strong>food-grade SS 304 and SS 316 steel</strong> in
              all machines — no shortcuts on quality
            </li>
            <li>
              They <strong>customise every plant</strong> based on your specific
              budget, capacity, and location
            </li>
            <li>
              Their <strong>after-sales team is real and reachable</strong> —
              not just a number that goes to voicemail
            </li>
            <li>
              <strong>Transparent pricing</strong> — what they quote is what you
              pay, no surprises later
            </li>
            <li>
              They have delivered plants across Delhi NCR, UP, Haryana,
              Rajasthan, Bihar, and many other states
            </li>
          </ul>

          <p className="mb-4">
            Here is the honest truth — when you are putting lakhs of rupees into
            a business, you need a{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            who treats your project as seriously as you do. That is exactly what
            Vpack Machine brings to the table.
          </p>

          <p>
            Whether you are looking for a small 500 LPH startup plant or a
            large-scale fully automatic setup, Vpack Machine has the experience,
            the machines, and the team to make it happen.
          </p>
        </motion.section>

        {/* Expert Tips from Industry Professionals */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Expert Tips from Industry Professionals
          </h2>

          <p className="mb-4">
            These are things experienced plant owners wish someone had told them
            before they started:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Test your water source before anything else.</strong> The
              TDS level of your source water decides which purification system
              you need. Skipping this step leads to wrong machine selection.
            </li>
            <li>
              <strong>Do not underestimate your space requirements.</strong>{" "}
              Machines need breathing room. A cramped setup slows down your
              production and makes maintenance very difficult.
            </li>
            <li>
              <strong>
                Get your FSSAI and BIS license before you start production.
              </strong>{" "}
              Selling water without these is illegal and can result in heavy
              fines or a forced shutdown.
            </li>
            <li>
              <strong>Train your staff properly and patiently.</strong> A
              well-trained team makes fewer mistakes. And in water production,
              mistakes directly affect customer health.
            </li>
            <li>
              <strong>Always keep emergency spare parts in stock.</strong> A
              broken seal or a failed pump should not shut down your plant for 3
              days while you wait for delivery.
            </li>
            <li>
              <strong>Do daily water quality checks.</strong> Use simple
              in-house testing kits. Catching a problem early is cheaper than
              dealing with a customer complaint or a product recall.
            </li>
          </ul>
        </motion.section>

        {/* Frequently Asked Questions */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Q1. What exactly does a Packaged Drinking Water Plant
                Manufacturer do?
              </h3>
              <p>
                They design, build, supply, and install the complete set of
                machines needed to purify, fill, seal, and pack drinking water
                for commercial sale.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Q2. How much does a packaged drinking water plant cost in India
                in 2026?
              </h3>
              <p>
                A small semi-automatic plant starts from around ₹8 to ₹15 lakhs.
                A large fully automatic plant can go from ₹25 lakhs to ₹1 crore
                or more depending on capacity and automation level.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Q3. What certifications must a Packaged Drinking Water Plant
                Manufacturer have?
              </h3>
              <p>
                Look for ISO 9001, BIS IS 14543 certification, and CE marking on
                machines. You as the plant owner also need FSSAI registration
                and Pollution Control Board clearance.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Q4. Is Vpack Machine a reliable Packaged Drinking Water Plant
                Manufacturer in Delhi?
              </h3>
              <p>
                Yes. Vpack Machine has a strong track record in Delhi and across
                India. They offer certified machines, full turnkey delivery, and
                genuine after-sales support that most manufacturers in this
                space simply do not provide.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-1">
                Q5. What capacity plant should a beginner start with?
              </h3>
              <p>
                A 500 to 2,000 LPH semi-automatic plant is ideal for beginners.
                It keeps your initial investment low while giving you room to
                learn the business and grow steadily.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Conclusion */}
        <motion.section variants={fadeIn} className="mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Conclusion
          </h2>

          <p className="mb-4">Here is the bottom line.</p>

          <p className="mb-4">
            The packaged drinking water industry is full of opportunity. The
            demand is real, the margins are solid, and the market is only
            growing. But none of that matters if you start with the wrong
            foundation.
          </p>

          <p className="mb-4">
            And the foundation of your water plant business is your{" "}
            <Link href="/contact" className="text-blue-600 font-medium ">
              Packaged Drinking Water Plant Manufacturer
            </Link>
            .
          </p>

          <p className="mb-4">
            Choose someone who knows the industry, stands behind their machines,
            shows up when things go wrong, and genuinely wants to see your
            business succeed. Not just someone who takes your money and delivers
            boxes.
          </p>

          <p className="mb-4">
            <Link href="/" className="text-slate-900 font-semibold ">
              Vpack Machine
            </Link>{" "}
            in Delhi is that kind of partner. Certified machines, real support,
            transparent pricing, and a team that has done this hundreds of times
            before. They do not just sell you a plant — they help you build a
            business.
          </p>

          <p className="font-medium text-slate-800">
            So if you are ready to take the next step, do not wait. Every day
            you delay is a day your competitor gets ahead.
          </p>
        </motion.section>

        {/* Footer Navigation / Tags & Request a Quote button */}
        <motion.div
          variants={fadeIn}
          className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 mb-12"
        >
          <div className="text-sm text-blue-600 space-x-2">
            <Link
              href="/water-bottling-plant-manufacturer"
              className=" cursor-pointer"
            >
              Packaged Drinking Water Plant Manufacturer
            </Link>{" "}
            •{" "}
            <Link
              href="/water-bottling-plant-manufacturer-in-delhi"
              className=" cursor-pointer"
            >
              Packaged Drinking Water Plant Manufacturer in Delhi
            </Link>{" "}
            •{" "}
            <Link
              href="/water-bottling-plant-manufacturer-in-delhi"
              className=" cursor-pointer"
            >
              Water Bottling Plant Manufacturer
            </Link>{" "}
            •{" "}
            <Link
              href="/water-bottling-plant-manufacturer-in-delhi"
              className=" cursor-pointer"
            >
              Water Bottling Plant Manufacturer in Delhi
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600">
              By{" "}
              <Link href="/" className="text-blue-600 ">
                Vpack Machine
              </Link>
            </span>

            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-md transition-colors duration-200 text-sm shadow-sm"
            >
              Request a Quote
            </Link>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}

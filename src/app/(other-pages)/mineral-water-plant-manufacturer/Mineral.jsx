"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 text-[16px] lg:text-[18px] leading-relaxed">
      {/* Top Hero Header as requested */}
      <header className="relative w-full min-h-[120px] md:min-h-[140px] bg-slate-200 flex items-center justify-center px-4 shadow-sm overflow-hidden">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-slate-900">Mineral Water</span>{" "}
            <span className="text-blue-500">Plant Manufacturer</span>
          </h1>
        </motion.div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12 space-y-12">
        {/* Section: Machine Images Showcase (p1.png to p7.png) */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
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
          ].map((item, idx) => (
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
                      alt={item.title}
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

        {/* Section: Content Intro */}
        <div className="grid grid-cols-1 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideLeft}
            className="space-y-4"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Mineral Water Plant Manufacturer in Delhi
            </h2>

            <p>
              If you are planning to set up a water bottling business and
              searching for a reliable{" "}
              <Link href="/contact" className="text-blue-600 font-bold">
                Mineral Water Plant Manufacturer in Delhi
              </Link>
              , Vpack Machine is your trusted partner. We design, manufacture,
              and install complete mineral water plants that cover filtration,
              filling, capping, labeling, and packaging — built to meet BIS
              standards for safe and hygienic water production.
            </p>

            <p>
              As an experienced{" "}
              <span className="font-bold">
                mineral water bottling plant manufacturer
              </span>
              , we serve startups as well as established businesses across Delhi
              NCR, offering turnkey solutions customized to your production
              capacity, budget, and space. Every machine is engineered for
              precision, low maintenance, and long-term reliability — so your
              plant runs smoothly from day one.
            </p>
          </motion.div>
        </div>

        {/* Section: Why Choose Vpack Machine */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Why Choose Vpack Machine as Your Mineral Water Plant Manufacturer
          </h2>

          <p>
            We manufacture and supply premium-quality machinery used in a
            complete mineral water bottling line, including:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              ISO-quality machines built for long-term industrial performance
            </li>
            <li>
              Complete turnkey setup — from RO filtration to final packaging
            </li>
            <li>
              Expert installation, training, and after-sales service across
              Delhi
            </li>
            <li>Energy-efficient systems with low operating cost</li>
            <li>
              Customizable plant capacity — suitable for startups to large-scale
              units
            </li>
            <li>
              Nationwide supply with dedicated AMC and spare parts support
            </li>
          </ul>
        </motion.section>

        {/* Section: Complete Setup & Equipment */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
          className="space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Complete Mineral Water Bottling Plant Manufacturer Setup
          </h2>

          <p>
            As a full-range{" "}
            <Link href="/contact" className="text-blue-600 font-bold">
              mineral water bottling plant manufacturer
            </Link>
            , we supply every machine needed to run your plant end-to-end:
          </p>

          <div className="space-y-3">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">Bottle RFC Machine (30 BPM)</span> —
              Rinses, fills, and caps bottles automatically at 30 bottles per
              minute, ensuring consistent hygiene and speed.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">Industrial RO Plant</span> — Removes
              dissolved impurities, bacteria, and contaminants to deliver pure,
              BIS-compliant drinking water.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">SS Water Storage Tank</span> —
              Food-grade stainless steel tanks that keep treated water safe,
              corrosion-proof, and contamination-proof.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">BOPP Labelor</span> — Applies
              wrap-around BOPP labels with precision and strong, long-lasting
              adhesion.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">Sticker Labelor Machine</span> — Adds
              a professional, retail-ready finish with accurate sticker
              placement.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">Capper Machine (VPCL-40M)</span> —
              High-speed, leak-proof capping for secure bottle sealing.
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <span className="font-bold">Shrink Wrapping Machine</span> —
              Bundles finished bottles into transport-ready shrink packs.
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            Together, these machines form a complete, automated mineral water
            bottling plant — from raw water input to a sealed, labeled,
            market-ready bottle.
          </p>
        </motion.section>

        {/* Section: Why Delhi Businesses Trust Vpack */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Why Delhi Businesses Trust Vpack Machine
          </h2>

          <p>
            Delhi NCR is one of India’s fastest-growing markets for packaged
            drinking water, and choosing a local{" "}
            <Link href="/contact" className="text-blue-600 font-bold">
              mineral water plant manufacturer
            </Link>{" "}
            in Delhi means faster installation, easier servicing, and quicker
            access to spare parts. Vpack Machine’s manufacturing base in Delhi
            allows us to offer shorter lead times, on-site technical support,
            and personalized plant-layout consultation for entrepreneurs and
            existing bottling units across the NCR region — without the delays
            of out-of-state suppliers.
          </p>
        </motion.section>

        {/* Section: How Setup Works */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideRight}
          className="space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            How a Mineral Water Plant Setup Works
          </h2>

          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-bold">Consultation</span> — Share your
              budget, target capacity (BPM), and space availability.
            </li>

            <li>
              <span className="font-bold">
                Plant Layout & Machine Selection
              </span>{" "}
              — We recommend the right combination of RO plant, filling,
              capping, and labeling machines.
            </li>

            <li>
              <span className="font-bold">Manufacturing & Quality Check</span> —
              Machines are built and tested to BIS and ISO standards.
            </li>

            <li>
              <span className="font-bold">Installation & Commissioning</span> —
              On-site setup, typically completed in 15–45 days.
            </li>

            <li>
              <span className="font-bold">Training & Handover</span> — Your
              staff is trained on operation and basic maintenance.
            </li>

            <li>
              <span className="font-bold">Ongoing AMC Support</span> — Scheduled
              servicing and spare parts supply post-installation.
            </li>
          </ol>
        </motion.section>

        {/* Section: FAQs */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideLeft}
          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">FAQs</h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-900">
                1. Who is the best Mineral Water Plant Manufacturer in Delhi?
              </h3>
              <p>
                Vpack Machine is a trusted Mineral Water Plant Manufacturer in
                Delhi, known for BIS-compliant machinery, turnkey installation,
                and nationwide AMC support. We supply complete mineral water
                bottling plants for capacities ranging from small startups to
                large-scale production units.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                2. What is the cost of setting up a mineral water plant in
                Delhi?
              </h3>
              <p>
                The cost typically depends on plant capacity, automation level,
                and machine selection, and can range from a few lakhs for a
                small-scale unit to higher investments for fully automated,
                high-capacity plants. Contact Vpack Machine for a customized
                quotation based on your requirements.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                3. What is the difference between a mineral water plant and a
                mineral water bottling plant?
              </h3>
              <p>
                A mineral water plant refers mainly to the water filtration and
                treatment system (like an RO plant), while a mineral water
                bottling plant manufacturer setup includes the complete line —
                filtration, bottle filling, capping, labeling, and packaging —
                needed to produce market-ready bottled water.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                4. What machines are included in a complete mineral water
                bottling plant manufacturer setup?
              </h3>
              <p>
                A complete setup typically includes an Industrial RO Plant,
                Bottle RFC Machine, SS Water Storage Tank, Capping Machine,
                Labeling Machine (BOPP or Sticker), and a Shrink Wrapping
                Machine — all supplied and installed by Vpack Machine.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                5. How much space is required to set up a mineral water plant?
              </h3>
              <p>
                A small to mid-sized mineral water plant generally requires
                1,500–3,000 sq. ft. of covered space, depending on machine
                capacity and storage tank size. Vpack Machine provides a
                customized layout plan after assessing your available area.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                6. How long does installation take?
              </h3>
              <p>
                Installation of a mineral water plant by Vpack Machine usually
                takes 15 to 45 days, depending on plant capacity, customization,
                and site readiness.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                7. Is BIS certification mandatory for a mineral water plant in
                Delhi?
              </h3>
              <p>
                Yes, BIS certification is legally mandatory for manufacturing
                and selling packaged drinking water in India, including Delhi.
                Vpack Machine’s plants are engineered to help you meet BIS
                quality and hygiene standards.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                8. What bottle capacities can the machines handle?
              </h3>
              <p>
                Vpack Machine’s mineral water plant machinery supports bottle
                and jar sizes ranging from 200ml to 20-litre jars, with capacity
                options such as 24, 30, 60, or 90 BPM (bottles per minute).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                9. Do you provide after-sales service and AMC in Delhi?
              </h3>
              <p>
                Yes, Vpack Machine offers nationwide Annual Maintenance
                Contracts (AMC), genuine spare parts, and technical support,
                with faster response times for customers based in Delhi NCR due
                to our local manufacturing base.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                10. What is the lifespan of Vpack Machine’s mineral water plant
                equipment?
              </h3>
              <p>
                With regular maintenance, Vpack Machine’s mineral water plant
                machinery typically lasts 10–15+ years, making it a reliable
                long-term investment for your bottling business.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                11. Can the mineral water plant be customized for my business
                size?
              </h3>
              <p>
                Yes, Vpack Machine customizes plant capacity, automation level,
                and tank size to suit startups, mid-sized businesses, and
                large-scale manufacturers alike.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                12. How do I get a price quote from Vpack Machine?
              </h3>
              <p>
                Simply share your required production capacity, bottle sizes,
                and location with Vpack Machine’s team, and you’ll receive a
                customized quotation along with plant layout and consultation
                support.
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

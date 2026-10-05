"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQ from "@/components/FAQ";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PetBlowMouldingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-100">
      {/* 1. Header Banner */}
      <section className="w-full bg-slate-200 py-10 px-4 md:px-12 border-b border-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex items-center gap-3 flex-wrap justify-center"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              PET Blow Moulding Machine
            </h1>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-500">
              2 Cavity Semi-Automatic
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {" "}
        {/* Left Column: Sticky Product Card Sidebar */}
        <div className="lg:col-span-1 order-first">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-5"
          >
            {/* Product Image */}
            <div className="relative w-full h-64 bg-slate-50 rounded-lg overflow-hidden flex items-center justify-center border border-slate-100">
              <Image
                src="/images/products/p6.png"
                alt="PET Blow Moulding Machine 2 Cavity Semi-Automatic"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 text-yellow-400 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Sidebar Title */}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚙️</span>
                <h4 className="text-xl font-bold text-slate-900 leading-tight">
                  Efficient PET Bottle Forming with VPACK’s Semi-Automatic
                  Technology
                </h4>
              </div>
            </div>

            {/* Sidebar Description */}
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Built for efficiency, the{" "}
              <strong className="text-slate-900">
                VPACK 2 Cavity Semi-Automatic Pet Blow Moulding Machine
              </strong>{" "}
              offers a seamless solution to medium-scale PET bottle
              manufacturing. Operated via a{" "}
              <strong className="text-slate-900">3-phase power supply</strong>,
              it effortlessly delivers a production rate of up to 1200 bottles
              per hour, catering to both startups and expanding factories.
            </p>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Designed to optimize your production floor, this machine ensures{" "}
              <strong className="text-slate-900">low energy consumption</strong>
              ,{" "}
              <strong className="text-slate-900">high molding precision</strong>
              , and <strong className="text-slate-900">easy maintenance</strong>{" "}
              – making it a smart addition to your packaging setup.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <a
                href="tel:+919135636541"
                className="w-full border border-orange-500 text-slate-800 hover:bg-orange-50 font-medium px-6 py-3 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                Call Now <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
        {/* Right & Middle Columns: Product Details */}
        <div className="lg:col-span-2 order-last space-y-10">
          {" "}
          {/* Main Title & Rating */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              PET Blow Moulding Machine Manufacturer in India – Vpack Machine
            </h2>
            <div className="flex items-center gap-1 text-orange-500 mt-2 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
          </motion.div>
          <hr className="border-dashed border-slate-300" />
          {/* Technical Specifications Table */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-[16px] lg:text-[18px]">
                    <th className="p-4 font-semibold w-1/2">
                      Technical Specifications
                    </th>
                    <th className="p-4 font-semibold w-1/2">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-[16px] lg:text-[18px] text-slate-700">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      No. of Mould Cavity
                    </td>
                    <td className="p-4">2 Cavity</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">Brand</td>
                    <td className="p-4">VPACK</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Frequency
                    </td>
                    <td className="p-4">50–60 Hz</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Power Source
                    </td>
                    <td className="p-4">Electric</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">Phase</td>
                    <td className="p-4">Three Phase</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Automation Grade
                    </td>
                    <td className="p-4">Semi Automatic</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">Capacity</td>
                    <td className="p-4">1200 Bottles Per Hour</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Country of Origin
                    </td>
                    <td className="p-4">Made in India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.section>
          {/* Introductory Paragraph */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Boost your bottle production with{" "}
              <strong className="text-slate-900">
                VPACK’s 2 Cavity Semi-Automatic{" "}
                <a href="#" className="text-blue-600 ">
                  PET Blow Moulding Machine Manufacturer in India
                </a>
              </strong>
              . Engineered for precision and performance, this machine is an
              ideal solution for medium-scale bottle manufacturing with
              consistent output and efficient operation.
            </p>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              PET bottles are widely used in packaged drinking water, soft
              drinks, edible oil, juice, pharmaceuticals, cosmetics, and FMCG
              products. With growing demand in these industries, having a
              reliable and energy-efficient blow moulding machine is key to
              maintaining stability in production and product quality. As a
              trusted{" "}
              <strong className="text-slate-900">
                <a href="#" className="text-blue-600 ">
                  PET Blow Moulding Machine Manufacturer in India
                </a>
              </strong>
              , Vpack Machine ensures exactly that by delivering advanced,
              high-performance systems designed for long-term efficiency and
              consistent output.
            </p>
          </motion.section>
          <hr className="border-dashed border-slate-300" />
          {/* Product Highlights Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Product Highlights:
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 text-[16px] lg:text-[18px]">
                    <th className="p-4 font-semibold w-1/2">Key Features</th>
                    <th className="p-4 font-semibold w-1/2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-[16px] lg:text-[18px] text-slate-700">
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      High-Speed Output
                    </td>
                    <td className="p-4">
                      Produces up to 1200 bottles per hour, ideal for fast-paced
                      production needs
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Dual Cavity Mould
                    </td>
                    <td className="p-4">
                      Equipped with 2-cavity mould for simultaneous bottle
                      forming
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Robust Performance
                    </td>
                    <td className="p-4">
                      Operates on 50–60 Hz frequency with reliable three-phase
                      electric supply
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-slate-900">
                      Made in India
                    </td>
                    <td className="p-4">
                      Designed and manufactured with quality engineering by
                      VPACK
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed pt-2">
              Vpack Machine also offers customized PET blow moulding solutions
              based on client needs. Customers can choose from semi-automatic
              and fully automatic models with different production capacities.
              Our engineering team works closely with clients to understand
              their production goals and recommend the most suitable machine
              configuration. This ensures maximum output with minimum
              operational cost.
            </p>
          </motion.section>
          {/* Industries We Serve Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Industries We Serve
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 font-medium">
              Our PET blow moulding machines are widely used in:
            </p>
            <ul className="space-y-2 text-[16px] lg:text-[18px] text-slate-700">
              <li>• Packaged drinking water plants</li>
              <li>• Soft drink & beverage industries</li>
              <li>• Edible oil packaging units</li>
              <li>• Pharmaceutical & cosmetic bottle production</li>
              <li>• Household cleaning & chemical products</li>
            </ul>
          </motion.section>
          {/* Benefits of Using PET Blow Moulding Machine */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Benefits of Using PET Blow Moulding Machine
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600">
              Investing in a PET Blow Moulding Machine from a trusted
              manufacturer offers several benefits:
            </p>
            <ol className="space-y-3 text-[16px] lg:text-[18px] text-slate-700 list-decimal pl-5">
              <li>
                <strong className="text-slate-900">Cost Efficiency:</strong>{" "}
                In-house bottle production reduces dependency on external
                suppliers.
              </li>
              <li>
                <strong className="text-slate-900">Quality Control:</strong>{" "}
                Manufacturers can maintain uniform bottle quality and design.
              </li>
              <li>
                <strong className="text-slate-900">High Productivity:</strong>{" "}
                Machines deliver fast production rates with minimal downtime.
              </li>
              <li>
                <strong className="text-slate-900">Flexibility:</strong> Ability
                to produce bottles of different sizes and shapes.
              </li>
              <li>
                <strong className="text-slate-900">Eco-Friendly:</strong> PET
                material is recyclable and supports sustainable packaging.
              </li>
            </ol>
            <p className="text-[16px] lg:text-[18px] text-slate-600 pt-2">
              With Vpack Machine, customers receive machines that are optimized
              for long-term use and consistent output.
            </p>
          </motion.section>
          {/* Customization & Technical Support */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Customization & Technical Support
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600">
              Vpack Machine understands that every business has unique
              requirements. Therefore, machines can be customized based on
              bottle size, production capacity, and automation level. In
              addition to manufacturing, the company also provides:
            </p>
            <ul className="space-y-2 text-[16px] lg:text-[18px] text-slate-700">
              <li>• Installation support</li>
              <li>• Operator training</li>
              <li>• After-sales service</li>
              <li>• Spare parts availability</li>
              <li>• Technical guidance</li>
            </ul>
            <p className="text-[16px] lg:text-[18px] text-slate-600 pt-2">
              This commitment makes Vpack Machine a dependable{" "}
              <strong className="text-slate-900">
                PET Blow Moulding Machine Manufacturer in India
              </strong>{" "}
              for businesses seeking long-term partnerships.
            </p>
          </motion.section>
          {/* Quality Standards & Innovation */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Quality Standards & Innovation
            </h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Quality and innovation are the foundation of Vpack Machine’s
              manufacturing process. Each PET Blow Moulding Machine is developed
              using premium components and modern technology. Continuous
              research and development ensure that machines stay updated with
              the latest industry trends and performance standards.
            </p>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              By focusing on precision, safety, and durability, Vpack Machine
              helps customers achieve higher efficiency and better packaging
              results.
            </p>
          </motion.section>
          {/* Conclusion */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-4 pt-4"
          >
            <h3 className="text-2xl font-bold text-slate-900">Conclusion</h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              If you are searching for a reliable{" "}
              <strong className="text-slate-900">
                PET Blow Moulding Machine Manufacturer in India
              </strong>
              , Vpack Machine is your ideal choice. With advanced technology,
              customized solutions, and strong after-sales support, the company
              delivers machines that improve productivity and packaging quality.
              Whether you are starting a new manufacturing unit or upgrading
              your existing facility, Vpack Machine provides dependable
              machinery solutions tailored to your needs.
            </p>
          </motion.section>
          {/* FAQ Component */}
          <FAQ />
        </div>
      </main>
    </div>
  );
}

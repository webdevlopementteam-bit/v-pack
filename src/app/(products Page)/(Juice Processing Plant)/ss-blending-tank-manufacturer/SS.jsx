"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlendingTankPage() {
  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  // Framer Motion Animation Variants
  const leftVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full bg-white text-gray-700 text-[16px] lg:text-[18px] leading-relaxed selection:bg-blue-100">
      {/* Top Hero Banner */}
      <div className="bg-[#dbe3eb] px-4 py-4 flex items-center justify-center min-h-[80px] md:min-h-[140px] ">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#0B2545] tracking-wide text-center uppercase">
          Stainless Steel{" "}
          <span className="text-blue-500">Blending Tank Manufacturer</span>
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT SIDE (Sticky & Moves from Left) */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-6 bg-[#f8fafc] border border-gray-200 rounded-lg p-5 shadow-sm space-y-4"
          >
            {/* Product Image Card Container */}
            <div className="bg-white p-3 rounded-md border border-gray-100 shadow-inner relative">
              {/* Product Image */}
              <div className="relative w-full h-64 sm:h-72 my-2">
                <Image
                  src="/images/products/ss.png"
                  alt="The V PACK Blending Tank"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Rating Stars */}
            <div className="flex text-amber-400 text-xl md:text-2xl">★★★★★</div>

            {/* Product Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-[#0B2545]">
              The V PACK Blending Tank
            </h3>

            {/* Short Description */}
            <p className="text-gray-600 text-[16px] lg:text-[18px]">
              The V PACK Blending Tank is a robust and hygienic solution
              designed to mix and homogenize ingredients like fruit pulp, sugar
              syrup, water, and flavoring agents in the juice and food
              processing industry. With its food-grade stainless steel
              construction and 500-liter capacity, it ensures consistent product
              quality before moving to the pasteurization or filling phase.
            </p>

            {/* Call Now Button */}
            <div className="pt-2">
              <button
                onClick={handleCall}
                className="inline-flex items-center gap-2 px-6 py-2 bg-white border-2 border-orange-400 text-gray-800 rounded-md font-semibold shadow hover:bg-orange-50 transition-colors cursor-pointer text-[16px] lg:text-[18px]"
              >
                Call Now <span className="text-gray-600">→</span>
              </button>
            </div>
          </motion.div>

          {/* RIGHT SIDE (Moves from Right) */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-8 space-y-8"
          >
            {/* Title & Stars */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0B2545] leading-tight">
                SS Blending Tank Manufacturer
              </h1>
              <div className="flex text-amber-400 text-xl md:text-2xl">
                ★★★★★
              </div>
            </div>

            {/* Main Content Paragraphs */}
            <div className="space-y-4 pt-2 text-[16px] lg:text-[18px]">
              <p className="text-gray-600">
                The <strong className="text-gray-800">Blending Tank</strong>{" "}
                plays a central role in the juice production process, ensuring
                all ingredients — like fruit pulp, sugar syrup, and flavorings —
                are thoroughly homogenized. Constructed with food-grade
                stainless steel, it guarantees hygiene and consistency.
              </p>

              <p className="text-gray-600">
                As a leading{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 italic font-medium"
                >
                  SS Blending Tank Manufacturer in Delhi
                </Link>
                , Vpack Machine designs tanks engineered to handle liquids of
                varying viscosity, making them a versatile asset across multiple
                industries. Whether used before pasteurization or final filling,
                the tank ensures your product stays smooth, uniform, and ready
                for the next step.
              </p>
            </div>

            {/* Technical Specifications Section */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Technical Specifications
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>
                  <strong className="text-gray-800">Storage Material:</strong>{" "}
                  Water, Oil, Viscous Liquids
                </li>
                <li>
                  <strong className="text-gray-800">Usage/Application:</strong>{" "}
                  Suitable for all liquid blending needs
                </li>
                <li>
                  <strong className="text-gray-800">Material:</strong> Stainless
                  Steel (Food Grade)
                </li>
                <li>
                  <strong className="text-gray-800">Storage Capacity:</strong>{" "}
                  500 Litres
                </li>
                <li>
                  <strong className="text-gray-800">Brand:</strong> V PACK
                </li>
                <li>
                  <strong className="text-gray-800">Automation Grade:</strong>{" "}
                  Food Grade
                </li>
              </ul>
            </div>

            {/* High-Quality Stainless Steel Blending Tanks */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                High-Quality Stainless Steel Blending Tanks
              </h2>
              <p className="text-gray-600">
                As a reliable{" "}
                <Link
                  href="/contact"
                  className="text-blue-600 italic font-medium"
                >
                  SS Blending Tank Manufacturer in Delhi
                </Link>
                , Vpack Machine offers tanks suitable for:
              </p>

              <div className="space-y-2 pt-2">
                <p className="font-bold text-gray-800">
                  Performance Highlights:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                  <li>Efficient blending of multiple liquid ingredients</li>
                  <li>Food-grade stainless steel (SS) for safe operation</li>
                  <li>Corrosion-resistant and easy to clean</li>
                  <li>
                    Supports various viscosities including water, oil, and
                    syrups
                  </li>
                  <li>Consistent homogenization of final product</li>
                </ul>
              </div>

              <p className="text-gray-600 pt-2">
                Our stainless steel blending tanks ensure smooth mixing, uniform
                consistency, and reduced processing time, helping businesses
                improve productivity and product quality.
              </p>
            </div>

            {/* Customization & Advanced Engineering */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Customization & Advanced Engineering
              </h2>
              <p className="text-gray-600">
                At <strong className="text-gray-800">Vpack Machine</strong>, we
                understand that every industry has unique blending requirements.
                That’s why we offer customized SS blending tanks in various
                capacities, shapes, and configurations. Our tanks can be
                supplied with features like variable speed agitators,
                insulation, temperature control systems, and automation panels.
              </p>
              <p className="text-gray-600">
                As a reliable{" "}
                <strong className="text-gray-800">
                  SS Blending Tank Manufacturer in Delhi
                </strong>
                , we ensure that all our tanks comply with industrial safety and
                hygiene standards, making them suitable for regulated sectors
                like food and pharmaceuticals.
              </p>
            </div>

            {/* Why Choose Vpack Machine? */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Why Choose Vpack Machine?
              </h2>
              <p className="text-gray-600">
                Choosing the right manufacturer directly impacts your production
                efficiency.{" "}
                <strong className="text-gray-800">Vpack Machine</strong> stands
                out due to its commitment to quality and customer satisfaction.
              </p>

              <div className="space-y-2 pt-2">
                <p className="font-bold text-gray-800">Why clients trust us:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                  <li>Proven expertise in stainless steel process equipment</li>
                  <li>High-quality raw materials and precision fabrication</li>
                  <li>Competitive pricing with no compromise on quality</li>
                  <li>Timely delivery and professional installation support</li>
                  <li>Strong after-sales service and technical assistance</li>
                </ul>
              </div>

              <p className="text-gray-600 pt-2">
                Our blending tanks are built to deliver consistent results even
                in demanding industrial environments.
              </p>
            </div>

            {/* Applications of SS Blending Tanks */}
            <div className="space-y-4 pt-4 text-[16px] lg:text-[18px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B2545]">
                Applications of SS Blending Tanks
              </h2>
              <p className="text-gray-600">
                Our stainless steel blending tanks are suitable for:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 pl-1">
                <li>Food & beverage manufacturing units</li>
                <li>Juice and dairy processing plants</li>
                <li>Pharmaceutical and healthcare industries</li>
                <li>Chemical and cosmetic manufacturers</li>
                <li>Herbal and ayurvedic product units</li>
              </ul>

              <p className="text-gray-600 pt-2">
                If you are searching for a dependable{" "}
                <strong className="text-gray-800">
                  SS Blending Tank Manufacturer in Delhi
                </strong>
                , <strong className="text-gray-800">Vpack Machine</strong> is
                your ideal partner.
              </p>
            </div>

            {/* Small Click-To-Call Icon Button */}
            <div className="pt-6 flex justify-center">
              <button
                onClick={handleCall}
                title="Click to Call"
                className="w-16 h-16 sm:w-20 sm:h-20 bg-[#0B2545] hover:bg-blue-900 text-white p-4 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg cursor-pointer"
              >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </button>
            </div>

            {/* Contact CTA line */}
            <p className="text-gray-700 text-center pt-2 text-[16px] lg:text-[18px]">
              Contact{" "}
              <Link href="/contact" className="text-blue-600 font-bold">
                Vpack Machine
              </Link>{" "}
              today for expert consultation and customized stainless steel
              blending tank solutions.
            </p>

            {/* FAQs Section */}
            <div className="space-y-6 pt-6 border-t border-gray-200 text-[16px] lg:text-[18px]">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B2545]">
                FAQs
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    1. What is an SS blending tank used for?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    An SS blending tank is used to mix, blend, or homogenize
                    liquids and semi-liquids in industries like food, beverages,
                    pharmaceuticals, chemicals, and cosmetics.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    2. Which stainless steel grades are used in blending tanks?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    <strong className="text-gray-800">Vpack Machine</strong>{" "}
                    manufactures SS blending tanks using SS 304 and SS 316
                    grades, ensuring corrosion resistance, hygiene, and
                    long-term durability.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    3. Can SS blending tanks be customized?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Yes, Vpack Machine offers fully customized SS blending tanks
                    in different capacities, designs, and features such as
                    jackets, agitators, and automation systems.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    4. Are SS blending tanks suitable for food and pharma
                    industries?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Absolutely. Our stainless steel blending tanks are
                    food-grade, easy to clean, and comply with hygiene standards
                    required for food and pharmaceutical applications.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-800 text-lg sm:text-xl">
                    5. Why choose Vpack Machine as an SS blending tank
                    manufacturer in Delhi?
                  </h3>
                  <p className="text-gray-600 mt-1">
                    Vpack Machine is known for quality engineering, customized
                    solutions, competitive pricing, and excellent after-sales
                    support, making it a trusted SS blending tank manufacturer
                    in Delhi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

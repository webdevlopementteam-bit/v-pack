// components/AboutSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-10 px-4 md:px-12 lg:px-15 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Image Collage Asset */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full flex justify-center items-center"
        >
          <Image
            src="/images/home/about/p1.png"
            alt="Vpack Machine Industry Collage"
            width={650}
            height={650}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Right Column: Text Content & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col space-y-5"
        >
          {/* Eyebrow / Subtitle */}
          <span className="text-[#FF4500] font-semibold text-xl tracking-wide">
            About Us
          </span>

          {/* Main Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-tight">
            We Are a Powerful Modern Team in Redefining Industry Standards
          </h2>

          {/* Description Paragraph 1 */}
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
            At Vpack Machine Pvt. Ltd., we are a passionate and innovative team
            committed to delivering cutting-edge solutions across the water,
            beverage, and pharma industries. With years of expertise and a
            global reach, we design and manufacture custom-built,
            high-performance machines that meet the unique needs of our clients.
            Our focus on quality, durability, and customer satisfaction drives
            us to continuously evolve and push the boundaries of what&apos;s
            possible.
          </p>

          {/* Description Paragraph 2 */}
          <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
            We pride ourselves on being a reliable partner, always striving to
            exceed expectations and provide exceptional, tailored machinery
            solutions that empower industries worldwide.
          </p>

          {/* Read More Button */}
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-block bg-[#FF4500] hover:bg-[#b4956d] text-white font-medium px-8 py-2  transition-all duration-300 shadow-sm"
            >
              Read More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

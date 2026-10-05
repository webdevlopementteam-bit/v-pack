"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SodaPlantPage() {
  return (
    <div className="w-full bg-white text-gray-900 text-[16px] lg:text-[18px] leading-relaxed font-sans overflow-x-hidden">
      {/* Responsive Image Container: Full width on mobile, 60% width & 40vh height on lg screens */}
      <div className="relative w-full lg:w-[60%] h-[250px] sm:h-[350px] lg:h-[40vh] mx-auto overflow-hidden">
        <Image
          src="/images/blog/b2.png"
          alt="Soda Plant Machine"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-contain drop-shadow-2xl"
        />
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Animated Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Moves from Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p>
              Starting a soda or carbonated drinks business? The first and most
              important decision you'll make is choosing the right soda plant
              manufacturer. This one choice can make or break your entire
              business. Many first-time buyers make costly mistakes — they pick
              a cheap supplier without checking quality, or they don't know what
              features to look for in a soda plant machine. The result? Wasted
              money, production delays, and a lot of headaches. This guide is
              written to help you avoid all of that. Whether you're a small
              business owner in Delhi or planning a large-scale beverage
              production unit, these 7 expert tips will help you find the best
              manufacturer — the smart way.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Quick Answer
            </h2>
            <p>
              What should I look for in a soda plant manufacturer? Look for
              experience, machine quality, after-sales support, certifications,
              and customization options. A good manufacturer will offer trial
              runs, local service support, and transparent pricing. Companies
              like{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Vpack Machine in Delhi
              </Link>{" "}
              are known for providing reliable, high-quality soda plant
              solutions.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Why Choosing the Right Soda Plant Manufacturer Matters
            </h2>
            <p>
              Think about it this way — your soda plant is the heart of your
              business. If it breaks down or doesn't perform well, your entire
              production stops. A reliable carbonated beverage plant supplier
              ensures: Consistent production without breakdowns Better
              carbonation quality Lower maintenance costs Long machine life
              Choosing wrong can cost you 3x more in repairs and downtime than
              saving a little money upfront.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              What is a Soda Plant?
            </h2>
            <p>
              A soda plant (also called a carbonated water plant or soft drink
              manufacturing unit) is a set of machines that mix water, CO2,
              flavors, and sugar syrup to produce carbonated drinks at scale.
              These plants are used for: Bottled soda water Flavored soft drinks
              Club soda Energy drinks Packaged sparkling water If you're
              entering the soft drink production business, a soda plant is your
              starting point.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              7 Expert Tips to Choose the Best Soda Plant Manufacturer
            </h2>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 1: Check the Manufacturer's Experience and Reputation
              </h3>
              <p>
                Always start by researching how long the company has been in
                business. A manufacturer with 5-10+ years of experience has
                likely solved problems you haven't thought of yet. Ask for:
                Client testimonials Case studies References from past buyers A
                reputable soda plant manufacturer in Delhi will be transparent
                about their track record.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 2: Inspect Machine Quality and Build Material
              </h3>
              <p>
                The quality of the machine directly affects your product
                quality. Look for: Stainless steel construction (food-grade)
                Durable valves and fittings High-pressure CO2 handling
                capability Always ask for a live demo or visit the factory
                before placing an order.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 3: Ask About Customization Options
              </h3>
              <p>
                Every business has different needs. A 500 bottles/hour capacity
                suits a small business, while a large plant may need 5,000+ BPH.
                A good beverage plant manufacturer will customize: Production
                capacity Bottle size compatibility Flavor mixing options
                Automation level
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 4: Verify After-Sales Support and Service Network
              </h3>
              <p>
                This is one of the most ignored factors — and the most important
                one. Ask the manufacturer: Do you have service engineers in
                Delhi? What is your response time for breakdowns? Do you provide
                spare parts locally?{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Vpack Machine is known across Delhi NCR
                </Link>{" "}
                for its strong after-sales support and quick service response,
                which is why many beverage businesses trust them as their go-to
                partner.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 5: Compare Pricing Transparently
              </h3>
              <p>
                Don't just compare machine price. Compare: Installation charges
                Training cost Annual maintenance contract (AMC) price Spare
                parts availability and pricing A low upfront cost with high
                maintenance expenses is never a good deal.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Moves from Right */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-bold text-gray-900">
                Tip 6: Check Certifications and Compliance
              </h3>
              <p>
                Your soda plant must meet Indian food safety standards. Look
                for: CE Certification ISO certification BIS compliance (where
                applicable) FSSAI-compatible design This is not just about
                safety — it's about keeping your business legally compliant and
                ready for audits.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-gray-900">
                Tip 7: Look for Training and Operator Support
              </h3>
              <p>
                Machines are only as good as the people operating them. A
                quality manufacturer provides: Operator training at the factory
                Installation support at your facility User manuals in
                Hindi/English Video support resources
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Key Features to Look for in a Soda Plant Machine
            </h2>
            <div className="space-y-2 border-l-2 border-orange-500 pl-4 py-1">
              <p>
                <span className="font-bold">Feature</span>{" "}
                <span className="font-bold">Why It Matters</span>
              </p>
              <p>
                <span className="font-bold">
                  Automatic CIP (Clean-in-place)
                </span>{" "}
                Reduces manual cleaning time
              </p>
              <p>
                <span className="font-bold">PLC Control Panel</span> Easy
                operation and error detection
              </p>
              <p>
                <span className="font-bold">CO2 Recovery System</span> Saves gas
                costs
              </p>
              <p>
                <span className="font-bold">Stainless Steel Tank</span> Hygienic
                and long-lasting
              </p>
              <p>
                <span className="font-bold">Variable Speed Drive</span> Flexible
                production control
              </p>
              <p>
                <span className="font-bold">Touch Screen Interface</span> Easier
                training for new operators
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Types of Soda Plants Available in the Market
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <span className="font-bold">Manual Soda Plant</span> Best for
                small startups and street-side soda businesses. Low cost, easy
                to operate.
              </li>
              <li>
                <span className="font-bold">Semi-Automatic Soda Plant</span>{" "}
                Good for medium-scale businesses. Some automated steps, but
                still needs manual monitoring.
              </li>
              <li>
                <span className="font-bold">Fully Automatic Soda Plant</span>{" "}
                Best for large-scale production. Minimal human intervention,
                high output, consistent quality.
              </li>
              <li>
                <span className="font-bold">Turnkey Soda Plant</span> End-to-end
                solution — from machine setup to production start. Ideal for
                first-time entrepreneurs.
              </li>
            </ol>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Benefits of Investing in a Quality Soda Plant
            </h2>
            <p>
              Higher profit margins — produce more with less labor Consistent
              taste and carbonation — keeps customers happy Scalable production
              — start small, grow big Low wastage — better CO2 management saves
              costs Brand credibility — professionally packaged products look
              better
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Why Vpack Machine is a Trusted Choice in Delhi
            </h2>
            <p>
              When Delhi-based beverage entrepreneurs search for a reliable soda
              plant manufacturer,{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Vpack Machine consistently comes up as a top choice
              </Link>{" "}
              — and for good reason. Vpack Machine has years of hands-on
              experience in designing and manufacturing soda plants, carbonated
              beverage lines, and related packaging equipment. What sets them
              apart is not just the machine quality — it's the complete support
              they offer from the day you inquire to the day your plant is
              running at full capacity.
            </p>

            <p className="font-bold text-gray-900 mt-2">
              Here's what makes Vpack Machine stand out:
            </p>
            <p>
              Custom-built machines for all production scales In-house R&D team
              that constantly improves machine performance Quick installation
              and commissioning across Delhi NCR Dedicated after-sales team with
              fast response times Competitive pricing without compromising on
              quality Trusted by 100+ businesses across India
            </p>

            <p>
              Whether you're just starting out or expanding your existing
              beverage unit, Vpack Machine offers solutions that grow with your
              business.
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mt-4">
              Common Mistakes
            </h2>

            {/* Action Call / Request Quote Button */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3 rounded-md transition-colors shadow-md"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+919135636541"
                className="inline-block bg-gray-900 hover:bg-black text-white font-bold px-6 py-3 rounded-md transition-colors shadow-md"
              >
                Call Now (+91 9135636541)
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer info bar */}
        <div className="mt-12 pt-4 border-t border-gray-300 flex justify-between items-center text-sm text-gray-600">
          <div>5 June 2026 / 0 Comments</div>
          <div>
            <Link
              href="/contact"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded border border-gray-300 text-xs"
            >
              Read More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

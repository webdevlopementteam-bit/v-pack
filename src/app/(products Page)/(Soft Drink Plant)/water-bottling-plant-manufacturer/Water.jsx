"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  Star,
  ArrowRight,
  Settings,
  PhoneCall,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

export default function BottleRFCMACHINE30BPM() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const specsData = [
    { parameter: "Capacity", specification: "30 Bottles Per Minute (BPM)" },
    { parameter: "Material Used", specification: "SS 304 / SS 316" },
    { parameter: "Filling Heads", specification: "6" },
    { parameter: "Rinsing Heads", specification: "6" },
    { parameter: "Capping Heads", specification: "3" },
    { parameter: "Power Consumption", specification: "Approx. 5 kW" },
    { parameter: "Air Consumption", specification: "6 – 8 bar" },
    { parameter: "Bottle Size Range", specification: "200 ml to 2 liters" },
    { parameter: "Nozzles", specification: "6 Rinsing, 6 Filling, 3 Capping" },
    {
      parameter: "Electrical Components",
      specification: "Delta, INVT, Crompton",
    },
    { parameter: "Stainless Steel Thickness", specification: "3 mm" },
    {
      parameter: "Control Panel",
      specification: "Optional (10% extra of the original cost) – Delta / INVT",
    },
    { parameter: "Voltage", specification: "3-phase, 440V, 50 Hz" },
    { parameter: "Filling Accuracy", specification: "±1%" },
    { parameter: "Conveyor System", specification: "Automatic" },
    { parameter: "Sensor Type", specification: "Photoelectric (Omron / Sick)" },
    { parameter: "Emergency Stop", specification: "Yes" },
    {
      parameter: "Water Consumption (Rinsing)",
      specification: "500 – 700 liters per hour",
    },
    {
      parameter: "Water Consumption (Filling)",
      specification: "1800 liters per hour",
    },
    {
      parameter: "Motors Used",
      specification: "Rotomotive, Crompton, Ultravario",
    },
    {
      parameter: "Motor Capacity",
      specification: "1 HP (Conveyor), 2 HP (Main Filling System)",
    },
    {
      parameter: "Dimensions (L × W × H)",
      specification: "8 ft × 6 ft × 7 ft",
    },
    { parameter: "Weight", specification: "Approx. 1200 kg" },
    { parameter: "Customization Options", specification: "Available" },
    { parameter: "Integration with Production Line", specification: "Yes" },
    { parameter: "Warranty", specification: "1 Year" },
    { parameter: "Certification", specification: "ISO Certified" },
    { parameter: "Delivery Time", specification: "4 to 8 weeks from order" },
    { parameter: "Operator Training", specification: "Provided" },
    { parameter: "Spare Parts Availability", specification: "Yes" },
    {
      parameter: "Lifespan",
      specification: "10 – 15 years (with maintenance)",
    },
    { parameter: "Installation & Commissioning", specification: "Provided" },
    { parameter: "After-Sales Support", specification: "Available" },
    {
      parameter: "Suitable for Carbonated Drinks",
      specification: "No (Only non-carbonated liquids)",
    },
    {
      parameter: "Products That Can Be Filled",
      specification: "Water, Juice, Non-carbonated beverages",
    },
    {
      parameter: "Manpower Required",
      specification: "1 Skilled Operator + 1 Helper",
    },
  ];

  const faqData = [
    {
      question: "1. What is the capacity of the Bottle RFC Machine 30 BPM?",
      answer:
        "The machine has a production capacity of 30 bottles per minute and supports bottle sizes from 200 ml to 2 liters with ±1% filling accuracy.",
    },
    {
      question: "2. Which products can be filled using this machine?",
      answer:
        "It is suitable for non-carbonated liquids such as purified water, juice, and other still beverages. It is not designed for carbonated drinks.",
    },
    {
      question: "3. Is the machine fully automatic?",
      answer:
        "Yes, the Bottle RFC Machine 30 BPM is fully automatic and integrates rinsing, filling, and capping operations with an automatic conveyor system.",
    },
    {
      question: "4. Does Vpack Machine provide installation and training?",
      answer:
        "Yes, Vpack Machine provides installation, commissioning, and operator training to ensure smooth and efficient machine operation.",
    },
    {
      question: "5. What is the lifespan of the Bottle RFC Machine 30 BPM?",
      answer:
        "With proper maintenance, the machine can operate efficiently for 10 to 15 years, making it a long-term investment for beverage manufacturers.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* HEADER BANNER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#CCD2D8] py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 shadow-sm text-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2  min-h-[80px] md:min-h-[100px]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
            <span className="text-[#111e30]">BOTTLE RFC MACHINE </span>
            <span className="text-[#3b82f6]">30 BPM</span>
          </h1>
        </div>
      </motion.header>

      {/* MAIN CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT COLUMN: STICKY PRODUCT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-4 lg:sticky lg:top-8 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-6 relative"
          >
            <div className="relative w-full h-72 sm:h-80 bg-slate-100 rounded-xl overflow-hidden mb-6 flex items-center justify-center border border-slate-100">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src="/images/products/high-speed.png"
                alt="Bottle RFC Machine 30 BPM"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x400/f1f5f9/334155?text=Bottle+RFC+Machine";
                }}
              />
            </div>

            <div className="flex items-center space-x-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold text-slate-900 leading-snug mb-3">
              High-Speed, Fully Automated Non-Carbonated Bottling
            </h3>

            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed mb-6">
              Engineered for medium-scale production, this machine features{" "}
              <span className="font-medium text-slate-800">
                6 rinsing heads, 6 filling heads
              </span>
              , and{" "}
              <span className="font-medium text-slate-800">
                3 capping heads
              </span>
              , all driven by premium Rotomotive/Crompton motors. With
              intelligent photoelectric sensors (Omron/Sick), an optional
              Delta/INVT control panel, and a robust 3 mm SS construction, it
              processes 30 bottles per minute at just ≈5 kW of power and 6–8 bar
              air pressure.
            </p>

            <motion.a
              href="tel:+919135636541"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 border-2 border-orange-500/80 rounded-xl text-slate-800 font-medium bg-gradient-to-r from-orange-50/50 to-amber-50/50 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-md group text-sm"
            >
              <span>Call Now</span>
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* RIGHT COLUMN: DETAILED CONTENT & SECTIONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            {/* OVERVIEW */}
            <div className="border-b border-dashed border-slate-300 pb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                BOTTLE RFC MACHINE 30 BPM
              </h2>

              <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] lg:text-[18px]">
                <p>
                  The{" "}
                  <span className="font-medium text-slate-900">
                    VPACK 30 BPM Bottle RFC Machine
                  </span>{" "}
                  offers a compact, efficient solution by combining automatic
                  rinsing, filling, and capping in one space-saving unit.{" "}
                  <span className="font-medium text-slate-900">
                    Made from high-quality SS 304 / SS 316 stainless steel
                  </span>
                  , it accommodates bottle sizes ranging from 200 ml to 2 liters
                  with a filling accuracy of ±1%. This machine is ideal for
                  hygienic, reliable packaging of water and juice, delivering
                  high performance while maintaining a minimal footprint.
                </p>
                <p>
                  With the rising demand for safe and purified drinking water,
                  establishing a modern bottling setup has become a profitable
                  business opportunity. Selecting the right{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    water bottling plant manufacturer
                  </Link>{" "}
                  is essential to ensure consistent quality, safety, and
                  long-term operational efficiency. For businesses looking for a
                  dependable solution in Delhi, investing in advanced machinery
                  from a trusted water bottling plant manufacturer helps achieve
                  higher productivity while meeting strict hygiene and industry
                  standards.
                </p>
              </div>
            </div>

            {/* WATER BOTTLING PLANT IN DELHI SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Water Bottling Plant Manufacturer in Delhi for Small & Large
                Businesses
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] lg:text-[18px] mb-6">
                <p>
                  Delhi represents a high-consumption market for packaged
                  drinking water, driven by strong demand from offices, hotels,
                  hospitals, events, and residential areas. Therefore, a
                  reliable{" "}
                  <Link href="#" className="text-blue-600 hover:underline">
                    water bottling plant manufacturer in Delhi
                  </Link>{" "}
                  must develop systems that ensure continuous production while
                  adhering to stringent food safety and hygiene standards.
                </p>
                <p>
                  Solutions are available for different business scales,
                  including:
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-[16px] lg:text-[18px] mb-6">
                <li>Small-scale bottling systems for startups</li>
                <li>Medium-capacity plants for local and regional brands</li>
                <li>
                  Fully automated large-scale bottling solutions for high-volume
                  production
                </li>
              </ul>
              <p className="text-slate-600 text-[16px] lg:text-[18px]">
                This flexibility allows businesses to begin with a suitable
                capacity and gradually expand their production as market demand
                grows.
              </p>
            </div>

            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <div className="border-b border-dashed border-slate-300 pb-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Technical Specifications
                </h3>
              </div>

              <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                <table className="w-full text-left border-collapse text-[16px] lg:text-[18px]">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                      <th className="py-3 px-4 font-semibold">Parameter</th>
                      <th className="py-3 px-4 font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {specsData.map((spec, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 1 ? "bg-slate-50" : "bg-white"}
                      >
                        <td className="py-3 px-4 font-medium">
                          {spec.parameter}
                        </td>
                        <td className="py-3 px-4">{spec.specification}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* IDEAL CHOICE SECTION */}
            <div className="border-b border-dashed border-slate-300 pb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                Ideal Choice for Non-Carbonated Beverage Producers
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed text-[16px] lg:text-[18px]">
                <p>
                  This machine is specifically designed for non-carbonated
                  liquids and is not suitable for carbonated drinks. It is an
                  excellent solution for manufacturers of bottled water, fruit
                  juices, and other still beverages. Only one skilled operator
                  and one helper are required to run the system efficiently,
                  helping reduce labor costs while maintaining high
                  productivity.
                </p>
                <p>
                  Backed by ISO certification, one-year warranty, and reliable
                  after-sales support,{" "}
                  <span className="font-medium text-slate-900">
                    Vpack Machine
                  </span>{" "}
                  ensures complete customer satisfaction and long-term
                  performance reliability.
                </p>
                <p>
                  As a dependable{" "}
                  <span className="font-medium text-slate-900">
                    Water Bottling Plant Manufacturer
                  </span>
                  , Vpack Machine focuses on delivering quality, precision, and
                  efficiency to help businesses grow in a competitive beverage
                  market.
                </p>
              </div>
            </div>

            {/* CALL TO ACTION BANNER */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-slate-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2.5 bg-rose-500/20 rounded-xl text-rose-400">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Ready to Transform Your Bottling Line?
                </h3>
              </div>
              <p className="text-[16px] lg:text-[18px] text-slate-300 mb-8 max-w-2xl">
                Contact Vpack Machine today for custom quotes, technical
                consultations, and expert guidance.
              </p>
              <motion.a
                href="tel:+919135636541"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-orange-500 rounded-xl text-slate-900 font-medium bg-white hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 shadow-lg group text-sm"
              >
                <span>Call Now</span>
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            {/* FAQ SECTION */}
            <div className="pt-4">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  FAQs
                </h3>
                <p className="text-[16px] lg:text-[18px] text-slate-600">
                  Find quick answers to common questions about the Bottle RFC
                  Machine 30 BPM.
                </p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-white border-blue-200 shadow-md"
                          : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className={`w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 transition-colors ${
                          isOpen
                            ? "bg-slate-100/80 text-blue-900"
                            : "bg-slate-100/50 hover:bg-slate-100"
                        }`}
                      >
                        <span className="text-[16px] lg:text-[18px] pr-4">
                          {faq.question}
                        </span>
                        <div
                          className={`p-1.5 rounded-full ${isOpen ? "bg-blue-200 text-blue-900" : "bg-slate-200 text-slate-700"}`}
                        >
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="p-6 text-[16px] lg:text-[18px] text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

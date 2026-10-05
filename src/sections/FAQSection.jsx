"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How do I choose the right machine for my business?",
      answer:
        "Our team will assess your production needs and recommend the best machine based on capacity, budget, and industry requirements. Contact us for a free consultation.",
    },
    {
      question: "What is the delivery timeline for your machines?",
      answer:
        "Delivery time depends on the machine type and customization required. Standard machines take 4-6 weeks, while custom orders may take longer.",
    },
    {
      question: "Do you offer financing options or payment plans?",
      answer:
        "Yes, we provide flexible payment options and can assist in financing solutions through trusted financial partners.",
    },
    {
      question: "What warranty and support services do you provide?",
      answer:
        "We offer a warranty on all machines, along with 24/7 customer support, spare parts availability, and on-site service when needed.",
    },
    {
      question:
        "Can I visit your manufacturing facility before placing an order?",
      answer:
        "Yes! We welcome factory visits to showcase our production process and quality standards. Schedule an appointment with us anytime.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-bold uppercase tracking-wider text-lg block mb-2">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Find Out Answers Here
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Image (Appears FIRST on mobile using order-1, SECOND on desktop using lg:order-2) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative w-full h-[300px] sm:h-[520px] order-1 lg:order-2"
          >
            <Image
              src="/images/home/faq/faq.png"
              alt="FAQ Support"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="object-contain"
            />
          </motion.div>

          {/* Left Accordion Card (Appears SECOND on mobile using order-2, FIRST on desktop using lg:order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-gray-100 p-8 sm:p-10 rounded-2xl shadow-xl space-y-4 order-2 lg:order-1"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-3 focus:outline-none group"
                  >
                    <span className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-orange-500 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className="text-gray-400 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 text-sm sm:text-base pt-2 pb-2 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

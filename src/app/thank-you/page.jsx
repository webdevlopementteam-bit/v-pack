"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl text-center"
      >
        {" "}
        <div className="bg-white border border-orange-100 rounded-3xl shadow-xl px-6 py-12 sm:px-10 sm:py-16">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-orange-50"
          >
            {" "}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FD3101] text-white text-4xl font-bold shadow-lg">
              ✓{" "}
            </div>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Thank You!
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-semibold text-[#FD3101]">
            Your message has been submitted successfully.
          </p>
          {/* Description */}
          <p className="mt-4 max-w-xl mx-auto text-[16px] sm:text-[17px] leading-relaxed text-slate-600">
            Thank you for contacting <strong>Vpack Machine Pvt. Ltd.</strong>.
            Our team has received your enquiry and will get back to you shortly.
          </p>
          {/* Divider */}
          <div className="mx-auto my-8 h-px w-20 bg-orange-200" />
          {/* Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#FD3101] px-8 py-3.5 text-[16px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
          >
            Back to Home
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            We appreciate your interest in Vpack Machine Pvt. Ltd.
          </p>
        </div>
      </motion.div>
    </main>
  );
}

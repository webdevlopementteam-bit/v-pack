"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search, RefreshCw } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Decorative background glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 py-12">
        {/* Animated 404 Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative inline-block"
        >
          <span className="text-8xl sm:text-9xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300 drop-shadow-sm select-none">
            404
          </span>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-orange-500 rounded-full blur-[1px]" />
        </motion.div>

        {/* Heading & Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 space-y-3"
        >
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Page Not Found
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
            Oops! The page you are looking for doesn’t exist, has been removed,
            or is temporarily unavailable.
          </p>
        </motion.div>

        {/* Quick Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-orange-600/20 active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        {/* Helpful Links Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-gray-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-400"
        >
          <Link
            href="/products"
            className="hover:text-orange-400 transition-colors py-1"
          >
            Browse Products
          </Link>
          <Link
            href="/about"
            className="hover:text-orange-400 transition-colors py-1"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-orange-400 transition-colors py-1 col-span-2 sm:col-span-1"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

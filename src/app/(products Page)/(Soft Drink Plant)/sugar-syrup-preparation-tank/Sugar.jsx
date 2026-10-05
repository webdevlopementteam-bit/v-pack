"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function SugarSyrupPreparationTankPage() {
  const handleCall = () => {
    window.location.href = "tel:+919135636541";
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans selection:bg-orange-200 text-[16px] lg:text-[18px]">
      {/* Top Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-slate-200 py-6 px-4 shadow-sm border-b border-slate-300"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-center min-h-[100px] md:min-h-[120px]">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#102a43] tracking-tight">
            Sugar Syrup <span className="text-blue-600">Preparation Tank</span>
          </h1>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>-</span>
            <Link
              href="/products"
              className="hover:text-blue-600 transition-colors"
            >
              Products & Solutions
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Container with Two-Column Layout */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scrollable Content Container */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
          >
            {/* Description & Highlights Section */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🌟</span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#102a43] tracking-tight">
                  Sugar Syrup Preparation Tank
                </h2>
              </div>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-3">
                Description
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Welcome to the world of{" "}
                <strong>precision, purity, and performance</strong>. At{" "}
                <strong>Vpack</strong>, we proudly stand as a{" "}
                <strong>
                  leading manufacturer of Sugar Syrup Preparation Tanks
                </strong>
                , trusted by industries for delivering unmatched quality and
                consistency.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Crafted with <strong>premium SS 304 stainless steel</strong> and
                built to handle high-temperature operations, our tanks are the{" "}
                <strong>gold standard</strong> in sugar melting and syrup
                preparation. Whether you’re in food processing, beverage
                manufacturing, or confectionery – this is the tank your process
                deserves
              </p>

              <hr className="border-dashed border-slate-200 mb-6" />

              <h3 className="text-lg font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>🛠️</span> Product Highlights
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-slate-700 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Capacity:</strong> 1000 – 5000 Liters
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Material:</strong> High-Grade Stainless Steel (SS
                    304)
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Storage Material:</strong> Syrup
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Melting Point:</strong> Up to 1500°C
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Application:</strong> Ideal for Sugar Melting &
                    Syrup Preparation
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <div>
                    <strong>Brand:</strong> Vpack – Trusted by Industry Leaders
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Vpack's Syrup Preparation Tank? */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-4 flex items-center gap-2">
                <span>💎</span> Why Choose Vpack's Syrup Preparation Tank?
              </h3>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Unmatched Durability</strong> – Built to last with
                    superior material strength
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Food-Grade Cleanliness</strong> – Hygienic, safe,
                    and easy to maintain
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Precision Engineering</strong> – Ensures smooth,
                    uniform melting every time
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Corrosion & Heat Resistant</strong> – Perfect for
                    high-temperature applications
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-purple-600 font-bold mt-0.5">✔</span>
                  <div>
                    <strong>Customizable Designs</strong> – Tailored to fit your
                    unique production needs
                  </div>
                </li>
              </ul>
            </div>

            {/* Boost Your Production with Confidence */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#102a43] mb-3 flex items-center gap-2">
                <span>🚀</span> Boost Your Production with Confidence
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Sugar Syrup Preparation Tanks combine{" "}
                <strong>innovation, efficiency, and reliability</strong> –
                giving your operations the edge they need. Trusted by hundreds
                of happy clients, Vpack tanks are more than just machinery –
                they’re a <strong>promise of quality</strong>.
              </p>
            </div>

            <hr className="border-dashed border-slate-300 my-8" />

            {/* FAQ Section */}
            <FAQ />
          </motion.div>

          {/* Right Column: Sticky Product Card Container */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 lg:sticky lg:top-8 order-1 lg:order-2 self-start"
          >
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 relative overflow-hidden">
              {/* Machine Image */}
              <div className="rounded-xl overflow-hidden mb-5 bg-gradient-to-b from-slate-50 to-slate-100 p-2 border border-slate-100">
                <Image
                  src="/images/products/sugar.png"
                  alt="Sugar Syrup Preparation Tank"
                  width={400}
                  height={250}
                  className="w-full h-64 object-contain rounded-lg shadow-inner hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-3 text-amber-400 text-lg">
                {"★".repeat(5)}
              </div>
              {/* Title & Subtitle */}
              <h2 className="text-xl font-bold text-[#102a43] mb-3 flex items-center gap-2">
                <span>🌟</span> Sugar Syrup Preparation Tank
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Upgrade your production efficiency with Vpack’s reliable and
                high-capacity <strong>Sugar Syrup Preparation Tanks</strong> —
                designed to deliver performance, safety, and precision every
                time.
              </p>
              {/* Call Now Button */}
              <button
                onClick={handleCall}
                className="w-full py-3 px-6 bg-white hover:bg-orange-50 text-slate-800 font-medium rounded-xl border border-orange-400 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Call Now</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
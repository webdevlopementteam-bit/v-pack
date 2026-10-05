import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0b131a] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
        {/* Column 1: Brand / Tagline - Centered & Larger Text */}
        <div className="lg:col-span-2 flex flex-col items-center lg:items-start justify-start text-center lg:text-left space-y-4 px-2 pt-2">
          {/* Footer Logo */}
          <Link
            href="/"
            className="relative flex items-center justify-center lg:justify-start w-full"
          >
            <div className="bg-white/95 rounded-xl px-5 py-3 shadow-lg shadow-black/20 border border-white/10">
              <Image
                src="/logo/logo1.png"
                alt="V Pack Machine Logo"
                width={220}
                height={90}
                className="w-auto h-[40px] sm:h-[60px] object-contain"
                priority
              />
            </div>
          </Link>

          <p className="text-gray-300 text-[18px] sm:text-lg leading-relaxed max-w-md font-medium">
            Revolutionizing Industries with Innovative Machinery and Unmatched
            Engineering Excellence.
          </p>
        </div>

        {/* Column 2: Important Links */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-white font-semibold text-xl lg:text-xl tracking-wide">
            Important links
          </h3>
          <ul className="space-y-2.5 text-[16px]">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-conditions"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-white transition-colors"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-white font-semibold text-xl lg:text-xl tracking-wide">
            Company
          </h3>
          <ul className="space-y-2.5 text-[16px]">
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="hover:text-white transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-white font-semibold text-xl lg:text-xl tracking-wide">
            Contact
          </h3>
          <ul className="space-y-3 text-[16px] text-gray-300">
            <li>
              <a
                href="mailto:suman@vermaprocesspack.com"
                className="hover:text-white transition-colors break-all"
              >
                suman@vermaprocesspack.com
              </a>
            </li>
            <li>
              <a
                href="tel:+919135636541"
                className="hover:text-white transition-colors block"
              >
                +91 9135636541
              </a>
            </li>
            <li>
              <a
                href="tel:+918448868851"
                className="hover:text-white transition-colors block"
              >
                +91 8448868851
              </a>
            </li>
            <li className="text-gray-400 text-[15px] leading-relaxed">
              Plot No- 154/184, Balmiki Chaupal, Near Chota MCD School, Pooth
              Khurd, New Delhi 110039
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-gray-800/80 text-center text-sm text-gray-500">
        <p>
          2025 V Pack Machine Copyright all right reserved. | Design & Developed
          by{" "}
          <Link
            href="https://cybertricks.cybertricksmedia.in/"
            target="_blank"
            className="text-[#F54900] hover:text-blue-500"
          >
            CYBERTRICKS Media Pvt Ltd{" "}
          </Link>
        </p>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [openMobileCategories, setOpenMobileCategories] = useState({});

  /* ================= TICKER STATE ================= */

  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerAnimating, setTickerAnimating] = useState(true);

  const tickerTrackRef = useRef(null);

  // Ticker products list with paths
  const tickerProducts = [
    {
      name: "Water bottling plant...",
      path: "/water-bottling-plant",
    },
    {
      name: "Liquid filling plant machine...",
      path: "/liquid-filling-plant-manufacturer-in-haryana",
    },
    {
      name: "Soda Plant Manufacturer...",
      path: "/soda-plant-manufacturer",
    },
    {
      name: "Packaged Drinking Water Plant...",
      path: "/packaged-drinking-plant-manufacturer-in-bengaluru",
    },
    {
      name: "Mineral Water Plant Manufacturer...",
      path: "/mineral-water-plant-manufacturer",
    },
  ];

  /*
   * We render the products twice.
   *
   * Example:
   *
   * A B C D E A B C D E
   *
   * This allows the ticker to move continuously while
   * Previous / Next always moves exactly one product.
   */
  const duplicatedTickerProducts = [...tickerProducts, ...tickerProducts];

  /* ================= TICKER HELPERS ================= */

  const getTickerOffset = (index) => {
    if (!tickerTrackRef.current) return 0;

    const items = tickerTrackRef.current.children;

    if (!items || !items[index]) return 0;

    return items[index].offsetLeft;
  };

  /* ================= NEXT TICKER ================= */

  const handleTickerNext = () => {
    setTickerAnimating(true);

    setTickerIndex((currentIndex) => {
      /*
       * There are two copies of the products.
       *
       * 0 1 2 3 4 = first copy
       * 5 6 7 8 9 = second copy
       *
       * When we reach the last item (9), go to
       * item 5, which is visually the same first product.
       */
      if (currentIndex >= tickerProducts.length * 2 - 1) {
        return tickerProducts.length;
      }

      return currentIndex + 1;
    });
  };

  /* ================= PREVIOUS TICKER ================= */

  const handleTickerPrev = () => {
    setTickerAnimating(true);

    setTickerIndex((currentIndex) => {
      /*
       * If we are at the first product,
       * move to the last product of the first copy.
       */
      if (currentIndex <= 0) {
        return tickerProducts.length - 1;
      }

      /*
       * If we are at the beginning of the second copy,
       * go back to the last item of the first copy.
       */
      if (currentIndex === tickerProducts.length) {
        return tickerProducts.length - 1;
      }

      return currentIndex - 1;
    });
  };

  /* ================= AUTO TICKER ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerAnimating(true);

      setTickerIndex((currentIndex) => {
        if (currentIndex >= tickerProducts.length * 2 - 1) {
          return tickerProducts.length;
        }

        return currentIndex + 1;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [tickerProducts.length]);

  /* ================= TICKER POSITION ================= */

  const tickerOffset = getTickerOffset(tickerIndex);

  /* ================= HANDLE TICKER LOOP ================= */

  useEffect(() => {
    if (!tickerTrackRef.current) return;

    const track = tickerTrackRef.current;

    const handleTransitionEnd = () => {
      if (tickerIndex >= tickerProducts.length) {
        setTickerAnimating(false);

        requestAnimationFrame(() => {
          setTickerIndex((currentIndex) => {
            if (currentIndex >= tickerProducts.length) {
              return currentIndex - tickerProducts.length;
            }

            return currentIndex;
          });

          requestAnimationFrame(() => {
            setTickerAnimating(true);
          });
        });
      }
    };

    track.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      track.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [tickerIndex, tickerProducts.length]);

  /* ================= MOBILE ACTIVE CATEGORY ================= */

  // Mega menu columns & items with individual paths
  const megaMenuData = [
    {
      category: "Soft Drink Plant",
      items: [
        {
          name: "Sugar Syrup Preparation Tank",
          path: "/sugar-syrup-preparation-tank",
        },
        {
          name: "Carbonator Machine",
          path: "/carbonator",
        },
        {
          name: "Industrial Chiller Machine",
          path: "/industrial-chiller-machine",
        },
        {
          name: "Bottle RFC Machine 30 BPM",
          path: "/water-bottling-plant-manufacturer",
        },
        {
          name: "Mixing Tank - 1000 L Capacity",
          path: "/mixing-tank-1000-l-capacity",
        },
        {
          name: "Filter Press",
          path: "/filterpress",
        },
      ],
    },
    {
      category: "Mineral Water Plant",
      items: [
        {
          name: "BOPP Labelor",
          path: "/bopp-labelor",
        },
        {
          name: "Industrial RO Plant",
          path: "/industrial-ro-plant",
        },
        {
          name: "Shrink Wrapping Machine",
          path: "/semi-automatic-shrink-wrapping-machine",
        },
        {
          name: "SS Water Storage Tank",
          path: "/ss-water-storage-tank",
        },
        {
          name: "Sticker Labelor Machine",
          path: "/sticker-labelor-machine",
        },
        {
          name: "Capper Machine VPCL-40M",
          path: "/capper-machine-vpcl-40m",
        },
        {
          name: "Liquid Filling Plant",
          path: "/liquid-filling-plant-manufacturer",
        },
      ],
    },
    {
      category: "Juice Processing Plant",
      items: [
        {
          name: "Cooling Tunnel Machine",
          path: "/cooling-tunnel-machine-manufacturer",
        },
        {
          name: "Fruit Pulper Machine",
          path: "/fruit-pulper-machine",
        },
        {
          name: "Blending Tank",
          path: "/ss-blending-tank-manufacturer",
        },
        {
          name: "Pasteurizer (200 LPH)",
          path: "/pasteurizer-200-lph",
        },
        {
          name: "Homogenizer",
          path: "/homogenizer",
        },
      ],
    },
    {
      category: "Fruit Juice Plant",
      items: [
        {
          name: "Agitator Tank",
          path: "/agitator-tank",
        },
        {
          name: "Juice RFC Machine",
          path: "/fruit-juice-plant-manufacturer",
        },
      ],
    },
    {
      category: "Pet Blow Moulding",
      items: [
        {
          name: "Pet Blow Moulding Machine",
          path: "/pet-blow-moulding-machine",
        },
      ],
    },
  ];

  // Automatically open the mobile category dropdown that contains the active pathname
  useEffect(() => {
    const activeCategories = {};
    let hasActiveProduct = false;

    megaMenuData.forEach((group) => {
      const containsActive = group.items.some((item) => item.path === pathname);

      if (containsActive) {
        activeCategories[group.category] = true;
        hasActiveProduct = true;
      }
    });

    if (hasActiveProduct) {
      setOpenMobileCategories(activeCategories);
      setMobileProductsOpen(true);
    }
  }, [pathname]);

  const toggleMobileCategory = (categoryName) => {
    setOpenMobileCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <header className="w-full bg-white shadow-sm relative z-50 font-sans">
      {/* ================= TOP BAR ================= */}

      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between">
          {/* Left: Products label + Glowing Dot + Auto Ticker + Arrows */}

          <div className="flex items-center space-x-3 flex-1 overflow-hidden">
            {/* Products + Orange Dot */}

            <Link
              href="/products"
              className="flex items-center space-x-2 shrink-0 cursor-pointer group"
            >
              <span className="font-medium text-gray-900 group-hover:text-[#FF5722] transition text-sm sm:text-base">
                Products
              </span>

              <span className="w-2.5 h-2.5 bg-[#FF5722] rounded-full inline-block animate-pulse"></span>
            </Link>

            {/* ================= TICKER ================= */}

            <div className="ticker-container flex-1 overflow-hidden mx-4">
              <div
                ref={tickerTrackRef}
                className="ticker-track"
                style={{
                  transform: `translate3d(-${tickerOffset}px, 0, 0)`,
                  transition: tickerAnimating
                    ? "transform 0.55s ease-in-out"
                    : "none",
                  willChange: "transform",
                }}
              >
                {duplicatedTickerProducts.map((prod, index) => {
                  const isSubActive = pathname === prod.path;

                  return (
                    <Link
                      key={`${prod.path}-${index}`}
                      href={prod.path}
                      className={`ticker-item text-xs sm:text-sm whitespace-nowrap ${
                        isSubActive
                          ? "text-[#FF5722] font-semibold"
                          : "text-gray-500 hover:text-[#FF5722]"
                      }`}
                      title={prod.name}
                    >
                      {prod.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ================= TICKER BUTTONS ================= */}

            <div className="hidden sm:flex items-center space-x-1 shrink-0">
              <button
                type="button"
                onClick={handleTickerPrev}
                className="ticker-prev w-7 h-7 bg-[#333] text-white flex items-center justify-center rounded-sm hover:bg-black transition cursor-pointer"
                aria-label="Previous product"
              >
                <ArrowLeft size={14} />
              </button>

              <button
                type="button"
                onClick={handleTickerNext}
                className="ticker-next w-7 h-7 bg-[#333] text-white flex items-center justify-center rounded-sm hover:bg-black transition cursor-pointer"
                aria-label="Next product"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* ================= SOCIAL MEDIA ================= */}

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 ml-3 lg:ml-6 shrink-0 ">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61561925815556"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8  rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vpackmachinepvt?igsh=eXdmaTg3cmR0c3pi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 3.668-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/suman-verma-709417225/?isSelfProfile=false"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 hidden md:flex items-center justify-center relative">
        {/* Desktop Logo */}

        <Link href="/" className="absolute left-4 sm:left-8 flex items-center">
          <Image
            src="/logo/logo1.png"
            alt="Logo"
            width={150}
            height={55}
            className="w-auto h-14 object-contain"
            priority
          />
        </Link>

        {/* Center Navigation Links */}

        <nav className="flex items-center justify-center space-x-4 lg:space-x-8">
          {/* Home */}

          <Link
            href="/"
            className={`transition font-medium ${
              pathname === "/"
                ? "text-[#FF5722] font-semibold"
                : "text-gray-900 hover:text-[#FF5722]"
            }`}
          >
            Home
          </Link>

          {/* Products */}

          <div
            className="relative group py-2"
            onMouseEnter={() => setDesktopProductsOpen(true)}
            onMouseLeave={() => setDesktopProductsOpen(false)}
          >
            <Link
              href="/products"
              className={`flex items-center space-x-1 font-semibold focus:outline-none cursor-pointer transition ${
                pathname.startsWith("/products")
                  ? "text-[#FF5722]"
                  : "text-gray-800 hover:text-[#FF5722]"
              }`}
            >
              <span>Products</span>
              <ChevronDown size={16} />
            </Link>

            {/* Desktop Mega Menu */}

            {desktopProductsOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[92vw] md:w-[500px] lg:w-[1220px] bg-white shadow-2xl border border-gray-100 p-5 lg:p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 rounded-b-lg">
                {megaMenuData.map((col, idx) => (
                  <div key={idx} className="space-y-3 lg:space-y-4">
                    <h3 className="font-bold text-gray-900 text-sm lg:text-base border-b pb-2 tracking-tight select-none">
                      {col.category}
                    </h3>

                    <ul className="space-y-2 lg:space-y-2.5">
                      {col.items.map((item, iIdx) => {
                        const itemPath = item.path;
                        const isItemActive = pathname === itemPath;

                        return (
                          <li key={iIdx}>
                            <Link
                              href={itemPath}
                              onClick={() => setDesktopProductsOpen(false)}
                              className={`text-xs lg:text-[15px] transition block leading-relaxed ${
                                isItemActive
                                  ? "text-[#FF5722] font-semibold"
                                  : "text-gray-700 hover:text-[#FF5722] hover:font-medium"
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* About */}

          <Link
            href="/about"
            className={`transition font-medium ${
              pathname === "/about"
                ? "text-[#FF5722] font-semibold"
                : "text-gray-700 hover:text-[#FF5722]"
            }`}
          >
            About Us
          </Link>

          {/* Blog */}

          <Link
            href="/blog"
            className={`transition font-medium ${
              pathname === "/blog"
                ? "text-[#FF5722] font-semibold"
                : "text-gray-700 hover:text-[#FF5722]"
            }`}
          >
            Blog
          </Link>

          {/* Contact */}

          <Link
            href="/contact"
            className={`transition font-medium ${
              pathname === "/contact-us"
                ? "text-[#FF5722] font-semibold"
                : "text-gray-700 hover:text-[#FF5722]"
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </div>

      {/* ================= MOBILE HEADER ================= */}

      <div className="flex md:hidden items-center justify-between w-full px-4 py-3">
        {/* Mobile Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo1.png"
            alt="Logo"
            width={135}
            height={50}
            className="w-auto h-12 object-contain"
            priority
          />
        </Link>

        {/* Hamburger */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE DRAWER MENU ================= */}

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-2xl py-5 px-4 transition-all animate-fadeIn max-h-[80vh] overflow-y-auto">
          {/* Mobile Social Media Section */}

          <div className="mb-5 rounded-xl bg-gray-50 border border-gray-100 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
              Follow Us
            </p>

            <div className="flex items-center justify-start gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61561925815556"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vpackmachinepvt?igsh=eXdmaTg3cmR0c3pi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-3.584-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.28-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 3.668-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/suman-verma-709417225/?isSelfProfile=false"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:text-[#FF5722] hover:border-[#FF5722] hover:shadow-md transition-all"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}

          <ul className="space-y-2 text-base font-medium">
            {/* Home */}

            <li>
              <Link
                href="/"
                className={`flex items-center w-full px-4 py-3 rounded-lg transition ${
                  pathname === "/"
                    ? "text-[#FF5722] bg-orange-50 font-bold"
                    : "text-gray-800 hover:text-[#FF5722] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Products */}

            <li>
              <div
                className={`flex items-center justify-between w-full px-4 py-3 rounded-lg cursor-pointer transition ${
                  pathname.startsWith("/products")
                    ? "text-[#FF5722] bg-orange-50 font-bold"
                    : "text-gray-800 hover:bg-gray-50"
                }`}
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              >
                <span className="font-semibold">Products</span>

                <ChevronRight
                  size={18}
                  className={`transition-transform ${
                    mobileProductsOpen
                      ? "rotate-90 text-[#FF5722]"
                      : "text-gray-500"
                  }`}
                />
              </div>

              {/* Mobile Subcategories */}

              {mobileProductsOpen && (
                <div className="mt-2 ml-2 space-y-2">
                  {megaMenuData.map((group, gIdx) => {
                    const isCatOpen = openMobileCategories[group.category];

                    return (
                      <div
                        key={gIdx}
                        className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                      >
                        <div className="flex items-center justify-between w-full px-4 py-3">
                          <span className="font-bold text-sm text-gray-900 uppercase tracking-wide">
                            {group.category}
                          </span>

                          <button
                            onClick={() => toggleMobileCategory(group.category)}
                            className="focus:outline-none cursor-pointer p-1"
                          >
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${
                                isCatOpen
                                  ? "rotate-180 text-[#FF5722]"
                                  : "text-gray-500"
                              }`}
                            />
                          </button>
                        </div>

                        {isCatOpen && (
                          <ul className="px-3 pb-3 pt-1 border-t border-gray-200 space-y-1">
                            {group.items.map((subItem, sIdx) => {
                              const subItemPath = subItem.path;

                              const isSubItemActive = pathname === subItemPath;

                              return (
                                <li key={sIdx}>
                                  <Link
                                    href={subItemPath}
                                    className={`text-sm px-3 py-2 rounded-md block transition font-medium ${
                                      isSubItemActive
                                        ? "text-[#FF5722] font-bold bg-white shadow-sm"
                                        : "text-gray-700 hover:text-[#FF5722] hover:bg-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    • {subItem.name}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>

            {/* About Us */}

            <li>
              <Link
                href="/about"
                className={`flex items-center w-full px-4 py-3 rounded-lg transition ${
                  pathname === "/about"
                    ? "text-[#FF5722] bg-orange-50 font-bold"
                    : "text-gray-800 hover:text-[#FF5722] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>

            {/* Blog */}

            <li>
              <Link
                href="/blog"
                className={`flex items-center w-full px-4 py-3 rounded-lg transition ${
                  pathname === "/blog"
                    ? "text-[#FF5722] bg-orange-50 font-bold"
                    : "text-gray-800 hover:text-[#FF5722] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>

            {/* Contact Us */}

            <li>
              <Link
                href="/contact"
                className={`flex items-center w-full px-4 py-3 rounded-lg transition ${
                  pathname === "/contact-us"
                    ? "text-[#FF5722] bg-orange-50 font-bold"
                    : "text-gray-800 hover:text-[#FF5722] hover:bg-gray-50"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

// components/WhatsAppButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919289589654";
  const message = "Hello! I would like to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999]">
      <div className="relative group">
        {/* Pulse Ring - Desktop only */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 sm:animate-ping"
          aria-hidden="true"
        />

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300 sm:hover:bg-[#20BA5A] sm:hover:scale-110 sm:hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)] sm:active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
        >
          <FaWhatsapp
            className="w-8 h-8 sm:w-8 sm:h-8 transition-transform duration-300 sm:group-hover:rotate-6"
            aria-hidden="true"
          />

          {/* Tooltip - Desktop only */}
          <span className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 hidden sm:block whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs font-semibold text-white shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all duration-300 sm:group-hover:opacity-100 sm:group-hover:translate-x-0">
            Chat with us!
            <span
              className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-gray-900"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </div>
  );
}

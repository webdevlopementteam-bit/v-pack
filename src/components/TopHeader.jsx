import React from "react";
import { motion } from "framer-motion";

const TopHeader = ({ i, t }) => {
  return (
    <header className="w-full bg-slate-200 py-6 px-4 shadow-sm border-b border-slate-300">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 min-h-[100px] md:min-h-[120px]">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-blue-100 p-2.5 rounded-full shadow-inner border border-blue-200 flex items-center justify-center"
        >
          <span className="text-2xl">{i}</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#102a43] tracking-tight">
          {t}
        </h1>
      </div>
    </header>
  );
};

export default TopHeader;

import React from "react";
import MineralWaterManufacturerPage from "./Mineral";
import FaqSchema from "@/components/FaqSchema";
import { faqs } from "./faqs";

export const metadata = {
  title: "Top Mineral Water Plant Manufacturer in Delhi | Vpack Machine",
  description:
    "Mineral water plant manufacturer in Delhi: RO to packing, 24–90 BPM, 200 ml–20 L. 2026 FSSAI licence & profit guide. 3,000+ installs. Get a quote.",
  keywords: [
    "mineral water plant manufacturer",
    "mineral water plant manufacturer in Delhi",
    "mineral water plant machine",
  ],

  alternates: {
    canonical: "/mineral-water-plant-manufacturer",
  },
};

function page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <MineralWaterManufacturerPage />
    </>
  );
}

export default page;

import React from "react";
import SodaPlantPage from "./Soda";
import FaqSchema from "@/components/FaqSchema";
import { faqs } from "./faqs";

export const metadata = {
  title: "Best Soda & Zera Plant Manufacturer in Delhi | Vpack Machine",
  description:
    "Soda & zera plant manufacturer in Delhi: chiller, carbonator 250–10,000 LPH, syrup tanks & filling. Make soda, zera & soft drinks. Get a quote.",
  keywords: [
    "soda plant manufacturer",
    "soda plant manufacturer in Delhi",
    "zera plant manufacturer",
    "zera plant manufacturer in Delhi",
  ],

  alternates: {
    canonical: "/soda-plant-manufacturer",
  },
};

function page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <SodaPlantPage />
    </>
  );
}

export default page;

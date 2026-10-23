import React from "react";
import PackagedDrinkingWaterPage from "./Packaged";
import FaqSchema from "@/components/FaqSchema";
import { faqs } from "./faqs";

export const metadata = {
  title: "Packaged Drinking Water Plant Manufacturer in Delhi | Vpack Machine",
  description:
    "Packaged drinking water plant manufacturer in Delhi: RO to packing, 24–90 BPM, bottles & 20 L jars. Installed in 15–45 days with AMC. Get a quote.",
  keywords: [
    "packaged drinking water plant manufacturer",
    "packaged drinking water plant manufacturer in Delhi",
  ],

  alternates: {
    canonical: "/packaged-drinking-water-plant-manufacturer",
  },
};

function page() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <PackagedDrinkingWaterPage />
    </>
  );
}

export default page;

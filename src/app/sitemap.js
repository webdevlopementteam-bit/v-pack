import { SITE_URL } from "@/lib/site";

const mainPages = ["/about", "/products", "/blog", "/contact"];

const productPages = [
  // Mineral Water Plant
  "/industrial-ro-plant",
  "/ss-water-storage-tank",
  "/bopp-labelor",
  "/capper-machine-vpcl-40m",
  "/sticker-labelor-machine",
  "/semi-automatic-shrink-wrapping-machine",
  // Soft Drink Plant
  "/water-bottling-plant-manufacturer",
  "/carbonator",
  "/filterpress",
  "/industrial-chiller-machine",
  "/mixing-tank-1000-l-capacity",
  "/sugar-syrup-preparation-tank",
  // Fruit Juice Plant
  "/fruit-juice-plant-manufacturer",
  "/agitator-tank",
  // Juice Processing Plant
  "/cooling-tunnel-machine-manufacturer",
  "/fruit-pulper-machine",
  "/homogenizer",
  "/pasteurizer-200-lph",
  "/ss-blending-tank-manufacturer",
  // PET Blow Moulding Machine
  "/pet-blow-moulding-machine",
];

const servicePages = [
  "/water-bottling-plant",
  "/mineral-water-plant-manufacturer",
  "/soda-plant-manufacturer",
  "/liquid-filling-plant-manufacturer",
  "/liquid-filling-plant-manufacturer-in-haryana",
  "/packaged-drinking-plant-manufacturer-in-bengaluru",
  "/30-bpm-water-bottling-plant-complete-setup",
  "/common-problems-in-water-bottling-plants",
  "/how-to-choose-the-right-capacity-bottling-plant",
  "/mineral-water-business-plan-machines-investment-profits",
];

const blogPages = [
  "/beverage-plant-manufacturer",
  "/carbonated-beverage-plant-supplier",
  "/liquid-filling-plant-manufacturers",
  "/packaged-drinking-water-plant-manufacturer-in-delhi",
  "/soda-plant-manufacturers",
  "/water-bottling-plant-manufacturer-in-delhi",
  "/water-bottling-plant-manufacturers",
];

const legalPages = ["/privacy-policy", "/terms-conditions", "/disclaimer"];

export default function sitemap() {
  const lastModified = new Date();
  const entry = (path, priority, changeFrequency) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    entry("", 1, "weekly"),
    ...mainPages.map((p) => entry(p, 0.8, "monthly")),
    ...productPages.map((p) => entry(p, 0.9, "monthly")),
    ...servicePages.map((p) => entry(p, 0.8, "monthly")),
    ...blogPages.map((p) => entry(p, 0.7, "monthly")),
    ...legalPages.map((p) => entry(p, 0.3, "yearly")),
  ];
}

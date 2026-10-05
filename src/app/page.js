import AllPostsSection from "@/sections/AllPostsSection";
import FAQSection from "@/sections/FAQSection";
import AboutSection from "@/sections/HomeAbout";
import HomeBanner from "@/sections/HomeBanner";
import OurProducts from "@/sections/HomeOurProducts";
import IndustriesWeServe from "@/sections/IndustriesWeServe";
import IndustrySolutionsSection from "@/sections/IndustrySolutionsSection";
import PowerYourIndustry from "@/sections/PowerYourIndustry";
import VpackEdgeSection from "@/sections/VpackEdgeSection";
import VpackExpertiseTestimonials from "@/sections/VpackExpertiseTestimonials";
import VpackWhyChooseUs from "@/sections/VpackWhyChooseUs";
import WhyWeAreDifferent from "@/sections/WhyWeAreDifferent";
import React from "react";

function page() {
  return (
    <>
      <HomeBanner />
      <AboutSection />
      <PowerYourIndustry />
      <VpackEdgeSection />
      <WhyWeAreDifferent />
      <IndustriesWeServe />
      <OurProducts />
      <VpackWhyChooseUs />
      <AllPostsSection />
      <VpackExpertiseTestimonials />
      <FAQSection />
      <IndustrySolutionsSection />
    </>
  );
}

export default page;

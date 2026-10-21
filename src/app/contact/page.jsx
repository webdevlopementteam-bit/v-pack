import React from "react";
import ContactUsPage from "./Contact";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/contact",
  },
};

function page() {
  return (
    <>
      <ContactUsPage />
    </>
  );
}

export default page;

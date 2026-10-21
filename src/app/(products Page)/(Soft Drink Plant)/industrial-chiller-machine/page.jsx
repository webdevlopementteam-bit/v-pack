import React from "react";
import ChillerMachinePage from "./ChillerMachine";

export const metadata = {
  title: "",
  description: "",
  keywords: ["", ""],

  alternates: {
    canonical: "/industrial-chiller-machine",
  },
};

function page() {
  return (
    <>
      <ChillerMachinePage />
    </>
  );
}

export default page;

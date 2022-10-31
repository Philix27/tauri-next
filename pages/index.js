import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "../comps/Sidebar";
import Home from "../comps/Home";
import POSSection from "../comps/pos";

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="wrapper">
      <Sidebar setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <Home activeIndex={activeIndex} />
      <POSSection activeIndex={activeIndex} />
    </div>
  );
}

import * as React from 'react';

import Customers from "@/components/customers/Customers"
import OursComponent from "@/components/homecomponents/Ours"
import RightArrow from "@/components/icons/RightArrow"
import NewsAndInsights from "@/components/newsandinsights/NewsAndInsights"
import OurServices from "@/components/ourservices/OurServices"
import SolutionCards from "@/components/SolutionCards/SolutionCards"
import { useRef } from "react"

const Home = () => {
    const oursRef = useRef<HTMLDivElement | null>(null);

    const scrollToOursComponent = () => {
      if (oursRef.current) {
        oursRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <>
      <div className="bg-cover bg-fixed bg-[url('/src/assets/background.jpg')] h-screen">
        <div className="flex flex-col h-full w-full justify-center md:px-28 lg:px-28 pl-8 gap-2">
          <div className="flex gap-2 flex-wrap">
            <h1 className="text-white md:text-[56px] text-[50px] font-bold">
              Enhancing
            </h1>
            <h1 className="text-[#FFCE71] md:text-[56px] text-[50px] font-bold">
              Excellence
            </h1>
          </div>

          <div className="md:w-[520px] lg:w-[520] w-full">
            <span className="text-white text-[18px]">
            Cultivating sustainable business ecosystems that is meticulously designed for enhancing growth and long term success.
            </span>
          </div>
          <div>
            <button className="w-[168px] h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold"  onClick={scrollToOursComponent}>
              <span>
                Learn More
              </span>
              <RightArrow/>
            </button>
          </div>
        </div>

      </div>
      <div ref={oursRef}>
        <OursComponent />
      </div>
      <OurServices/>
    <SolutionCards/>
    <Customers/>
    <NewsAndInsights/>
    </>
  )
}

export default Home
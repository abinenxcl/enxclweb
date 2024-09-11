import * as React from 'react';

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import NewsnInsights1 from '@/assets/NewsAndInsights-1.jpg'
import NewsnInsights2 from '@/assets/NewsAndInsights-2.jpg'
import NewsnInsights3 from '@/assets/NewsAndInsights-3.jpg'
import News from "../icons/News"
import RightArrow from "../icons/RightArrow"


const NewsAndInsights = () => {
  return (
    <div className="md:px-24 px-8 py-8 flex flex-col gap-8">
        <div className="">
        <h6 className="text-base font-bold flex gap-2 items-center"><News/> RECENT BLOGS</h6>
        <h1 className="text-[44px] text-30px font-bold">News and Insights</h1>
        </div>
      <div className="flex justify-between flex-wrap">
          <Card className="w-[350px] rounded-2xl hover:bg-[#FFCE714D] cursor-pointer">
          <CardHeader className="p-0">
              <img src ={NewsnInsights1} alt=" " className="w-full h-64 rounded-t-2xl" />
          </CardHeader>
          <CardContent>
            <div className="grid w-full ">
                <span className="font-semibold p-2 mt-2 ">Proud to announce the opening of the new enxcl Business Solutions office at Carnival, Infopark, Kochi on Wednesday, September 4th, 2024!.</span>
              </div>
              <button className="p-2 text-sm font-semibold flex items-center gap-2">Read more<RightArrow/></button>
          </CardContent>
          </Card>
          <Card className="w-[350px]  rounded-2xl hover:bg-[#FFCE714D] cursor-pointer">
          <CardHeader className="p-0">
              <img src ={NewsnInsights2} alt=" " className="w-full h-64 rounded-t-2xl" />
          </CardHeader>
          <CardContent>
            <div className="grid w-full">
                <p className="font-semibold p-2 mt-2 ">Our Managing Director, Mr. Santhosh Udayanan, has been honored with the prestigious Asia Leadership Award 2024 for 'The Versatile Leader of the Year.'.</p>
              </div>
              <button className="p-2 text-sm font-semibold flex items-center gap-2">Read more<RightArrow/></button>
          </CardContent>
          </Card>
          <Card className="relative w-[350px] rounded-2xl  cursor-pointer">
    <CardHeader className="flex h-full justify-center items-center">
        <img src={NewsnInsights3} alt=" " className="w-full h-64 rounded-t-2xl" />
    </CardHeader>
    <CardContent>
        <div className="grid w-full">
            <p className="font-semibold p-2 mt-2"></p>
        </div>
        {/* <button className="p-2 text-sm font-semibold flex items-center gap-2">
            Read more<RightArrow />
        </button> */}
    </CardContent>
    {/* Overlay div */}
    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl flex items-center justify-center">
        <span className="text-white font-bold">Comming Soon</span>
    </div>
</Card>

      </div>
    </div>
  )
}

export default NewsAndInsights

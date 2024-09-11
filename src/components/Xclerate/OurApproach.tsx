import * as React from 'react';

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import Assess from "../icons/Assess";
import Stratagy from "../icons/Stratagy";
import TransForm from "../icons/TransForm";
import Optimize from "../icons/Optimize";

const OurApproach = () => {
    return (
        <div className="pt-16">
            <div>
                <h1 className="text-[38px] font-bold">Our Approach</h1>
                <h2 className="text-[24px] font-semibold pt-5">Transforming Vision into Reality Through e-A S T O</h2>
                <p className="pt-5 text-justify text-[#727272]"> At the heart of our consulting practice lies the proprietary e-ASTO framework, a dynamic model that strategically integrates the principles of Lean, Agile, Six Sigma, and Change Management principles to deliver comprehensive and sustainable solutions.<span className="text-[#BA690C] font-bold">The e-ASTO </span>framework is structured around four core pillars:<span className="text-[#BA690C] font-bold">Assess, Strategize, Transform, Optimize</span>, elevating your business through superior delivery, service management, and process optimization.</p>
            </div>
            <div className="flex justify-between pt-12">
                <Card
                    className="md:w-[250px] md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="w-[70px] h-[70px] bg-[#F4F4F4] flex justify-center items-center rounded-full ">
                            {/* Show icon2 on hover */}
                            <div className="group-hover:block"><Assess /></div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[#BA690C] font-semibold text-lg">ASSESS</div>
                        <div className="text-[16px] font-normal text-wrap text-[#727272]">
                            Accurately diagnose client needs, identify optimal solutions, and ensure effective implementation of technology strategies.
                        </div>
                    </CardContent>
                </Card>
                <Card
                    className="md:w-[250px] md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                            {/* Show icon2 on hover */}
                            <div className=" group-hover:block"><Stratagy /></div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[#BA690C] font-semibold text-lg">STRATERGIZE</div>
                        <div className="text-[16px] font-normal text-wrap text-[#727272]">
                            Aligning technology solutions with business objectives, optimizing resource utilization and achieving sustainable long-term success for clients.
                        </div>
                    </CardContent>
                </Card>
                <Card
                    className="md:w-[250px] md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                            {/* Show icon2 on hover */}
                            <div className=" group-hover:block"><TransForm /></div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[#BA690C] font-semibold text-lg">TRANSFORM</div>
                        <div className="text-[16px] font-normal text-wrap text-[#727272]">
                        Enabling organizational change, enhancing operational efficiency and leveraging technology to achieve competitive advantage and future readiness in the digital landscape.
                        </div>
                    </CardContent>
                </Card>
                <Card
                    className="md:w-[250px] md:h-auto md:min-h-[260px] h-auto rounded-2xl border-slate-200 bg-white cursor-pointer"

                >
                    <CardHeader>
                        <div className="w-[70px] h-[70px] bg-[#F4F4F4]  flex justify-center items-center rounded-full">
                            {/* Show icon2 on hover */}
                            <div className=" group-hover:block"><Optimize /></div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex gap-5 flex-col">
                        <div className="text-[#BA690C] font-semibold text-lg">OPTIMIZE</div>
                        <div className="text-[16px] font-normal text-wrap text-[#727272]">
                        Maximizing efficiency, minimizing costs, improving performance, and ensuring alignment with business goals all contribute to enhancing overall client satisfaction and success.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default OurApproach;
import * as React from 'react';

import InitialHeader from "@/components/initialheader/InitialHeader";
import Business from '@/assets/business.png'
import Introduction from "@/components/XpertEaze/Introduction";
import TrainHireDeploy from "@/components/XpertEaze/TrainHireDeploy";
import Quest from "@/assets/Quest.png";
import SFO from "@/assets/SFO.png";
import TestHouse from "@/assets/TestHouse.png";
import Innovature from "@/assets/Innovature.png";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import AcadamiaIcon from "@/components/icons/AcadamialIcon";
import UpskillIcon from "@/components/icons/UpskillIcon";
import Broucher from "@/components/icons/Broucher";
const XpertiseServices = () => {
    const title = "XpertEaze";
    const mainTitle = "Upskilling for the future ";
    return (
        <>
            <div className="pt-24 py-16 md:px-24 px-8">
                <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
                <Introduction />
                <TrainHireDeploy />
                {/* ------------ this div please move to service component  */}
                <section className="">
                    <div className="bg-[#FBF2E7] rounded-3xl md:flex justify-between py-4 px-6 md:py-16 md:px-24 mt-[200px]">
                        <div className="mb-8 md:mb-0">
                            <h1 className="text-[38px] font-semibold mb-2 text-center md:text-start">
                                Services we <br /> Provide
                            </h1>
                            <div className="flex justify-center md:flex-col md:mt-8">
                                <button className="w-[220px] font-semibold p-5 h-[50px] flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
                            </div>
                        </div>
                        <div className="md:flex md:gap-6">
                            <div className="md:w-[300px] mx-auto">
                                <Card className="h-[320px] mb-6 rounded-xl">
                                    <CardHeader>
                                        <div className="w-[100px] h-[100px] rounded-full border flex justify-center items-center hover:bg-blue-200 hover:scale-110 transition-transform delay-100 mb-2">
                                            <UpskillIcon />
                                        </div>
                                        <CardDescription className="text-justify">
                                            <p className="text-black text-lg">
                                                Professional and Industry Upskilling
                                                <span className="text-[#727272] ml-1">
                                                    for Corporates and Professionals
                                                </span>
                                            </p>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                            <div className="md:w-[300px] mx-auto">
                                <Card className="h-[320px] mb-2 rounded-xl">
                                    <CardHeader>
                                        <div className="w-[100px] h-[100px] rounded-full border flex justify-center items-center hover:bg-blue-200 hover:scale-110 transition-transform delay-100 mb-2">
                                            <AcadamiaIcon />
                                        </div>
                                        {/* <CardTitle className="pb-4">header</CardTitle> */}
                                        <CardDescription className="text-justify">
                                            <p className="text-black text-lg">
                                                Bridge the gap between Industry and Academia
                                                <span className="text-[#727272] ml-1">
                                                    for Colleges, Faculties, Students and Freshers
                                                </span>
                                            </p>
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </div>
                        </div>
                    </div>
                    {/* -------------- */}
                    <div className="w-full md:flex md:justify-between mt-24">
                        <div className="md:w-2/4">
                            <h1 className="text-[38px] font-semibold">
                                Looking for Skill Enhancement <br /> Opportunities
                            </h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 my-8 mx-2 md:mx-6">
                                <img src={SFO} alt="SFO" className="w-[90px] h-[30px] mb-4 md:mb-0" />
                                <img
                                    src={Innovature}
                                    alt="Innovature"
                                    className="w-[90px] h-[30px]"
                                />
                                <img
                                    src={TestHouse}
                                    alt="TestHouse"
                                    className="w-[90px] h-[30px] mb-4 md:mb-0"
                                />
                                <img src={Quest} alt="Quest" className="w-[90px] h-[30px]" />
                            </div>
                            <div className="max-w-[550px] text-justify text-[#727272]">
                                <p>
                                    Our curriculum, crafted and delivered by industry experts, is
                                    meticulously aligned with global standards and offers a
                                    diverse range of skill enhancement programs. We provide
                                    flexible delivery options:offline, online, or hybrid conducted
                                    both on campus and within corporate settings. We provide
                                    career guidance and placement assistance, as well as mentoring
                                    for hackathons and ideathons. Additionally, we offer a
                                    comprehensive Faculty Development Program and support for
                                    global certifications.
                                </p>
                                <br />
                                <p>
                                    XpertEaze provides specialized technical and domain
                                    upskilling, covering areas such as Technology, Tools, Cloud,
                                    and DevOps with curricula mutually agreed upon to meet your
                                    specific needs. Led by industry experts, our sessions ensure a
                                    deep, practical understanding of the latest advancements in
                                    the field.
                                </p>
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="bg-[#FBF2E7] p-3 md:p-12 rounded-2xl mt-12 md:mt-0">
                                <>
                                    <ul>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                1
                                            </li>
                                            <p>Techno Domain Managerial Training</p>
                                        </span>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                2
                                            </li>
                                            <p>Industrial Visits & Internships</p>
                                        </span>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                3
                                            </li>
                                            <p>Faculty Development Programs</p>
                                        </span>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                4
                                            </li>
                                            <p>Soft Skills & Tools</p>
                                        </span>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                5
                                            </li>
                                            <p>Academic Projects</p>
                                        </span>
                                        <span className="flex items-center mb-5 gap-2 md:gap-6">
                                            <li className="w-[30px] h-[30px] rounded-full bg-[#BA690C] text-white text-sm flex flex-col justify-center items-center">
                                                6
                                            </li>
                                            <p>Masterclass Webinars</p>
                                        </span>
                                    </ul>
                                </>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <section>
                <div className="bg-[#161717] w-full md:flex md:justify-between mt-24 px-4 md:px-28 py-8 md:py-16 gap-12">
                    <div className="md:w-2/4 text-white">
                        <h1 className="text-[38px] font-semibold mb-8">
                            enxcl is a premier PMI Authorized Training Partner (ATP)
                        </h1>
                        <div className="max-w-[550px] text-justify">
                            <p>
                                As a distinguished Premier Authorized Training Partner of PMI,
                                XpertEaze offers world-class Project Management and Agile
                                training led by industry veterans, along with specialized
                                leadership and management programs tailored to resonate with
                                your organization's unique aspirations.
                            </p>
                            <br />
                            <p>
                                Our comprehensive suite of training programs includes
                                Portfolio/ Program/ Project Management, Disciplined Agile,
                                SAFe, and Scrum methodologies, Business Analysis, Product
                                Management and customized activity-oriented training sessions
                                tailored to meet your specific needs.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/4 w-full flex flex-col justify-center items-center bg-white rounded-xl text-white p-8 gap-11">
                        <div className="flex justify-between gap-10 w-full">
                            <div className="flex flex-col">
                                <img src={Quest} alt="Quest" />
                            </div>
                            <div className="flex flex-col">
                                <img src={TestHouse} alt="TestHouse" />
                            </div>
                            <div className="flex flex-col">
                                <img src={Innovature} alt="Innovature" />
                            </div>
                        </div>
                        <div className="flex justify-between gap-10 w-full">
                            <div className="flex flex-col">
                                <img src={SFO} alt="SFO" />
                            </div>
                            <div className="flex flex-col">
                                <img src={TestHouse} alt="TestHouse" />
                            </div>
                            <div className="flex flex-col">
                                <img src={Quest} alt="Quest" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default XpertiseServices
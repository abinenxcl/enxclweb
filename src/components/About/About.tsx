import * as React from 'react';
import overlapImage from "../../assets/overlap-image.png";
import QuotesImage from "../../assets/Quotes-Img.png";
import VisionImage from "../../assets/vision.png.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CommitmentIcon from "../icons/CommitMent/Commitment";
import IntegrityIcon from "../icons/integrity/IntegrityIcon";
import QualityIcon from "../icons/Quality/QualityIcon";
import PassionIcon from "../icons/Passion/PassionIcon";
import RespectIcon from "../icons/Respect/RespectIcon";
import CeoImage from "../../assets/CEO.png.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArunSreeImage from "../../assets/Arun_sreekumar.png";
import JaiShankar from "../../assets/JaiShankar.jpg";
import HariIyer from "../../assets/Hari_Iyer.png";
import NttData from "../../assets/NttData.png";
import TeraData from "../../assets/TeraData.png";
import Quest from "../../assets/Quest.png";
import SFO from "../../assets/SFO.png";
import Innovature from "../../assets/Innovature.png";
import TestHouse from "../../assets/TestHouse.png";
import RightArrow from "../icons/RightArrow";
import { useNavigate } from "react-router-dom";

const About = () => {

  //Our Values
  const ourValuesData = [
    {
      id: "1",
      icon: <CommitmentIcon />,
      header: "Commitment",
      content:
        "Our commitment to our clients, partners, and employees drives us to go beyond expectations, ensuring that every project is executed with the highest level of professionalism and precision.",
    },
    {
      id: "2",
      icon: <IntegrityIcon />,
      header: "Integrity",
      content:
        "Integrity is the bedrock of our business practices. We conduct ourselves with honesty, transparency, and ethical rigor, fostering trust and building long-lasting relationships with our clients and stakeholders. ",
    },
    {
      id: "3",
      icon: <QualityIcon />,
      header: "Quality",
      content:
        "Quality is the hallmark of our work. We uphold the highest standards in every aspect of our operations, from the strategies we devise to the solutions we implement. .",
    },
    {
      id: "4",
      icon: <PassionIcon />,
      header: "Passion",
      content:
        "we approach every challenge with enthusiasm and a genuine desire to innovate, knowing that our passion is key to unlocking creative solutions and driving meaningful progress for our clients.",
    },
    {
      id: "5",
      icon: <RespectIcon />,
      header: "Respect",
      content:
        "we approach every challenge with enthusiasm and a genuine desire to innovate, knowing that our passion is key to unlocking creative solutions and driving meaningful progress for our clients.",
    },
  ];

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  const toBusinessEnablement = () => {
    navigateTo('/businessenablement');
  };
  const toITExS = () => {
    navigateTo('/ITExS');
  };

  const toXcelerate = () => {
    navigateTo('/xclerate');
  };
  const toXpertEaze = () => {
    navigateTo('/xperteaze');
  };

  const accordionItemsData = [
    {
      id: "1",
      accordionHeader: "Enterprise Transformation and Innovation",
      accordionName: "Xclerate",
      accordionContent:
        "In the dynamic landscape of modern business, organizations must harness strategic insights and effective solutions to overcome complexities, foster innovation, and sustain their competitive advantage. At enxcl, our Business Consulting services are expertly crafted to address these needs, offering bespoke strategies that empower businesses at every stage of their growth journey—from emerging startups to established enterprises.",
      icon: (<>
        <button className="w-[168px] h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold" onClick={toXcelerate}>
          <span>
            Learn More
          </span>
          <RightArrow />
        </button>

      </>),
      Icon2: (<>
        <button
          className="border border-black p-4 rounded-full hover:bg-[#FFCE71] h-[30px] w-[30px] flex justify-center items-center"
          onClick={toXpertEaze}
        >
          <RightArrow />
        </button>
      </>),
    },
    {
      id: "2",
      accordionHeader: "IT Excellence Services",
      accordionName: "ITExS",
      accordionContent:
        "This vertical delivers technology consulting services that turn business challenges into strategic opportunities. enxcl offers a full spectrum of IT solutions, encompassing QA, project management, agile coaching, service delivery management and technical operations.The emphasis is on fortifying businesses for the future by deploying cutting- edge technology strategies and crafting bespoke IT solutions.",
      icon: (<>
        <button className="w-[168px] h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold" onClick={toITExS}>
          <span>
            Learn More
          </span>
          <RightArrow />
        </button>
      </>),
    },
    {
      id: "3",
      accordionHeader: "Business Enablement Services",
      accordionName: "BizExS",
      accordionContent:
        "enxcl provides services that streamline and enhance business operations for optimal success.This encompasses the establishment of operational facilities, comprehensive HR and administrative support, and competency development through tailored training programs. The objective is to facilitate global expansion while ensuring sustainability and operational excellence.",
      icon: (<>
        <button className="w-[168px] h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold" onClick={toBusinessEnablement}>
          <span>
            Learn More
          </span>
          <RightArrow />
        </button>
      </>),
    },
    {
      id: "4",
      accordionHeader: "Corporate and Professional Upskilling",
      accordionName: "XpertEaze",
      accordionContent:
        "enxcl's profound industry acumen empowers us to offer innovative, insightful, and contextually relevant training solutions via XpertEaze, our dedicated upskilling division for professionals. XpertEaze offers various tailored and customized trainings for corporates to up-skill and cross-skill professionals from entry level to senior leadership.",
      icon: (<>
        <button className="w-[168px] h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold" onClick={toXpertEaze}>
          <span>
            Learn More
          </span>
          <RightArrow />
        </button>

      </>),
    },
  ];

  //Our Services
  // const Services = [
  //   {
  //     id: "1",
  //     services: "XpertEaze",
  //     description: "Upskilling for future",
  //     Icon: (<>
  //       <button
  //         className="border border-black p-4 rounded-full hover:bg-[#FFCE71] h-[30px] w-[30px] flex justify-center items-center"
  //         onClick={toXpertEaze}
  //       >
  //         <RightArrow />
  //       </button>
  //     </>),
  //   },
  //   {
  //     id: "2",
  //     services: "BizExz",
  //     description: "Bussiness enablement services",
  //     Icon: (<>
  //       <button
  //         className="border border-black p-4 rounded-full hover:bg-[#FFCE71] h-[30px] w-[30px] flex justify-center items-center"
  //         onClick={toBusinessEnablement}
  //       >
  //         <RightArrow />
  //       </button>
  //     </>),
  //   },
  //   {
  //     id: "3",
  //     services: "ITExS",
  //     description: "IT Excellence Services",
  //     Icon: (<>
  //       <button
  //         className="border border-black p-4 rounded-full hover:bg-[#FFCE71] h-[30px] w-[30px] flex justify-center items-center"
  //         onClick={toITExS}
  //       >
  //         <RightArrow />
  //       </button>
  //     </>),
  //   },
  //   {
  //     id: "4",
  //     services: "Xclerate",
  //     description: "Business Consulting at enxcl",
  //     Icon: (<>
  //       <button
  //         className="border border-black p-4 rounded-full hover:bg-[#FFCE71] h-[30px] w-[30px] flex justify-center items-center"
  //         onClick={toXcelerate}
  //       >
  //         <RightArrow />
  //       </button>
  //     </>),
  //   },
  // ];

  return (
    <>
      {/*image and description */}
      <div className="w-full md:h-[500px]  py-20 md:py-0">
        <div className="absolute w-full h-[545px] md:h-[512px] top-0 md:mt-20 lg:mt-0 bg-black">
          <div className="absolute top-0 left-0 w-full justify-evenly items-center flex flex-col gap-5 md:flex-row my-20 px-4">
            <div className="max-w-[500px] p-2 rounded-lg">
              <h1 className="text-5xl md:7xl text-white font-bold">
                Corporate
              </h1>
              <h1 className="text-5xl md:7xl text-yellow-300 font-bold">
                Overview
              </h1>
              <p className="text-white/90 font-medium py-4 text-lg">
                enxcl Business Solutions Private Limited is staged to reframe
                the future of your enterprise
              </p>
            </div>
            <div className="max-w-[600px]">
              <img
                className="w-[250px] md:w-[500px]"
                src={overlapImage}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Enxcl and Content */}

      {/* About Enxcl */}
      <section >
        <div className="md:px-24 px-8">
          <div className="md:mt-[100px] mt-[450px]">
            <div className="flex md:flex-row flex-col justify-between gap-2">
              <div className="md:w-4/6 w-full pr-10 md:mt-[-30px] md:mt[10px]">
                <h1 className="text-[38px] font-bold pb-5">About enxcl</h1>
                <p className="text-justify text-[#727272]">
                  enxcl Business Solutions Private Limited, established in 2020,
                  is a premier consulting and professional upskilling firm
                  dedicated to enhancing business excellence. We empower
                  organizations to enhance their business prospects, offering
                  services across multiple verticals and serving clients in four
                  continents from five global locations. Our organization comprises
                  world-class experts with rich technical, process and management
                  expertise across major industry segments, driving growth for
                  startups, scale-ups and corporations alike.
                </p>
              </div>
              <div className="bg-[#FBF2E7] p-8 rounded-xl flex md:w-3/6 w-full h-auto md:max-h-[200px]">

                <h3 className="text-justify italic text-[16px] pt-4">
                  By empowering startups, scale-ups and established enterprises
                  alike, enxcl cultivates a sustainable business ecosystem that is
                  meticulously designed for enduring growth and long-term success
                </h3>
                <div className="mt-[-50px] md:mt-[-70px] mr-[-15px]">
                  <img
                    src={QuotesImage}
                    alt=""
                    className="w-[350px] md:w-[300px]"
                  />
                </div>
              </div>
              {/* Our Services */}
              {/* <div className="px-8">
              <div className="bg-[#FBF2E7] w-full rounded-xl py-2 md:py-6 px-2 md:px-8">
                <h1 className="text-[24px] font-bold border-b pb-2 mb-4">
                  Our Services
                </h1>
                {Services?.map((ser) => (
                  <div
                    className="flex md:flex-row flex-col md:justify-between gap-4 items-center "
                    key={ser.id}
                  >
                    <div className="flex md:flex-row flex-col gap-5">
                      <span className="bg-[#BA690C] w-auto text-white text-center px-2 md:px-4 py-2 rounded-md font-semibold min-w-[70px] md:w-[100px] mb-2">
                        {ser.services}
                      </span>
                      <span className="font-semibold">{ser.description}</span>
                    </div>
                    <span className="mt-[-25px]">{ser.Icon}</span>
                  </div>
                ))}
              </div>
            </div> */}

            </div>
          </div>
          <div className="gap-10">
            <div className="w-full mt-10">
              <div className="">
                <h3 className="text-[24px] font-semibold pb-5 text-gray-600">
                  Why To Choose Enxcl?
                </h3>
                <p className="text-justify text-[#727272]">
                  With a deep understanding of industry dynamics and a world-class
                  curriculum, enxcl delivers innovative, insightful and
                  industry-relevant training programs to corporates, professionals
                  and aspiring talents. enxcl is a leading business and management
                  consulting firm renowned for its unwavering commitment to
                  delivering tangible and actionable results rather than mere
                  strategic blueprints. The firm’s distinctive approach is rooted
                  in profound industry expertise, extensive hands-on experience,
                  and a steadfast dedication to transparency and service
                  excellence. At the core of its operations lies the proprietary
                  e-ASTO framework-Assess, Strategize, Transform, Optimize which
                  seamlessly blends best practices from Lean, Agile, and Six Sigma
                  methodologies to craft bespoke solutions that meet the unique
                  needs of each client. With a robust global presence spanning
                  India, Malaysia, and the Middle East, enxcl leverages a vast
                  network of expert consultants and strategic partners supported
                  by a leadership team with deep-rooted experience from leading
                  global firms. The company remains at the forefront of industry
                  trends, continuously evolving its service offerings to meet the
                  ever-changing demands of the global market. This blend of
                  innovative thinking, comprehensive service delivery and expert
                  leadership positions enxcl as a trusted partner for businesses
                  seeking to excel in today’s dynamic business environment.
                </p>
              </div>

            </div>
            <div className="w-full">

              {/* Accoridion */}
              <div className="w-full">
                <h1 className="text-[24px] font-semibold mb-4 mt-10 italic text-gray-600">
                  enxcl is a company that specializes in four key service
                  verticals
                </h1>
                {accordionItemsData?.map((items) => (
                  <>
                    <Accordion type="single" collapsible key={items.id}>
                      <AccordionItem
                        value="item-1"
                        className="rounded-xl p-2  mb-4 shadow-md"
                      >

                        <AccordionTrigger>

                          <div className="flex gap-3 items-center max-h-[5px]">
                            <span className="bg-[#BA690C] w-auto text-white text-center px-2 md:px-4 py-2 rounded-md font-semibold min-w-[70px] md:w-[100px] mb-2">
                              {items.accordionName}
                            </span>
                            {items?.accordionHeader}
                            
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="rounded-xl italic p-5">
                          {items?.accordionContent}
                          <div className="mt-5">
                            {items?.icon}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* our vision */}
        <div className="w-full bg-black mt-12">
          <div className="w-full justify-evenly items-center flex flex-col gap-5 md:flex-row py-16 px-4">
            <div className="max-w-[500px] p-2 rounded-lg">
              <p className="text-[#FFCE71] text-[20px] mb-2">Our Vision</p>
              <h1 className="w-[250px] text-[25px] md:7xl text-white font-bold">
                Let's Grow Together
              </h1>
              <p className="text-white/90 font-semibold py-4 text-[30px] mb-3">
                To be a premier consulting and upskilling partner, empowering
                business organizations, professionals and aspiring talents to
                achieve unparalleled excellence.
              </p>
            </div>
            <div className="w-[250px]">
              <img src={VisionImage} alt="Image" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="md:px-28 py-16">
          <div className="bg-[#FBF2E7] px-16 pt-16 pb-8  rounded-2xl grid md:grid-cols-3">
            <div className="w-[250px] mx-auto">
              <Card className="bg-[#FBF2E7] border-none">
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                  <CardDescription className="text-justify">
                    At enxcl, our corporate values underpin every aspect of our
                    work, steering our approach to business, client partnerships
                    and internal collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            {ourValuesData?.map((value) => (
              <div className="w-[300px]  mx-auto" key={value.id}>
                <Card className="h-[320px] mb-8 cursor-pointer">
                  <CardHeader>
                    <div className="w-[100px] h-[100px] rounded-full border flex justify-center items-center hover:bg-blue-200 hover:scale-110 transition-transform delay-100 mb-2">
                      {value.icon}
                    </div>
                    <CardTitle className="pb-4">{value.header}</CardTitle>
                    <CardDescription className="text-justify">
                      {value.content}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Our Leadership & Team */}
        <div className="bg-black px-4 md:px-28 py-2 md:py-16">
          <div>
            <h1 className="text-5xl font-bold text-white text-center">
              Our Leadership & Team
            </h1>
            {/* CEO */}
            <div className="md:flex gap-4 md:gap-8 justify-center items-center mt-8 md:mt-12">
              <div className="px-4">
                <img
                  src={CeoImage}
                  alt="Image"
                  className="md:h-[350px] md:w-[800px]"
                />
              </div>
              <div className="text-white px-4 mt-8">
                <h3 className="text-3xl font-bold mb-2">Santhosh Udayanan</h3>
                <h5 className="text-lg italic mb-2">
                  Founder and Managing Director
                </h5>
                <p className="mt-4 md:text-justify">
                  With over 25 years of transformative experience,Santhosh has
                  distinguished himself in IT delivery leadership and process
                  excellence consulting,collaborating with prestigious Big Four
                  firms and diverse multinational corporations.
                </p>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="mt-4">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="w-full p-1 md:flex justify-center md:gap-3">
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <img src={JaiShankar} alt="Image" />
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Jai Shankar
                              </span>
                              <h4 className="text-[#727272]">
                                Chief Operating Officer
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <img src={ArunSreeImage} alt="Image" />
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Arun Sreekumar
                              </span>
                              <h4 className="text-[#727272]">
                                Chief Delivery Officer
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <img src={HariIyer} alt="Image" />
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Hari Iyer
                              </span>
                              <h4 className="text-[#727272]">
                                Chief Finance Officer
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      {/* 2nd row */}
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <div className="bg-slate-100 w-[350px] h-[260px] border-4 rounded-xl my-2 md:my-4"></div>
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Binu Lekshmy J R
                              </span>
                              <h4 className="text-[#727272]">
                                Chief Of Staff & Head Of XpertEaze
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <div className="bg-slate-100 w-[350px] h-[260px] border-4 rounded-xl my-2 md:my-4"></div>
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Sandeep S Nair
                              </span>
                              <h4 className="text-[#727272]">
                                Chief Technology Officer
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <div className="bg-slate-100 w-[350px] h-[260px] border-4 rounded-xl my-2 md:my-4"></div>
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Arun Ravi
                              </span>
                              <h4 className="text-[#727272]">
                                Pricipal Consultant
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="mb-4">
                        <CardContent className="aspect-square items-center justify-center p-2">
                          <div className="w-[350px] h-[200px]">
                            <div className="bg-slate-100 w-[350px] h-[260px] border-4 rounded-xl my-2 md:my-4"></div>
                            <div className="px-4">
                              <span className="text-xl font-semibold">
                                Geetha Meenakshi
                              </span>
                              <h4 className="text-[#727272]">
                                Head of Learning Hub
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="mt-5 text-white">
            <p>
              With a proven track record of managing complex IT ecosystems and leading large-scale transformations, our leaders are committed to fostering a culture of continuous improvement and delivering exceptional value to our clients.
            </p>
          </div>
        </div>

        {/* Client Statistics */}
        <div className="md:flex justify-between py-8 md:px-28 md:py-16 md:w-full gap-20">
          <div className="p-2 md:p-4 md:max-w-[600px] py-4 px-6 w-3/4">
            <h1 className="text-[28px] font-semibold mb-2">
              Client Statistics
            </h1>
            <p className="text-slate-400 text-justify">
              At enxcl,our guiding philosophy is both straightforward and
              profound: "Customer First, Always“.Therefore, we prioritize a
              tailored response to ensure that our services align precisely with
              their expectations.This customer-centric approach is instrumental
              in cultivating trust and nurturing enduring relationships. It is
              this deep commitment to our clients that drives us to consistently
              surpass expectations, ensuring that every interaction with enxcl
              is nothing short of exceptional.
            </p>
            <button className="w-auto h-[48px] rounded-3xl bg-[#FFCE71] flex justify-center items-center gap-[10px] font-semibold hover:font-bold p-4 mt-5">
              <span>
                Our Case Studies
              </span>
              <RightArrow />
            </button>
          </div>
          <div className="md:w-3/6 w-full flex flex-col justify-center items-center bg-black rounded-xl text-white p-8 gap-11">
            <div className="flex justify-between gap-10 w-full">
              <div className="flex flex-col">
                <h1 className="text-[24px] font-bold">
                  80+
                </h1>
                <span className="min-w-[200px]">Clients & Partners</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-bold">
                  25K+
                </h1>
                <span className="min-w-[200px]">Consulting Hrs</span>
              </div>
            </div>
            <div className="flex justify-between gap-10 w-full">
              <div className="flex flex-col">
                <h1 className="text-[24px] font-bold">
                  9K+
                </h1>
                <span className="min-w-[200px]">Professionals & Aspirants Trained</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[24px] font-bold">
                  100K+
                </h1>
                <span className="min-w-[200px]">Training Hrs</span>
              </div>
            </div>

          </div>
        </div>

        {/* Clients */}
        <div className="bg-[#FBF2E7] px-16 md:px-28 py-8 md:py-16 mb-8">
          <div className="flex items-center justify-evenly gap-2 flex-wrap">
            <div>
              <img src={TeraData} alt="TeraData" />
            </div>
            <div>
              <img src={NttData} alt="NttData" />
            </div>
            <div>
              <img src={Quest} alt="Quest" />
            </div>
            <div>
              <img src={SFO} alt="SFO" />
            </div>
            <div>
              <img src={Innovature} alt="Innovature" />
            </div>
            <div>
              <img src={TestHouse} alt="TestHouse" />
            </div>
            <div className="hidden md:block">
              <img src={NttData} alt="NttData" />
            </div>
            <div className="hidden md:block">
              <img src={Quest} alt="Quest" />
            </div>
            <div className="hidden md:block">
              <img src={SFO} alt="SFO" />
            </div>
            <div className="hidden md:block">
              <img src={TeraData} alt="TeraData" />
            </div>
            <div className="hidden md:block">
              <img src={TestHouse} alt="TestHouse" />
            </div>
            <div className="hidden md:block">
              <img src={Innovature} alt="Innovature" />
            </div>
          </div>
        </div>


        {/* ------------ this div please move to service component  */}
        <div>

        </div>
      </section>
    </>
  );
};

export default About;

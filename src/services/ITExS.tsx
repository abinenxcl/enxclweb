import * as React from 'react';

import Business from '@/assets/itexs.png'
import InitialHeader from '@/components/initialheader/InitialHeader';
import IT from '@/assets/it.png'
import Broucher from '@/components/icons/Broucher';
import QuotesImgae from '@/assets/quotesImage.png'

const ITExS = () => {
    const title = "ITExS";
    const mainTitle = "IT Excellence Services";
    return (
        <>
            <div className="pt-24 py-16 md:px-24 px-8">
                <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
                {/* Architecting the Future of IT Excellence */}
                <div className="flex py-16 justify-between flex-wrap md:flex-nowrap">
                    <div className="2/4">
                        <div className="md:max-w-[360px]">
                            <img src={IT} alt="" className="" />
                        </div>
                    </div>
                    <div className="w-2/4">
                        <h1 className="text-[38px] font-bold">
                            Architecting the Future of IT Excellence
                        </h1>
                        <p className="text-justify break-words hyphens-auto pt-5 text-[#727272]">
                            Our IT Excellence services verticle is dedicated to delivering a sophisticated portfolio of IT solutions, meticulously curated to empower businesses with cutting-edge technology and expert guidance. Our IT Excellence Services excel in delivering holistic end-to-end services across three core pillars: Technology Consulting, Software Development, and Managed Services. Each service is crafted with precision to optimize your technology infrastructure, foster innovation and enable your business to focus on strategic objectives. Our IT services are strategically aligned with cutting-edge agile technologies ensuring your products are primed for the future. We prioritize innovation and adaptability, empowering your business to excel in a dynamic digital landscape while sustaining a formidable competitive advantage.
                        </p>
                    </div>

                </div>
                {/* Services we provide */}
                <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
                    <h1 className="text-[38px] font-bold">
                        Services we provide
                    </h1>
                    <button className="w-[220px] font-semibold p-5 h-[50px] flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
                </div>
                {/* Technology Consulting */}
                <div className="pt-12">
                    <h1 className="text-[24px] font-semibold ">
                        Technology Consulting
                    </h1>
                    <ul className="text-[#727272] list-disc pl-5 pt-5">
                        <li>
                            <p>Architecture Consulting: We provide expert guidance in designing scalable, secure, and efficient IT infrastructures which ensures that your technology systems align with business goals while fostering innovation and long-term operational success.</p>
                        </li>
                        <li>
                            <p>Technology Architecture: We evaluate and design technology architectures to ensure they align with your business goals, support scalability, and incorporate the latest advancements in technology.</p>
                        </li>
                        <li>
                            <p>Solution Architecture: Our experts assess existing solution architectures to identify areas of improvement or help create new ones that address specific business needs while ensuring interoperability and efficiency.</p>
                        </li>
                        <li>
                            <p>Deployment Architecture: We consult on the optimal deployment strategies, whether on-premise, cloud, or hybrid environments, ensuring a smooth and secure deployment process.</p>
                        </li>
                        <li>
                            <p>Information Security (InfoSec) Architecture: Security is integral to our consulting approach. We review and design InfoSec architectures to protect your assets ensuring compliance with industry standards and regulations.</p>
                        </li>
                    </ul>

                </div>
                {/* quotes */}
                <div className="bg-[#FBF2E7] p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                        In today’s fast-paced technological landscape, a <span className='font-bold'>robust and scalable </span>architecture is essential for business success. Our Technology Consulting services offer strategic guidance and actionable solutions across all architectural dimensions. Whether you are developing a new product or enhancing an existing system, our consultants deliver profound insights into <span className='font-bold'>architectural best practices, scalability strategies</span>, and <span className='font-bold'>security frameworks</span>, ensuring your long-term success.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[170px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                {/* Technology Services */}
                <div className="pt-12">
                    <h1 className="text-[24px] font-semibold ">
                        Technology Services
                    </h1>
                    <ul className="text-[#727272] list-disc pl-5 pt-5">
                        <li>
                            <p>Software Development</p>
                        </li>
                        <li>
                            <p>We specialize in developing enterprise business applications and full-stack solutions that cater to complex business needs. Our expertise spans various industries, ensuring that our solutions are both robust and adaptable.</p>
                        </li>
                        <li>
                            <p>Our capabilities extend to Artificial Intelligence (AI) and Machine Learning (ML) projects, enabling businesses to leverage data-driven insights and automation.</p>
                        </li>
                        <li>
                            <p>We are also adept at creating immersive experiences through Metaverse development, tapping into the potential of virtual reality and augmented reality.</p>
                        </li>
                        <li>
                            <p>In the realm of data analytics, we build solutions that turn data into actionable insights, empowering businesses to make informed decisions.</p>
                        </li>
                        <li>
                            <p>Our proficiency in Robotic Process Automation (RPA) ensures that repetitive, manual processes are automated, leading to increased operational efficiency.</p>
                        </li>
                    </ul>

                </div>
                {/* quotes */}
                <div className="bg-[#FBF2E7] p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                        Each software project we undertake is driven by a commitment to excellence utilizing the latest technologies and methodologies to deliver solutions that exceed client expectations.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[70px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                {/* Managed Services */}
                <div className="pt-12">
                    <h1 className="text-[24px] font-semibold ">
                        Managed Services
                    </h1>
                    <ul className="text-[#727272] list-disc pl-5 pt-5">
                        <li>
                            <p>Quality Assurance (QA) as a Service:We provide end-to-end QA services, ensuring that your products meet the highest standards of quality. This includes everything from test case development to manual testing, automation testing, performance testing, usability testing, and security testing</p>
                        </li>
                        <li>
                            <p>Implementation Management as a Service:Our team assists in the smooth transition of your products from development to production. We handle the entire lifecycle, including staging and production environment setup, transition planning, training material preparation, and production rollout.</p>
                        </li>
                        <li>
                            <p>Service Management as a Service:We design and implement comprehensive service management models based on the ITIL framework. This includes setting up Level 1 to Level 4 support, selecting and deploying appropriate tools, and establishing processes that ensure seamless operations.Post-implementation, we can also manage your service operations, ensuring continuous and reliable performance.</p>
                        </li>
                        <li>
                            <p>Business Analysis as a Service:Our business analysts provide critical insights into your processes and systems, identifying opportunities for improvement and ensuring that your projects align with strategic goals.</p>
                        </li>
                    </ul>

                </div>
                {/* quotes */}
                <div className="bg-[#FBF2E7] p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                        Our Managed Services, branded as <span className='font-bold'>“Service as a Service,”</span> are designed to offload the complexities of IT and business operations from your shoulders, allowing you to concentrate on your core competencies. We offer a range of services that can be tailored to meet the specific needs of your organization.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[120px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
                <div className="pt-5 flex justify-start">
                    <button className="w-[220px] p-5 h-[50px] font-semibold flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
                </div>
            </div>
        </>
    )
}

export default ITExS
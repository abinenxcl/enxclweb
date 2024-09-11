import * as React from 'react';

import InitialHeader from "@/components/initialheader/InitialHeader"
import Bulb from "@/assets/bulb.png"
import Business from '@/assets/business.png'

import Broucher from "@/components/icons/Broucher"
const BusinessEnablement = () => {
  const title="BizExs";
  const mainTitle="Business enablement services";
  return (
    <>
      <div className="pt-24 py-16 md:px-24 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Business}/>
        {/* Facilitating growth through Sustainable Excellence */}
        <div className="flex py-12 justify-between flex-wrap md:flex-nowrap">
          <div className="md:w-2/4 w-full">
            <h1 className="text-[38px] font-bold">
              Facilitating growth through Sustainable Excellence
            </h1>
            <p className="text-justify break-words hyphens-auto pt-5 text-[#727272]">
            BizExS specializes in creating sustainable business processes offering offshore development capabilities and setting up captive units fully integrated with clients' global operations. We excel in consulting on best practices and process optimization, ensuring efficient, scalable and sustainable business operations. Our tech-forward operational facilities are equipped with state-of-the-art infrastructure, supporting seamless IT operations. Additionally, we provide comprehensive resource augmentation services, including talent acquisition, HR management, and staff augmentation. Our bundled service offerings are customized to meet specific client needs enhancing operational efficiency and driving long-term success.
            </p>
          </div>
          <div >
            <div className="md:max-w-[360px]">
              <img src={Bulb} alt="" className="" />
            </div>
          </div>
        </div>
        {/* Services we provide */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap">
          <h1 className="text-[38px] font-bold">
            Services we provide
          </h1>
          <button className="w-[220px] font-semibold p-5 h-[50px] flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
        </div>
        {/* Sustainable Business Processes */}
        <div className="pt-12">
          <h1 className="text-[24px] font-semibold ">
            Sustainable Business Processes
          </h1>
          <h3 className="pt-5">Offshore Development Capability:</h3>
          <ul className="text-[#727272] list-disc pl-5">
            <li>
              <p>Competency and Practice Development: We work closely with clients to build essential competencies such as project management and quality assurance, ensuring alignment with strategic goals and industry best practices. These practices are foundational to the sustainability and success of offshore operations.</p>
            </li>
            <li>
              <p>Build-Operate-Transfer (BOT) Model: We offer a flexible BOT model where we not only build and operate Offshore Development Centers (ODCs) but also transfer full control to the client once fully established. Alternatively, we can continue to manage the ODC, enabling clients to focus on their core business while maintaining sustainable operational efficiency.</p>
            </li>
            <li>
              <p>Captive Unit Setup: We assist in setting up captive units fully integrated with the client’s global operations, maintaining the same efficiency and quality standards as the client’s in-house teams to ensure long-term sustainability.</p>
            </li>
          </ul>

        </div>
        {/* Consulting on Best Practices & Process Optimization */}
        <div className="pt-5">
          <h1 className="text-[24px] font-semibold ">
          Consulting on Best Practices & Process Optimization
          </h1>
          <h3 className="pt-5">Process Consulting:</h3>
          <ul className="text-[#727272] list-disc pl-5">
            <li>
              <p>Best Practices Implementation: Our expert consultants provide guidance on implementing best practices in project management, quality assurance, IT service management, and more. We work with clients to design and optimize processes that are efficient, scalable, and in line with global standards</p>
            </li>
            <li>
              <p>Sustainable Business Practices: We help clients establish sustainable business processes by building robust competencies and implementing efficient, long-term strategies that ensure adaptability in a rapidly changing business environment.</p>
            </li>
          </ul>
        </div>
        {/* Tech-Forward Operational Facilities */}
        <div className="pt-5">
          <h1 className="text-[24px] font-semibold ">
          Tech-Forward Operational Facilities
          </h1>
          <h3 className="pt-5">Infrastructure and IT Services:</h3>
          <ul className="text-[#727272] list-disc pl-5">
            <li>
              <p>Tech-Forward Operational Facilities: We provide state-of-the-art operational facilities in prime IT hubs across Kerala and other parts of India, equipped with the latest technology, security features, and network capabilities to support seamless operations.</p>
            </li>
            <li>
              <p>Physical and IT Infrastructure Setup: We build and manage physical office spaces designed to foster collaboration and innovation. Our advanced IT infrastructure, including secure networks, firewalls, servers, and other assets, ensures maximum efficiency and security for offshore development centers.</p>
            </li>
          </ul>
        </div>
        {/* Resource Augmentation */}
        <div className="pt-5">
          <h1 className="text-[24px] font-semibold ">
          Resource Augmentation
          </h1>
          <h3 className="pt-5">Talent Acquisition and HR Management:</h3>
          <ul className="text-[#727272] list-disc pl-5">
            <li>
              <p>Comprehensive Hiring Services: We manage the entire recruitment process for both permanent and contract positions, ensuring access to the right talent at every level. We also offer specialized training and upskilling programs to build necessary competencies within teams.</p>
            </li>
            <li>
              <p>Full HR Management: Our services include payroll, legal compliance, employee benefits, and administration, ensuring that all employees are managed according to local laws and international best practices.</p>
            </li>
            <li>
              <p>
              Staff Augmentation: We offer staff augmentation services to help clients scale their teams quickly and efficiently, providing temporary staffing solutions to meet short-term project needs or fill critical gaps.
              </p>
            </li>
          </ul>
        </div>
        {/* Bundled and Customized Service Offerings */}
        <div className="pt-5">
          <h1 className="text-[24px] font-semibold ">
          Bundled and Customized Service Offerings
          </h1>
          <h3 className="pt-5">Tailored Service Packages:</h3>
          <ul className="text-[#727272] list-disc pl-5">
            <li>
              <p>Offshore Development Capability Package: A comprehensive package that includes team building, competency development, and delivery management, customized to meet client-specific needs.</p>
            </li>
            <li>
              <p>Captive Unit Setup Package: A turnkey solution for building, operating, and potentially transferring a captive unit with full delivery responsibility.</p>
            </li>
            <li>
              <p>
              Competency Building and Hiring Services Package: A focused offering that provides specialized hiring, training, and upskilling services to build high-performance teams.
              </p>
            </li>
            <li>
              <p>
              Consulting and Best Practices Package: Designed for clients aiming to optimize processes and adopt industry best practices for sustainable growth and efficiency.
              </p>
            </li>
          </ul>
        </div>
        <div className="pt-5 flex justify-start">
        <button className="w-[220px] p-5 h-[50px] font-semibold flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
        </div>
      </div>
    </>
  )
}

export default BusinessEnablement
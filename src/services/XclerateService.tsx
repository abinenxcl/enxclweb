import * as React from 'react';

import InitialHeader from '@/components/initialheader/InitialHeader'
import Business from '@/assets/xclerate.png'
import GrowthnExcellence from '@/components/Xclerate/GrowthnExcellence';
import Xclerate from '@/components/Xclerate/Xclerate';
import OurApproach from '@/components/Xclerate/OurApproach';
import Broucher from '@/components/icons/Broucher';
import WhyConsulting from '@/components/Xclerate/WhyConsulting';

const XclerateService = () => {
  const title = "Xclerate";
  const mainTitle = "Business Consulting at enxcl";
  return (
    <>
      <div className="pt-24 py-16 md:px-24 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Business} />
        <Xclerate />
        <OurApproach />
        {/* Services we provide */}
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap pt-12">
          <h1 className="text-[38px] font-bold">
            Services we provide
          </h1>
          <button className="w-[220px] font-semibold p-5 h-[50px] flex justify-center items-center bg-[#FFCE71] rounded-3xl gap-2">Download Brochure<Broucher /></button>
        </div>
        <GrowthnExcellence />
        </div>
        <WhyConsulting/>
    </>
  )
}

export default XclerateService
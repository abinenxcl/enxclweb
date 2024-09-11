import * as React from 'react';

import XpertEaze1 from '@/assets/XpertEaze1.png'
import QuotesImgae from '@/assets/quotesImage.png'

const Introduction = () => {
    return (
        <div className="pt-12 flex justify-between flex-col md:flex-row items-center ">
        <div className='md:w-2/4 w-full'>
        <div className="bg-[#FBF2E7] p-3 rounded-xl flex mt-12">
                    <h3 className="text-justify">
                    enxcl’s deep understanding of the industry enables us to impart innovative, insightful, and industry relevant training programs to corporates, professionals, and aspirants throughs <span className='font-bold'>XpertEaze</span>, the professional upskilling vertical.
                    </h3>
                    <div className="mt-[-30px] md:mt-[-42px] mr-[-15px] md:w-[170px] ">
                        <img
                            src={QuotesImgae}
                            alt=""

                        />
                    </div>
                </div>
            <p className="mt-6 text-justify text-[#727272]">XpertEaze delivers customized leadership and management trainings as per the vision of the client organization. We start with assessing the current state and with clarity of the future state as per the roles held. Whether the roles handled may be in delivery leadership, customer handling, risk management, product management, service management, or implementation management, we are equipped to assess them and identify the gaps. Further that we deliver customized and tailored skill enhancement programs. We even take care of the individual coaching and mentoring to ensure that the professionals and leaders are upskilled. Thus,ensuring professional growth as well as organizational growth.
            </p>
         </div>
         <div className='md:w-2/4 w-full flex justify-end'>
         <img src={XpertEaze1} alt=" " className="w-[400px] h-[450px] rounded-2xl" />

         </div>
    </div>
    );
};

export default Introduction;
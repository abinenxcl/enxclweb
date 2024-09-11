import * as React from 'react';

import XpertEaze2 from '@/assets/XpertEaze2.png'
const TrainHireDeploy = () => {
    return (
        <div className='flex flex-col pt-12 flex-wrap md:flex-nowrap'>
            <h1 className='font-bold text-[38px]'>Train-Hire-Deploy</h1>
            <h1 className='font-bold text-[38px] text-[#727272] '>Hire-Train-Deploy</h1>
            <div className=" flex justify-between flex-wrap md:flex-nowrap items-center flex-col md:flex-row">

                <div className='md:w-2/4 w-full flex justify-left'>
                    <img src={XpertEaze2} alt=" " className="w-[350px] h-[500px] mt-6 rounded-2xl" />
                </div>
                <div className='md:w-2/4 w-full'>
                    <h2 className="text-[24px] font-semibold pt-5">From Training to Triumph: Your Ideal Workforce Awaits</h2>
                    <p className="mt-6 text-justify text-[#727272]">enxcl's profound industry acumen empowers us to offer innovative, insightful, and contextually relevant training solutions via XpertEaze, our dedicated upskilling division for professionals. XpertEaze offers various tailored and customized trainings for corporates to up-skill and cross-skill professionals from entry level to senior leadership. Being one of the Premier Authorized Training Partners of Project Management Institute (PMI) globally, we deliver Project Management and Agile trainings through sought-after industry experts having many decades of experience. With XpertEaze, enxcl bridges the academic-industry divide and cultivate a workforce ready to meet the challenges of today's dynamic business environment
                    </p>
                    <p className="mt-6 text-justify text-[#727272]">Our Train-To-Hire model is designed to align with corporate needs meticulously by identifying and training promising candidates based on specific technical requirements, enabling companies to assess and recruit well-prepared talent seamlessly through our Train-Hire-Deploy program, companies engage with XpertEaze to tailor training initiatives for chosen candidates, ensuring they are equipped with the necessary skills and knowledge to excel from day one.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrainHireDeploy;
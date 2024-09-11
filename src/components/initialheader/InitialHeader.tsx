import * as React from 'react';

const InitialHeader = ({ title, mainTitle, Business }) => {
    return (
        <>
            <div className="bg-black text-white h-[200px] rounded-2xl">
                <div className="flex h-auto justify-between">
                    <div className='p-8'>
                        {title &&
                            <div className="bg-[#BA690C] w-[100px] h-[40px] rounded-md flex justify-center items-center font-semibold">{title}</div>
                        }
                        <h1 className="text-[44px] font-bold flex md:flex-nowrap flex-wrap">{mainTitle}</h1>
                    </div>
                    <div className='h-[200px]'>
                        <img src={Business} alt="" className='h-[200px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InitialHeader
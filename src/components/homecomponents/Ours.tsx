import * as React from 'react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import RightArrow from '../icons/RightArrow';
import LeftArrow from '../icons/LeftArrow';

const OursComponent = () => {
    const [currentView, setCurrentView] = useState('about');

    const titles = {
        about: "About enxcl",
        visions: "Our Vision",
        values: "Our Values",
        leadership: "Our Leadership"
    };

    const content = {
        about: (
            <>
                <p>enxcl Business Solutions Private Limited, established in 2020, is a premier consulting and professional upskilling firm dedicated to elevating business excellence. We empower organizations to enhance their business prospects, offering services across multiple verticals and serving clients in four continents from five global locations.</p><br />
                <p>Our organization comprises world-class experts with rich technical process and management expertise across major industry segments, driving growth for startups, scale-ups and corporations alike. With a deep understanding of industry dynamics and a world-class curriculum, enxcl delivers innovative, insightful and industry-relevant training programs to corporates, professionals and aspiring talents. <a href="/about" className='text-blue-700'>Read more..</a></p>
            </>
        ),
        visions: (<>
            <p>To be a premier consulting and upskilling partner, empowering business organizations, professionals and aspiring talents to achieve unparalleled excellence.</p>
            <br />

        </>),
        values: (<>
        <p>
        At enxcl, our corporate values underpin every aspect of our work, steering our approach to business, client partnerships and internal collaboration. <a href="/about" className='text-blue-700'>Read More..</a>
        </p>
        </>),
        leadership: (<>
            <>
                <p>enxcl has a forward-thinking leadership team with over 100 years of combined
                    experience in the IT industry.The senior executives at the company have served
                    BigFours and many MNCs at leadership positions across airline, telecom, manufacturing
                    and BFSI domains.With a proven track record of managing complex IT ecosystems and
                    leading large-scale transformations, our leaders are committed to fostering a culture of
                    continuous improvement and delivering exceptional value to our clients.</p ><br />
                <p>
                    With 25+ years in IT delivery,Santhosh Udayanan,our Managing Director,has driven
                    transformative change across industries like Airlines,Oil & Gas and Automation.As
                    enxcl's founder and a recognized leader, he’s honored as a top Agile Consultant and
                    social entrepreneur.</p>
            </>

        </>)
    };

    const changeView = (view) => setCurrentView(view);

    const goToNextView = () => {
        const keys = Object.keys(titles);
        const currentIndex = keys.indexOf(currentView);
        const nextIndex = (currentIndex + 1) % keys.length;
        setCurrentView(keys[nextIndex]);
    };

    const goToPreviousView = () => {
        const keys = Object.keys(titles);
        const currentIndex = keys.indexOf(currentView);
        const previousIndex = (currentIndex - 1 + keys.length) % keys.length;
        setCurrentView(keys[previousIndex]);
    };

    return (
        <div className="flex md:px-24 py-8">
            <div className='flex justify-center w-full gap-14 flex-wrap md:flex-nowrap'>
                <div className="w-1/5 p-4 flex items-center flex-col justify-center">
                    {Object.keys(titles).map((key) => (
                        <button
                            key={key}
                            onClick={() => changeView(key)}
                            className={`w-full py-2 text-left text-[22px] min-w-[200px]
                                        ${currentView === key ? 'font-bold text-gray-900' : 'text-gray-700'}`}
                        >
                            {titles[key]}
                        </button>
                    ))}
                </div>

                <Card className="w-4/5 p-5 bg-[#F4F4F4] flex flex-col md:min-w-[600px]">
                    <CardHeader>
                        <CardTitle className='text-[30px] font-bold'>{titles[currentView]}</CardTitle>
                    </CardHeader>
                    <CardContent className='text-[18px] break-words'>
                        {content[currentView]}
                    </CardContent>
                    <div className="flex gap-5 pl-5">
                        <button
                            onClick={goToPreviousView}
                            className="border border-black p-4 rounded-full hover:bg-[#FFCE71]"
                        >
                            <LeftArrow />
                        </button>
                        <button
                            onClick={goToNextView}
                            className="border border-black p-4 rounded-full hover:bg-[#FFCE71]"
                        >
                            <RightArrow />
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default OursComponent;

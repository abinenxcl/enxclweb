import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import CustomersIcon from "../icons/CustomersIcon"

const reviews = [
    {
        name: "Bindu Meher B M",
        position: "Blurays Technologies, CEO",
        text: (<>
        <p>"Our collaboration with enxcl on the learning space has produced exemplary result. Agility, resilience, trust are the key factor of their offerings. enxcl is sure about what is required for their Client. I appreciate their attention to detail which provides significant value to the clients."</p>
        </>)
    },
    {
        name: "Chandrasekaran A",
        position: "Founder Director, InfoCareer Private Limited",
        text: (<>
        <p>
        "Our association with www.enxcl.com is almost a year now, in utilising your services in Technical Training. Testing Strategic Consulting Enxcl is awesome and very proactive. You have highly competent, customer centric and highly dedicated team of folks. It was pleasure in associating with YOU as 'Partner' and we will not hesitate to recommend 'YOU' to anyone blindly. All the very best to you and your enxcl teams. Looking forward to long term association."
        </p>
        </>)
    },
    {
        name: "Shyam",
        position: "Simplogics",
        text: (<>
        <p>
        "enxcl is a great partner to work with. Right from the start, enxcl team is clear on expectations, responsive to feedback and works in a very structured way in building and positioning our products. We are happy to have collaborated with a team that's professional, diligent, and committed in a way that makes us feel that they are not an external partner, but an extension of our team."
        </p>
        </>)
    }
];

const Customers = () => {

    return (
        <div className="bg-cover bg-fixed bg-[url('/src/assets/background2.png')] h-auto md:px-24 py-8 p-8">
            <div className="flex justify-center">
                <div className="flex flex-col">
                    <h3 className="flex text-[#FFCE71] justify-center gap-2"><CustomersIcon /> What Customers Speak About Us</h3>
                    <h1 className="text-[30px] md:text-[44px] font-bold mb-6 text-white">Customer First, Always</h1>
                </div>
            </div>
            <Carousel className="w-full max-w-screen-xl">
                <CarouselContent>
                    {reviews.map((review, index) => (
                        <CarouselItem key={index}>
                            <div className="p-4 flex flex-col items-center">
                                <Card className="min-h-[260px] min-w-[300px]">
                                    <CardContent className="flex flex-col items-center justify-center p-6">
                                        <h2 className="text-xl font-bold">{review.name}</h2>
                                        <h3 className="text-lg font-semibold mb-4">{review.position}</h3>
                                        <p className="text-base">{review.text}</p>
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
    )
}

export default Customers

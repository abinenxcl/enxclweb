import * as React from 'react';

import Contact from '@/assets/contact.png'
import Weare from '@/assets/weare.png'
import CallIcon from '@/components/icons/CallIcon';
import Clock from '@/components/icons/Clock';
import Email from '@/components/icons/Email';
import Location from '@/components/icons/Location';
import SendMessage from '@/components/icons/SendMessage';
import InitialHeader from '@/components/initialheader/InitialHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactUs = () => {
  const [selectedLocation, setSelectedLocation] = useState('Thiruvananthapuram'); 
  const title = "";
  const mainTitle = "Contact Us";

  const locationData = {
    Thiruvananthapuram: {
      phone: '+91 73063 96219',
      email: 'info@enxcl.com',
      address: `Second Floor, Connect Hive,
        Asiatic Business Centre, NH 66 Bypass, Kazhakuttam, Thiruvananthapuram`,
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.011020098624!2d76.87749631433412!3d8.55002589387696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bfa5b1bc205f%3A0x53d5525935778a4!2sAsiatic%20Business%20Center%2C%20Technopark%20Phase%20III%20Main%20Rd%2C%20Kulathoor%2C%20Kazhakkoottam%2C%20Thiruvananthapuram%2C%20Kerala%20695585%2C%20India!5e0!3m2!1sen!2sus!4v1691843753246!5m2!1sen!2sus'
    },
    Haripad: {
      phone: '+91 73063 96219',
      email: 'info@enxcl.com',
      address: 'Haripad, Kerala, India',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!1m0!4m7!1m0!1m5!1m1!1s0x3b061fc63260cb21%3A0x5cbbac1c77d923c7!2m2!1d76.4576146!2d9.2808981'
    },
    Kochi: {
      phone: '+91 73063 96219',
      email: 'info@enxcl.com',
      address: 'Carnival Infopark, Phase 1, Kochi',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3b080d001ddebed1%3A0x730e71a6042188d8'
    },
    Kayamkulam: {
      phone: '+91 8714602083',
      email: 'info@enxcl.com',
      address: '1st Floor, Lakshmi Tower, Kayamkulam',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!4m10!1m2!2m1!1s1st+floor+lakshmi+tower+kayamkulam!3m6!1s0x3b061ddb893ae2a5%3A0xc7c6c7622470f9c!8m2!3d9.1751661!4d76.5012235'
    },
    Neyyatinkara: {
      phone: '+91 9496172039',
      email: 'info@enxcl.com',
      address: 'Panavila Road (Govt Homeo Hospital Road), Moonnukallinmoodu, Neyyattinkara',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3b05ae5cec67446f%3A0x9e363145fbfa7bc3!2m2!1d77.0754344!2d8.4098706'
    },
    Malaysia: {
      phone: '+60 11 6923 7095',
      email: 'info@enxcl.com',
      address: 'Malaysia',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!4m8!4m7!1m0!1m5!1m1!1s0x3034d3975f6730af%3A0x745969328211cd8!2m2!1d101.975766!2d4.210484'
    },
    Dubai: {
      phone: '+971 506531965',
      email: 'info@enxcl.com',
      address: 'Dubai, United Arab Emirates',
      googleMapsSrc: 'https://www.google.com/maps/embed?pb=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2m2!1d55.2707828!2d25.2048493'
    }
  };
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };
  return (
    <>
      <div className="pt-24 py-16 md:px-28 px-8">
        <InitialHeader title={title} mainTitle={mainTitle} Business={Contact} />
        <div className='flex justify-between pt-12 flex-wrap md:flex-nowrap'>
          <div className='flex flex-col bg-[#FFCE71] rounded-2xl md:w-2/4 w-full'>
            <h1 className='text-[38px] font-bold p-8'>
              <span className='text-[#292929]'></span> We’d Love to Hear<br />
              <span className='text-[#BA690C]'>From You!</span>
            </h1>
            <div>
              <img src={Weare} alt="" />
            </div>
          </div>
          <div className='flex flex-col rounded-2xl'>
            <h1 className='text-[38px] font-bold'>
              Send us a Message
            </h1>
            <div className='bg-[#FBF2E7] p-8 rounded-xl flex gap-8 flex-col mt-5'>
              <div>
                <label htmlFor="" className='font-semibold'>Name</label>
                <Input />
              </div>
              <div className='flex gap-3'>
                <div>
                  <label htmlFor="" className='font-semibold'>Email</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="" className='font-semibold'>Phone</label>
                  <Input type='tel' />
                </div>
              </div>
              <div>
                <label htmlFor="" className='font-semibold'>Message</label>
                <Textarea />
              </div>
              <button className='w-[180px] h-[40px] rounded-3xl bg-[#FFCE71] flex items-center justify-center gap-3 font-semibold hover:font-bold'>Send Message<SendMessage /></button>
            </div>

          </div>
        </div>
        <div className='flex flex-col justify-center items-center py-12'>
          <span className='text-[#BA690C] font-semibold'>
            Contact Information
          </span>
          <h1 className='text-[38px] font-bold flex justify-center'>
            Our Offices
          </h1>
        </div>
        <div>
        <div className="flex justify-center gap-5 flex-wrap md:flex-nowrap">
        {Object.keys(locationData).map((location) => (
          <button
            key={location}
            onClick={() => handleLocationClick(location)}
            className={`w-auto h-[40px] p-5 focus:outline-1 border border-[#BA690C] rounded-2xl flex justify-center items-center 
              ${selectedLocation === location ? 'bg-[#BA690C] text-white font-semibold' : 'hover:bg-[#BA690C] hover:text-white hover:font-semibold'}`}
          >
            {location}
          </button>
        ))}
      </div>
      {/* Conditionally render the card based on selected location */}
      {selectedLocation && (
        <div className="flex items-center justify-center p-8 shadow-2xl rounded-xl mt-12 md:flex-row flex-col gap-6 md:gap-0">
          <div className="flex flex-col w-2/6 gap-5">
            <div className="flex items-center gap-5">
              <div>
                <CallIcon />
              </div>
              <div className="flex flex-col">
                <span className="text-[#727272]">Requesting A Call:</span>
                <span className="font-bold">{locationData[selectedLocation].phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Email />
              </div>
              <div className="flex flex-col">
                <span className="text-[#727272]">E-mail:</span>
                <span className="font-bold">{locationData[selectedLocation].email}</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div>
                <Location />
              </div>
              <div className="flex flex-col">
                <span className="text-[#727272]">Location:</span>
                <span className="font-bold">{locationData[selectedLocation].address}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/6 gap-5">
            <div className="flex items-center gap-5 flex-col">
              <div className="flex flex-col gap-2">
                <span className="text-[#727272]">Monday-Friday</span>
                <span className="flex items-center gap-3">
                  <Clock /> <span className="font-bold">9 am - 8 pm</span>
                </span>
              </div>
              {/* <div className="flex flex-col gap-2">
                <span className="text-[#727272]">Saturday</span>
                <span className="flex items-center gap-3">
                  <Clock /> <span className="font-bold">10 am - 6 pm</span>
                </span>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col w-2/6 gap-5">
            <iframe
              title="Google Maps Location"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={locationData[selectedLocation].googleMapsSrc}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
      </div>
    </>
  )
}

export default ContactUs
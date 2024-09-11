import * as React from 'react';
import Logo from '@/assets/enxcl-logo.png'
import FacebookIcon from "../icons/Facebook/FacebookIcon";
import InstagramIcon from "../icons/Instagram/InstagramIcon";
import LinkedinIcon from "../icons/Linkedin/LinkedinIcon";
import CallIcon from '../icons/CallIcon';
import Email from '../icons/Email';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black py-6 px-4 md:px-24 font-sans">
        <div className="md:flex justify-between border-b border-white/50">
          <div className="w-full md:w-[350px] mb-4 md:mb=0">
            <img src={Logo} alt="" className="w-[133px] h-[60px]" />
            <p className="text-white">
            Cultivating sustainable business ecosystems that is meticulously designed for enhancing growth and long term success.
            </p>
          </div>
          <div className="md:flex gap-4 md:gap-8 mb-4">
            <div className="text-white mb-2">
              <h2 className="text-lg font-semibold text-nowrap mb-2">Quick Links</h2>
              <p className='text-[#F4F4F4]'>Services</p>
              <p className='text-[#F4F4F4]'>About Us</p>
              <p className='text-[#F4F4F4]'>Resources</p>
            </div>
            <div className="text-white">
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <form action="">
                <div className="bg-white p-1 rounded-full mt-2 flex justify-between items-center h-50px">
                  <input type="text" placeholder="Enter your email here" className="outline-none text-black bg-transparent pl-1"/>
                  <button className="bg-black rounded-full px-2 py-1 text-sm ml-4 md:m-0">Send inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="text-white justify-center md:flex md:justify-between items-center pt-4">
       
          <div className='flex flex-col gap-3'>
            <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
            <p className="text-sm flex items-center gap-2"><CallIcon/>+91 73063 96219</p>
            <p className="text-sm flex items-center gap-2"><Email/>info@enxcl.com</p>

          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Address</h3>
            <p className="text-sm "> First Floor, Asiatic Business Center,<br/> Technopark Phase III Main Rd, Kulathoor,<br/>  Kazhakkoottam, Thiruvananthapuram,<br/>  Kerala 695585</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-[30px] h-[30px] rounded-full border flex justify-center items-center bg-white p-1">
              <FacebookIcon />
            </div>
            <div className="w-[30px] h-[30px] rounded-full border flex justify-center items-center bg-white p-1">
              <InstagramIcon />
            </div>
            <div className="w-[30px] h-[30px] rounded-full border flex justify-center items-center bg-white p-1">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

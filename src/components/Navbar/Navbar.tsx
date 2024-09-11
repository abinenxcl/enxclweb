import * as React from 'react';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from '@/assets/enxcl-logo.png'
import menu from "@/assets/menu.png"
import abouts from "@/assets/about.png"
// import Resources from "@/assets/resources.png"
import { useState, useEffect } from "react"

export function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/'||location.pathname === '/about';

    // Function to toggle mobile menu
    const handleToggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Scroll listener to change navbar background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true); // Change background to black after 50px scroll
            } else {
                setIsScrolled(false); // Revert back to initial state based on path
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Dynamic class names for navbar
    const navbarBgClass = isScrolled ? 'bg-black' : 'bg-transparent';
    const textColorClass = isScrolled || isHomePage ? 'text-white' : 'text-black';
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    const toXpertEaze=()=> {
        navigateTo('/');
    };
    return (
        <>
            {/* Main Navbar */}
            <div
                className={`${navbarBgClass} transition-colors duration-300 px-8 md:px-28 py-4 w-full h-16 items-center flex justify-between fixed z-20`}
            >
                {/* Logo */}
                <div onClick={toXpertEaze} className="cursor-pointer">
                    <img src={Logo} alt="logo" className="w-[133px] h-[60px]" />
                </div>

                {/* Desktop Navigation */}
                <NavigationMenu className="hidden lg:block">
                    <NavigationMenuList>
                        <NavItems textColorClass={textColorClass} />
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={handleToggleMenu}
                        className={`${textColorClass} focus:outline-none`}
                    >
                        {/* Toggle between hamburger and close icon */}
                        <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#121212] text-white w-full absolute z-10">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        <li>
                            <Link to="/" className="text-white hover:text-[#FFCE71]">
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-white hover:text-[#FFCE71]">
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link to="/resources" className="text-white hover:text-[#FFCE71]">
                                RESOURCES
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-white hover:text-[#FFCE71]">
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

const NavItems = ({ textColorClass }) => {
    const navigate = useNavigate();
    const navigateTo = (path) => {
        navigate(path);
        window.scrollTo(0, 0); // Scroll to the top of the page
    };
    const toBusinessEnablement = () => {
        navigateTo('/businessenablement');
    };
    const toITExS = () => {
        navigateTo('/ITExS');
    };
    const toContact = () => {
        navigateTo('/contact');
    };
    const toXcelerate = () => {
        navigateTo('/xclerate');
    };
    const toAbout = () => {
        navigateTo('/about');
    };
    const toXpertEaze=()=> {
        navigateTo('/xperteaze');
    };
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#FFCE71]`}>ABOUT US</NavigationMenuTrigger>
                <NavigationMenuContent className="md:min-w-[1100px]  text-white">
                    <div className="w-full p-12 flex gap-10">
                        <div className="flex flex-col gap-10 w-1/5">
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group"  onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Corporate Overview</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>

                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Our Purpose & Values</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 cursor-pointer group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Leadership</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Careers</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>

                        </div>
                        <div className="flex flex-col w-1/5 gap-10">
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Clients & Partners</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toAbout}>
                                <h1 className="text-[16px] font-semibold">Life @ Enxcl</h1>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-3/5">
                            <img src={abouts} alt="Menu" className="h-[200px]" />
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[28px] font-semibold">
                                    About Us
                                </h1>
                                <span className="text-sm">
                                    Dynamic Scale - Up Powdered by seasoned leaders
                                </span>
                                <button className="h-[40px] border border-white rounded-3xl w-[160px] hover:bg-white hover:text-black"  onClick={toAbout}>
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#FFCE71]`}>SERVICES</NavigationMenuTrigger>
                <NavigationMenuContent className="md:max-w-[1000px] md:min-w-[1000px] text-white">
                    <div className="w-full p-12 flex gap-10">
                        <div className="flex flex-col gap-10 w-2/5">
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toXcelerate}>
                                <h1 className="text-[18px] font-semibold" >Xclerate</h1>
                                <span className="text-sm">Business & Management Consulting</span>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toBusinessEnablement}>
                                <h1 className="text-[18px] font-semibold">BizExs</h1>
                                <span className="text-sm">Business Enablement Consulting</span>
                                <div className="h-[2px] w-[full] bg-gray-500 cursor-pointer group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toITExS}>
                                <h1 className="text-[18px] font-semibold">ITExS</h1>
                                <span className="text-sm">Technology Consulting & Services</span>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group" onClick={toXpertEaze}>
                                <h1 className="text-[18px] font-semibold">XpertEaze</h1>
                                <span className="text-sm">Corporate & Professional Upskilling</span>
                                <div className="h-[2px] w-[full] bg-gray-500 group-hover:bg-[#FFCE71]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-3/5">
                            <img src={menu} alt="Menu" className="h-[200px]" />
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[28px] font-semibold">
                                    Services
                                </h1>
                                <span className="text-sm">
                                    enxcl is a catalyst for business and professional growth. We enhance the excellence of organizations, professionals, and IT aspirants.
                                </span>
                                <button className="h-[40px] border border-white rounded-3xl w-[160px] hover:bg-white hover:text-black">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#FFCE71]`}>RESOURCES</NavigationMenuTrigger>
                {/* <NavigationMenuContent className="md:min-w-[700px] md:max-w-[800px] text-white">
                    <div className="w-full p-12 flex gap-10">
                        <div className="flex flex-col gap-10 w-2/5">
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group">
                                <h1 className="text-[18px] font-semibold">Case studies</h1>
                                <div className="h-[3px] w-[full] bg-white group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group">
                                <h1 className="text-[18px] font-semibold">Blogs</h1>
                                <div className="h-[3px] w-[full] bg-white cursor-pointer group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group">
                                <h1 className="text-[18px] font-semibold">News & Events</h1>
                                <div className="h-[3px] w-[full] bg-white group-hover:bg-[#FFCE71]"></div>
                            </div>
                            <div className="text-white hover:text-[#FFCE71] cursor-pointer group">
                                <h1 className="text-[18px] font-semibold">Product Details</h1>
                                <div className="h-[3px] w-[full] bg-white group-hover:bg-[#FFCE71]"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 w-3/5">
                            <img src={Resources} alt="Menu" className="h-[200px]" />
                            <div className="flex flex-col gap-3">
                                <h1 className="text-[28px] font-semibold">
                                    Resources
                                </h1>
                                <span className="text-sm">
                                    Watch how we stage our organization to reframe the future of your enterprise                                </span>
                                <button className="h-[40px] border border-white rounded-3xl w-[160px] hover:bg-white hover:text-black">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </NavigationMenuContent> */}
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={`bg-transparent ${textColorClass} hover:text-[#FFCE71]`} onClick={toContact}>CONTACT</NavigationMenuTrigger>
            </NavigationMenuItem>
        </>
    );
};

export default NavBar;

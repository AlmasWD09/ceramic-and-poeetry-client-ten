import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";

import { IoLogoFacebook,IoLogoGithub } from "react-icons/io5";
import { TiSocialLinkedin } from "react-icons/ti";
import { useEffect, useState } from "react";



const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);


    return (
        <div className="bg-gray-200 mt-10 ">
            <div className="max-w-7xl mx-auto px-8  py-20">
                <div className="flex md:gap-10">
                    <div className="w-[30%] space-y-3">
                        <h3 className="text-3xl font-bold mt-5">Ember & Clay</h3>
                        <p className="text-sm ">This could be a metaphorical representation of how text gives form to ideas and shapes our understanding</p>
                        <div className="flex gap-3 pb-3">
                            <a className="border-2 border-primary w-10 h-10 flex justify-center items-center rounded-full text-primary hover:bg-primary hover:text-white text-2xl" href="https://www.facebook.com/profile.php?id=61554724019002"><IoLogoFacebook /></a>
                            <a className="border-2 border-primary w-10 h-10 flex justify-center items-center rounded-full text-primary hover:bg-primary hover:text-white text-2xl" href="https://github.com/"><IoLogoGithub /></a>
                            <a className="border-2 border-primary w-10 h-10 flex justify-center items-center rounded-full text-primary hover:bg-primary hover:text-white text-3xl" href=""><TiSocialLinkedin /></a>
                        </div>
                    </div>

                    <div className="w-[20%] space-y-3">
                        <h3 className="text-2xl font-semibold underline underline-offset-8">Get In Touch</h3>
                       <div className="flex flex-col">
                       <a className="flex items-center gap-1" href=""><span className="text-lg text-primary"><GrLocation /></span>Mymensingh,Bangladesh</a>
                       <a className="flex items-center gap-1" href=""><span className="text-lg text-primary"><HiOutlineMail /></span>almashossain7384@gmail.com</a>
                        <a className="flex items-center gap-1" href=""><span className="text-lg text-primary">< IoIosCall/></span>+01773843310</a>
                        <a href=""></a>
                       </div>
                    </div>

                    <div className="w-[20%] space-y-3">
                    <h3 className="text-2xl font-semibold underline underline-offset-8">Quicklinks</h3>
                    <div className="flex flex-col">
                    <a className="hover:underline hover:text-primary" href="/">Home</a>
                    <a className="hover:underline hover:text-primary" href="/about">About</a>
                    <a className="hover:underline hover:text-primary" href="/allArt">All artCruft</a>
                    <a className="hover:underline hover:text-primary" href="/addCraft">Add cruft</a>
                    <a className="hover:underline hover:text-primary" href="/myArt">My artCruft</a>
                    </div>
                    </div>

                    <div className="w-[30%] space-y-3">
                        <h3 className="text-2xl font-semibold underline underline-offset-8 ">Newsletter</h3>
                        <p>Signup our newsletter to get update information, news & insight</p>
                        <div className="">
                            <input className="w-full mb-3 p-3 border border-gray-300  outline-0" type="email" name="email" id="" placeholder="Email address" required />
                            <p><button className="bg-primary font-semibold text-white w-full py-3">Subscribe</button></p>
                        </div>
                    </div>
                </div>
                    <hr className="w-full my-4" />
                    <div className="text-center">
                        <p>Copyright © <span>{currentYear}</span> Ember & Clay, All rights reserved. Present by MoxCreative</p>
                    </div>
            </div>
        </div>
    );
};

export default Footer;
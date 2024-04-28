import { Helmet } from "react-helmet-async";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";


const About = () => {
    return (
        <>
        <Helmet>
            <title>Ceramices and pottery /about</title>
        </Helmet>
        <div className="max-w-7xl mx-auto px-8 mt-10">
        <div className="mt-10">
                <h1>MEET OUR TEAM</h1>
                <h1 className="text-2xl font-bold">Our Team Of Experts</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-5">
                {/* card one */}
                <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-primary hover:text-white py-10">
                    <div className="">
                        <img className="h-[200px] rounded" src="https://i.ibb.co/Lr8NrP6/foto-sushi-6anudmp-ILw4-unsplash.webp" alt="" />
                    </div>
                    <div className="text-center my-2 space-y-2" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h3 className="font-semibold">Carl Parker</h3>
                        <h1 className="text-sm">Guardian of Eternity</h1>
                        <div className="flex justify-center gap-3">
                            <span className="cursor-pointer"><FaFacebook /></span>
                            <span className="cursor-pointer"><FaTwitter /></span>
                            <span className="cursor-pointer"><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
                {/* card two */}
                <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-primary hover:text-white py-10">
                    <div className="">
                        <img className="h-[200px] w-full rounded" src="https://i.ibb.co/bLSvhVD/image2.webp" alt="" />
                    </div>
                    <div className="text-center my-2 space-y-2" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h3 className="font-semibold">Anna Doe</h3>
                        <h1 className="text-sm">Warden of Perpetuity</h1>
                        <div className="flex justify-center gap-3">
                            <span className="cursor-pointer"><FaFacebook /></span>
                            <span className="cursor-pointer"><FaTwitter /></span>
                            <span className="cursor-pointer"><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
                {/* card three */}
                <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-primary hover:text-white py-10">
                    <div className="">
                        <img className="h-[200px] rounded" src="https://i.ibb.co/XCD9kdx/image03.webp" alt="" />
                    </div>
                    <div className="text-center my-2 space-y-2" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h3 className="font-semibold">David Doe</h3>
                        <h1 className="text-sm">Sentinel of the Ages</h1>
                        <div className="flex justify-center gap-3">
                            <span className="cursor-pointer"><FaFacebook /></span>
                            <span className="cursor-pointer"><FaTwitter /></span>
                            <span className="cursor-pointer"><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
                {/* card four */}
                <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-primary hover:text-white py-10">
                    <div className="">
                        <img className="h-[200px] rounded" src="https://i.ibb.co/BqY5Zvc/image04.webp" alt="" />
                    </div>
                    <div className="text-center my-2 space-y-2" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h3 className="font-semibold">Lauren Miller</h3>
                        <h1 className="text-sm">Custodian of Continuum</h1>
                        <div className="flex justify-center gap-3">
                            <span className="cursor-pointer"><FaFacebook /></span>
                            <span className="cursor-pointer"><FaTwitter /></span>
                            <span className="cursor-pointer"><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
                {/* card five */}
                <div className="h-[400px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex flex-col items-center hover:bg-primary hover:text-white py-10">
                    <div className="">
                        <img className="h-[200px] rounded" src="https://i.ibb.co/LpK9xYb/image05.webp" alt="" />
                    </div>
                    <div className="text-center my-2 space-y-2" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1000">
                        <h3 className="font-semibold">Carl Parker</h3>
                        <h1 className="text-sm">Custodian of Forever</h1>
                        <div className="flex justify-center gap-3">
                            <span className="cursor-pointer"><FaFacebook /></span>
                            <span className="cursor-pointer"><FaTwitter /></span>
                            <span className="cursor-pointer"><FaInstagramSquare /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default About;
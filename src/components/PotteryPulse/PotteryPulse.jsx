import { FaArrowRight } from "react-icons/fa6";

const PotteryPulse = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10 lg:my-20">
            <div className=" flex flex-col lg:flex-row justify-center lg:justify-between gap-6">
            <div className="w-full lg:w-2/5 h-[400px] ">
                <img className="h-full w-full" src="https://i.ibb.co/VVpjS2C/poeetry-Plus.webp" alt="" />
            </div>
            <div className="w-full lg:w-3/5  p-8 space-y-3">
                <h1 className="text-xl lg:text-2xl font-poppins lg:w-1/2 font-semibold">Unveiling the Vibrant Rhythms of Ceramic Artistry</h1>
                <p>Dive into the dynamic world of ceramic craftsmanship with PotteryPulse. This innovative platform serves as your gateway to the beating heart of pottery, where tradition meets innovation. Explore a kaleidoscope of techniques, styles, and stories as PotteryPulse celebrates the rich heritage and contemporary evolution of ceramic artistry. Whether youre a seasoned artisan or a curious enthusiast, PotteryPulse invites you to feel the pulse of creativity, connecting you to a vibrant community of clay connoisseurs and inspiring your own artistic journey.</p>
                <button className="border border-primary px-4 py-2 text-primary rounded-sm flex items-center gap-3">Learn More <FaArrowRight/></button>
            </div>
            </div>
        </div>
    );
};

export default PotteryPulse;
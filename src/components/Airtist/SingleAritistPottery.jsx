import { FaArrowRight } from "react-icons/fa6";
import PropTypes from 'prop-types';

const SingleAritistPottery = ({category}) => {
    const {image,name,description} = category || {};
    return (
        <div className=" h-[600px] rounded-t-full flex justify-end items-end relative">
            <img className="h-[600px] rounded-t-full " src={image} alt="" />

            <div className="h-[200px] bg-slate-950  hover:bg-primary text-white opacity-70 text-center flex justify-center items-center absolute -inset-x-0.5">
           <div className="space-y-2 ">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="w-[90%] mx-auto">{description}</p>
            <div className="flex justify-center py-2">
            <button className="border px-4 py-2 rounded-sm flex items-center gap-3">Learn More <FaArrowRight/></button>
            </div>
           </div>
            </div>
        </div>
    );
};

// propTypes validation
SingleAritistPottery.propTypes = {
    category: PropTypes.node,
  };
export default SingleAritistPottery;
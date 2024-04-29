import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const MyArtCruft = ({category}) => {
const{photo,name,price,rating,customization,stockStatus} = category || {};

const handleDeleteCategory = () =>{
        // console.log('click hoyca boss');
}

    return (
        <div className="max-w-7xl mx-auto px-8 lg:mt-10">
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[50%] ">
                    <figure className=" md:h-[350px] object-cover rounded-lg">
                        <img className="rounded-tl-lg rounded-lg w-full h-full" src={photo} alt="" />
                    </figure>
                </div>
                {/* content */}
                <div className="w-full lg:w-[50%] ">
                    <div className="p-5 lg:p-10 space-y-2">
                        <h3>{name}</h3>
                        <p><span className="font-bold">price:</span>{price}</p>
                        <p>{rating}</p>
                        <p>{customization}</p>
                        <p>{stockStatus}</p>
                        <div className="flex gap-3">
                            <Link to={`/updateCraft`}>
                            <button className="btn-sm text-xs font-normal  bg-primary text-white rounded-sm">Update</button>
                            </Link>
                            <button onClick={handleDeleteCategory} className="btn-sm text-xs font-normal  bg-yellow-600 text-white rounded-sm">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// propTypes validation
MyArtCruft.propTypes = {
    category: PropTypes.object,
  };
export default MyArtCruft;
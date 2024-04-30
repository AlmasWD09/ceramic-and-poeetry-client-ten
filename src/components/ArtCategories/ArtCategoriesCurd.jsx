import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ArtCategoriesCurd = ({singleCategory}) => {
    // const{image,name,subCategory,description,price,rating,time} = singleCategory || {};
    const{image,name,subCategory,price} = singleCategory || {};
    console.log(singleCategory);
    const navigate = useNavigate();
    const handleArtCruft = () =>{
        navigate('/subCategory')
    }
    return (
      <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
     
           {/* curd one */}
           <div onClick={handleArtCruft} className=" md:w-[350px] lg:w-[380px] shadow-xl rounded-lg cursor-pointer">
        <div className="space-y-3">
        <figure className="md:w-[350px] lg:w-[380px] h-[200px]rounded-lg">
           <img className="rounded-tl-lg rounded-tr-lg w-full h-full" src={image} alt="" />
                </figure>
            <div className="px-4">
                <h3>{name}</h3>
                <h3>{subCategory}</h3>
                <p>price: {price}</p>
            <div>
                <button className="w-full bg-secondery py-3 rounded-lg text-white my-4">Add Category</button>
            </div>
            </div>
           
        </div>
        </div>
        
        </div>
      </div>
    );
};
// propTypes validation
ArtCategoriesCurd.propTypes = {
    singleCategory: PropTypes.node,
  };
export default ArtCategoriesCurd;
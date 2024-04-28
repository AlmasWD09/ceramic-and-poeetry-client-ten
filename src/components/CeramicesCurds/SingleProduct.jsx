import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    // const {photo,name,description,price,rating,selectedCategory,stockStatus,time,userEmail,userName} = product || {}
    const {_id,photo,name,description,price,rating} = product || {}
    
    return (
        <div className="md:w-[350px] lg:w-[380px] shadow-xl rounded-lg">
        <div className="space-y-3">
        <figure className="md:w-[350px] lg:w-[380px] h-[240px]rounded-lg">
                <img className="rounded-tl-lg rounded-tr-lg w-full h-full" src={photo} alt="" />
                </figure>
            <div className="px-2">
                <h3 className="font-bold text-xl">{name}</h3>
                <p>{description}</p>
                <p><span className='font-bold'>price: </span>${price}</p>
                <p><span className='font-bold'>{rating}</span></p>
                <div className="w-full">
                    <Link to={`/ceramicesViewDetails/:${_id}`}>
                    <button className="w-full bg-secondery py-3 rounded-lg text-white hover:bg-primary my-4">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

// propTypes validation
SingleProduct.propTypes = {
    product: PropTypes.object.isRequired,
  };
export default SingleProduct;
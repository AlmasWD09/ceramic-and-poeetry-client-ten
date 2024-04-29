
import { useEffect, useState, } from "react";
import {  useParams } from "react-router-dom";


const CeramicViewDetails = () => {
  const[product,setProduct] = useState({})

   const {id} = useParams();
   useEffect(()=>{
    fetch(`http://localhost:5000/categories/${id}`)
    .then(res=>res.json())
    .then(data=>setProduct(data))
   },[id])

console.log(product);

 
    return (
        <div className="max-w-7xl mx-auto px-8 mt-5">
           <div className="flex justify-center rounded-sm">
            <img src={product.photo} alt="" />
           </div>
            {/* content */}
            <div className="lg:px-28">
                <h3>{product.name}</h3>
                <p>{product.selectedCategory}</p>
                <p>{product.description}</p>
                <p>{product.time}</p>
                <p>{product.customization}</p>
                <p>{product.stockStatus}</p>
            </div>
        </div>
    );
};

export default CeramicViewDetails;




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
           <div className="flex justify-center rounded-lg">
            <img className="rounded-lg" src={product.photo} alt="" />
           </div>
            {/* content */}
            <div className="space-y-1 p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className=""><span className="text-xl font-bold">selectedCategory: </span>{product.selectedCategory}</p>
                <p>{product.description}</p>
                <p><span className="text-xl font-bold">time: </span>{product.time}</p>
                <p><span className="text-xl font-bold">customization: </span>{product.customization}</p>
                <p><span className="text-xl font-bold">stockStatus: </span>{product.stockStatus}</p>
            </div>
        </div>
    );
};

export default CeramicViewDetails;



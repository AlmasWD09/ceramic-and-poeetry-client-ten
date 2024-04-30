import { useState } from "react";

import { useEffect } from "react";
import SingleProduct from "./SingleProduct";


const CeramicesCurds = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        const url = 'https://ceramics-and-pottery-server-eta.vercel.app/categories'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
            <div className="text-center">
            <h1 className="text-xl font-bold">The World of Ceramics and Pottery</h1>
            <p className="max-w-xl mx-auto">Uncover the magic of ceramics and pottery, where skilled hands mold clay into objects of both aesthetic delight and practical utility.</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    products?.slice(0,6).map((product,idx)=>{
                        return (
                            <SingleProduct
                            key={idx}
                            product ={product}
                            ></SingleProduct>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CeramicesCurds;
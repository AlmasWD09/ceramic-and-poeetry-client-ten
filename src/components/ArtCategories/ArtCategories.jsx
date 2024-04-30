import { useEffect, useState } from "react";
import ArtCategoriesCurd from "./ArtCategoriesCurd";


const ArtCategories = () => {
const [categories,setCategories] = useState([])
    useEffect(()=>{
        fetch('https://ceramics-and-pottery-server-eta.vercel.app/subCategories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])


    // console.log(categories);
    return (
        <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
             <div className="text-center">
            <h1 className="text-xl font-bold"> A Journey into Ceramics and Claycraft</h1>
            <p className="max-w-xl mx-auto"> Engage with our vibrant community of makers, sharing knowledge, experiences, and a passion for all things clay.</p>
            </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {
                categories?.slice(0,6).map((singleCategory,idx)=>{
                    return(
                        <ArtCategoriesCurd
                        key={idx}
                        singleCategory ={singleCategory}
                        ></ArtCategoriesCurd>
                    )
                })
            }
        
         </div>
        </div>
    );
};

export default ArtCategories;
import { useEffect, useState } from "react";
import SingleAritistPottery from "./SingleAritistPottery";


const AirtistPottery = () => {
    const [categorys, setCategorys] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/airtistPottery'
        fetch(url)
            .then(res => res.json())
            .then(data => setCategorys(data))
    }, [])
    return (
     <div className="max-w-7xl mx-auto px-8 mt-10">
        <h1 className="text-2xl font-semibold font-Lexend">How To Create Your <br /> Own Ceramics</h1>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {
                categorys.map((category, idx) => {
                    return (
                        <SingleAritistPottery
                        key={idx}
                        category={category}
                        >
                        </SingleAritistPottery>
                    )
                })
            }
        </div>
     </div>
    );
};

export default AirtistPottery;
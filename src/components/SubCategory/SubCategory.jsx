import { Helmet } from "react-helmet-async";


const SubCategory = () => {
    return (
        <>
        <Helmet>
            <title>Ceramices and pottery / sub-category</title>
        </Helmet>
         
       <div className="max-w-7xl mx-auto px-8 mt-5">
       <div className="h-[400px] md:w-[350px] lg:w-[380px] shadow-xl rounded-lg border-5 border-red-400">
        <div className="space-y-3">
        <figure className="md:w-[350px] lg:w-[380px] h-[240px]rounded-lg">
           <img className="h-[200px] border-2 border-black" src="" alt="" />
                </figure>
            <div className="px-2">
                <h3>item-name</h3>
                <h3>sub-category-name</h3>
                <p>short-description</p>
                <p>price:</p>
                <p>rating</p>
                <p>processing-time</p>
                <div className="w-full">
                    <button className="w-full bg-secondery py-3 rounded-lg text-white hover:bg-primary my-4">View Details</button>
                </div>
            </div>
        </div>
        </div>
       </div>
        </>
    );
};

export default SubCategory;
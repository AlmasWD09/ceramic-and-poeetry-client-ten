import { useNavigate } from "react-router-dom";


const ArtCategoriesCurd = () => {
    const navigate = useNavigate();
    
    const handleArtCruft = () =>{
        navigate('/subCategory')
    }
    return (
      <div className="max-w-7xl mx-auto px-8 lg:mt-20 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
     
           {/* curd one */}
           <div onClick={handleArtCruft} className=" md:w-[350px] lg:w-[380px] shadow-xl rounded-lg cursor-pointer">
        <div className="space-y-3">
        <figure className="md:w-[350px] lg:w-[380px] h-[240px]rounded-lg">
           <img className="rounded-tl-lg rounded-tr-lg w-full h-full" src="https://i.ibb.co/dDDmfb9/art06.webp" alt="" />
                </figure>
            <div className="px-4">
                <h3>item-name</h3>
                <h3>sub-category-name</h3>
                <p>price:</p>
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

export default ArtCategoriesCurd;
import { useNavigate } from "react-router-dom";


const ArtCategoriesCurd = () => {
    const navigate = useNavigate();
    
    const handleArtCruft = () =>{
        navigate('/subCategory')
    }
    return (
        <div 
        onClick={handleArtCruft}
        className="h-[300px] md:w-[350px] lg:w-[380px] shadow-xl rounded-lg bg-gray-400 cursor-pointer">
        <div className="space-y-3">
        <figure className="md:w-[350px] lg:w-[380px] h-[240px]rounded-lg">
                <img src="" alt="" />
                </figure>
            <div className="px-2">
                <h1>sub-category</h1>
            </div>
        </div>
        </div>
    );
};

export default ArtCategoriesCurd;
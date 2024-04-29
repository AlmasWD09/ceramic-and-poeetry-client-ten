import ArtCategoriesCurd from "./ArtCategoriesCurd";


const ArtCategories = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
             <div className="text-center">
            <h1 className="text-xl font-bold"> A Journey into Ceramics and Claycraft</h1>
            <p className="max-w-xl mx-auto"> Engage with our vibrant community of makers, sharing knowledge, experiences, and a passion for all things clay.</p>
            </div>

         <div className="">
         <ArtCategoriesCurd></ArtCategoriesCurd>
         </div>
        </div>
    );
};

export default ArtCategories;
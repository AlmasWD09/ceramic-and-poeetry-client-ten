
import { useParams } from "react-router-dom";

const CeramicViewDetails = () => {
   const {id} = useParams();

    return (
        <div className="max-w-7xl mx-auto px-8 mt-5">
           <div className="flex justify-center rounded-sm">
            <img className="rounded-sm" src="https://i.ibb.co/DrC8kXN/2150379002.jpg" alt="" />
           </div>
            {/* content */}
            <div className="lg:px-28">
                <h3>name</h3>
                <p>selectedCategory</p>
                <p>discription</p>
                <p>time</p>
                <p>customization</p>
                <p>stockStatus</p>
            </div>
        </div>
    );
};

export default CeramicViewDetails;




import { useParams } from "react-router-dom";

const CeramicViewDetails = () => {
   const {id} = useParams();

    return (
        <div>
            <h1>ceramic view details page</h1>
        </div>
    );
};

export default CeramicViewDetails;
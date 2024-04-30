import Slider from "../Slider/Slider";
import AirtistPottery from "../../components/Airtist/AirtistPottery";
import ArtCategories from "../../components/ArtCategories/ArtCategories";
import CeramicesCurds from "../../components/CeramicesCurds/CeramicesCurds";
import { Helmet } from "react-helmet-async";
import PotteryPulse from "../../components/PotteryPulse/PotteryPulse";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Ceramices and pottery / Home</title>
            </Helmet>
            <div>
                <Slider />
                <CeramicesCurds />
                <ArtCategories />
                <PotteryPulse />
                <AirtistPottery />
            </div>
        </>

    );
};

export default Home;
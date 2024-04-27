import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";
// import ScrollButton from "../components/ScrollButton/ScrollButton";


const MainLayOut = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            {/* <ScrollButton /> */}
        </div>
    );
};

export default MainLayOut;
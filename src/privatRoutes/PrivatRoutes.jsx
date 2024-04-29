import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../utllity/useAuth";
import PropTypes from 'prop-types';

const PrivatRoutes = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location);

    if(loading){
        return (
            <div className="h-screen flex justify-center items-center">
                <span className="loading loading-bars loading-md text-primary"></span>
                <span className="loading loading-bars loading-lg text-primary"></span>
            </div>
        )
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivatRoutes.propTypes = {
    children: PropTypes.node,
  };


export default PrivatRoutes;
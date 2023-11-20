
import { Navigate, useLocation } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import useAuth from "../hooks/useAuth";


export const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location =useLocation()
    if(loading){
        return <ClimbingBoxLoader className="text-5xl mx-auto lg:mt-36" color="#36d7b7" />
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;
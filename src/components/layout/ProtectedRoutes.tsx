import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";


const ProtectedRoutes = ({children}:{children:ReactNode}) => {
    const token = useAppSelector((state) => state.auth.token);
  if(!token){return <Navigate to='/login' replace={true}></Navigate>}
  return children;
};

export default ProtectedRoutes;
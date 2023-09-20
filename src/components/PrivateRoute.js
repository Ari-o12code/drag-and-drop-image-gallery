import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import ImageContext from '../context/image'

const PrivateRoute = () => {
  const { user } = useContext(ImageContext)
    return(
        user? <Outlet /> : <Navigate to="/"/>
    )
};

export default PrivateRoute;

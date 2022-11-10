import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return <div className="bg-white radial-progress absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4" style={{"--value":70}}>70%</div>
    }

    if(user) {
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
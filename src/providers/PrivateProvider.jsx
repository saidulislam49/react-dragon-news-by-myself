
import { useContext } from 'react';
import { AuthContext } from './AuthProvider'; 
import { Navigate, useLocation } from 'react-router-dom';

const PrivateProvider = ({children}) => {
    const {user,loading} = useContext(AuthContext); 
    const location = useLocation(); 

    if(loading){
        return <p>Loading........</p>
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateProvider;
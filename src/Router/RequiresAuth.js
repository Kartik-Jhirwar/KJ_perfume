import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/Authentication/auth-context';


export const RequiresAuth = ({children}) => {
    const {user:{isloggedIn}}=useAuth();   
    const location=useLocation(); 

  return isloggedIn? children:<Navigate  to="/login" replace state={{from:location}}/>
    
  
}



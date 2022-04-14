import { createContext,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupService,logInService,signOutService } from "../../Services/Authservice/index";
import toast from "react-hot-toast";


const authContext=createContext();
const token=localStorage.getItem("auth_token");

const initialStateValue={
    isloggedIn:token?true:false,
    authenticationToken:token
    
}
const AuthProvider=({children})=>{
    const [user,setUser]=useState(initialStateValue);
    const navigateTo=useNavigate();

    const signUpHandler=async(signupData)=>{
        console.log(signupData);
        const {data,status}=await signupService(signupData);        
        if(status===201)
        {
            localStorage.setItem("auth_token",JSON.stringify(data.encodedToken));                               
            navigateTo('/login')
        }

    }

    const logInHandler=async(logInData)=>{
        const {data,status}=await logInService(logInData);
        if(status===200)
        {
            localStorage.setItem("auth_token",JSON.stringify(data.encodedToken));                      
            setUser({isloggedIn:true,
                authenticationToken:JSON.stringify(data.encodedToken)})
            toast("Successfully loggedIn", { icon:  "✔️"  });
            navigateTo("/productpage")
        }
    }

    const logOutHandler=()=>{
            signOutService();
            setUser({isloggedIn:false})   
            toast("Logged out successfully", { icon:  "✔️"  }); 
            navigateTo("/");  
    }

    return <authContext.Provider value={{user,setUser,signUpHandler,logInHandler,logOutHandler}}>{children}</authContext.Provider>
}
const useAuth=()=>useContext(authContext);
export {useAuth,AuthProvider};
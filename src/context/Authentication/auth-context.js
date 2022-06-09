import { createContext,useContext,useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signupService,logInService,signOutService } from "../../Services/Authservice";
import toast from "react-hot-toast";
import { useProduct } from "../product-context";
import {tempAddressValues} from "../../constants/address-constants";



const authContext=createContext();
const token=JSON.parse(localStorage.getItem("auth_token"));
const userName=JSON.parse(localStorage.getItem("user_name"));
const emailofUser =JSON.parse(localStorage.getItem("email_of_user"));

const initialStateValue={
    isloggedIn:token?true:false,
    authenticationToken:token,
    userName:userName,
    email:emailofUser
    
}
const AuthProvider=({children})=>{
    const [user,setUser]=useState(initialStateValue);    
    const [addressList, setAddressList] = useState([tempAddressValues]);
    const[selectedAddress,setSelectedAddress]=useState("");
    const navigateTo=useNavigate();
    const location=useLocation();
    const {isloading,setLoading}=useProduct();

    const signUpHandler=async(signupData)=>{ 
        setLoading(true);       
        const {data,status}=await signupService(signupData);    
        setLoading(false);    
        if(status===201)
        {
            localStorage.setItem("auth_token",JSON.stringify(data.encodedToken)); 
            localStorage.setItem("user_name",JSON.stringify(data.createdUser.firstName));  
            localStorage.setItem("email_of_user",JSON.stringify(data.createdUser.email)); 
            setUser({isloggedIn:true,
                authenticationToken:data.encodedToken,
                email:data.createdUser.email,
                userName:data.createdUser.firstName
            }) 
             toast("saving data", { icon:  "✔️"  });                             
             navigateTo('/productpage'); 
        }

    }

    const logInHandler=async(logInData)=>{
        setLoading(true);
        const {data,status}=await logInService(logInData);
        setLoading(false);
        if(status===200)
        {
            localStorage.setItem("auth_token",JSON.stringify(data.encodedToken));  
            localStorage.setItem("user_name",JSON.stringify(data.foundUser.firstName));  
            localStorage.setItem("email_of_user",JSON.stringify(data.foundUser.email));                  
            setUser({isloggedIn:true,
                authenticationToken:data.encodedToken,
                email:data.foundUser.email,
                userName:data.foundUser.firstName
            })
            toast("Successfully loggedIn", { icon:  "✔️"  });
            navigateTo("/productpage")
            //  navigateTo(location?.state?.from?.pathname);
        }
        else{
            toast("some error occured",{ icon:  "✔️"  });
            
        }
    }

    const logOutHandler=()=>{
            signOutService();
            setUser({isloggedIn:false})   
            toast("Logged out successfully", { icon:  "✔️"  }); 
            navigateTo("/");  
    }

    return <authContext.Provider value={{user,setUser,signUpHandler,logInHandler,logOutHandler,addressList, setAddressList,selectedAddress,setSelectedAddress}}>{children}</authContext.Provider>
}
const useAuth=()=>useContext(authContext);
export {useAuth,AuthProvider};
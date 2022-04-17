import axios from "axios";

export const addItemToCartwithInc=async(product,user,data,setIsDisabled)=>{
        try {
            setIsDisabled(true);
        const response= await axios.post(`/api/user/cart/${product._id}`,data,{
            headers:{
                authorization:user.authenticationToken,
            }})
            return response;
    }
    catch{
        console.error('could not perform the request');
    }
}

export const addItemToCart=async(product,user,setIsDisabled)=>{   
    try {
        setIsDisabled(true);
        const response= await axios.post("/api/user/cart",{product:product},{
            headers:{
                authorization:user.authenticationToken,
            }})
            return response;
    }
    catch{
        console.error('could not perform the request');
    }
}
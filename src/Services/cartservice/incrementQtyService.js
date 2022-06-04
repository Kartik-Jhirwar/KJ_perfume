import axios from "axios";

export const incrementQtnService=async(product,user,incData,setisPlusBtnDisabled)=>{
     try{
         setisPlusBtnDisabled(true);
         const {data,status}=await axios.post(`/api/user/cart/${product._id}`,incData,{headers:{
                authorization:user.authenticationToken,
            }})            
            return {data,status};
     }
     catch{
         console.error("couldn't perform the request");
     }
}
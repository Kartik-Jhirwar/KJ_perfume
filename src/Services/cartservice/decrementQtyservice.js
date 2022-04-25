import axios from "axios";

export const decrementQtyService=async(product,user,decData,setMinusBtnDisabled)=>{
     try{      
         setMinusBtnDisabled(true);  
         const {data,status}=await axios.post(`/api/user/cart/${product._id}`,decData,{headers:{
                authorization:user.authenticationToken,
            }})         
           
            return {data,status};
     }
     catch{
         console.error("couldn't perform the request");
     }
}
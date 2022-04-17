import axios from "axios";

export const removeItemFromCart =async(product,user)=>{ 
    try{
        const {data,status}=await axios.delete(`/api/user/cart/${product._id}`,{
            headers:{
                authorization:user.authenticationToken,
            }})           
            return {data,status}
    }
    catch{
         console.error("could not perform the request");
    }
}
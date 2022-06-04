import axios from "axios";

export const removeItemFromWishList =async(product,user,setBtnDisabled)=>{    
    try{
        setBtnDisabled(true);
        const {data,status}=await axios.delete(`/api/user/wishlist/${product._id}`,{headers:{
                authorization:user.authenticationToken,
            }})
            
            return {data,status}
    }
    catch{
         console.error("could not perform the request");
    }
}
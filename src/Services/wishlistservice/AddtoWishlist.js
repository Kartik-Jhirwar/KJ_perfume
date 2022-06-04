import axios from "axios";

export const AddItemToWishList =async(product,user,setBtnDisabled)=>{
    try{
        setBtnDisabled(true);
    const response=await axios.post("/api/user/wishlist",{product:product},{
            headers:{
                authorization:user.authenticationToken,
            }
        });
        return response;
    }
    catch{
        console.error("can't perform adddition to wishlist");
    }
    
}
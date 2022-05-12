import axios from "axios";

export const getWishlist=async(user)=>{   
    try{
        const {data}= await axios.get("/api/user/wishlist",{
            headers:{
                authorization:user.authenticationToken,
            }
        });        
        return data;
    }
    catch{
        console.error("can't get data");
    }
}
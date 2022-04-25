import axios from "axios";

export const getCartData=async(user)=>{
    try {
        const {data}=await axios.get("/api/user/cart",{
            headers:{
                authorization:user.authenticationToken,
            }
        })             
        return data;
    }
    catch{
        console.error("can't get cart data");
    }
}
import axios from "axios";

export const clearCartService=async(user)=>{    
    try {
        const {data,status}=await axios.delete("/api/user/cart/all",{headers:{
            authorization: user.authenticationToken
        }})
        return {data,status};
    }
    catch(err)
    {
        console.error(err,"can't delete all data");
    }
}
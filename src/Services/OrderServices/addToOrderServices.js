import axios from "axios";

export const addToOrders = async (authenticationToken, order) => {
  try {
    const {data,status} = await axios.post("/api/user/orders", {order} ,{
        headers: { authorization:authenticationToken },
      }
    );
    return {data,status}
  }
  catch(err)
  {
      console.log("could not complete the request",err);
  }
    
};

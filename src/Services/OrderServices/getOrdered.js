import axios from "axios";

export const getAllOrders = async (user) => {
  try {
    const {data,status} = await axios.get("/api/user/orders", {
      headers: { authorization: user.authenticationToken },
    });
    return {data,status}
    
  } catch (err) {
    console.error("colud not complete the request for orders");
  }
};
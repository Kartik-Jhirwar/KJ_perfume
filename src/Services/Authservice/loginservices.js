import axios from "axios";

const logInService=async(Data)=>{
    try{
    const {data,status}=await axios.post("/api/auth/login",Data);
    console.log(data);
    return {data,status};
    }
    catch{
        console.error("login failed");
    }


}
export {logInService}
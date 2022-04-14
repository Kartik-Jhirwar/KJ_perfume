import axios from "axios";

const signupService=async({signupData})=>{
    console.log(signupData);
    try{
        const {data,status}= await axios.post("/api/auth/signup",signupData)
        console.log(data);
        return {data,status}
    }
    catch{
        console.error("signup failed");
    }
}

export {signupService};
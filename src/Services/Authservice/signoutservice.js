export const signOutService=()=>{
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_name");  
    localStorage.removeItem("email_of_user");
   
}
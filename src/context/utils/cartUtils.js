export const itemExistInCart=(product,state)=>{
let isExist =false;
 state.cartItem.map((item)=>{
      if(item._id === product._id) {
          return isExist=true
       }
       else{
           return isExist;
       }
    })
        return isExist;
  }
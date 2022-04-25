export const CartItemReducer=(state,action)=>{
    
    switch (action.type) {
        case "LOAD_CART_DATA":
                    return {...state, cartItem:[...action.payload]}                
        
        case "ADD_ITEM_TO_CART":       
                    return {...state,cartItem:[...action.payload]}

         case "REMOVE_ITEM_FROM_CART":            
                    return{...state, cartItem:[...action.payload]}
        

        case "INCREMENT_QUANTITY":
                    return{...state, cartItem:[...action.payload]}
           

         case "DECREMENT_QUANTITY":
                    return{...state, cartItem:[...action.payload]}                   
            
            
    
        default:
           return state;
    }
}
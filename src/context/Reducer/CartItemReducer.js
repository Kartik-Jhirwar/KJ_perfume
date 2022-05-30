import { reducerTypes } from "./reducertype"
const {CART_DATA,ADD_TO_CART,REMOVE_FROM_CART,INCERMENT,DECREMENT,WISHLIST_DATA,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST}=reducerTypes


export const CartItemReducer=(state,action)=>{   
    
    switch (action.type) {
        case CART_DATA:
        case ADD_TO_CART : 
        case REMOVE_FROM_CART:
        case INCERMENT:
        case DECREMENT:
                    return {...state, cartItem:action.payload}                 
        

        case WISHLIST_DATA:
        case REMOVE_FROM_WISHLIST:
        case ADD_TO_WISHLIST:
                return {...state,wishListItem:action.payload}             
            
            
    
        default:
           return state;
    }
}
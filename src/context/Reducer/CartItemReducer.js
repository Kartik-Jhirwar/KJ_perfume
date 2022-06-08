import { reducerTypes } from "./reducertype"
const {CART_DATA,ADD_TO_CART,REMOVE_FROM_CART,INCERMENT,DECREMENT,WISHLIST_DATA,ADD_TO_WISHLIST,REMOVE_FROM_WISHLIST,REMOVE_ALL_ITEMS_IN_CART,ADD_ORDERS,LOAD_ORDERS}=reducerTypes


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
            
            
        case REMOVE_ALL_ITEMS_IN_CART:
            return {...state,cartItem:[]};

        case ADD_ORDERS:
        case LOAD_ORDERS:    
            return{...state,orders:action.payload}    
        
            default:
           return state;
    }
}
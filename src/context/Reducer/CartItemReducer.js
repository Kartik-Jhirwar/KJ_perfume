export const CartItemReducer=(state,action)=>{
    switch (action.type) {
        case "ADD_ITEM_TO_CART":
            return {...state, cartItem:[...state.cartItem,{...action.payload,qty:1}],
                    cartCount: state.cartCount + 1
        }

         case "REMOVE_ITEM_FROM_CART":
            return {...state, cartItem:[...state.cartItem.filter((item)=>item.id!==action.apyload.id)],
                    cartCount: state.cartCount + action.payload.qty
        }

        case "INCREMENT_QUANTITY":
            return {...state,cartItem: state.cartItem.map((item)=>item.id=== action.payload.id?{...item,qty:item.qty +1}:item),
                    cartCount:state.cartCount + 1}

          case "DECREMENT_QUANTITY":
            return {...state,cartItem: state.cartItem.map((item)=>item.id === action.payload.id?{...item,qty:item.qty -1}:item),
                    cartCount:state.cartCount - 1}           
            
            
    
        default:
           return state;
    }
}
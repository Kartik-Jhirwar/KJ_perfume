export const WishListItemReducer=(state,action)=>{      
    switch (action.type) {
        case "LOAD_WISHLIST_DATA":
            return {...state,  wishListItem:[...action.payload]
               };

        case "ADD_ITEM_TO_WISHLIST":
            return {...state,  wishListItem:[...action.payload],
                };

        case "REMOVE_ITEM_FROM_WISHLIST":
            return {...state,wishListItem:[...action.payload],}    
            
    
        default:
           return state;
    }
}
export const WishListItemReducer=(state,action)=>{
    const {wishListItem,wishListCount}=state;
    const {payload}=action;
    
    switch (action.type) {
        case "ADD_ITEM_TO_WISHLIST":
            return {...state,  wishListItem:[...state.wishListItem,action.payload],
                wishListCount :state.wishListCount +1};

        case "REMOVE_ITEM_FROM_WISHLIST":
            return {...state,wishListItem:state.wishListItem.filter((item)=>item._id!==action.payload._id),wishListCount :state.wishListCount -1}    
            
    
        default:
           return state;
    }
}
 export const addItemTocart =(productToadd , cartItem) => {
 if( cartItem.length >= 0)
 {
     let newProductToadd = cartItem.find((item)=>item._id === productToadd._id)
     if(newProductToadd)
     {
         return cartItem.map((item)=>item._id===newProductToadd._id ? {...item,qty:item.qty + 1} :item)
     }
     else
     {
    return [...cartItem, {...productToadd , qty:1}]
     }
 }

}
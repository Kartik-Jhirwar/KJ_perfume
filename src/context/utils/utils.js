const composeFunction=(state,functionList)=>(productList)=>{    
    return functionList.reduce((acc,currentFunction)=>{
        return currentFunction(state,acc);
    },productList);
};

const productSortByPrice=(state,productList)=>{    
    if(state.sortByPrice ==="LOW_TO_HIGH")
    {  
        return productList.sort((a,b)=> a.sellingPrice- b.sellingPrice)
    }
    else if(state.sortByPrice ==="HIGH_TO_LOW")
    {  
        return productList.sort((a,b)=> b.sellingPrice- a.sellingPrice)
    }
    else return productList;
}
const productSoryByPriceRange=(state,productList)=>{   
    return state.pricerange === 15000? productList :productList.filter((product)=>product.sellingPrice <= state.pricerange)
}
const productSortByStock=(state,productList)=>{
    return productList.filter((item)=>state.showAllProduct ? true:!item.isSoldOut)
}

const productFilterByFastDelivery=(state,productList)=>{
    return productList.filter ((item)=> state.fastDelivery ? item.fastDelivery: true)
}
const productSortByQuantity=(state,productList)=>{
    if(state.sortByQuantity==="SORT_BY_150")
    {
        return productList.filter((item)=>item.quantity ==="150 ml")
    }
    else if(state.sortByQuantity==="SORT_BY_100")
    {
        return productList.filter((item)=>item.quantity ==="100 ml")
    }
    else return productList;
}
const productFilterByRating=(state,productList)=>{
    if(state.sortByRatings==="FOUR_AND_ABOVE")
    {
        return productList.filter((item)=>item.rating >= 4)
    }
    else if(state.sortByRatings==="THREE_AND_ABOVE")
    {
        return productList.filter((item)=>item.rating >= 3 && item.rating <=4)
    }
    else if(state.sortByRatings==="TWO_AND_ABOVE")
    {
        return productList.filter((item)=>item.rating >= 2 && item.rating <=3)
    }
    else return productList;
}

const productSortByBrand=(state,productList)=>{
    const brandList = state.sortByBrand;
    return brandList.length === 0 ? productList:
    productList.filter((item)=>brandList.some((brand)=>brand===item.brand))
}

const productSearchByQuery=(state,productList)=>{
    if(state.searchByQuery)
    {
        return productList.filter((item)=>item.productName.toLowerCase().includes(state.searchByQuery.toLowerCase()))
    }
    else return productList;
}

const productSortByCategory=(state,productList)=>{
    if(state.sortByCategory==="SORT_BY_MEN")
    {
        return productList.filter((item)=>item.categoryName==="Men")
    }
    else if(state.sortByCategory==="SORT_BY_WOMEN")
    {
        return productList.filter((item)=>item.categoryName==="Women")
    }
    else return productList

}

const functionList=[productSortByPrice,productSoryByPriceRange,productSortByStock,productFilterByFastDelivery,productSortByQuantity,productFilterByRating,productSortByBrand,productSearchByQuery,productSortByCategory];

export {composeFunction,functionList};
 export const filterProductReducer=(state,action)=>{
      console.log(state,action,"hjhj")
      switch (action.type) {
          case "SORT_LOW_TO_HIGH":
               return {...state,sortByPrice:"LOW_TO_HIGH"};
              
          case "SORT_HIGH_TO_LOW":
               return {...state,sortByPrice:"HIGH_TO_LOW"};   
               
           case "FILTER_BY_PRICE_RANGE":
               return {...state, pricerange: action.payload};
               
          case "SORT_BY_STOCK":
               return {...state,showAllProduct:!state.showAllProduct};

          case "SORT_BY_FAST_DELIVERY":
               return {...state,fastDelivery:!state.fastDelivery};

          case "SORT_BY_150_QUANTITY":
               return {...state,sortByQuantity:"SORT_BY_150"};

          case "SORT_BY_100_QUANTITY":
               return {...state,sortByQuantity:"SORT_BY_100"};
      
          case "CLEAR_QUANTITY_FILTER":
                    return {...state,sortByQuantity:null};

          case "SORT_BY_RATING_4":
               return {...state,sortByRatings:"FOUR_AND_ABOVE"};
          
           case "SORT_BY_RATING_3":
               return {...state,sortByRatings:"THREE_AND_ABOVE"};

           case "SORT_BY_RATING_2":
               return {...state,sortByRatings:"TWO_AND_ABOVE"};

          case "CLEAR_RATING":
               return {...state,sortByRatings:null};

          case "SET_BRAND_NAME":
               return {...state,sortByBrand:[...state.sortByBrand,action.payload]};

           case "REMOVE_BRAND_NAME":
                return{...state,sortByBrand:state.sortByBrand.filter((brand)=>brand !== action.payload)}    

           case "CLEAR_ALL_FILTERS":
                   return {   sortByPrice: null,
                              sortByCategory: null,
                              pricerange: 15000,
                              showAllProduct: true,
                              fastDelivery: false,
                              sortByBrand: [],
                              sortByQuantity: null,
                              sortByRatings: null,
                              searchByQuery: ""
}
          case "SEARCH_BY_QUERY":
               return{...state,searchByQuery:action.payload}

           case "SORT_BY_MEN_CATEGORY":
                    return {...state,sortByCategory:"SORT_BY_MEN"}

           case "SORT_BY_WOMEN_CATEGORY":
                     return {...state,sortByCategory:"SORT_BY_WOMEN"}

           case "SORT_CLEAR_CATEGORY":
                return {...state,sortByCategory:null}

          default:
            return  state;
      }
 }
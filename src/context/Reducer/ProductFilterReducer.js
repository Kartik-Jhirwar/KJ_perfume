 import { reducerTypes } from "./reducertype";
 const {SORT_LTOH, SORT_HTOL,FILTER_BY_PRICE,SORT_BY_STOCK,FAST_DELIVERY,SORT_BY_150ML,SORT_BY_100ML,
    CLEAR_QUANTITY, SORT_BY_RATING4,SORT_BY_RATING3,SORT_BY_RATING2,SET_BRAND,UNSET_BRAND,CLEAR_FILTER,
    SERACH_QUERY,MEN_CATEGORY,WOMEN_CATEGORY,CLEAR_CATEGORY,CLEAR_RATING,CLEAR_SEARCH}=reducerTypes;

 export const filterProductReducer=(state,action)=>{      
      switch (action.type) {
          case SORT_LTOH:
               return {...state,sortByPrice:"LOW_TO_HIGH"};
              
          case SORT_HTOL:
               return {...state,sortByPrice:"HIGH_TO_LOW"};   
               
           case FILTER_BY_PRICE:
               return {...state, pricerange: action.payload};
               
          case SORT_BY_STOCK:
               return {...state,showAllProduct:!state.showAllProduct};

          case FAST_DELIVERY:
               return {...state,fastDelivery:!state.fastDelivery};

          case SORT_BY_150ML:
               return {...state,sortByQuantity:"SORT_BY_150"};

          case SORT_BY_100ML:
               return {...state,sortByQuantity:"SORT_BY_100"};
      
          case CLEAR_QUANTITY:
                    return {...state,sortByQuantity:null};

          case SORT_BY_RATING4:
               return {...state,sortByRatings:"FOUR_AND_ABOVE"};
          
           case SORT_BY_RATING3:
               return {...state,sortByRatings:"THREE_AND_ABOVE"};

           case SORT_BY_RATING2:
               return {...state,sortByRatings:"TWO_AND_ABOVE"};

          case CLEAR_RATING:
               return {...state,sortByRatings:null};

          case SET_BRAND:
               return {...state,sortByBrand:[...state.sortByBrand,action.payload]};

           case UNSET_BRAND:
                return{...state,sortByBrand:state.sortByBrand.filter((brand)=>brand !== action.payload)}    

           case CLEAR_FILTER:
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
          case SERACH_QUERY:
               return{...state,searchByQuery:action.payload}

           case MEN_CATEGORY:
                    return {...state,sortByCategory:"SORT_BY_MEN"}

           case WOMEN_CATEGORY:
                     return {...state,sortByCategory:"SORT_BY_WOMEN"}

           case CLEAR_CATEGORY:
                return {...state,sortByCategory:null}

           case CLEAR_SEARCH:
               return {...state,searchByQuery:""}     

          default:
            return  state;
      }
 }
import axios from "axios";
import { useContext, useState,createContext,useEffect} from "react";

const ProductContext =createContext();
 const ProductProvider =({children})=>{
    const [productList,setProductList]=useState([]);

    useEffect(()=>{
        (async()=>{
          try{
              const {data:{products}} = await axios.get("/api/products")              
              setProductList(products);
          }
          catch{
              console.error("can't get data");
          }
        })();
    })
    return ( <ProductContext.Provider value={{productList,setProductList}}>
        {children}
    </ProductContext.Provider>)
}
  const useProduct =()=>useContext(ProductContext);

  export {useProduct,ProductProvider}


import React from "react";
import { useProduct } from "../../context/product-context";
import { reducerTypes } from "../../context/Reducer/reducertype";
export const SearchBar = () => {
  const { state, dispatch } = useProduct();
  return (
    <div className="serchbox-container">
      <input
        type="text"
        placeholder="search"
        value={state.searchByQuery}
        className="input-searchbox border-round"
        onChange={(event) =>
          dispatch({
            type: reducerTypes.SERACH_QUERY,
            payload: event.target.value,
          })
        }
      />
    </div>
  );
};

import React from "react";
import { IoReload } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import "../Filterbar/FilterBar.css";
import { useProduct } from "../../context/product-context";
import { reducerTypes } from "../../context/Reducer/reducertype";

const {
  SORT_LTOH,
  SORT_HTOL,
  FILTER_BY_PRICE,
  SORT_BY_STOCK,
  FAST_DELIVERY,
  SORT_BY_150ML,
  SORT_BY_100ML,
  CLEAR_QUANTITY,
  SORT_BY_RATING4,
  SORT_BY_RATING3,
  SORT_BY_RATING2,
  SET_BRAND,
  UNSET_BRAND,
  CLEAR_FILTER,
  CLEAR_RATING,
} = reducerTypes;
export const FilterBar = () => {
  const { state, dispatch } = useProduct();
  const {
    sortByPrice,
    pricerange,
    showAllProduct,
    fastDelivery,
    sortByQuantity,
    sortByRatings,
    sortByBrand,
  } = state;

  function BrandClickHandler(event) {
    let checkedBrand = event.target.checked;
    const brandName = event.target.value;
    if (checkedBrand) {
      return { type: SET_BRAND, payload: brandName };
    }
    return { type: UNSET_BRAND, payload: brandName };
  }

  return (
    <form className="sidebar-container sidebar-content">
      <ul className="sidebar-items">
        {/* <!-- ----------sort--------------------------- --> */}
        <span className="filter-icon">
          <IoReload
            type="reset"
            onClick={() => dispatch({ type: CLEAR_FILTER })}
          />
        </span>
        <h4 className="sidebar-content-item">Sort</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="price low to high"
            name="sort-btn"
            checked={sortByPrice === "LOW_TO_HIGH"}
            onChange={() => dispatch({ type: SORT_LTOH })}
          />
          Price Low to High
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="price high to low"
            name="sort-btn"
            checked={sortByPrice === "HIGH_TO_LOW"}
            onChange={() => dispatch({ type: SORT_HTOL })}
          />
          Price High to Low
        </li>
        {/* -----------price range------- */}
        <h4 className="sidebar-content-item">PRICE RANGE</h4>
        <div className="sidebar-list">
          <li>
            <input
              type="range"
              max={15000}
              min={50}
              steps={1000}
              value={pricerange}
              checked={pricerange}
              id="myRange"
              list="prices"
              onChange={(e) =>
                dispatch({
                  type: FILTER_BY_PRICE,
                  payload: e.target.value,
                })
              }
            />
            <datalist id="prices" className="datalist-options flex-center">
              <option value="500" label="0.5k"></option>
              <option value="3000" label="3k"></option>
              <option value="5000" label="5k"></option>
              <option
                value="15000"
                label="15k"
                className="last-option"
              ></option>
            </datalist>
          </li>
        </div>

        {/* <!-- -------------------Availability-------------- --> */}
        <h4 className="sidebar-content-item">Availability</h4>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="In-stock"
            name="available-btn"
            checked={showAllProduct}
            onChange={() => dispatch({ type: SORT_BY_STOCK })}
          />
          Include Out-of-Stock
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="out-ot-stock"
            name="available-btn"
            checked={fastDelivery}
            onChange={() => dispatch({ type: FAST_DELIVERY })}
          />
          Fast Delivery
        </li>

        {/* <!-- -------------------Brand-------------- --> */}
        <h4 className="sidebar-content-item">Brand</h4>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Armani"
            name="available-btn"
            checked={sortByBrand.includes("Armani")}
            onChange={() => dispatch(BrandClickHandler(event))}
          />
          Armani
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Chanel"
            name="available-btn"
            checked={sortByBrand.includes("Chanel")}
            onChange={(event) => dispatch(BrandClickHandler(event))}
          />
          Chanel
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Gucci"
            name="available-btn"
            checked={sortByBrand.includes("Gucci")}
            onChange={(event) => dispatch(BrandClickHandler(event))}
          />
          Gucci
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Zara"
            name="available-btn"
            checked={sortByBrand.includes("Zara")}
            onChange={(event) => dispatch(BrandClickHandler(event))}
          />
          Zara
        </li>
        <li className="sidebar-list">
          <input
            type="checkbox"
            value="Estee Lauder"
            name="available-btn"
            checked={sortByBrand.includes("Estee Lauder")}
            onChange={(event) => dispatch(BrandClickHandler(event))}
          />
          Estee Lauder
        </li>

        {/* <!-- ------------------Quantity----------- --> */}

        <h4 className="sidebar-content-item">Quantity</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="150 ml"
            name="quantity-btn"
            checked={sortByQuantity === "SORT_BY_150"}
            onChange={() => dispatch({ type: SORT_BY_150ML })}
          />
          150 ml
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="100 ml"
            name="quantity-btn"
            checked={sortByQuantity === "SORT_BY_100"}
            onChange={() => dispatch({ type: SORT_BY_100ML })}
          />
          100 ml
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="clear"
            name="quantity-btn"
            onChange={() => dispatch({ type: CLEAR_QUANTITY })}
          />
          Clear Quantity Filter
        </li>
        {/* <!-- ---ratings----- --> */}
        <h4 className="sidebar-content-item">Ratings</h4>
        <li className="sidebar-list">
          <input
            type="radio"
            value="4Starts"
            name="rating"
            checked={sortByRatings === "FOUR_AND_ABOVE"}
            onChange={() => dispatch({ type: SORT_BY_RATING4 })}
          />
          4 <FaRegStar /> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="3Starts"
            name="rating"
            checked={sortByRatings === "THREE_AND_ABOVE"}
            onChange={() => dispatch({ type: SORT_BY_RATING3 })}
          />
          3 <FaRegStar /> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="2starts"
            name="rating"
            checked={sortByRatings === "TWO_AND_ABOVE"}
            onChange={() => dispatch({ type: SORT_BY_RATING2 })}
          />
          2 <FaRegStar /> & above
        </li>
        <li className="sidebar-list">
          <input
            type="radio"
            value="1starts"
            name="rating"
            onChange={() => dispatch({ type: CLEAR_RATING })}
          />
          Clear Rating Filter
        </li>
      </ul>
    </form>
  );
};

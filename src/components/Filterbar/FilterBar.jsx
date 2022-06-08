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
          <label htmlFor="lowtohigh" className="sidebar">
            <input
              type="radio"
              value="price low to high"
              name="sort-btn"
              id="lowtohigh"
              checked={sortByPrice === "LOW_TO_HIGH"}
              onChange={() => dispatch({ type: SORT_LTOH })}
            />
            Price Low to High
          </label>
        </li>

        <li className="sidebar-list">
          <label htmlFor="hightolow" className="sidebar">
            <input
              type="radio"
              value="price high to low"
              name="sort-btn"
              id="hightolow"
              checked={sortByPrice === "HIGH_TO_LOW"}
              onChange={() => dispatch({ type: SORT_HTOL })}
            />
            Price High to Low
          </label>
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
          <label htmlFor="instock" className="flex-center sidebar">
            <input
              type="checkbox"
              value="In-stock"
              name="available-btn"
              id="instock"
              checked={showAllProduct}
              onChange={() => dispatch({ type: SORT_BY_STOCK })}
            />
            Include Out-of-Stock
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="fastdelivery" className="flex-center sidebar">
            <input
              type="checkbox"
              value="out-ot-stock"
              name="available-btn"
              id="fastdelivery"
              checked={fastDelivery}
              onChange={() => dispatch({ type: FAST_DELIVERY })}
            />
            Fast Delivery
          </label>
        </li>

        {/* <!-- -------------------Brand-------------- --> */}
        <h4 className="sidebar-content-item">Brand</h4>
        <li className="sidebar-list">
          <label htmlFor="armani" className="flex-center sidebar">
            <input
              type="checkbox"
              value="Armani"
              name="available-btn"
              id="armani"
              checked={sortByBrand.includes("Armani")}
              onChange={() => dispatch(BrandClickHandler(event))}
            />
            Armani
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="chanel" className="flex-center sidebar">
            <input
              type="checkbox"
              value="Chanel"
              name="available-btn"
              id="chanel"
              checked={sortByBrand.includes("Chanel")}
              onChange={(event) => dispatch(BrandClickHandler(event))}
            />
            Chanel
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="gucci" className="flex-center sidebar">
            <input
              type="checkbox"
              value="Gucci"
              name="available-btn"
              id="gucci"
              checked={sortByBrand.includes("Gucci")}
              onChange={(event) => dispatch(BrandClickHandler(event))}
            />
            Gucci
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="zara" className="flex-center sidebar">
            <input
              type="checkbox"
              value="Zara"
              name="available-btn"
              id="zara"
              checked={sortByBrand.includes("Zara")}
              onChange={(event) => dispatch(BrandClickHandler(event))}
            />
            Zara
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="estee" className="flex-center sidebar">
            <input
              type="checkbox"
              value="Estee Lauder"
              name="available-btn"
              id="estee"
              checked={sortByBrand.includes("Estee Lauder")}
              onChange={(event) => dispatch(BrandClickHandler(event))}
            />
            Estee Lauder
          </label>
        </li>

        {/* <!-- ------------------Quantity----------- --> */}

        <h4 className="sidebar-content-item">Quantity</h4>
        <li className="sidebar-list">
          <label htmlFor="150ml" className="sidebar">
            <input
              type="radio"
              value="150 ml"
              name="quantity-btn"
              id="150ml"
              checked={sortByQuantity === "SORT_BY_150"}
              onChange={() => dispatch({ type: SORT_BY_150ML })}
            />
            150 ml
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="100ml" className="sidebar">
            <input
              type="radio"
              value="100 ml"
              id="100ml"
              name="quantity-btn"
              checked={sortByQuantity === "SORT_BY_100"}
              onChange={() => dispatch({ type: SORT_BY_100ML })}
            />
            100 ml
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="clearquantity" className="sidebar">
            <input
              type="radio"
              value="clear"
              id="clearquantity"
              name="quantity-btn"
              onChange={() => dispatch({ type: CLEAR_QUANTITY })}
            />
            Clear Quantity Filter
          </label>
        </li>
        {/* <!-- ---ratings----- --> */}
        <h4 className="sidebar-content-item">Ratings</h4>
        <li className="sidebar-list">
          <label htmlFor="4star" className="sidebar">
            <input
              type="radio"
              value="4Starts"
              name="rating"
              id="4star"
              checked={sortByRatings === "FOUR_AND_ABOVE"}
              onChange={() => dispatch({ type: SORT_BY_RATING4 })}
            />
            4 <FaRegStar /> & above
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="3star" className="sidebar">
            <input
              type="radio"
              value="3Starts"
              name="rating"
              id="3star"
              checked={sortByRatings === "THREE_AND_ABOVE"}
              onChange={() => dispatch({ type: SORT_BY_RATING3 })}
            />
            3 <FaRegStar /> & above
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="2star" className="sidebar">
            <input
              type="radio"
              value="2starts"
              id="2star"
              name="rating"
              checked={sortByRatings === "TWO_AND_ABOVE"}
              onChange={() => dispatch({ type: SORT_BY_RATING2 })}
            />
            2 <FaRegStar /> & above
          </label>
        </li>
        <li className="sidebar-list">
          <label htmlFor="clearrating" className="sidebar">
            <input
              type="radio"
              value="1starts"
              name="rating"
              id="clearrating"
              onChange={() => dispatch({ type: CLEAR_RATING })}
            />
            Clear Rating Filter
          </label>
        </li>
      </ul>
    </form>
  );
};

import React from "react";
import { BiMinus, BiRupee } from "react-icons/bi";
import { FaRupeeSign, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import { useAuth } from "../../context/Authentication/auth-context";
import toast from "react-hot-toast";

export const TextOnlyCardWithPrice = () => {
  const {
    cartState,
    getCartItemCount,
    cartDispatch,
    clearCartHandler,
    addToOrderHandler,
  } = useCartandWishList();
  const { cartItem } = cartState;
  const itemsInCart = getCartItemCount(cartItem);
  const DeliveryCharges = 50;
  const { pathname } = useLocation();
  const {
    user: { email, userName, authenticationToken },
    selectedAddress,
  } = useAuth();
  const navigate = useNavigate();

  // calculating total original price
  const totalOriginalPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.originalPrice + acc,
    0
  );
  //  calculating total sellingPrice
  const totalSellingPrice = cartItem.reduce(
    (acc, currentItem) => currentItem.qty * currentItem.sellingPrice + acc,
    0
  );
  // calculating Bag discount (original-selling)
  const BagDiscount = totalOriginalPrice - totalSellingPrice;

  //  billing
  const GrandTotal = totalSellingPrice + DeliveryCharges;

  const paymentSuccessFul = async (razorpayresponse) => {
    let responseData = await addToOrderHandler(authenticationToken, {
      products: cartItem,
      amount: totalSellingPrice,
      paymentId: razorpayresponse.razorpay_payment_id,
      deliveryAddress: selectedAddress,
    });
    return responseData;
  };

  const displayRazorpay = (amount) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEYID,
      amount: amount * 100,
      currency: "INR",
      name: "Mehak Store",
      description: "Thank you for shopping with us",
      image:
        "https://ik.imagekit.io/qrhnvir8bf0/Mehak_m4Ibmiz65.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654498717422",
      handler: function (response) {
        paymentSuccessFul(response);
        clearCartHandler();
        navigate("/checkout");
      },
      modal: {
        ondismiss: function () {
          toast("payment cancelled", { icon: "❌" });
        },
      },
      prefill: {
        name: userName,
        email: email,
        contact: "9876543201",
      },
      theme: {
        color: "#f05e76",
      },
    };
    const razorpayEmbed = new window.Razorpay(options);
    razorpayEmbed.open();
    razorpayEmbed.on("payment.failed", function (response) {
      console.error("payment failed");
      toast("payment failed", { icon: "❌" });
    });
  };

  const checkoutHandler = () => {
    if (selectedAddress === "" || selectedAddress === undefined) {
      toast("please select an address", { icon: "✔" });
    } else {
      displayRazorpay(GrandTotal);
    }
  };

  return (
    <div className="text-only-card card-with-shadow">
      <h2 className="text-onlycard-heading">PAYMENT DETAILS</h2>
      <div className="card-body">
        <hr />
        <div className="item-price-detail">
          <p className="card-detail">
            Bag Total ({getCartItemCount(cartItem)}
            {itemsInCart === 1 ? "item" : "items"})
          </p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {totalOriginalPrice}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail"> Bag Discount</p>
          <span className="discount flex-center">
            <BiMinus />
            <FaRupeeSign className="rupees-sign-cart" />
            {BagDiscount}
          </span>
        </div>

        <div className="item-price-detail">
          <p className="card-detail">Sub Total</p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {totalSellingPrice}
          </span>
        </div>
        <div className="item-price-detail">
          <p className="card-detail">Delivery Charges</p>
          <span className="discount">
            <FaRupeeSign className="rupees-sign-cart" />
            {DeliveryCharges}
          </span>
        </div>
        <hr />
        <div className="item-price-detail">
          <p className="card-detail fw-bold">Grand Total</p>
          <span className="discount fw-bold">
            <FaRupeeSign className="rupees-sign-cart" />
            {GrandTotal}
          </span>
        </div>

        <div className="saving-quote">
          <p className="card-detail">
            You will save <FaRupeeSign className="rupees-sign-cart" />
            {BagDiscount} on this order.
          </p>
          <span>
            {pathname === "/payment" ? (
              <button
                className="link-btn border-round btn-proceed"
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            ) : (
              <Link to="/payment">
                <button className="link-btn border-round btn-proceed">
                  PROCEED
                </button>
              </Link>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

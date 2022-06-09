import React from "react";
import "../OrderSummary/orderSummary.css";
import { FaRupeeSign } from "react-icons/fa";
import { useCartandWishList } from "../../context/CartAndWishlist-context";
import dayjs from "dayjs";

export const OrderSummary = () => {
  const { cartState } = useCartandWishList();
  const { orders } = cartState;
  return (
    <div className="order-summary-container ">
      <h2 className="heading">Order Summary</h2>
      {orders.map((item) => {
        return item.order.products.map((orderedProduct) => {
          return (
            <div className="order-container flex-center border-round">
              <div className="product-detail-from-ordersummary-container flex-center">
                <div className="img-holder-from-order-summary flex-center">
                  <img
                    className="img-order-summary"
                    src={orderedProduct.image}
                    alt={orderedProduct.productName}
                  />
                </div>
                <div className="ordered-product-detail flex-center flex-direction-column">
                  <p className="Order-product-title">
                    {orderedProduct.productName}
                  </p>
                  <p className="Ordered-product-price flex-center">
                    <FaRupeeSign />
                    {orderedProduct.sellingPrice}
                  </p>
                  <p className="ordered-product-qty">
                    Quantity: {orderedProduct.qty}
                  </p>
                </div>
              </div>
              <div className="ordered-product-address-container flex-center flex-direction-column">
                <h4 className="status">Order Confirmed</h4>
                <p className="date">
                  {dayjs(`${item.createdAt}`).format("DD/MM/YYYY")}
                </p>
                <p className="paymentId">PaymentID:{item.order.paymentId}</p>
                <div className="address">
                  <h4 className="address-heading"> Delivered To:</h4>
                  <p className="name">{item.order.deliveryAddress.fullName}</p>
                  <p className="street">{item.order.deliveryAddress.address}</p>
                  <p className="mobileNo">
                    Mobile Number :{item.order.deliveryAddress.mobileNo}
                  </p>
                  <p className="address">
                    {item.order.deliveryAddress.city},{""}
                    {item.order.deliveryAddress.state}-
                    {item.order.deliveryAddress.pincode}
                  </p>
                </div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

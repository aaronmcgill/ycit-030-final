import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Scart(props) {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;

  const orderPartTotal = cartItems.reduce((sum, a) => sum + a.price * a.qty, 0);
  const gst = Number((orderPartTotal * 0.05).toFixed(2));
  const qst = Number((orderPartTotal * 0.0975).toFixed(2));
  const orderTax = qst + gst;
  const shippingCost = orderPartTotal > 65 ? 0 : 9.99;
  const orderTotal = orderPartTotal + orderTax + shippingCost;

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.length === 0 ? (
          <div>Empty Cart</div>
        ) : (
          <>
            <div>Order Summary:</div>
            <br></br>
          </>
        )}

        {cartItems.map((item) => (
          <div key={item.id} className="items">
            <p>
              T-shirt Color: <strong>{item.color}</strong>
            </p>
            <div className="thum-wrap">
              <img
                src={item.photo}
                alt="product-thumbnail"
                className="thumbnail"
              />
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onRemoveAll(item)} className="removeAll">
                Remove
              </button>
            </div>
            <p>
              {item.qty} x ${item.price}
              {/* {item.qty} x ${item.price.toFixed(2)} */}
            </p>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <p>Sub Total: ${orderPartTotal}</p>
          <p>GST: {gst.toFixed(2)}</p>
          <p>QST: {qst.toFixed(2)}</p>
          <p>Total Taxes: {orderTax.toFixed(2)}</p>
          <p>Shipping: {shippingCost}</p>
          <h3>
            Total: $<strong>{orderTotal.toFixed(2)}</strong>
          </h3>
          <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons/>
          </PayPalScriptProvider>
          {/* <button onClick={() => console.log("hi")} className="checkout">
            Checkout
          </button> */}
        </>
      )}
    </div>
  );
}

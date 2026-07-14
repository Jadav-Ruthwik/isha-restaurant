"use client";

import { useState } from "react";

import { CartItem } from "@/types/cart";

const orderTypes = ["Dine In", "Takeaway", "Home Delivery"] as const;
type OrderType = (typeof orderTypes)[number];

export default function Cart({ cart }: { cart: CartItem[] }) {
  const [orderType, setOrderType] = useState<OrderType | "">("");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderLines = cart
    .map(
      (item) =>
        `${item.name} x ${item.quantity} = Rs.${item.price * item.quantity}`,
    )
    .join("\n");
  const message = `ISHA RESTAURANT ORDER\n\nOrder type: ${orderType}\n\n${orderLines}\n\nTotal: Rs.${total}\n\nPlease confirm my order.`;
  const whatsappUrl = `https://wa.me/919177262713?text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-white rounded-3xl shadow p-6 sticky top-6">
      <h2 className="text-2xl font-bold mb-5">Your Order</h2>

      {cart.length === 0 ? (
        <p>No items selected</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-3">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>₹{item.price * item.quantity}</span>
            </div>
          ))}

          <hr className="my-4" />
          <div className="font-bold text-xl mb-5">Total ₹{total}</div>

          <fieldset className="mb-5">
            <legend className="mb-2 font-semibold">How would you like your order?</legend>
            <div className="space-y-2">
              {orderTypes.map((type) => (
                <label key={type} className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="order-type"
                    value={type}
                    checked={orderType === type}
                    onChange={() => setOrderType(type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </fieldset>

          {orderType ? (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-green-600 text-center text-white py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              Order on WhatsApp
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="w-full cursor-not-allowed rounded-xl bg-gray-300 py-3 font-semibold text-gray-600"
            >
              Select an order type
            </button>
          )}
        </>
      )}
    </div>
  );
}

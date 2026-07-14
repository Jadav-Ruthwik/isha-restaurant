"use client";

import Image from "next/image";

import { menu } from "@/data/menu";
import { CartItem } from "@/types/cart";

type MenuItem = (typeof menu)[number]["items"][number];

export default function MenuSection({
  cart,
  addToCart,
  removeFromCart,
}: {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: number) => void;
}) {
  return (
    <section id="menu" className="py-16">
      <h2 className="mb-8 text-4xl font-bold">Our Menu</h2>

      {menu.map((category) => (
        <div key={category.category} className="mb-12">
          <h3 className="mb-5 text-2xl font-bold">{category.category}</h3>

          <div className="overflow-hidden rounded-3xl bg-white shadow">
            {category.items.map((item) => {
              const quantity =
                cart.find((cartItem) => cartItem.id === item.id)?.quantity ?? 0;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b p-5 last:border-b-0"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={72}
                      height={72}
                      className="h-[72px] w-[72px] shrink-0 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <p className="font-medium text-yellow-600">₹{item.price}</p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      disabled={quantity === 0}
                      aria-label={`Remove one ${item.name}`}
                      className="h-8 w-8 rounded-full bg-red-500 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      -
                    </button>
                    <span className="min-w-[20px] text-center text-lg font-bold">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      aria-label={`Add one ${item.name}`}
                      className="h-8 w-8 rounded-full bg-green-500 font-bold text-white"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

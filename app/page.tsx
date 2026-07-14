"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Cart from "@/components/Cart";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import { CartItem } from "@/types/cart";
import { menu } from "@/data/menu";

type MenuItem = (typeof menu)[number]["items"][number];

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p,
        );
      }

      return [
        ...prev,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <main className="max-w-7xl mx-auto px-6">
      {" "}
      <Navbar />
      <Hero />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <MenuSection
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>

        <div>
          <Cart cart={cart} />
        </div>
      </div>
      <DeliverySection />
      <AboutSection />
    </main>
  );
}

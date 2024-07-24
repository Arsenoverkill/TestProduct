"use client";
import React, { useState, useEffect } from "react";

const BasketPage = () => {
  const [favorite, setFavorite] = useState<Todo[]>([]);

  function getBasketProduct() {
    const storedData = localStorage.getItem("basket");

    if (storedData) {
      try {
        const parsedData: Todo[] = JSON.parse(storedData);
        setFavorite(parsedData);
      } catch (error) {
        console.error("Failed to parse stored data:", error);
        setFavorite([]);
      }
    } else {
      setFavorite([]);
    }
  }

  useEffect(() => {
    getBasketProduct();
  }, []);

  return (
    <div>
      <h1>Basket Page</h1>
      {favorite.length > 0 ? (
        favorite.map((item) => (
          <div key={item._id ?? item.name}>
            <h2>{item.name}</h2>
            <p>Price: {item.price}</p>
            <p>Phone: {item.phone}</p>
            <img src={item.image} alt={item.name} />
          </div>
        ))
      ) : (
        <p>No items in the basket.</p>
      )}
    </div>
  );
};

export default BasketPage;

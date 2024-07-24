"use client";
import React, { useState, useEffect } from "react";

const BasketPage = () => {
  const [favorite, setFavorite] = useState<Todo[]>([]);

  function getFavoriteProduct() {
    const data = localStorage.getItem("basket");
    if (data) {
      try {
        const parsedData: Todo[] = JSON.parse(data);
        setFavorite(parsedData);
      } catch (error) {
        console.error(
          "Failed to parse favorite items from localStorage",
          error
        );
      }
    }
  }
  useEffect(() => {
    getFavoriteProduct();
  }, []);

  return (
    <div>
      <h1>Favorite Page</h1>
      <ul>
        {favorite.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BasketPage;

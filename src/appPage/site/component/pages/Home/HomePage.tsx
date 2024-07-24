"use client";
import { useGetTodoQuery } from "@/redux/crud/todo";
import Image from "next/image";
import React from "react";
import scss from "./Home.module.scss";

const Home = () => {
  const { data } = useGetTodoQuery();
  console.log(data, "data");

  return (
    <div>
      {data?.map((el, index) => (
        <div key={index} className={scss.blog}>
          <h1>{el.name}</h1>
          <Image src={el.image} alt={el.name} width={300} height={300} />
          <h2>{el.price}</h2>
          <h3>{el.phone}</h3>
          <div className={scss.blogBtns}>
            <button>delete</button>
            <button>edit</button>
            <button>favorite</button>
            <button>basket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;

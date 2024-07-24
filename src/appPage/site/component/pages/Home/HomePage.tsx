"use client";
import { useDeleteTodoMutation, useGetTodoQuery } from "@/redux/crud/todo";
import Image from "next/image";
import React from "react";
import scss from "./Home.module.scss";

const Home = () => {
  const { data } = useGetTodoQuery();
  const [deleteData] = useDeleteTodoMutation();
  console.log(data, "data");

  const handleDeleteData = async (id: number) => {
    try {
      await deleteData(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className={scss.blogs}>
        {data?.map((el, index) => (
          <div key={index} className={scss.blog}>
            <h1>{el.name}</h1>
            <Image src={el.image} alt={el.name} width={300} height={300} />
            <h2>{el.price}</h2>
            <h3>{el.phone}</h3>
            <div className={scss.blogBtns}>
              <button>edit</button>
              <button onClick={() => handleDeleteData(el._id!)}>delete</button>
              <button>favorite</button>
              <button>basket</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

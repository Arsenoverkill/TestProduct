"use client";
import {
  useDeleteTodoMutation,
  useEditTodoMutation,
  useGetTodoQuery,
} from "@/redux/crud/todo";
import Image from "next/image";
import React, { useState } from "react";
import scss from "./Home.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  _id: number;
  name: string;
  price: string;
  phone: string;
  image: string;
}

const Home = () => {
  const { register, handleSubmit, setValue, reset } = useForm<IFormInput>();
  const { data } = useGetTodoQuery();
  const [deleteData] = useDeleteTodoMutation();
  const [editData] = useEditTodoMutation();
  const [editId, setEditId] = useState<number>();

  const onSubmitEdit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await editData({ _id: editId!, newData: data });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteData = async (_id: number) => {
    try {
      await deleteData(_id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className={scss.blogs}>
        {data?.map((el) => (
          <div key={el._id} className={scss.blog}>
            <h1>{el.name}</h1>
            <Image src={el.image} alt={el.name} width={300} height={300} />
            <h2>{el.price}</h2>
            <h3>{el.phone}</h3>
            <div className={scss.blogBtns}>
              <button
                onClick={() => {
                  setValue("name", el.name);
                  setValue("price", el.price);
                  setValue("phone", el.phone);
                  setValue("image", el.image);
                  setEditId(el._id);
                }}
              >
                edit
              </button>
              <button onClick={() => handleDeleteData(el._id!)}>delete</button>
              <button>favorite</button>
              <button>basket</button>
            </div>
          </div>
        ))}
      </div>
      <div className={scss.EditInputs}>
        <form onSubmit={handleSubmit(onSubmitEdit)}>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="editName"
          />
          <input
            type="text"
            {...register("price", { required: true })}
            placeholder="editPrice"
          />
          <input
            type="text"
            {...register("phone", { required: true })}
            placeholder="editPhone"
          />
          <input
            type="text"
            {...register("image", { required: true })}
            placeholder="editImage"
          />
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  );
};

export default Home;

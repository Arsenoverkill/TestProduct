"use client";
import { usePostTodoMutation } from "@/redux/crud/todo";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormTypes {
  _id: number;
  name: string;
  price: string;
  phone: string;
  image: string;
}

const Admin = () => {
  const { register, handleSubmit, reset } = useForm<IFormTypes>();
  const [postData] = usePostTodoMutation();

  const onSubmit: SubmitHandler<IFormTypes> = async (data) => {
    await postData(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("image", { required: true })}
          type="text"
          placeholder="Image URL"
        />
        <input
          {...register("price", { required: true })}
          type="text"
          placeholder="Price"
        />
        <input
          {...register("phone", { required: true })}
          type="text"
          placeholder="Phone"
        />
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Admin;

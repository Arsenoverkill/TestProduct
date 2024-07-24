"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import React from "react";

const Home = () => {
  const { data } = useGetMeQuery();
  console.log(data);

  return <div>HomePage</div>;
};

export default Home;

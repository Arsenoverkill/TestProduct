"use client";
import Layout from "@/appPage/site/component/layout/Layout";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface RootLayoutClientProps {
  children: ReactNode;
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <>
      <ReduxProvider>
        <Layout>{children}</Layout>
      </ReduxProvider>
    </>
  );
};

export default RootLayoutClient;

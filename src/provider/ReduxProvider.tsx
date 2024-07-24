import { store } from "@/redux/store";
import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface RootLayoutClientProps {
  children: ReactNode;
}

const ReduxProvider: FC<RootLayoutClientProps> = ({ children }) => {
  return (
    <>  
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default ReduxProvider;

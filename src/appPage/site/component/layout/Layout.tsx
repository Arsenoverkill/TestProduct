import { FC, ReactNode } from "react";
import Header from "./Header/Header";

interface LayoutSiteProps {
  children: ReactNode;
}

const Layout: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main style={{ paddingTop: "100px" }}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
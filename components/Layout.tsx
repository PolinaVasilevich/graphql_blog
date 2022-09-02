import { FC, ReactNode } from "react";
import { Header } from "./";

type layoutType = {
  children: ReactNode;
};

const Layout: FC<layoutType> = ({ children }) => (
  <>
    <Header /> {children}
  </>
);

export default Layout;

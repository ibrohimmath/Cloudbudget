import React from "react";
import Showcase from "../../components/showcase";
import Footer from "./components/footer";
import cn from "./style.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Showcase />
        {children}
        <Footer />
      </div>
    </>
  );
}

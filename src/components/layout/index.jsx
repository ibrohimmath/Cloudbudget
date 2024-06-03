import React from "react";
import Navbar from "./components/navbar";
import cn from "./style.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}

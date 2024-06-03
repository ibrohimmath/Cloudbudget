import React from "react";
import clsx from "clsx";
import Layout from "./components/layout";
import Showcase from "./components/showcase";
import "./index.css";
import "./styles/global.scss";
import "./styles/_variables.scss";
import "./App.css";

export default function App() {
  return (
    <>
      <Layout>
        <Showcase />
      </Layout>
    </>
  );
}

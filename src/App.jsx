import React from "react";
import clsx from "clsx";
import Navbar from "./components/layout/components/navbar";
import * as typeAll from "./components/typography";
import * as btnAll from "./components/button";
import "./index.css";
import "./styles/global.scss";
import "./styles/_variables.scss";
import "./App.css";

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <btnAll.Button
        borderStyle={btnAll.ButtonBorderStyle.default}
        borderSize={btnAll.ButtonBorderSize.sm}
        borderColor={btnAll.ButtonBorderColor.white}
        borderRadius={btnAll.ButtonRadius.md}
        background={btnAll.ButtonBackground.primary}
        padding={btnAll.ButtonPadding.md}
      >
        <typeAll.Type color={typeAll.TextColor.white}>
          Lorem ipsum dolor sit amet
        </typeAll.Type>
      </btnAll.Button>
    </>
  );
}

import React from "react";
import clsx from "clsx";
import Container from "../../../container";
import cloudSrc from "../../../../assets/icons/cloud.png";
import cn from "./style.module.scss";

export default function Navbar() {
  return (
    <>
      <Container>
        <header>
          <nav>
            <div className="logo">
              <img src={cloudSrc} alt="Cloudbudge Logo" />
            </div>
          </nav>
        </header>
      </Container>
    </>
  );
}

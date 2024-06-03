import React from "react";
import clsx from "clsx";
import cloudSrc from "../../../../assets/icons/cloud.png";
import cn from "./style.module.scss";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className={clsx(cn["logo"])}>
            <img src={cloudSrc} alt="Cloudbudge Logo" />
          </div>
        </nav>
      </header>
    </>
  );
}

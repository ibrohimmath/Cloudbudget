import React from "react";
import clsx from "clsx";
import cn from "./style.module.scss";

export const ImageRadius = {
  default: "img-radius--sm",
  sm: "img-radius--sm",
  md: "img-radius--md",
  lg: "img-radius--lg",
};

export default function Image({ src, radius = ImageRadius.default }) {
  return <img className={clsx(cn["img"], cn[radius])} src={src}></img>;
}

import { React, Children } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import cn from "./style.module.scss";

export const GridCols = {
  two: "grid-col--two",
  three: "grid-col--three",
  four: "grid-col--four",
};

export function Grid({ children, col = GridCols.two }) {
  const arrayChildren = Children.toArray(children);

  return (
    <div className={clsx(cn["grid"], cn[col])}>
      {arrayChildren.map((child) => (
        <div className={clsx(cn["grid-item"])} key={uuidv4()}>
          {child}
        </div>
      ))}
    </div>
  );
}

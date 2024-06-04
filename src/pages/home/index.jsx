import React from "react";
import clsx from "clsx";
import Container from "../../components/container";
import cn from "./style.module.scss";

export const HomeBackground = {
  default: "home-background--secondary",
  primary: "home-background--primary",
  secondary: "home-background--secondary",
  tertiary: "home-background--tertiary",
};

export const HomePadding = {
  default: "home-padding--md",
  sm: "home-padding--sm",
  md: "home-padding--md",
  lg: "home-padding--lg",
  xl: "home-padding--xl",
};

export function Home({
  children,
  background = HomeBackground.default,
  padding = HomePadding.default,
}) {
  return (
    <div className={clsx(cn["home"], cn[background], cn[padding])}>
      <Container>{children}</Container>
    </div>
  );
}

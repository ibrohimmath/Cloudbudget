// import clsx from "clsx";

// import cn from "./style.module.scss";

// export const TextColor = {
//   default: "text-color--black",
//   primary: "text-color--primary",
//   secondary: "text-color--secondary",
//   black: "text-color--black",
//   white: "text-color--white",
// };

// export const TextFamily = {
//   default: "text-family--primary",
//   primary: "text-family--primary",
//   secondary: "text-family--secondary",
// };

// export const TextSize = {
//   default: "text-size--default",
//   sm: "text-size--sm",
//   lg: "text-size--lg",
// };

// export const TextBold = {
//   default: "text--default",
//   semibold: "text--semibold",
//   bold: "text--bold",
// };

// export function Type({
//   tag = "span",
//   color = TextColor.default,
//   family = TextFamily.default,
//   size = TextSize.default,
//   boldness = TextBold.default,
//   children,
// }) {
//   const Tag = `${tag}`;
//   const classNames = `text ${color} ${family} ${size} ${boldness}`;
//   return <Tag className={clsx(cn[classNames])}>{children}</Tag>;
// }

import clsx from "clsx";
import cn from "./style.module.scss";

export const TextColor = {
  default: "text-color--black",
  primary: "text-color--primary",
  secondary: "text-color--secondary",
  black: "text-color--black",
  white: "text-color--white",
};

export const TextFamily = {
  default: "text-family--primary",
  primary: "text-family--primary",
  secondary: "text-family--secondary", // Fixed typo here
};

export const TextSize = {
  default: "text-size--default",
  sm: "text-size--sm",
  lg: "text-size--lg",
  xl: "text-size--xl",
  ["2xl"]: "text-size--2xl",
  ["3xl"]: "text-size--3xl",
  ["4xl"]: "text-size--4xl",
};

export const TextBold = {
  default: "text--default",
  semibold: "text--semibold",
  bold: "text--bold",
};

export function Type({
  tag = "span",
  marginTop = "0px",
  color = TextColor.default,
  family = TextFamily.default,
  size = TextSize.default,
  boldness = TextBold.default,
  children,
}) {
  const Tag = `${tag}`;
  const classNames = clsx(
    cn["text"],
    cn[color],
    cn[family],
    cn[size],
    cn[boldness]
  );
  return (
    <Tag className={classNames} style={{ marginTop: marginTop }}>
      {children}
    </Tag>
  );
}

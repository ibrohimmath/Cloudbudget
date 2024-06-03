import clsx from "clsx";
import cn from "./style.module.scss";

export const ButtonBorderStyle = {
  default: "btn-border--solid",
};

export const ButtonBorderSize = {
  default: "btn-border--none",
  sm: "btn-border--sm",
  md: "btn-border--md",
  lg: "btn-border--lg",
};

export const ButtonBorderColor = {
  default: "btn-border-color--primary",
  primary: "btn-border-color--primary",
  secondary: "btn-border-color--secondary",
  black: "btn-border-color--black",
  white: "btn-border-color--white",
};

export const ButtonRadius = {
  default: "btn-radius--sm",
  sm: "btn-radius--sm",
  md: "btn-radius--md",
  lg: "btn-radius--lg",
};

export const ButtonBackground = {
  default: "btn-background--inherit",
  primary: "btn-background--primary",
  secondary: "btn-background-secondary",
  black: "btn-background--black",
  white: "btn-background--white",
};

export const ButtonPadding = {
  default: "btn-padding--sm",
  md: "btn-padding--md",
  lg: "btn-padding--lg",
};

export function Button({
  tag = "div",
  borderStyle = ButtonBorderStyle.default,
  borderSize = ButtonBorderSize.default,
  borderColor = ButtonBorderColor.default,
  borderRadius = ButtonRadius.default,
  background = ButtonBackground.default,
  padding = ButtonPadding.default,
  radius = ButtonRadius.default,
  children,
}) {
  const Tag = `${tag}`;
  const classNames = clsx(
    cn["btn"],
    cn[borderStyle],
    cn[borderSize],
    cn[borderColor],
    cn[borderRadius],
    cn[background],
    cn[padding],
    cn[radius]
  );
  return <Tag className={classNames}>{children}</Tag>;
}

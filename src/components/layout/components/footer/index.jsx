import React from "react";
import clsx from "clsx";
import Container from "../../../container";
import {
  Type,
  TextBold,
  TextColor,
  TextSize,
  TextFamily,
} from "../../../typography";
import cn from "./style.module.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Type boldness={TextBold.semibold} size={TextSize.lg}>
          Адрес
        </Type>
        <p style={{ marginTop: "1.5rem" }}>
          <Type boldness={TextBold.default} size={TextSize.md}>
            Pipang Ltd, Griva Digeni,
          </Type>
          <Type boldness={TextBold.default} size={TextSize.md}>
            81-83 Jacovides Tower, 1st Floor
          </Type>
          <Type boldness={TextBold.default} size={TextSize.md}>
            1090 Picosia USA
          </Type>
        </p>
        <Type boldness={TextBold.default} size={TextSize.md} marginTop="3.5rem">
          Copyright 2021 CloudBudget
        </Type>
      </Container>
    </footer>
  );
}

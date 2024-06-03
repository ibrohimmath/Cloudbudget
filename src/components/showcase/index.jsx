import React from "react";
import clsx from "clsx";
import Navbar from "../layout/components/navbar";
import { Type, TextColor, TextFamily, TextSize, TextBold } from "../typography";
import {
  Button,
  ButtonBorderStyle,
  ButtonBorderColor,
  ButtonBorderSize,
  ButtonRadius,
  ButtonBackground,
  ButtonPadding,
} from "../button";
import showcaseSrc from "../../assets/img/showcase.jfif";
import cn from "./style.module.scss";

export default function Showcase() {
  return (
    <>
      <div className={clsx(cn["showcase"])}>
        <Navbar />
        <Type
          color={TextColor.white}
          family={TextFamily.primary}
          size={TextSize["4xl"]}
          boldness={TextBold.bold}
        >
          CLOUDBUDGET
        </Type>
        <Type
          color={TextColor.white}
          family={TextFamily.primary}
          size={TextSize.lg}
          boldness={TextBold.default}
          marginTop="1.5rem"
        >
          Управление бюджетом в для всех. <br /> Всего 69,95 € в месяц после
          7-дневной <br /> пробной версии за 4,99 €
        </Type>
        <Button
          background={ButtonBackground.white}
          padding={ButtonPadding.lg}
          marginTop="2.2rem"
        >
          <Type color={TextColor.primary} size={TextSize.default}>
            ПОПРОБОВАТЬ
          </Type>
        </Button>
      </div>
    </>
  );
}

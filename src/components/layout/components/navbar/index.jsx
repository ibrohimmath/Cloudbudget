import React from "react";
import clsx from "clsx";
import * as btnAll from "../../../button";
import {
  Type,
  TextColor,
  TextFamily,
  TextSize,
  TextBold,
} from "../../../typography";
import cloudSrc from "../../../../assets/icons/cloud.png";
import cn from "./style.module.scss";

export default function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className={clsx(cn["logo"])}>
            <img src={cloudSrc} alt="Cloudbudge Logo" />
            <Type
              color={TextColor.white}
              family={TextFamily.secondary}
              size={TextSize.default}
              boldness={TextBold.bold}
            >
              CLOUDBUDGET
            </Type>
          </div>
          <input type="checkbox" id={clsx(cn["check"])} />
          <label htmlFor={clsx(cn["check"])} className={clsx(cn["open"])}>
            <i className="fa-solid fa-bars"></i>
          </label>
          <label htmlFor={clsx(cn["check"])} className={clsx(cn["close"])}>
            <i className="fa-solid fa-xmark"></i>
          </label>
          <ul className={clsx(cn["links"])}>
            <li className={clsx(cn["link__item"])}>
              <a href="#">
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.sm}
                  boldness={TextBold.default}
                >
                  ОБЗОР
                </Type>
              </a>
            </li>
            <li className={clsx(cn["link__item"])}>
              <a href="#">
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.sm}
                  boldness={TextBold.default}
                >
                  ОСОБЕННОСТИ
                </Type>
              </a>
            </li>
            <li className={clsx(cn["link__item"])}>
              <a href="#">
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.sm}
                  boldness={TextBold.default}
                >
                  ТЕХНОЛОГИЯ
                </Type>
              </a>
            </li>
            <li className={clsx(cn["link__item"])}>
              <a href="#">
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.sm}
                  boldness={TextBold.default}
                >
                  КОНТАКТЫ
                </Type>
              </a>
            </li>
            <li className={clsx(cn["link__item"])}>
              <a href="#">
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.sm}
                  boldness={TextBold.default}
                >
                  ВОЙТИ
                </Type>
              </a>
            </li>
            <div className={clsx(cn["btn-wrapper--second"])}>
              <btnAll.Button
                borderStyle={btnAll.ButtonBorderStyle.default}
                borderSize={btnAll.ButtonBorderSize.sm}
                borderColor={btnAll.ButtonBorderColor.white}
                borderRadius={btnAll.ButtonRadius.md}
                background={btnAll.ButtonBackground.default}
                padding={btnAll.ButtonPadding.md}
              >
                <Type
                  color={TextColor.white}
                  family={TextFamily.primary}
                  size={TextSize.md}
                  boldness={TextBold.default}
                >
                  ВХОД
                </Type>
              </btnAll.Button>
            </div>
          </ul>
          <div className={clsx(cn["btn-wrapper--first"])}>
            <btnAll.Button
              borderStyle={btnAll.ButtonBorderStyle.default}
              borderSize={btnAll.ButtonBorderSize.sm}
              borderColor={btnAll.ButtonBorderColor.white}
              borderRadius={btnAll.ButtonRadius.md}
              background={btnAll.ButtonBackground.default}
              padding={btnAll.ButtonPadding.md}
            >
              <Type
                color={TextColor.white}
                family={TextFamily.primary}
                size={TextSize.md}
                boldness={TextBold.default}
              >
                ВХОД
              </Type>
            </btnAll.Button>
          </div>
        </nav>
      </header>
    </>
  );
}

import React from "react";
import clsx from "clsx";
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
          </ul>
        </nav>
      </header>
    </>
  );
}

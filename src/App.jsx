import React from "react";
import clsx from "clsx";

import Container from "./components/container";
import Layout from "./components/layout";
import { Grid, GridCols } from "./components/grid";
import {
  Type,
  TextFamily,
  TextColor,
  TextBold,
  TextSize,
} from "./components/typography";
import { Image, ImageRadius } from "./components/image";
import { Home, HomeBackground, HomePadding } from "./pages/home";

import manageSrc from "./assets/img/manage.jfif";

import chanceOne from "./assets/img/chance_1.jfif";
import chanceTwo from "./assets/img/chance_2.jfif";
import chanceThree from "./assets/img/chance_3.jfif";
import downloadSrc from "./assets/icons/download.png";
import searchSrc from "./assets/icons/search.png";
import pdfSrc from "./assets/icons/pdf.png";
import csvSrc from "./assets/icons/csv.png";
import economySrc from "./assets/img/economy.jfif";
import playStoreSrc from "./assets/icons/ion-logo-google-playstore.png";
import appStoreSrc from "./assets/icons/ion-logo-apple-appstore.png";

import "./index.css";
import "./styles/global.scss";
import "./styles/_variables.scss";
import "./App.css";

export default function App() {
  return (
    <>
      <Layout>
        <Home padding={HomePadding.lg}>
          <Grid>
            <div>
              <Type
                family={TextFamily.default}
                boldness={TextBold.semibold}
                size={TextSize["2xl"]}
              >
                Простое приложение для управления бюджетом
              </Type>
              <Type
                family={TextFamily.default}
                boldness={TextBold.default}
                size={TextSize["md"]}
                marginTop="2.5rem"
              >
                <p style={{ textAlign: "justify" }}>
                  Наше приложение создано, чтобы вы могли в реальном времени
                  управлять своим бюджетом и расходами в режиме онлайн с любого
                  устройства. Оно предоставляет подробные отчеты о доходах и
                  расходах с графиками, чтобы вы сразу могли увидеть расходы и
                  бюджет. Читайте ниже, чтобы узнать больше.
                </p>
              </Type>
              <Type
                family={TextFamily.default}
                color={TextColor.primary}
                boldness={TextBold.default}
                size={TextSize["md"]}
                marginTop="1.5rem"
              >
                <a href="#">Узнать подробнее</a>
              </Type>
            </div>
            <div>
              <Image radius={ImageRadius.sm} src={manageSrc}></Image>
            </div>
          </Grid>
        </Home>
        <Home background={HomeBackground.tertiary} padding={HomePadding.md}>
          <Type
            family={TextFamily.default}
            color={TextColor.default}
            boldness={TextBold.semibold}
            size={TextSize["xl"]}
          >
            <p style={{ textAlign: "center" }}>Возможности</p>
          </Type>
          <div
            style={{
              marginTop: "2.5rem",
              minHeight: "fit-content",
              paddingBottom: "15vh",
            }}
          >
            <Grid col={GridCols.three}>
              <div style={{ position: "relative" }}>
                <Image radius={ImageRadius.sm} src={chanceOne} />
                <div
                  className="card-text"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%,50%)",
                    width: "70%",
                    textAlign: "center",
                    borderRadius: "6px",
                    padding: "1.5rem 2.5rem",
                    backgroundColor: "white",
                    zIndex: "5",
                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.semibold}
                    size={TextSize.default}
                  >
                    Поддерживает все валюты и карты
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    Мы поддерживаем все популярные валюты и полностью
                    настраиваем, чтобы добавить
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.primary}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    <a href="#">Подробнее</a>
                  </Type>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image radius={ImageRadius.sm} src={chanceTwo} />
                <div
                  className="card-text"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%,50%)",
                    width: "70%",
                    textAlign: "center",
                    borderRadius: "6px",
                    padding: "1.5rem 2.5rem",
                    backgroundColor: "white",
                    zIndex: "5",
                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.semibold}
                    size={TextSize.default}
                  >
                    Управляйте своими расходами на ходу
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    Вы можете получить доступ к своей учетной записи из любой
                    точки мира на любом устройстве
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.primary}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    <a href="#">Подробнее</a>
                  </Type>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Image radius={ImageRadius.sm} src={chanceThree} />
                <div
                  className="card-text"
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%,50%)",
                    width: "80%",
                    textAlign: "center",
                    borderRadius: "6px",
                    padding: "1.5rem 1rem",
                    backgroundColor: "white",
                    zIndex: "5",
                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.semibold}
                    size={TextSize.default}
                  >
                    Управление бюджетом осуществляется в облаке
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.default}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    Наше приложение создано для того, чтобы вы могли управлять
                    управлять своим бюджетом.
                  </Type>
                  <Type
                    family={TextFamily.default}
                    color={TextColor.primary}
                    boldness={TextBold.default}
                    size={TextSize.sm}
                    marginTop="0.8rem"
                  >
                    <a href="#">Подробнее</a>
                  </Type>
                </div>
              </div>
            </Grid>
          </div>
        </Home>
        <Home background={HomeBackground.secondary} padding={HomePadding.md}>
          <Type
            family={TextFamily.default}
            color={TextColor.default}
            boldness={TextBold.semibold}
            size={TextSize["xl"]}
          >
            <p style={{ textAlign: "center" }}>Технологии</p>
          </Type>
          <div
            style={{
              marginTop: "2.5rem",
              minHeight: "fit-content",
              paddingBottom: "15vh",
            }}
          >
            <Grid col={GridCols.four}>
              <div style={{ textAlign: "center" }}>
                <div className="img-number" style={{ position: "relative" }}>
                  <div
                    className="img-number__content"
                    style={{
                      color: "#10101014",
                      fontSize: "8rem",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "semibold",
                    }}
                  >
                    01
                  </div>
                  <img
                    src={downloadSrc}
                    style={{
                      height: "6rem",
                      position: "absolute",
                      bottom: "0",
                      transform: "translate(-50%, 20%)",
                    }}
                  />
                </div>
                <Type
                  boldness={TextBold.semibold}
                  size={TextSize.lg}
                  marginTop="1rem"
                >
                  Облачное хранение
                </Type>
                <Type size={TextSize.md} marginTop="0.8rem">
                  Доступ из любой точки мира с любого устройства
                </Type>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="img-number" style={{ position: "relative" }}>
                  <div
                    className="img-number__content"
                    style={{
                      color: "#10101014",
                      fontSize: "8rem",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "semibold",
                    }}
                  >
                    02
                  </div>
                  <img
                    src={searchSrc}
                    style={{
                      height: "6rem",
                      position: "absolute",
                      bottom: "0",
                      transform: "translate(-50%, 20%)",
                    }}
                  />
                </div>
                <Type
                  boldness={TextBold.semibold}
                  size={TextSize.lg}
                  marginTop="1rem"
                >
                  Безопастность
                </Type>
                <Type size={TextSize.md} marginTop="0.8rem">
                  Вся информация хранится на защищенных облачных серверах
                </Type>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="img-number" style={{ position: "relative" }}>
                  <div
                    className="img-number__content"
                    style={{
                      color: "#10101014",
                      fontSize: "8rem",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "semibold",
                    }}
                  >
                    03
                  </div>
                  <img
                    src={pdfSrc}
                    style={{
                      height: "6rem",
                      position: "absolute",
                      bottom: "0",
                      transform: "translate(-50%, 20%)",
                    }}
                  />
                </div>
                <Type
                  boldness={TextBold.semibold}
                  size={TextSize.lg}
                  marginTop="1rem"
                >
                  PDF Отчеты
                </Type>
                <Type size={TextSize.md} marginTop="0.8rem">
                  Скачивайте ваши отчеты в удобном формате PDF
                </Type>
              </div>
              <div style={{ textAlign: "center" }}>
                <div className="img-number" style={{ position: "relative" }}>
                  <div
                    className="img-number__content"
                    style={{
                      color: "#10101014",
                      fontSize: "8rem",
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "semibold",
                    }}
                  >
                    04
                  </div>
                  <img
                    src={csvSrc}
                    style={{
                      height: "5rem",
                      position: "absolute",
                      bottom: "0",
                      transform: "translate(-50%, 20%)",
                    }}
                  />
                </div>
                <Type
                  boldness={TextBold.semibold}
                  size={TextSize.lg}
                  marginTop="1rem"
                >
                  CSV  Отчеты
                </Type>
                <Type size={TextSize.md} marginTop="0.8rem">
                  Скачивайте ваши отчеты в удобном формате CSV
                </Type>
              </div>
            </Grid>
          </div>
        </Home>
        <Home background={HomeBackground.fourth} padding={HomePadding.lg}>
          <Grid>
            <div>
              <Type
                color={TextColor.white}
                family={TextFamily.default}
                boldness={TextBold.semibold}
                size={TextSize["2xl"]}
              >
                Сосредоточьтесь на <br /> экономии денег
              </Type>
              <Type
                color={TextColor.white}
                family={TextFamily.default}
                boldness={TextBold.default}
                size={TextSize["md"]}
                marginTop="2.5rem"
              >
                <p style={{ textAlign: "justify" }}>
                  Мы помогаем вам отслеживать ваши привычки в расходах, чтобы вы
                  могли легко определить и сократить ненужные расходы. Просто
                  присоединяйтесь сегодня, чтобы начать!
                </p>
              </Type>
              <div
                className="icon-links"
                style={{ display: "flex", gap: "2rem", marginTop: "3.5rem" }}
              >
                <div className="icon-link">
                  <img
                    src={playStoreSrc}
                    style={{
                      color: "#ED4C5C",
                      width: "3rem",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "50%",
                    }}
                  />
                </div>

                <div className="icon-link">
                  <img
                    src={appStoreSrc}
                    style={{
                      color: "#ED4C5C",
                      width: "3rem",
                      objectFit: "cover",
                      objectPosition: "center",
                      borderRadius: "50%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <Image radius={ImageRadius.md} src={economySrc}></Image>
            </div>
          </Grid>
        </Home>
      </Layout>
    </>
  );
}

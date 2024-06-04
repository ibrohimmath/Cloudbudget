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
      </Layout>
    </>
  );
}

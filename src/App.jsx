import React from "react";
import clsx from "clsx";
import Container from "./components/container";
import Layout from "./components/layout";
import Showcase from "./components/showcase";
import { Grid, GridCols } from "./components/grid";
import "./index.css";
import "./styles/global.scss";
import "./styles/_variables.scss";
import "./App.css";

export default function App() {
  return (
    <>
      <Layout>
        <Showcase />
      </Layout>
      <div style={{ padding: "5vh 0" }}>
        <Container>
          <Grid>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis veniam perferendis quia odio debitis ipsum consectetur
              earum voluptas minima ullam?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              est nam magni aperiam excepturi deleniti rerum quam delectus unde,
              similique suscipit ad numquam maxime quibusdam harum sit quidem
              sequi fugit. Unde culpa libero, molestias debitis exercitationem
              perferendis, delectus porro reprehenderit dolorem quos neque vitae
              mollitia fuga consectetur error ipsum tenetur, dolor accusamus
              labore aliquid tempora laudantium. Praesentium assumenda, odio,
              repudiandae sint deserunt cum ducimus distinctio alias quasi vero
              placeat culpa voluptate reprehenderit animi! Eligendi iusto eos
              minus provident, nisi quae distinctio beatae labore. Temporibus
              porro molestias aut minus, dolore nobis aperiam inventore tempora
              ea nostrum. Maiores esse repellat eligendi non!
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
}

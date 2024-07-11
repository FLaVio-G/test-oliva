"use client";
import styled from "styled-components";

import SessionOne from "./components/SessionOne";
import SessionTwo from "./components/SessionTwo";
import SessionThree from "./components/SessionThree";
import SessionFour from "./components/SessionFour";
import SessionFive from "./components/SessionFive";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Main>
        <Header />
        <div id="session-two">
          <SessionOne />
        </div>
        <div id="session-two">
          <SessionTwo />
        </div>
        <div id="session-three">
          <SessionThree />
        </div>
        <div id="session-four">
          <SessionFour />
        </div>
        <div id="session-five">
          <SessionFive />
        </div>

        <Footer />
      </Main>
    </>
  );
}

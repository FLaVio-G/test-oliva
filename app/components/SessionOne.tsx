import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import { Button } from "antd";
import Image from "next/image";
import officeImage from "../../public/office-image.png";

const MainContainerOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 78.375rem;
  height: 33.375rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    align-items: center;
  }
`;

const MainDivOne = styled.div`
  display: flex;
  width: 43.4375rem;
  height: 21.75rem;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: ${BREAKPOINTS.SM}) {
    justify-content: center;

    align-items: center;
    width: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.8125rem;
  font-weight: 500;
  color: #5d5d5d;

  @media (max-width: ${BREAKPOINTS.LG}) {
    display: flex;
    font-size: 1.8125rem;
  }
`;

const H2 = styled.h1`
  font-size: 2.8125rem;
  font-weight: 500;
  color: #c6b92d;
`;

const P = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #7f7f7f;
  line-height: 1.5rem;
  display: flex;
  align-items: start;
  justify-content: start;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.8125rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.8125rem;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonTwo = styled(Button)`
  width: 17.6875rem;
  height: 4rem;
  border-radius: 3.125rem;
  background-color: #c6b92d;
  color: white;
  margin-top: 1.25rem;
`;

const StyledImageTwo = styled(Image)`
  width: 382.61px;
  height: 320.89px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    width: 16.5625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 16.5625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 2rem;
    width: 16.5625rem;
    height: auto;
  }
`;

const SessionOne = () => {
  return (
    <>
      <MainContainerOne>
        <MainDivOne>
          <H1>Teste de desenvolvimento</H1>
          <H2>Front-end Next.JS</H2>
          <P>
            Bem-vindo ao nosso desafio de codificação React! Este teste avalia
            suas habilidades em desenvolver aplicações web interativas com
            React. Sua tarefa é construir uma aplicação que interaja com APIs
            externas e exiba dados de forma clara e eficiente. Estamos ansiosos
            para ver sua criatividade e qualidade de código em prática
          </P>
          <ButtonTwo>Entrar em contato</ButtonTwo>
        </MainDivOne>
        <div>
          <StyledImageTwo
            src={officeImage}
            width={530}
            height={528}
            alt={"office image"}
          ></StyledImageTwo>
        </div>
      </MainContainerOne>
    </>
  );
};
export default SessionOne;

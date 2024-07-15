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
    width: 44.375rem;
    height: 33.375rem;

    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    padding: 0 0.5rem;
    width: 16.5625rem;
    height: auto;
  }
`;

const MainDivOne = styled.div`
  display: flex;
  width: 43.4375rem;
  height: auto;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
    align-items: center;
    margin: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    align-items: center;
    width: 100%;
    margin: 0 0.5rem;
  }
`;

const H1 = styled.h1`
  font-size: 2.8125rem;
  font-weight: 500;
  color: #5d5d5d;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 1.8125rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const H2 = styled.h2`
  font-size: 2.8125rem;
  font-weight: 500;
  color: #c6b92d;

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.75rem;
    text-align: center;
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #7f7f7f;
  line-height: 1.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.75rem;
    text-align: center;
  }
`;

const ButtonTwo = styled(Button)`
  width: 17.6875rem;
  height: 4rem;
  border-radius: 3.125rem;
  background-color: #c6b92d;
  color: white;
  margin-top: 1.25rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 15rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 80%;
  }
`;

const StyledImageTwo = styled(Image)`
  width: 23.8125rem;
  height: auto;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 80%;
    margin-top: 1.5rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 100%;
    margin-top: 1.5rem;
  }
`;

const SessionOne = () => {
  return (
    <MainContainerOne>
      <MainDivOne>
        <H1>Teste de desenvolvimento</H1>
        <H2>Front-end Next.JS</H2>
        <P>
          Bem-vindo ao nosso desafio de codificação React! Este teste avalia
          suas habilidades em desenvolver aplicações web interativas com React.
          Sua tarefa é construir uma aplicação que interaja com APIs externas e
          exiba dados de forma clara e eficiente. Estamos ansiosos para ver sua
          criatividade e qualidade de código em prática.
        </P>
        <ButtonTwo>Entrar em contato</ButtonTwo>
      </MainDivOne>
      <div>
        <StyledImageTwo
          src={officeImage}
          width={530}
          height={528}
          alt={"office image"}
        />
      </div>
    </MainContainerOne>
  );
};

export default SessionOne;

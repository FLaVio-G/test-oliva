import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import Image from "next/image";

import officeImageTwo from "../../public/office-two-image.png";
import leads from "../../public/mdi_leads.svg";
import leadsGroup from "../../public/flowbite_users-group-solid.svg";
import timer from "../../public/f7_timer.svg";
import midChart from "../../public/mdi_chart-line.svg";
import cartPlus from "../../public/bi_cart-plus-fill.svg";

const MainContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 78.375rem;
  height: 33.375rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
    padding: 1rem;
    margin-top: 13.75rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 0rem;
    justify-content: center;
    align-items: center;
  }
`;

const MainDivTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.SM}) {
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 0 1rem;
  }
`;

const MainDivThree = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border-radius: 32px;
  box-shadow: 0px 4px 8px 0px #8585851a, 0px 14px 14px 0px #85858517,
    0px 32px 19px 0px #8585850d, 0px 56px 23px 0px #85858503,
    0px 88px 25px 0px #85858500;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    width: 100%;
    padding: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin: 0 1rem;
  }
`;

const MainDivFour = styled.div`
  width: 697px;
  height: 464px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    align-items: center;
  }
`;

const MainDivSeven = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const MainDivSix = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  gap: 16px;
`;

const StyledImageTwo = styled(Image)`
  width: 382.61px;
  height: 320.89px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 2rem;
    width: 100%;
    height: auto;
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

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1.5rem;
  }
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
    font-size: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.8125rem;
    align-items: center;
    justify-content: center;
  }
`;

const StyledSVGOne = styled(Image)`
  width: 24px;
  height: 24px;
`;
const StyledSVGTwo = styled(Image)`
  width: 24px;
  height: 24px;
`;
const StyledSVGThree = styled(Image)`
  width: 24px;
  height: 24px;
`;
const StyledSVGFour = styled(Image)`
  width: 24px;
  height: 24px;
`;
const StyledSVGFive = styled(Image)`
  width: 24px;
  height: 24px;
`;

const SessionTwo = () => {
  return (
    <>
      <MainContainerTwo>
        <MainDivTwo>
          <H1>SEO, ou otimização</H1>
        </MainDivTwo>
        <MainDivThree>
          <MainDivFour>
            <P>
              É uma estratégia crucial para melhorar a visibilidade e o ranking
              de um site nos resultados de pesquisa orgânica de motores de busca
              como Google, Bing e Yahoo. A prática de SEO envolve uma série de
              técnicas e metodologias que visam otimizar aspectos internos e
              externos de um website para torná-lo mais atrativo
            </P>
            <MainDivSeven>
              <P> O que pode ajudar com os seguintes resultados:</P>

              <MainDivSix>
                <StyledSVGOne src={leadsGroup} alt="Logo" />
                <P> Visitas do seu site</P>
              </MainDivSix>
              <MainDivSix>
                <StyledSVGTwo src={leads} alt="Logo" />
                <P> Mais leads gerados por mês</P>
              </MainDivSix>
              <MainDivSix>
                <StyledSVGThree src={midChart} alt="Logo" />
                <P> Oportunidades geradas por mês</P>
              </MainDivSix>
              <MainDivSix>
                <StyledSVGFour src={cartPlus} alt="Logo" />
                <P> Vendas realizadas por mês</P>
              </MainDivSix>
              <MainDivSix>
                <StyledSVGFive src={timer} alt="Logo" />
                <P> Tempo de carregamento do site</P>
              </MainDivSix>
            </MainDivSeven>
          </MainDivFour>
          <div>
            <StyledImageTwo
              src={officeImageTwo}
              width={530}
              height={528}
              alt={"Computador com desenhos de funções flutuando"}
            ></StyledImageTwo>
          </div>
        </MainDivThree>
      </MainContainerTwo>
    </>
  );
};

export default SessionTwo;

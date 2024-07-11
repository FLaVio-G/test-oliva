import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import Image from "next/image";
import affiliate from "../../public/Affiliate Marketing.svg";
import magnet from "../../public/Magnet 1.svg";
import strategy from "../../public/Strategy 1.svg";
import icon1 from "../../public/icon.svg";

const MainContainerThree = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 220px;
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
    width: 20rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const DivFour = styled.div`
  display: flex;
  flex-direction: row;
  width: 1043px;
  height: auto;
  margin-top: 80px;
  gap: 24px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    margin-top: 0px;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
  }
`;

const DivSeven = styled.div`
  width: 588px;
  height: 308px;
`;

const Div = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: #c6b92d;
`;

const DivTwo = styled.div`
  margin-top: 24px;

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

const MainDivEight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  gap: 88px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 90px;
    justify-content: center;
    align-items: center;
  }
`;

const DivOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 176px;
  height: 117px;
  flex-direction: column;
  gap: 9px;
`;

const H3 = styled.h3`
  font-size: 2.8125rem;
  font-weight: 600;
  color: #6a0f65;
`;

const H5 = styled.span`
  font-size: 38px;
  font-weight: 500;
  color: #5d5d5d;
`;

const P2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #7f7f7f;
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

const StyledSVGSix = styled(Image)`
  width: 60px;
  height: 60px;
`;

const StyledSVGSeven = styled(Image)`
  width: 64px;
  height: 64px;
`;

const StyledSVGEight = styled(Image)`
  width: 64px;
  height: 64px;
`;

const SessionThree = () => {
  return (
    <>
      <MainContainerThree>
        <MainDivTwo>
          <H3>Acelere o seu site e melhore sua Performance!</H3>
        </MainDivTwo>

        <DivFour>
          <div>
            <StyledImageTwo
              src={affiliate}
              width={305}
              height={289}
              alt={"Computador com desenhos de funções flutuando"}
            ></StyledImageTwo>
          </div>

          <DivSeven>
            <Div>
              Para <H5>aumentar o faturamento</H5> da sua empresa
            </Div>

            <DivTwo>
              <P>
                Você está pronto para transformar a velocidade do seu site e
                oferecer a melhor experiência possível aos seus usuários? Nossa
                equipe de especialistas em otimização de sites está aqui para
                ajudar. Utilizamos as mais avançadas técnicas de SEO técnico e
                as melhores práticas de desenvolvimento web para garantir que
                seu site não só carregue rapidamente, mas também se mantenha
                seguro, acessível e otimizado para todos os dispositivos.
              </P>
            </DivTwo>
          </DivSeven>
        </DivFour>

        <MainDivEight>
          <DivOne>
            <StyledSVGSix src={strategy} alt="Logo" />
            <P2> Melhore a Velocidade do Carregamento</P2>
          </DivOne>
          <DivOne>
            <StyledSVGSeven src={magnet} alt="Logo" />
            <P2> Otimização para Mobile</P2>
          </DivOne>
          <DivOne>
            <StyledSVGEight src={icon1} alt="Logo" />
            <P2> SEO Técnico</P2>
          </DivOne>
        </MainDivEight>
      </MainContainerThree>
    </>
  );
};

export default SessionThree;

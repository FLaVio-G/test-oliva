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
  align-items: center;
  margin-top: 13.75rem;
  width: 78.375rem;
  height: 33.375rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin-top: rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 3rem;
    width: 100%;
    height: auto;
    padding: 0 0.5rem;
  }
`;

const MainDivTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    text-align: center;
    padding: 0 0.5rem;
  }
`;

const DivFour = styled.div`
  display: flex;
  flex-direction: row;
  width: 65.1875rem;
  margin-top: 5rem;
  gap: 1.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    flex-direction: column;
    margin-top: 2rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const DivSeven = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 100%;
  }
`;

const Div = styled.div`
  font-size: 2.375rem;
  font-weight: 500;
  color: #c6b92d;

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.75rem;
  }
`;

const DivTwo = styled.div`
  margin-top: 1.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const MainDivEight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 4.375rem;
  gap: 5.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: row;
    margin-top: 2rem;
    gap: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1rem;
  }
`;

const DivOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 11rem;
  height: 7.3125rem;
  gap: 0.5625rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 9rem;
    height: auto;
  }
`;

const H3 = styled.h3`
  font-size: 2.8125rem;
  font-weight: 600;
  color: #6a0f65;

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.75rem;
  }
`;

const H5 = styled.span`
  font-size: 2.375rem;
  font-weight: 500;
  color: #5d5d5d;

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.5rem;
  }
`;

const P2 = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: #7f7f7f;

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.875rem;
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: #7f7f7f;
  line-height: 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.8125rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.75rem;
    align-items: center;
    justify-content: center;
  }
`;

const StyledImageTwo = styled(Image)`
  width: 23.9125rem;
  height: auto;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 100%;
  }
`;

const StyledSVGSix = styled(Image)`
  width: 3.75rem;
  height: 3.75rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 3rem;
    height: 3rem;
  }
`;

const StyledSVGSeven = styled(Image)`
  width: 4rem;
  height: 4rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const StyledSVGEight = styled(Image)`
  width: 4rem;
  height: 4rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const SessionThree = () => {
  return (
    <MainContainerThree>
      <MainDivTwo>
        <H3>Acelere o seu site e melhore sua Performance!</H3>
      </MainDivTwo>

      <DivFour>
        <div>
          <StyledImageTwo
            src={affiliate}
            alt={"Computador com desenhos de funções flutuando"}
          />
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
              ajudar. Utilizamos as mais avançadas técnicas de SEO técnico e as
              melhores práticas de desenvolvimento web para garantir que seu
              site não só carregue rapidamente, mas também se mantenha seguro,
              acessível e otimizado para todos os dispositivos.
            </P>
          </DivTwo>
        </DivSeven>
      </DivFour>

      <MainDivEight>
        <DivOne>
          <StyledSVGSix src={strategy} alt="Logo" />
          <P2>Melhore a Velocidade do Carregamento</P2>
        </DivOne>
        <DivOne>
          <StyledSVGSeven src={magnet} alt="Logo" />
          <P2>Otimização para Mobile</P2>
        </DivOne>
        <DivOne>
          <StyledSVGEight src={icon1} alt="Logo" />
          <P2>SEO Técnico</P2>
        </DivOne>
      </MainDivEight>
    </MainContainerThree>
  );
};

export default SessionThree;

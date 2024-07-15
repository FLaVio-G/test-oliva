import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";

import face from "../../public/facebook.svg";
import insta from "../../public/insta.svg";
import link from "../../public/link.svg";
import logoOliva from "../../public/logoOliva.svg";
import Image from "next/image";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e6e6e6;
  text-align: center;
  height: 14.1875rem;
  margin-top: 7.5rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    height: auto;
    padding: 1.25rem 0;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin-top: 3.75rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    height: auto;
  }
`;

const FooterTwo = styled.div`
  background-color: #b1b1b1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.875rem;
  padding-top: 0.625rem 0;
  font-size: 1rem;
  font-weight: 400;
  color: white;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.875rem;
    padding: 0.3125rem 0;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.75rem;
  }
`;

const FooterOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 50rem;
  height: 9.6875rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    padding: 0 1.25rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
  }
`;

const FooterThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 9rem;
  height: 3.6875rem;
  gap: 1.5rem;
`;

const FooterFor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1.25rem;
  color: #5d5d5d;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 1.125rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    align-items: center;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1rem;
  }
`;

const FooterDiv = styled.div`
  text-align: start;
  margin-top: 1.1875rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    text-align: center;
    margin-top: 0.625rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin-top: 0.625rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: auto;
    height: auto;
    align-items: center;
    justify-items: center;
  }
`;

const FooterDivTwo = styled.div`
  width: 26.0625rem;
  height: 7.8125rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 0.625rem;
    margin-right: 0.625rem;
    width: auto;
    height: auto;
  }
`;

const FooterDivSeven = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.375rem;
  height: 6rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: auto;
    height: auto;
  }
`;

const StyledFooterImageTwo = styled(Image)`
  width: 11.25rem;
  height: 2.5625rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 10rem;
    height: 2.25rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 8.75rem;
    height: 1.9375rem;
  }
`;

const StyledFooterImage = styled(Image)`
  width: 2rem;
  height: 2rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const TextFooter = styled.p`
  font-size: 0.875rem;
  color: #7f7f7f;
  font-weight: 400;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.8125rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 0.75rem;
  }
`;

const FooterDivFor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: start;
  justify-content: start;

  @media (max-width: ${BREAKPOINTS.LG}) {
    align-items: center;
    justify-content: center;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }
`;

const FooterDivFive = styled.div`
  display: flex;
  width: 20.375rem;
  height: 3.6875rem;
  margin-top: 0.8125rem;
  gap: 2.1875rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: column;
    width: auto;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

const FooterDivIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

const TextFooterOne = styled.p`
  font-size: 1rem;
  font-weight: 600;
  align-items: start;
  color: #7f7f7f;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.875rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 0.875rem;
  }
`;

const TextFooterTwo = styled.p`
  font-size: 1rem;
  font-weight: 400;
  align-items: start;
  color: #7f7f7f;

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 0.875rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 0.875rem;
  }
`;

const Footer = () => {
  const handleImageClick = (url: string | URL | undefined) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <FooterContainer>
        <FooterOne>
          <FooterDivTwo>
            <StyledFooterImageTwo
              src={logoOliva}
              width={530}
              height={528}
              alt={"office image"}
            />
            <FooterDiv>
              <TextFooter>
                A Olivas Digital é uma martech (marketing technology company),
                que há mais de 10 anos ajuda empresas de todos os portes e
                segmentos a impulsionarem suas vendas no digital.
              </TextFooter>
            </FooterDiv>
          </FooterDivTwo>

          <FooterDivSeven>
            <FooterFor>
              <p>Fale conosco</p>
            </FooterFor>

            <FooterDivFive>
              <FooterDivFor>
                <TextFooterOne>Atendimento</TextFooterOne>
                <TextFooterTwo>+55 (11) 2391-6090</TextFooterTwo>
              </FooterDivFor>
              <FooterThree>
                <TextFooterOne>Redes sociais</TextFooterOne>

                <FooterDivIcons>
                  <StyledFooterImage
                    src={face}
                    alt={"Facebook"}
                    onClick={() =>
                      handleImageClick("https://www.facebook.com/")
                    }
                  />
                  <StyledFooterImage
                    src={insta}
                    alt={"Instagram"}
                    onClick={() =>
                      handleImageClick("https://www.instagram.com/")
                    }
                  />
                  <StyledFooterImage
                    src={link}
                    alt={"LinkedIn"}
                    onClick={() =>
                      handleImageClick("https://www.linkedin.com/")
                    }
                  />
                </FooterDivIcons>
              </FooterThree>
            </FooterDivFive>
          </FooterDivSeven>
        </FooterOne>
      </FooterContainer>
      <FooterTwo>© 2014-2024 - Olivas Digital</FooterTwo>
    </>
  );
};

export default Footer;

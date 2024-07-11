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
  height: 227px;
  margin-top: 120px;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
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
  height: 46px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 400;
  color: white;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 120px;
  }
`;

const FooterOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 155px;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }
`;

const FooterThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 144px;
  height: 59px;
  gap: 24px;
`;
const FooterFor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 20px;
  color: #5d5d5d;
  font-weight: 700;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    align-items: center;
  }
`;

const FooterDiv = styled.div`
  text-align: start;
  margin-top: 19px;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: auto;
    height: auto;
    align-items: center;
    justify-items: center;
    text-align: start;
    margin-top: 19px;
  }
`;
const FooterDivTwo = styled.div`
  width: 417px;
  height: 125px;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
    width: auto;
    height: auto;
  }
`;

const FooterDivSeven = styled.div`
  display: flex;
  flex-direction: column;
  width: 326px;
  height: 96px;
`;

const StyledFooterImageTwo = styled(Image)`
  width: 180px;
  height: 41px;
`;

const StyledFooterImage = styled(Image)`
  width: 32px;
  height: 32px;
`;

const TextFooter = styled.p`
  font-size: 14px;
  color: #7f7f7f;
  font-weight: 400;
`;

const FooterDivFor = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: start;
  justify-content: start;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
  }
`;

const FooterDivFive = styled.div`
  display: flex;
  width: 326px;
  height: 59px;
  margin-top: 13px;
  gap: 35px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    width: auto;
    height: auto;
  }
`;

const FooterDivIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const TextFooterOne = styled.p`
  font-size: 16px;
  font-weight: 600;
  align-items: start;
  color: #7f7f7f;
`;
const TextFooterTwo = styled.p`
  font-size: 16px;
  font-weight: 400;
  align-items: start;
  color: #7f7f7f;
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

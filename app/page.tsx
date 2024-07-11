"use client";
import styled from "styled-components";
import Image from "next/image";

import search from "../public/search.svg";
import logoOliva from "../public/logoOliva.svg";
import officeImage from "../public/office-image.png";
import officeImageTwo from "../public/office-two-image.png";
import leads from "../public/mdi_leads.svg";
import leadsGroup from "../public/flowbite_users-group-solid.svg";
import timer from "../public/f7_timer.svg";
import midChart from "../public/mdi_chart-line.svg";
import cartPlus from "../public/bi_cart-plus-fill.svg";

import affiliate from "../public/Affiliate Marketing.svg";

import magnet from "../public/Magnet 1.svg";
import strategy from "../public/Strategy 1.svg";
import icon1 from "../public/icon.svg";
import foto1 from "../public/Foto1.png";
import foto2 from "../public/Foto2.png";
import foto3 from "../public/Foto3.png";

import {
  Dropdown,
  MenuProps,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
} from "antd";
import { BREAKPOINTS } from "./styles/Breakpoints";
import { Pagination } from "antd";
import { useState } from "react";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  width: 78.5rem;
  height: 5.375rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 50%;
  }
`;

const MenuList = styled.ul`
  flex-direction: row;
  color: #5d5d5d;
  font-size: 1.25rem;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  list-style: none;
  display: flex;
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.LG}) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: none;
`;

const StyledDropdown = styled(Dropdown)`
  .ant-dropdown-menu {
    background-color: #c6b92d;
  }

  @media (min-width: ${BREAKPOINTS.XL}) {
    display: none;
  }
`;

const ButtonOne = styled(Button)`
  background-color: #c6b92d;
  border-radius: 3.3125rem;
  border: none;
`;

const CustomButton = styled(Button)`
  width: 12.0625rem;
  height: 3.1875rem;
  border-radius: 3.3125rem;
  background-color: #c6b92d;
  color: white;
  border: none;

  &:hover {
    background-color: #45a049;
    color: white;
  }
  &:focus {
    background-color: #4caf50;
    color: white;
  }
`;

const StyledImageOne = styled(Image)`
  width: 16.875rem;
  height: 3.9375rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    width: 16.875rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 10.625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 6.25rem;
    height: auto;
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

const StyledImageFive = styled(Image)`
  width: 346px;
  height: 185px;
`;

const ButtonTwo = styled(Button)`
  width: 17.6875rem;
  height: 4rem;
  border-radius: 3.125rem;
  background-color: #c6b92d;
  color: white;
  margin-top: 1.25rem;
`;

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

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const Div = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: #c6b92d;
`;

const H5 = styled.span`
  font-size: 38px;
  font-weight: 500;
  color: #5d5d5d;
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

const P2 = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #7f7f7f;
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

const MainContainerTwo = styled.div`
  display: flex;
  flex-direction: column;
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
const MainDivThree = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 30px;
  border-radius: 32px;
  box-shadow: 0px 4px 8px 0px #8585851a, 0px 14px 14px 0px #85858517,
    0px 32px 19px 0px #8585850d, 0px 56px 23px 0px #85858503,
    0px 88px 25px 0px #85858500;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const DivThree = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 30px;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const MainDivFour = styled.div`
  width: 697px;
  height: 464px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: auto;
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

const MainDivSix = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 24px;
  gap: 16px;
`;

const MainDivSeven = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

const H3 = styled.h3`
  font-size: 2.8125rem;
  font-weight: 600;
  color: #6a0f65;
`;

const MainDivEight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  gap: 88px;
`;

const DivFour = styled.div`
  display: flex;
  flex-direction: row;
  width: 1043px;
  height: auto;
  margin-top: 80px;
  gap: 24px;
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

const DivSeven = styled.div`
  width: 588px;
  height: 308px;
`;

const DivTwo = styled.div`
  margin-top: 24px;
`;

const ButtonThree = styled(Button)`
  width: 173px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid;
  color: #c6b92d;
  border-color: #c6b92d;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 394px;
  height: 467px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 16px;
  border-radius: 24px;
  box-shadow: 0px 4px 8px 0px #8585851a, 0px 14px 14px 0px #85858517,
    0px 32px 19px 0px #8585850d, 0px 56px 23px 0px #85858503,
    0px 88px 25px 0px #85858500;
`;

const CardDivOne = styled.div`
  margin-top: 24px;
`;
const CardDivTwo = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
`;

const H6 = styled.h6`
  font-size: 25px;
  font-weight: 500;
`;

const P3 = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const DivNine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;

const DivTeen = styled.div`
  margin-top: 37px;
`;

const DivEleven = styled.div`
  display: flex;
  padding-top: 24px;
  gap: 24px;
  flex-direction: row;
  width: 1253px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: auto;
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

const ButtonFive = styled(Button)`
  width: 176px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid;
  color: white;
  border-color: #c6b92d;
  background-color: #c6b92d;
  font-weight: 700;
  font-size: 20px;

  &:hover {
    color: black;
  }
  &:focus {
    color: black;
  }
`;

const YellowDot = styled.div`
  width: 24px;
  height: 24px;
  background-color: #c6b92d;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 4px;
  cursor: pointer;
  &:focus {
    outline: none; /* Remove a borda azul ao focar */
  }
`;

const StyledPagination = styled(Pagination)`
  .ant-pagination-item {
    border: none;
    background: transparent;
  }

  .ant-pagination-item a {
    color: transparent; /* Torna o texto transparente para esconder a numeração */
  }

  .ant-pagination-item-active {
    /* background-color: #c6b92d; 
    border-color: #c6b92d;  */
  }

  .ant-pagination-item-active a {
    color: white;
  }

  /* .ant-pagination-item-ellipsis {
    color: transparent; 
  }

  .ant-pagination-item:hover {
    background-color: rgba(198, 185, 45, 0.5); 
  } */

  .ant-pagination-prev,
  .ant-pagination-next {
    display: none;
  }
`;

const MainContainerFive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 870px;
  height: 898;
  padding-top: 240px;
`;

const DivFormOne = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const DivFormTwo = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 24px;
`;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish = (values: FieldType) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const StyledForm = styled(Form)`
  margin-top: 30px;
`;

const StyledFormItem = styled(Form.Item)`
  flex: 1;
  padding-top: 24px;

  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none; /* Ocultar o asterisco antes do label */
  }

  .ant-form-item-label > label {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #5d5d5d;
  }
`;

const SubmitButton = styled(Button)`
  margin-left: 8px;
`;

const { Option } = Select;

const StyledTextArea = styled(Input.TextArea)`
  width: 100%;
`;

const StyledCheckbox = styled(Checkbox)`
  display: flex;
  align-items: start;
  margin: 0px;
`;

const DivFormThree = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ButtonSeven = styled(Button)`
  width: 360px;
  height: 64px;
  border-radius: 3.3125rem;
  background-color: #c6b92d;
  color: white;
  border: none;

  &:hover {
    background-color: #45a049;
    color: white;
  }
  &:focus {
    background-color: #4caf50;
    color: white;
  }
`;

const DivFormSeven = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 56px;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled(Input)`
  border: 1.5px solid #c6b92d;
  margin-top: 8px;
  border-radius: 8px;
  width: 423px;
  height: 56px;
  font-size: 20px;
  &:hover {
    border-color: #c6b92d;
  }
  &:focus {
    border-color: #c6b92d;
  }
`;

const StyledSelect = styled(Select)`
  border: 1.5px solid #c6b92d;
  margin-top: 8px;
  border-radius: 8px;
  width: 50px;
  height: 56px;
  font-size: 20px;
`;

const StyledInputTwo = styled(Input)`
  display: flex;
  border: 1.5px solid #c6b92d;
  border-radius: 8px;
  font-size: 20px;
  height: 156px;
  width: 870px;
  &:hover {
    border-color: #c6b92d;
  }
  &:focus {
    border-color: #c6b92d;
  }

  height: 156px;
`;

const StyledFormItemTwo = styled(Form.Item)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .ant-form-item-label > label {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #5d5d5d;
  }

  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none;
  }
`;

const DivFormEight = styled.div`
  display: flex;
  width: 100%;
`;

const StyledFormItemThree = styled(Form.Item)`
  display: flex;
  width: 100%;
  :where(&.ant-col-offset-8) {
    margin-inline-start: 0;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #e6e6e6;
  text-align: center;
  height: 227px;
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
`;

const FooterOne = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 155px;
`;

const FooterThree = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const FooterFor = styled.div`
  background-color: lightblue; /* Apenas para visualização */
`;
const FooterFive = styled.div``;
const FooterDiv = styled.div`
  text-align: start;
  margin-top: 19px;
`;
const FooterDivTwo = styled.div`
  width: 417px;
  height: 125px;
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

const FooterDivFor = styled.div``;

const FooterDivFive = styled.div`
  display: flex;
  width: 326px;
  height: 59px;
  gap: 35px;
  flex-direction: row;
`;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Sobre o teste
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        SEO
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Perfomance
      </a>
    ),
  },

  {
    key: "4",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Blog
      </a>
    ),
  },

  {
    key: "5",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Contato
      </a>
    ),
  },

  {
    key: "6",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Procurar
      </a>
    ),
  },
];
export default function Home() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <StyledFormItem name="prefix" noStyle>
      <StyledSelect defaultValue="86">
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </StyledSelect>
    </StyledFormItem>
  );

  const [componentDisabled, setComponentDisabled] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledImageOne src={logoOliva} alt="Logo" />
          <MenuList>
            <MenuItem>Sobre o teste</MenuItem>
            <MenuItem>SEO</MenuItem>
            <MenuItem>Perfomance</MenuItem>
            <MenuItem>Blog</MenuItem>
            <MenuItem>
              <Image
                src={search}
                width={28}
                height={28}
                placeholder="empty"
                alt={""}
              />
            </MenuItem>
            <CustomButton>Pesquisar</CustomButton>
          </MenuList>
        </Nav>
        <StyledDropdown menu={{ items }} placement="bottomLeft">
          <ButtonOne>Menu</ButtonOne>
        </StyledDropdown>
      </HeaderContainer>
      <Main>
        <MainContainerOne>
          <MainDivOne>
            <H1>Teste de desenvolvimento</H1>
            <H2>Front-end Next.JS</H2>
            <P>
              Bem-vindo ao nosso desafio de codificação React! Este teste avalia
              suas habilidades em desenvolver aplicações web interativas com
              React. Sua tarefa é construir uma aplicação que interaja com APIs
              externas e exiba dados de forma clara e eficiente. Estamos
              ansiosos para ver sua criatividade e qualidade de código em
              prática
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

        <MainContainerTwo>
          <MainDivTwo>
            <H1>SEO, ou otimização</H1>
          </MainDivTwo>
          <MainDivThree>
            <MainDivFour>
              <P>
                É uma estratégia crucial para melhorar a visibilidade e o
                ranking de um site nos resultados de pesquisa orgânica de
                motores de busca como Google, Bing e Yahoo. A prática de SEO
                envolve uma série de técnicas e metodologias que visam otimizar
                aspectos internos e externos de um website para torná-lo mais
                atrativo
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
                  oferecer a melhor experiência possível aos seus usuários?
                  Nossa equipe de especialistas em otimização de sites está aqui
                  para ajudar. Utilizamos as mais avançadas técnicas de SEO
                  técnico e as melhores práticas de desenvolvimento web para
                  garantir que seu site não só carregue rapidamente, mas também
                  se mantenha seguro, acessível e otimizado para todos os
                  dispositivos.
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

        <MainContainerThree>
          <MainDivTwo>
            <H3>Últimas do Blog</H3>
          </MainDivTwo>
          <DivEleven>
            <CardDiv>
              <StyledImageFive
                src={foto1}
                alt={"Computador com desenhos de funções flutuando"}
              ></StyledImageFive>
              <CardDivOne>
                <H6>Como aumentar em mais de 700% a captação de leads</H6>
                <CardDivTwo>
                  <P3>
                    Veja o que fizemos para aumentar em mais de 700% a captação
                    de lead
                  </P3>
                </CardDivTwo>
              </CardDivOne>
              <ButtonThree>Leia mais </ButtonThree>
            </CardDiv>

            <CardDiv>
              <StyledImageFive
                src={foto2}
                width={346}
                height={185}
                alt={"Computador com desenhos de funções flutuando"}
              ></StyledImageFive>
              <CardDivOne>
                <H6>Como aumentar em mais de 700% a captação de leads</H6>
                <CardDivTwo>
                  <P3>
                    Veja o que fizemos para aumentar em mais de 700% a captação
                    de lead
                  </P3>
                </CardDivTwo>
              </CardDivOne>
              <ButtonThree>Leia mais </ButtonThree>
            </CardDiv>

            <CardDiv>
              <StyledImageFive
                src={foto3}
                width={346}
                height={185}
                alt={"Computador com desenhos de funções flutuando"}
              ></StyledImageFive>
              <CardDivOne>
                <H6>Como aumentar em mais de 700% a captação de leads</H6>
                <CardDivTwo>
                  <P3>
                    Veja o que fizemos para aumentar em mais de 700% a captação
                    de lead
                  </P3>
                </CardDivTwo>
              </CardDivOne>
              <ButtonThree>Leia mais </ButtonThree>
            </CardDiv>
          </DivEleven>
          <DivNine>
            <StyledPagination
              defaultCurrent={1}
              total={30}
              itemRender={(page, type, originalElement) => {
                if (type === "page") {
                  return <YellowDot />;
                } else if (type === "prev" || type === "next") {
                  return null;
                }
                return originalElement;
              }}
            />
            <DivTeen>
              <ButtonFive>Veja Mais</ButtonFive>
            </DivTeen>
          </DivNine>
        </MainContainerThree>

        <MainContainerFive>
          <DivFormOne>
            <Div>
              Entre em contato e <H5>receba atendimento</H5>
            </Div>
          </DivFormOne>

          <DivFormTwo>
            <P3>
              Por favor, preencha o formulário abaixo com suas informações e a
              sua mensagem. Nossa equipe entrará em contato com você o mais
              breve possível.
            </P3>
          </DivFormTwo>

          <StyledForm
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true, prefix: "86" }}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <DivFormThree>
              <StyledFormItem
                name="username"
                label="Nome completo"
                layout="vertical"
                rules={[{ required: true }]}
                labelCol={{ span: 20 }}
                wrapperCol={{ span: 24 }}
              >
                <StyledInput />
              </StyledFormItem>

              <StyledFormItem
                label="E-mail corporativo"
                name="email"
                layout="vertical"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <StyledInput />
              </StyledFormItem>
            </DivFormThree>

            <DivFormThree>
              <StyledFormItem
                name="phone"
                label="Telefone"
                layout="vertical"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <StyledInput />
              </StyledFormItem>

              <StyledFormItem
                label="Qual sua função na empresa"
                name="function"
                layout="vertical"
                rules={[{ required: true }]}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
              >
                <StyledSelect>
                  <Option value="demo">Demo Option</Option>
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </StyledSelect>
              </StyledFormItem>
            </DivFormThree>
          </StyledForm>
          <DivFormSeven>
            <StyledFormItemTwo
              label="Mensagem"
              name="textArea"
              layout="vertical"
              rules={[{ required: true }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <StyledInputTwo />
            </StyledFormItemTwo>
          </DivFormSeven>
          <DivFormEight>
            <StyledFormItemThree wrapperCol={{ offset: 8, span: 16 }}>
              <StyledCheckbox
                checked={componentDisabled}
                onChange={(e) => setComponentDisabled(e.target.checked)}
              >
                Ao informar meus dados, eu concordo com a Política de
                Privacidade e concordo em receber comunicações.
              </StyledCheckbox>
            </StyledFormItemThree>
          </DivFormEight>
          <ButtonSeven>Receber atendimento</ButtonSeven>
        </MainContainerFive>
      </Main>
      <FooterContainer>
        <FooterOne>
          <FooterDivTwo>
            <StyledFooterImageTwo
              src={officeImage}
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
                <p>Atendimento</p>
                <p>93981218330</p>
              </FooterDivFor>
              <FooterThree>
                <StyledFooterImage
                  src={officeImage}
                  width={530}
                  height={528}
                  alt={"office image"}
                ></StyledFooterImage>
                <StyledFooterImage
                  src={officeImage}
                  width={530}
                  height={528}
                  alt={"office image"}
                ></StyledFooterImage>
                <StyledFooterImage
                  src={officeImage}
                  width={530}
                  height={528}
                  alt={"office image"}
                ></StyledFooterImage>
              </FooterThree>
            </FooterDivFive>
          </FooterDivSeven>
        </FooterOne>
        <FooterTwo>© 2014-2024 - Olivas Digital</FooterTwo>
      </FooterContainer>
    </>
  );
}

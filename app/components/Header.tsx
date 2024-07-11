import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import Image from "next/image";

import search from "../../public/search.svg";
import logoOliva from "../../public/logoOliva.svg";

import { Dropdown, MenuProps, Button } from "antd";

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

const A = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  padding-bottom: 0.1rem;

  &:hover {
    text-decoration: underline;
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

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <StyledImageOne src={logoOliva} alt="Logo" />
          <MenuList>
            <MenuItem>
              <A href="#session-one">Sobre o teste</A>
            </MenuItem>
            <MenuItem>
              <A href="#session-two">SEO</A>
            </MenuItem>
            <MenuItem>
              <A href="#session-three">Performance</A>
            </MenuItem>
            <MenuItem>
              <A href="#session-four">Blog</A>
            </MenuItem>
            <MenuItem>
              <A href="#session-five">Procurar</A>
            </MenuItem>
            <CustomButton>Pesquisar</CustomButton>
          </MenuList>
        </Nav>
        <StyledDropdown menu={{ items }} placement="bottomLeft">
          <ButtonOne>Menu</ButtonOne>
        </StyledDropdown>
      </HeaderContainer>
    </>
  );
};

export default Header;

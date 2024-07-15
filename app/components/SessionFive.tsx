import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import { Input, Form, Checkbox, Button, Select } from "antd";

import { useState } from "react";

const StyledInputTwo = styled(Input)`
  display: flex;
  border: 0.09375rem solid #c6b92d;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  height: 9.75rem;
  width: 54.375rem;

  &:hover {
    border-color: #c6b92d;
  }

  &:focus {
    border-color: #c6b92d;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    height: 9.75rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 16.5625rem;
    height: 9.75rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.5625rem;
    height: 9.75rem;
  }
`;

const StyledFormItemTwo = styled(Form.Item)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

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
  align-items: center;
  justify-content: space-between; // Alinha os itens de forma que ocupem o espaço total
`;

const StyledCheckbox = styled(Checkbox)`
  flex: 1;
  display: flex;
  align-items: start;
  margin: 0;
  font-size: 18px;
`;

const DivFormThree = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0;
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    flex-direction: column;
    width: 100%;
    gap: 34px;
    margin-bottom: 34px;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.5625rem;
    height: auto;
    flex-direction: column;
    margin: 0;
    gap: 0px;
    margin-bottom: 0px;
  }
`;

const ButtonSeven = styled(Button)`
  width: 22.5rem;
  height: 4rem;
  border-radius: 3.125rem;
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

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.875rem;
    height: auto;
  }
`;

const DivFormSeven = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 0;
  }
`;

const Div = styled.div`
  font-size: 2.375rem;
  font-weight: 500;
  color: #c6b92d;
`;

const H5 = styled.span`
  font-size: 2.375rem;
  font-weight: 500;
  color: #5d5d5d;
`;

const P3 = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
`;

const MainContainerFive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 54.375rem;
  margin-top: 126px;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    height: auto;
    margin-top: 0px;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    justify-content: center;
    align-items: center;
  }
`;

const DivFormOne = styled.div`
  display: flex;
  padding-top: 64px;
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 15.625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 2rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 15.625rem;
    height: auto;
    margin-top: 0;
  }
`;

const DivFormTwo = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  margin-top: 1.5rem;
`;

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const StyledForm = styled(Form)`
  margin-top: 64px;
`;

const StyledInput = styled(Input)`
  border: 0.09375rem solid #c6b92d;
  border-radius: 0.5rem;
  width: 26.4375rem;
  height: 3.5rem;
  font-size: 1.25rem;

  &:hover {
    border-color: #c6b92d;
  }

  &:focus {
    border-color: #c6b92d;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 10.625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 15.625rem;
    height: auto;
    margin-top: 0;
  }
`;

const StyledFormItem = styled(Form.Item)`
  flex: 1;
`;

const DivSeven = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 2.375rem;
  font-weight: 500;
  gap: 1rem;
  color: #5d5d5d;
  white-space: nowrap;

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 50%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
    align-items: center;
    white-space: normal;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 50%;
    height: auto;
  }
`;

const StyledText = styled.span`
  font-size: 2.375rem;
  font-weight: 500;
  white-space: nowrap;

  &.highlight {
    color: #c6b92d;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    font-size: 2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1.75rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 1.5rem;
  }
`;

const { Option } = Select;

const StyledSelect = styled(Select)`
  width: 26.4375rem;
  height: 2.5rem;
  height: 3.5rem;
  font-size: 1.25rem;
  border: 0.09375rem solid #c6b92d;
  border-radius: 0.5rem;

  .ant-select-selector {
    height: 40px;
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 15.625rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 13.9375rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 250px !important;
    height: auto;
    margin-top: 0;
  }
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  white-space: nowrap;
  font-weight: 700;
  line-height: 1.5;
  color: #5d5d5d;
  display: block;
`;

const SessionFive = () => {
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
      <MainContainerFive>
        <DivFormOne>
          <DivSeven>
            <StyledText>Entre em contato e</StyledText>
            <StyledText className="highlight">receba atendimento</StyledText>
          </DivSeven>
        </DivFormOne>

        <DivFormTwo>
          <P3>
            Por favor, preencha o formulário abaixo com suas informações e a sua
            mensagem. Nossa equipe entrará em contato com você o mais breve
            possível.
          </P3>
        </DivFormTwo>

        <StyledForm
          name="basic"
          initialValues={{ remember: true, prefix: "86" }}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <DivFormThree>
            <StyledFormItem
              name="username"
              label={<StyledLabel>Nome completo</StyledLabel>}
              layout="vertical"
            >
              <StyledInput />
            </StyledFormItem>

            <StyledFormItem
              label={<StyledLabel>E-mail corporativo</StyledLabel>}
              name="email"
              layout="vertical"
            >
              <StyledInput />
            </StyledFormItem>
          </DivFormThree>

          <DivFormThree>
            <StyledFormItem
              name="phone"
              label={<StyledLabel>Telefone</StyledLabel>}
              layout="vertical"
            >
              <StyledInput />
            </StyledFormItem>

            <StyledFormItem
              label={<StyledLabel>Qual sua função na empresa</StyledLabel>}
              name="function"
              layout="vertical"
            >
              <StyledSelect>
                <Option value="demo">UX</Option>
                <Option value="option1">Front</Option>
                <Option value="option2">Back</Option>
              </StyledSelect>
            </StyledFormItem>
          </DivFormThree>
        </StyledForm>
        <DivFormSeven>
          <StyledFormItemTwo
            label={<StyledLabel>Mensagem</StyledLabel>}
            name="textArea"
            layout="vertical"
          >
            <StyledInputTwo />
          </StyledFormItemTwo>
        </DivFormSeven>
        <DivFormEight>
          <StyledFormItemThree>
            <StyledCheckbox
              checked={componentDisabled}
              onChange={(e) => setComponentDisabled(e.target.checked)}
            >
              Ao informar meus dados, eu concordo com a Política de Privacidade
              e concordo em receber comunicações.
            </StyledCheckbox>
          </StyledFormItemThree>
        </DivFormEight>
        <ButtonSeven>Receber atendimento</ButtonSeven>
      </MainContainerFive>
    </>
  );
};

export default SessionFive;

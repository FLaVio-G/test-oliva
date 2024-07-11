import styled from "styled-components";
import { BREAKPOINTS } from "../styles/Breakpoints";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useState } from "react";

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

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 16.5625rem;
    height: 156px;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 16.5625rem;
    height: 156px;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.5625rem;
    height: 156px;
  }
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
  gap: 24px;
  margin-top: 24px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 16.5625rem;
    height: auto;
    flex-direction: column;
    margin-top: 0px;
  }
`;

const ButtonSeven = styled(Button)`
  width: 360px;
  height: 64px;
  border-radius: 50px;
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
  margin-top: 56px;
  align-items: center;
  justify-content: center;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 0px;
  }
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

const P3 = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const MainContainerFive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 870px;

  padding-top: 240px;

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

const DivFormOne = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`;

const FooterDivText = styled.div``;

const FooterFive = styled.div``;

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

const SubmitButton = styled(Button)`
  margin-left: 8px;
`;

const onFinish = (values: FieldType) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const StyledForm = styled(Form)`
  margin-top: 30px;
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

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 250px;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 223px;
    height: auto;
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 250px;
    height: auto;
    margin-top: 0px;
  }
`;

const StyledFormItem = styled(Form.Item)`
  flex: 1;
  padding-top: 24px;

  .ant-form-item-label
    > label.ant-form-item-required:not(
      .ant-form-item-required-mark-optional
    )::before {
    display: none;
  }

  .ant-form-item-label > label {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    color: #5d5d5d;
  }
`;

const { Option } = Select;

const StyledSelect = styled(Select)`
  border: 1.5px solid #c6b92d;
  margin-top: 8px;
  border-radius: 8px;
  width: 50px;
  height: 56px;
  font-size: 20px;

  @media (max-width: ${BREAKPOINTS.LG}) {
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
  }
  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-top: 0px;
  }
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
          <Div>
            Entre em contato e <H5>receba atendimento</H5>
          </Div>
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

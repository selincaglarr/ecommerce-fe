import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex-column;
  align-items: center;
  justify-content: center;
`;

const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://beyyoglu.akinoncdn.com/cms/2022/03/10/26201e59-f4d1-4990-baa7-9243cca78684.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  &:focus {
    border: 0.5px solid black;
    outline-style: double;
    outline-color: #721813;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  display: flex;
  width: 30%;
  align-items: center;
  text-align: center;
  border: none;
  padding: 15px 20px;
  background-color: #c8b3c2;
  color: white;
  cursor: pointer;
`;

const AgreementLabel = styled.label`
  margin: 5px;
  display: flex;
  color: #721813;
  align-items: center;
`;

const AgreementInput = styled.input`
  margin: 5px;
  display: flex;
`;

const AgreementSpan = styled.span`
  margin: 5px;
  display: flex;
`;

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Navbar />
      <RegisterContainer>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              <AgreementLabel>
                <AgreementInput
                  type="checkbox"
                  onChange={() => {
                    setIsChecked(!isChecked);
                  }}
                />
                <AgreementSpan
                  className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
                  // This element is purely decorative so
                  // we hide it for screen readers
                  aria-hidden="true"
                />
                <b>PRIVACY POLICY</b>
              </AgreementLabel>
              <AgreementSpan>
                By creating an account, I consent to the processing of my
                personal data in accordance with the
              </AgreementSpan>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </RegisterContainer>
    </Container>
  );
};

export default Register;

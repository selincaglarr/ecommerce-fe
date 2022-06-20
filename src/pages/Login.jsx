import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex-column;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("http://4.bp.blogspot.com/-qTDnuSapDSA/UwM-pEkAkiI/AAAAAAAADH4/N2oZqUJwi4k/s1600/cover_woman.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 45%;
  border: none;
  padding: 15px 20px;
  background-color: #c8b3c2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LinkP = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonContanier = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Navbar />
      <LoginContainer>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <Error>Something went wrong...</Error>}
            <ButtonContanier>
              <Button onClick={handleClick} disabled={isFetching}>
                LOGIN
              </Button>
              
              <Button ><Link to="/register" style={{ textDecoration: "none" }}>CREATE A NEW ACCOUNT</Link></Button>
            </ButtonContanier>

            <LinkP>DO NOT YOU REMEMBER THE PASSWORD?</LinkP>
          </Form>
        </Wrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;

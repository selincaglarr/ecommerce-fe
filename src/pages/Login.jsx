import styled from "styled-components";
import Navbar from "../components/Navbar";


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
  background-color: #C8B3C2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ButtonContanier = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Login = () => {
  return (
    <Container>
      <Navbar />
      <LoginContainer>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <ButtonContanier>
              <Button>LOGIN</Button>
              <Button>CREATE A NEW ACCOUNT</Button>
            </ButtonContanier>

            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          </Form>
        </Wrapper>
      </LoginContainer>
    </Container>
  );
};

export default Login;

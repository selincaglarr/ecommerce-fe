import React from 'react' 
import styled from "styled-components";


const Container = styled.div`
  height: 30px;
  background-color: #C8B3C2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  fontsize: 12;
`;

const Announcement = () => {
  return (
    <Container>
      Super Deal Free Shipping on Orders Over $50
    </Container>
  );
};

export default Announcement;

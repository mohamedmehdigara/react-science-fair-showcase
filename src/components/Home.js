import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
`;

const Button = styled(Link)`
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Welcome to Science Fair Showcase</Title>
      <Subtitle>Explore innovative projects and unleash your scientific curiosity!</Subtitle>
      <ButtonContainer>
        <Button to="/projects">View Projects</Button>
        <Button to="/submit">Submit Project</Button>
        <Button to="/judge">Judge Projects</Button>
      </ButtonContainer>
      {/* Add more content, sections, or features as needed */}
    </HomeContainer>
  );
}

export default Home;

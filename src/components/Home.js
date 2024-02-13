import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  /* Styles for home container */
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to Science Fair Showcase</h1>
      <Link to="/projects">View Projects</Link>
      <Link to="/submit">Submit Project</Link>
      <Link to="/judge">Judge Projects</Link>
    </HomeContainer>
  );
}

export default Home;

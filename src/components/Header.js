import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  /* Styles for header container */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/submit">Submit Project</Link></li>
          <li><Link to="/judge">Judge Projects</Link></li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;

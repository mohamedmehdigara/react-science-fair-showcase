import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <Logo>Science Fair Showcase</Logo>
        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/submit">Submit Project</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/judge">Judge Projects</NavLink>
          </NavItem>
        </NavMenu>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;

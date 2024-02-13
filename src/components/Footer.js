import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>© 2024 Science Fair Showcase</FooterText>
        <div>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;

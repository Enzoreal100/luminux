import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      align-items: center;
    }
    footer p {
      margin-bottom: 1rem;
    }
    footer nav {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    footer nav a {
      font-size: 14px;
    }
  }
`;

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterInfo = styled.p`
  font-size: 16px;
`;

const FooterNav = styled.nav`
  display: flex;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.background};
  text-decoration: none;

  &:hover {
    animation: zoom 0.3s ease-in-out forwards;
  }

  @keyframes zoom {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>&copy; 2023 LuminUX</FooterInfo>
      <FooterNav>
        <FooterLink href="https://github.com/luminux-dev" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
        <FooterLink href="https://twitter.com/luminux_dev" target="_blank" rel="noopener noreferrer">Twitter</FooterLink>
      </FooterNav>
    </FooterContainer>
  );
};

export default Footer;


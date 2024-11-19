import styled, { createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from "react";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
`;

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.5rem;
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 50px;
    transition:
        background 0.3s ease-in-out,
        height 0.3s ease-in-out;
    z-index: 1000;

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    &.scrolled {
        height: 4.5rem;
        background: ${props => props.theme.colors.secondary};
    }
`;

const Image = styled.img`
    height: 80%;
    margin-left: 10px;
`;

const Nav = styled.nav`
    display: flex;
    gap: 10px;
    
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
`;
const ContactUsButton = styled(Button)`
    font-weight: bold;
    margin-right: 10px;
    background: linear-gradient(
        90deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
    );
    color: ${props => props.theme.colors.background};
    border-radius: 10px;
    padding: 10px;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(
            90deg,
            ${props => props.theme.colors.secondary} 0%,
            ${props => props.theme.colors.primary} 50%,
            ${props => props.theme.colors.secondary} 100%
        );
        transition:
            background 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
`;

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <HeaderContainer className={scrolled ? 'scrolled' : ''}>
            <Image src="https://via.placeholder.com/150" alt="placeholder image" />
            <GlobalStyle/>
            <Nav>
                <Button>Home</Button>
                <Button>About</Button>
                <Button>Portfolio</Button>
            </Nav>
            <ContactUsButton>Contact Us</ContactUsButton>
        </HeaderContainer>
    );
}

export default Header;


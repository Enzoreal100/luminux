import styled, { createGlobalStyle } from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const GlobalStyle = createGlobalStyle`
    
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
    &.scrolled {
        height: 4.5rem;
        background: ${props => props.theme.colors.secondary};
        }
    

    @media (prefers-reduced-motion: reduce) {
        transition: none;
    }

    @media (max-width: 768px) {
        height: 5rem;
    }
`;  

const Image = styled.img`
    height: 80%;
`;

const Nav = styled.nav`
    display: flex;
    gap: 10px;
    margin-left: 75px;
`;

const Button = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const ContactUsButton = styled(Button)`
margin-right: 10px;
    font-weight: bold;
    background: linear-gradient(
        90deg,
        ${props => props.theme.colors.primary} 0%,
        ${props => props.theme.colors.secondary} 100%
    );
    color: ${props => props.theme.colors.background};
    border-radius: 10px;
    padding: 10px;
    transition: 
        background 0.3s ease-in-out,
        transform 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(
            90deg,
            ${props => props.theme.colors.secondary} 0%,
            ${props => props.theme.colors.primary} 40%,
            ${props => props.theme.colors.secondary} 100%
        );
        transform: scale(1.1);
        transition: 
            background 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            transform 0.3s ease-in-out;
    }
`;

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();

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
            <Image src="https://res.cloudinary.com/dpcqjs6uc/image/upload/v1732389109/jeu6xpm8mqg9zissf5i7.png" alt="LuminUX Logo" />
            <GlobalStyle/>
            <Nav>
                <Button to="/">Home</Button>
                <Button to="/about">{t('aboutBtn')}</Button>
                <Button to='/portfolio'>{t('portfolioBtn')}</Button>
            </Nav>
            <ContactUsButton to='https://wa.me/5511961792040?text=Tenho%20interesse%20em%20comprar%20seu%20carro' target="_blank" rel="noopener noreferrer" >{t('contactBtn')}</ContactUsButton>
        </HeaderContainer>
    );
}

export default Header;



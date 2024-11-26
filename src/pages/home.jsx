import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap } from "gsap";
import theme from "../theme.jsx";
import logoImage from "../assets/logo.png";
import { useTranslation } from "react-i18next";


const HomeContainer = styled.div`
  min-height: 100%;
`
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 35vh;
  }

  @media (max-width: 480px) {
    height: 100vh;
  }
`;

const Logo = styled.img`
  width: 50%;
  opacity: 0;
  margin: 8rem 0 0 0;
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 64px;
  font-weight: 400;
  position: relative;
  text-align: center;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 480px) {
    font-size: 44px;
  }
`;

const HeroText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ArrowDown = styled.div`
  width: 24px;
  height: 24px;
  border: solid ${(props) => props.theme.colors.primary};
  border-width: 0 2px 2px 0;
  display: inline-block;
  margin-top: 2rem;
  opacity: 0;
  transform: translateY(20px) rotate(45deg);

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 60px;
  font-weight: 400;
  padding: 0.5rem;
`;

const SectionText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  font-weight: 400;
  padding: 0.5rem;
`;


const Hero = ({onAnimationComplete}) => {
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete:onAnimationComplete,
    });

    
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power4.out",
    })
      
      .to(
        logoRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power4.inOut",
          onComplete: () => {
            logoRef.current.style.display = "none";
          },
        },
        "+=0.5"
      )
      
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.5"
      )
      
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      })
      
      .to(
        arrowRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        })

        .call(() => {
          gsap.to(arrowRef.current, { 
            y: 10, 
            repeat: -1, 
            yoyo: true, 
            duration: 1, 
            ease: "power2.inOut" 
          });
        });
  }, [onAnimationComplete]);

  return (
    <HeroSection>
      <Logo ref={logoRef} src={logoImage} alt="LuminUX Logo" />
      <HeroTitle ref={titleRef}>{t('title')}</HeroTitle>
      <HeroText ref={textRef}>{t('text')}</HeroText>
      <ArrowDown ref={arrowRef} />
    </HeroSection>
  );
};


function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const { t } = useTranslation();

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
      <Hero onAnimationComplete={handleAnimationComplete} />
      {animationComplete && (
        <>
      <Section>
        <SectionTitle>{t('what')}</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </SectionText>
      </Section>
      <Section>
        <SectionTitle>{t('how')}</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </SectionText>
      </Section>
      </>
    )}
      </HomeContainer>
    </ThemeProvider>
  );
}

export default Home;


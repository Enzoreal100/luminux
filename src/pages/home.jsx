import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap } from "gsap";
import theme from "../theme.jsx";
import Header from "../components/Header.jsx";

const HomeContainer = styled.div`
  min-height: 100vh;
`
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 33vh;
  padding: 4rem 0 0 0;
  background: ${(props) => props.theme.colors.background};
  overflow: hidden;

  @media (max-width: 768px) {
    height: 35vh;
  }

  @media (max-width: 480px) {
    height: 15vh;
  }
`;

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  font-size: 64px;
  font-weight: 400;
  position: relative;
  text-align: center;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 48px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const HeroText = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 24px;
  font-weight: 400;
  margin-top: 1rem;
  text-align: center;
  opacity: 0;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const RandomLine = styled.div`
  position: absolute;
  width: 1rem;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  opacity: 0;

  @media (max-width: 768px) {
    width: 3px;
  }

  @media (max-width: 480px) {
    width: 2px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6rem 2rem 6rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 32px;
  font-weight: 400;
  padding: 0.5rem;
`;

const SectionText = styled.p`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;
  padding: 0.5rem;
`;

const Hero = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Linhas descendo todas de uma vez
    tl.set(linesRef.current, { opacity: 1, y: -200 })
      .to(linesRef.current, {
        y: "35vh",
        duration: 1,
        ease: "power4.out",
        stagger: 0, // Sem atraso entre as animações
      })
      .set(linesRef.current, { opacity: 0 });

    // Aparecimento do título e subtítulo
    tl.to(
      titleRef.current,
      { opacity: 1, y: 0, duration: 1, ease: "power4.out" },
      "-=0.2"
    )
      .to(
        textRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power4.out" },
        "-=0.3"
      );
  }, []);

  // Gerar linhas que cubram a largura inteira da tela
  const generateFullWidthLines = (spacing) => {
    const lineCount = Math.ceil(window.innerWidth / spacing); // Calcular o número de linhas com base no espaçamento
    return Array.from({ length: lineCount }, (_, index) => (
      <RandomLine
        key={`line-${index}`}
        style={{
          left: `${index * spacing}px`, // Posicionamento uniforme
        }}
      />
    ));
  };

  return (
    <HeroSection>
      <HeroContainer>
        {generateFullWidthLines(50).map((line, index) =>
          React.cloneElement(line, { ref: (el) => (linesRef.current[index] = el) })
        )}
        <HeroTitle ref={titleRef}>Welcome to LuminUX</HeroTitle>
        <HeroText ref={textRef}>Let the concepts become real</HeroText>
      </HeroContainer>
    </HeroSection>
  );
};




function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeContainer>
      <Header />
      <Hero />
      <Section>
        <SectionTitle>What is LuminUX?</SectionTitle>
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
        <SectionTitle>How does it work?</SectionTitle>
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
      </HomeContainer>
    </ThemeProvider>
  );
}

export default Home;


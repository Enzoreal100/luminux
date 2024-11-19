import styled, { ThemeProvider } from "styled-components";
import theme from "../theme.jsx";
import Header from "../components/Header.jsx";

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://picsum.photos/2000/3000") center/cover fixed no-repeat;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 64px;
`;

const HeroText = styled.p`
  color: white;
  font-size: 24px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HeroSection>
        <HeroTitle>Welcome to LuminUX</HeroTitle>
        <HeroText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </HeroText>
      </HeroSection>
      <Section>
        <SectionTitle>What is LuminUX?</SectionTitle>
        <SectionText>
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
        </SectionText>
      </Section>
    </ThemeProvider>
  );
}

export default Home;


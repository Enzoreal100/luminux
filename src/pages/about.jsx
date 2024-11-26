import styled, { createGlobalStyle } from "styled-components";
import Text from "../components/Text.jsx";
import TextContainer from "../components/TextContainer.jsx";
import Title from "../components/Title.jsx";
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import TextDark from "../components/TextDark.jsx";
import { useTranslation } from "react-i18next";

const GlobalStyle = createGlobalStyle`
  @media (max-width: 768px) {
    .reverse {
      flex-direction: column;
    }

    .about__container {
      padding: 1rem;
    }
  }

  @media (max-width: 480px) {
    .reverse {
      flex-direction: column-reverse;
    }

    .about__image {
      width: 100%;
      height: 100px;
    }

    .about__card {
      width: 100%;
      padding: 1rem;
      margin: 1rem 0;
    }

    .about__card + .about__card {
      margin-top: 0;
    }
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const Image = styled.img`
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    width: 50%;
    height: auto;
  }
  @media (max-width: 480px) {
    width: 50%;
    height: auto;
  }
`;

function About() {
  const { t } = useTranslation();
  return (
    <AboutContainer>
      <GlobalStyle />
      <Title>{t("about")}</Title>
      <Section>
        <Image src="https://placehold.co/300x200" />
        <TextContainer>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </TextContainer>
      </Section>
      <Section reverse>
        <Image src="https://placehold.co/300x200" />
        <TextContainer>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </TextContainer>
      </Section>
      <Section>
        <Image src="https://placehold.co/300x200" />
        <TextContainer>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </TextContainer>
      </Section>
      <Section reverse>
        <Image src="https://placehold.co/300x200" />
        <TextContainer>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </TextContainer>
      </Section>
      <Section>
        <Card>
          <Image src="https://placehold.co/300x200" />
          <TextContainer>
            <TextDark>Collaborator 1</TextDark>
          </TextContainer>
        </Card>
        <Card>
          <Image src="https://placehold.co/300x200" />
          <TextContainer>
            <TextDark>Collaborator 2</TextDark>
          </TextContainer>
        </Card>
      </Section>
    </AboutContainer>
  );
}

export default About;


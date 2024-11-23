import styled from "styled-components";
import { useState, useEffect } from "react";
import Title from "../components/Title.jsx";

const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  min-height: 100vh;
`;

const Card = styled.a`
  width: 20rem;
  height: 30rem;
  padding: 1rem;
  margin: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CardText = styled.p`
  font-size: 16px;
  padding: 0.5rem;
`;

function Portfolio() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Enzoreal100/projects-api/refs/heads/main/data.json")
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <LinkContainer>
        {items.map((item, index) => (
          <Card href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
            <img src={item.img} style={{ width: "100%", borderRadius: "10px" }} alt={item.title} />
            <CardText>{item.title}</CardText>
            <CardText>{item.description}</CardText>
          </Card>
        ))}
      </LinkContainer>
    </PortfolioContainer>
  );
}

export default Portfolio;


import styled from "styled-components";

const Card = styled.div`
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
    width: 80%;
  }
`;

export default Card;


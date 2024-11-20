import styled from "styled-components";

const Title = styled.h1`
  font-size: 64px;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  padding: 5rem;
`;

export default Title;
import styled from "styled-components";

const TextDark = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.dark_text};
  padding: 1rem;
`;

export default TextDark;

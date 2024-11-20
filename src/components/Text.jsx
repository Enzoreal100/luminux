import styled from "styled-components";

const Text = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
  padding: 1rem;
`;

export default Text;

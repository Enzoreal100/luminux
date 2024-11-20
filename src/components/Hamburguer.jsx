import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  z-index: 1000;
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const HamburgerLink = styled(Link)`
  color: white;
  font-size: 24px;
  margin: 1rem;
`;

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen((prev) => !prev);

  return (
    <>
      <HamburgerButton onClick={toggleHamburger}>
        {isOpen ? <>&times;</> : <>&#9776;</>}
      </HamburgerButton>
      {isOpen && (
        <HamburgerMenu>
          <HamburgerLink to="/">Home</HamburgerLink>
          <HamburgerLink to="/about">About</HamburgerLink>
          <HamburgerLink to="/portfolio">Portfolio</HamburgerLink>
          <HamburgerLink to="/contact">Contact</HamburgerLink>
        </HamburgerMenu>
      )}
    </>
  );
};

export default Hamburger;

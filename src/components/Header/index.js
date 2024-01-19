// This is Header component /Navigation Component
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  background-color: var(--nav);
  color: var(--white);
  position: relative;
  z-index: 500;

  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Nav = styled.nav`
  width: 25rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only Screen and (max-width: 48em) {
    display: none;
  }

  a {
    font-weight: 600;
    color: var(--white);
    line-height: 1.5;

    &::after {
      content: "";
      display: block;
      height: 3px;
      width: 3px;
      background-color: transparent;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const HamburgerBtn = styled.button`
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 2px;

  cursor: pointer;
  display: none;

@media only Screen and (max-width: 48em) {
  display: inline-block;
  
}



  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media only Screen and (max-width: 48em) {
    display: flex;
  }

  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};

  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;

  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
  }
`;

const Header = () => {

const [click, setClick] = useState(false)


const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);


  const ScrollUp = (id,e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
const handleClick = (id,e) => {
  setClick(!click);
ScrollUp(id,e);
}
useEffect(() => {
const element = ref.current;
const mq = window.matchMedia("(max-width:40em)");

if(mq.matches){
gsap.to(element, {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  padding: "1rem 2.5rem",
  borderRadius: "0 0 50px 50px",
  border: "2px solid var(--white)",

  duration: 1,
  ease: "power1.out",

  scrollTrigger: {
    trigger: element,
    start: "bottom+=200 top",
    end: "+=100",
    scrub: true,
    
  },
});
}else{
  gsap.to(element, {
    position: "fixed",
    top: "1rem",
    left: "3rem",
    right: "3rem",
    padding: "1.5rem 2rem",
    borderRadius: "50px",
    border: "3px solid var(--white)",

    duration: 1,
    ease: "power1.out",

    scrollTrigger: {
      trigger: element,
      start: "bottom+=300 top",
      end: "+=250",
      scrub: true,
     
    },
  });
}

}, [])

  return (
    <Headers ref={ref}>
      <Logo>
        <h3>Byduo</h3>
      </Logo>
      <Nav>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button>Contact Us</Button>
        </a>
      </Nav>
      <HamburgerBtn onClick={() => setClick(!click)} clicked={click}>
        <span />
      </HamburgerBtn>
      <MobileMenu clicked={click}>
        <a href="#home" onClick={(e) => handleClick("home", e)}>
          Home
        </a>
        <a href="#about" onClick={(e) => handleClick("about", e)}>
          About Us
        </a>
        <a href="#services" onClick={(e) => handleClick("services", e)}>
          Services
        </a>
        <a href="#contact" onClick={(e) => handleClick("contact", e)}>
          <Button>Contact Us</Button>
        </a>
      </MobileMenu>
    </Headers>
  );
};

export default Header;

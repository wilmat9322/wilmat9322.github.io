import React, {useState, useEffect} from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { RiCodeBoxFill } from "react-icons/ri";
import { IconContext } from 'react-icons/lib';
import { MdEmail } from "react-icons/md";
import {animateScroll as scroll} from 'react-scroll';


import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    MobileIcon,
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

const toggleHome = () => {
  scroll.scrollToTop()
};

  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>WILLIAM
            <IconContext.Provider
                    value={{
                      size: "30px",
                      style: { verticalAlign: "middle", margin:"5px" },
                    }}
                  >
                    {" "}
                    <RiCodeBoxFill/>
                  </IconContext.Provider>
            </NavLogo>
            <MobileIcon onClick={toggle}>
            <IconContext.Provider
                    value={{
                      size: "30px",
                    }}
                  >
                    {" "}
                    <CgMenuGridO />
                  </IconContext.Provider>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="home"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="awards"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Awards</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="skills"  
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Skills</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="projects"
                     smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="experiences"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}
                    >Experiences</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="contact"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact me 
                <IconContext.Provider
                    value={{
                      size: "18px",
                      style: { verticalAlign: "middle", margin:"1px" },
                    }}
                  >
                    {" "}
                    <MdEmail/>
                  </IconContext.Provider></NavBtnLink>
            </NavBtn>
            {/* <NavBtn>
                <Button to="openwork"></Button>
            </NavBtn>
            <NavBtn>
                <Button to="language"></Button>
            </NavBtn> */}
        </NavbarContainer>
    </Nav>
    </>
  )
          }

export default Navbar;
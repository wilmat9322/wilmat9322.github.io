import React, {useState, useEffect} from 'react';
import { FooterCon } from '../../globalStyles'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { VscGithub } from "react-icons/vsc";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";
import {animateScroll as scroll} from "react-scroll";

import {
    FooterSec, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements'


const Footer = (props) => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

const [scrollNav, setScrollNav] = useState(false)
const changeNav = () => {
  if(window.scrollY >= 80) {
    setScrollNav(true)
  } else {
    setScrollNav(false)
  }
}

useEffect(() => {
  window.addEventListener('scroll', changeNav)
}, [])

const toggleHome = () => {
  scroll.scrollToTop();
}

const {
  id,
} = props;

  return (
    <>
    <FooterSec id={id}>
        <FooterCon>
            <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        WILLIAM
                        <IconContext.Provider
                    value={{
                      size: "30px",
                      style: { verticalAlign: "middle", margin:"5px" },
                    }}
                  >
                    {" "}
                    <RiCodeBoxFill/>
                        </IconContext.Provider>
                    </SocialLogo>
                        <FooterLinksContainer>
                            <FooterLinksWrapper>
                                <FooterLinkItems>
                                <FooterLinkTitle>Menu</FooterLinkTitle>
                                    <FooterLink to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</FooterLink>  
                                    <FooterLink to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About me</FooterLink>
                                    <FooterLink to="/skills">Skills</FooterLink>
                                    <FooterLink to="projects">Projects</FooterLink>
                                    <FooterLink to="awards" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Awards</FooterLink>
                                    <FooterLink to="/experience">Experience</FooterLink>                    
                                </FooterLinkItems>
                            </FooterLinksWrapper>
                        </FooterLinksContainer>
                            <SocialIcons>
                                <SocialIconLink href="https://www.linkedin.com/in/william-m-685a32204/" target="_blank" aria-label="Facebook">
                                    <FaLinkedin />
                                        </SocialIconLink>
                                            <SocialIconLink href="https://github.com/wilmat9322" target="_blank" aria-label="Facebook">
                                                <VscGithub />
                                            </SocialIconLink>
                                        <SocialIconLink href="https://twitter.com/wsteven_m" target="_blank" aria-label="Facebook">
                                                <AiFillTwitterCircle />
                                        </SocialIconLink>
                                            </SocialIcons>
                                </SocialMediaWrap>
                            </SocialMedia>
            <WebsiteRights>WILLIAM © - {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
        </FooterWrap>
        </FooterCon>
    </FooterSec>
    </>
 )
}
export default Footer;
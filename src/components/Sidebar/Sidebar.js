import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements';
import {animateScroll as scroll} from 'react-scroll';

export const Sidebar = ({isOpen, toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  };
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to="home" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Home</SidebarLink> 
            <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About me</SidebarLink>    
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to='/contactme' onClick={toggle}>Contact me</SidebarRoute>
        </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    
  );
};

export default Sidebar;
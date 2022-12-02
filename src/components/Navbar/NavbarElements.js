import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    position: sticky; 
    top: 0;
    z-index: 10;
    @media screeen and (max-width: 960px){
        transition: 0.20s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    z-index: 1;
    width: 100%;
    padding: 0 10px;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;
    @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
    }
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    font-weight: 800;
    text-decoration: none;
    transition: ease-out 0.30s;
    &:hover {
    color: #F05454;
    cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center; 
    
    
    @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        overflow: scroll;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: #F0F8FF;
    }
`

export const NavItem = styled.li`
    height: 35px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 2px solid transparent; 
    transition: ease-out 0.20s;
    width: 80%;
    align-items: center;
    justify-content: center;
    &:hover {
    color: #F05454;
    cursor: pointer;
    border-bottom: 2px solid #F05454;
    }

&.active {
    color: #F05454;
	border-bottom: 2px solid #F05454;
	}
`;

export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 2px solid transparent; 
    transition: ease-out 0.20s;
    width: 80%;
    align-items: center;
    justify-content: center;
    
&.active {
    color: #F05454;
	border-bottom: 2px solid #F05454;
	}
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
    @media screen and (max-width: 1200px) {
        display: none;
    }
    
`

export const NavBtnLink = styled.a`
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    font-weight: bold;
    text-decoration: none;
    border: none;
    outline: none;
    background: #DA2D2D;
    color: #fff;
    font-size: 1rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
        &:hover{
        transition: all 0.3s ease-out;
        color: #fff; 
        background: red; 
	    }
`

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 1200px) {
        display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    transition: all 0.20s ease-in-out;
    &:hover {
        color: #f05454;
    }
    }
`

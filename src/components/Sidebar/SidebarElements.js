import styled from 'styled-components';
import {Link as LinkS } from 'react-scroll';
import {FaTimes} from 'react-icons/fa';


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #000;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
 
`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
    transition: ease-in-out 0.30s;
    &:hover{
        color: #F05454;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width:480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #F05454;
        transition: 0.2s ease-in-out;
    }
    
` 

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1200px) {
        margin-top: 20px;
    }
`

export const SidebarRoute = styled(LinkS)`
    border-radius: 50px;
    background: red;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-color: #DA2D2D;
    box-shadow: inset 0 0 0 0 #0000;
    transition: ease-in-out 0.30s;
    color: #fff;

    &:hover{
        box-shadow: inset 250px 0 0 0 #F05454;
        transition: all 0.20s ease-out;
        color: #fff;
    }
`
import styled from "styled-components";
import {Link} from 'react-scroll'
import {motion} from 'framer-motion';

export const HeroSec = styled.div` 
padding: 70px 0px 0px; 
background: #000;
height: 100%; 
background-size: cover; 
    
    @media screen and (max-width: 1200px) {
    padding-top: 20px;
    max-width: 100%; 
    flex-basis: 100%; 
    display: flex; 
    justify-content: center; 
    bottom: 0; 
    }
    
    @media screen and (max-width: 768px) {
    padding-top: 20px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
    
    @media screen and (max-width: 600px) { 
    padding-top: 20px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
`;

export const HeroRow = styled.div` 
    display: flex;
    margin: 0 15px 0px 15px; 
    flex-wrap: wrap; 
    align-items: center; 
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const HeroColumn = styled.div`  
    bottom: 0;
    padding-top: 0px;
    padding-left: 0px; 
    flex: 1;
    max-width: 50%; 
    flex-basis: 50%; 
    
    @media screen and (max-width: 968px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const TextWrapper = styled.div` 
    max-width: 540px; 
    padding-top: 0;
    padding-bottom: 0px;
    
    @media screen and (max-width: 968px) {
    padding-bottom: 65px;   
    }
`;

export const Heading = styled(motion.h5)` 
    font-size: 25px; 
    font-weight: 600; 
    color: #fff; 
    width: 100%; 
    
    @media screen and (max-width: 968px) {
        font-size: 25px;
        width: 100%;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 20px;
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 10px;
        width: 100%;
    }
`;

export const SubHeading = styled(motion.p)` 
    font-size: 60px; 
    font-weight: 600;
    width: 100%;
    color: #fff;    
    @media screen and (max-width: 968px) {
        font-size: 60px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
    }
    
    @media screen and (max-width: 600px) {
        margin-left: 15px;
        margin-right: 15px;
        font-size: 40px;
        width: 90%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Text = styled(motion.p)` 
    font-size: 20px; 
    font-weight: 500;
    width: 100%;
    color: #fff;

    @media screen and (max-width: 968px) {
        font-size: 3.5vw;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
    }

    @media screen and (max-width: 600px) {
        margin-left: 15px;
        margin-right: 15px;
        font-size: 21px;
        width: 90%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Span = styled.span`
    `

export const BtnLink = styled.a`
    text-decoration: none;
`;


export const Button = styled(motion.button)`
border-radius: 30px; 
background: #DA2D2D; 
white-space: nowrap; 
padding: 10px 20px; 
color: #fff; 
font-size: 18px; 
font-weight: bold; 
outline: none; 
border: none; 
cursor: pointer; 
width: 100%;
max-width: 180px;
margin-top: 30px;
margin-right: 10px;
    &:hover {  
        transition: all 0.3s ease-out;
        color: #fff; 
        background: red; 
    }

    @media screen and (max-width: 1200px) {
    margin-top: 20px;
    margin-bottom: -60px;
    width: 100%;
    }

    @media screen and (max-width: 968px) {
    font-size: 18px;
    margin-top: 50px;
    max-width: 200px;
    width: 100%;
    }

    @media screen and (max-width: 600px) {
    font-size: 15px;
    margin: 20px auto 0 auto;
    width: 100%;
    max-width: 500px;
    }
`;

export const ImgWrapper = styled.div` 
    max-width: 900px;
    max-height: 100%; 
    height: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 968px) {
    max-width: 500px;
    }
`;

export const Img = styled(motion.img)`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    max-height: 500px;
    display: inline-block; 
    object-position: bottom;
    vertical-align: middle; 
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    border-radius: 100%;
    
    @media screen and (max-width: 1200px) {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        flex-direction: column;
        margin-top: 0px;
    }

    @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-top: -30px;
    }
`;
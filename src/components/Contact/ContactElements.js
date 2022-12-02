import styled from "styled-components";
import {Link} from 'react-scroll'
import {motion} from 'framer-motion';

export const ContactSec = styled.div` 
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

export const ContactContainer = styled.div`

`  

export const ContactRow = styled.div` 
    display: flex;
    margin: 0 15px 0px 15px; 
    flex-wrap: wrap; 
    align-items: center; 
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const ContactColumn = styled.div`  
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
    padding-top: 0;
    padding-bottom: 0px;
    text-align: center;
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

export const SubHeading = styled(motion.h5)` 
    
    font-size: 15px; 
    font-weight: 600; 
    color: #fff; 
    width: 100%; 
    margin-bottom: 10px;
    
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

export const InputBox = styled.input`
    display: flex;
    padding: 10px;
    margin-top: 10px;
    display: flex;
    width: 80%;

    @media screen and (max-width: 1200px) {
    display: flex;
    margin-top: 20px;
    margin-bottom: -60px;
    width: 100%;
    }

    @media screen and (max-width: 968px) {
    display: flex;
    font-size: 18px;
    margin-top: 50px;
    max-width: 200px;
    width: 100%;
    }

    @media screen and (max-width: 600px) {
    display: flex;
    font-size: 15px;
    margin: 0px auto 0 auto;
    width: 100%;
    max-width: 500px;
    }
`  

export const InputMessage = styled.textarea`
    padding: 10px;
    margin-top: 10px;
    display: flex;
    width: 80%;
    height:155px
`  

export const ButtonContainer = styled.a`
    text-decoration: none;
`

export const Button = styled.button`
    border-radius: 30px; 
    background: #DA2D2D; 
    white-space: nowrap; 
    padding: 10px 20px; 
    color: #fff; 
    font-size: 14px; 
    font-weight: bold; 
    outline: none; 
    border: none; 
    cursor: pointer; 
    width: 100%;
    max-width: 140px;
    margin-top: 15px;
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
    margin: 30px auto 0 auto;
    width: 100%;
    max-width: 500px;
    }
`;
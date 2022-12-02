import styled from "styled-components";
import {Link} from 'react-scroll'
import {motion} from 'framer-motion';

export const ProjectsSec = styled.div` 
padding: 70px 0px 0px; 
background: #000;
    
    @media screen and (max-width: 1200px) {
    padding-top: 60px;
    max-width: 100%; 
    flex-basis: 100%; 
    display: flex; 
    justify-content: center; 
    bottom: 0; 
    }
    
    @media screen and (max-width: 768px) {
    padding-top: 60px;
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

export const ProjectsRow = styled.div` 
    display: flex;
    margin: 0 15px 0px 15px; 
    flex-wrap: wrap; 
    align-items: center; 
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const ProjectsColumn = styled.div`  
    bottom: 0;
    padding-top: 0px;
    
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
    max-width: 968px; 
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: 50px;
    @media screen and (max-width: 968px) {
    padding-bottom: 40px;  
    padding-left: 0px; 
    }
`;

export const Heading = styled(motion.h1)` 
    font-size: 40px; 
    font-weight: 600; 
    line-height: 1; 
    color: #fff; 
    width: 100%; 
    
    @media screen and (max-width: 968px) {
        justify:center;
        text-align: center;
        font-size: 50px;
        width: 100%;
    }
    
    @media screen and (max-width: 768px) {
        justify:center;
        text-align: center;
        font-size: 60px;
        width: 100%;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 40px;
        justify:center;
        text-align: center;
        margin-top: 10px;
        width: 100%;
    }
`;

export const SubHeading = styled(motion.p)` 
    margin-top: 30px; 
    font-size: 26px; 
    font-weight: 600;
    width: 100%;
    line-height: 1.2;
    color: #fff; 
    
    @media screen and (max-width: 968px) {
        font-size: 30px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
        width: 90%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Text = styled(motion.p)` 
    font-size: 16px; 
    font-weight: 400;
    width: 100%;
    color: #fff;

    @media screen and (max-width: 968px) {
        margin-top: 5px;
        font-size: 18px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
    }
    
    @media screen and (max-width: 600px) {
        margin-top: 5px;
        margin-left: 15px;
        margin-right: 15px;
        font-size: 16px;
        width: 95%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const Tools = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ToolsHeading = styled.p`
    color: #fff;
    font-weight: bold;
`;

export const ToolList = styled.ul`

`;

export const Tool = styled.li`

`;

export const ToolImage = styled.img`
    margin-right: 5px;
    border: 0;
    max-width: 6%;
    max-height: 500px;
    display: inline-block; 
    object-position: bottom;
    vertical-align: middle; 
    border-radius: 8%;
    cursor: pointer;
`;

export const ToolWrapper = styled.a`

`;

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

export const ImgWrapper = styled.div` 
    max-width: 1200px;
    max-height: 100%; 
    height: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    

    @media screen and (max-width: 1400px) {
    max-width: 400px;
    }

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
    border-radius: 10%;
    
    @media screen and (max-width: 1200px) {
        max-width: 100%;
        max-height: 100%;
        height: 100%;
        flex-direction: column;
        margin-top: 0px;
    }

    @media screen and (max-width: 600px) {
    font-size: 15px;
    margin-top: -20px;
    }
`;

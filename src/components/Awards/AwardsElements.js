import styled from "styled-components";
import {Link} from 'react-scroll'
import {motion} from 'framer-motion';

export const AwardsSec = styled.div` 
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

export const AwardsRow = styled.div` 
    display: flex;
    margin: 0 15px 0px 15px; 
    flex-wrap: wrap; 
    align-items: center; 
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
`;

export const AwardsColumn = styled.div`  
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
    max-width: 968px; 
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;

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

export const ImgWrapper = styled.div` 
    padding-left: 50px;
    max-width: 1000px;
    max-height: 100%; 
    height: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 1400px) {
    max-width: 400px;
    padding-left: 0px;
    }

    @media screen and (max-width: 968px) {
    max-width: 500px;
    padding-left: 0px;
    }
`;

export const Img = styled.img`
    border: 0;
    max-width: 100%;
    max-height: 500px;
    display: inline-block; 
    object-position: bottom;
    vertical-align: middle; 
    border-radius: 5%;
    
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
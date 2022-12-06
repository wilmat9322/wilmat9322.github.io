import styled from "styled-components";
import {motion} from 'framer-motion';

export const ExperienceSec = styled.div` 
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

export const Heading = styled(motion.h1)` 
    font-size: 40px; 
    font-weight: 600; 
    line-height: 1; 
    color: #fff; 
    width: 100%; 
    text-align: center;
    
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

export const ImgWrapper = styled.div` 
    padding-top: 10px;
    padding-right: 20px;
    max-width: 500px;
    max-height: 100%; 
    height: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 968px) {
    flex-direction: column;
    max-width: 500px;
    padding-left: 10px;
    display: none;
    }
`;

export const ImgWrapper2 = styled.div` 
    padding-top: 10px;
    padding-right: 20px;
    max-width: 500px;
    max-height: 100%; 
    height: 100%;
    bottom: 0;
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 968px) {
    display: none;
    flex-direction: column;
    }
`;


export const TimeImg = styled.img`
padding-right: 0;
    border: 0;
    max-width: 100%;
    max-height: 200px;
    display: inline-block; 
    object-position: bottom;
    vertical-align: middle; 
    border-radius: 100%;
    
    @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
   
    }
    
` 

export const TimeLineContainer = styled.div` 
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 20px 0px 20px;
    
    &:after {
    background-color: #DA2D2D;
    content:'';
    position: absolute;
    left: calc(50% - 0px);
    width: 1px;
    height: 100%;
    @media screen and (max-width: 600px) {
    display: flex;
    display: none;
    flex-direction: column;
    &:nth-child(1) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    }
    }
    }
    
`

export const TimeLineItem = styled.div` 
     display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    width: 50%;

    &:nth-child(2) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        padding-right: 0px;
    }
`

export const TimeLineContent = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 100%;
    text-align: left;
     @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0px;
    }
    
`
export const TimeLineItem2 = styled.div` 
   display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;

    &:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    }
 
    @media screen and (max-width: 600px) {
       
        width: 100%;
        padding: 0px;
        width: 200px;
    }
    
`

export const TimeLineContent2 = styled.div` 
    display: flex;
    flex-direction: column;
    padding: 15px;
    position: relative;
    width: 400px;
    max-width: 70%;
    text-align: left;
    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 0px;
        width: 200px;
    }
`

export const Tag = styled.span` 
color: #fff;
font-size: 14px;
font-weight: 400;
`

export const Time = styled.time` 
color: #fff;
font-size: 18px;
font-weight: bold;
margin-bottom: 5px;
`

export const Text = styled.p` 
color: #fff;
font-size: 16px;
font-weight: bold;
text-align: left;
`

export const Text2 = styled.p` 
color: #fff;
font-size: 16px;
font-weight: bold;
text-align: left;
`

export const TimeLink = styled.a` 
color: #fff;
font-weight: 400;
`

export const Circle = styled.span` 
background-color: #fff;
    border: 3px solid #DA2D2D;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
    @media screen and (max-width: 600px) {
    display: flex;
    display: none;
    flex-direction: column;
   
    }
    
`

export const Circle2 = styled.span` 
background-color: #fff;
    border: 3px solid #DA2D2D;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    left: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
    @media screen and (max-width: 600px) {
    display: flex;
    display: none;
    flex-direction: column;
   
    }
`



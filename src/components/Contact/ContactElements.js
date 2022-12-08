import styled from "styled-components";
import {motion} from 'framer-motion';

export const ContactSec = styled.div` 
padding: 70px 0px 0px; 
background: #000;
    
    @media screen and (max-width: 1200px) {
    max-width: 100%; 
    flex-basis: 100%; 
    display: flex; 
    justify-content: center; 
    bottom: 0; 
    }
    
    @media screen and (max-width: 968px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
    
    @media screen and (max-width: 600px) { 
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
`;

export const ContactContainer = styled.div`
    margin: 0 15px 0px 15px; 
    flex-wrap: wrap;
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
    max-width: 100%; 
    flex-basis: 100%; 
    
    
    @media screen and (max-width: 968px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    @media screen and (max-width: 600px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
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
    padding-left: 0px;
    padding-right: 0px;
    }

    @media screen and (max-width: 600px) {
    padding-left: 0px;
    padding-right: 0px;
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
        font-size: 30px;
        justify:center;
        text-align: center;
        margin-top: 10px;
        width: 100%;
    }
`;

export const SubHeading = styled(motion.p)` 
    margin-top: 10px; 
    margin-bottom: 20px;
    font-size: 26px; 
    font-weight: 600;
    width: 100%;
    line-height: 1.2;
    color: #fff; 
    text-align: center;
    
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

export const StyledContactForm = styled.div`
  width: 500px;
  margin: 0 auto 0 auto;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }
  @media screen and (max-width: 600px) {
        max-width: 500px;
        width: 100%;
    }
`

export const InputBox = styled.input`
    display: flex;
    margin-bottom: 10px;
    width: 100%;
    height: 35px;
    padding: 7px;
    outline: none;
    &:focus {
    outline: none;
    border-color: #DA2D2D;
  }

    @media screen and (max-width: 968px) {
    font-size: 15px;
    margin: 0px auto 10px auto;
    width: 100%;
    display: flex;
    flex-direction: column; 
    }

    @media screen and (max-width: 600px) {
    font-size: 15px;
    margin: 0px auto 10px auto;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column; 
    }
`  

export const MessageContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const InputMessage = styled.textarea`
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    padding: 7px;
    outline: none;
    padding: 10px;
    display: flex;
    height: 155px;
    resize: none;
    &:focus {
    outline: none;
    border-color: #DA2D2D;
  }
`  

export const ButtonContainer = styled.a`
    text-decoration: none;
    margin: 0px auto 0 auto;
    max-width: 150px;
    width: 100%;
    float: right;
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
        background: #DA2D2D; 
    }

    @media screen and (max-width: 968px) {
    font-size: 18px;
    margin-top: 15px;
    max-width: 500px;
    width: 100%;
    }

    @media screen and (max-width: 600px) {
    font-size: 15px;
    margin: 15px auto 0 auto;
    width: 100%;
    max-width: 900px;
    }
`;
export const LabelName = styled.p`
color: #fff;
`

export const LabelEmail = styled.p`
color: #fff;
`

export const LabelPhone = styled.p`
color: #fff;
`

export const LabelMessage = styled.p`
color: #fff;
`
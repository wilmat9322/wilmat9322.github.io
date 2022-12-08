import styled from 'styled-components'; 
import {motion} from 'framer-motion';

export const SkillSec = styled.div`
  padding: 70px 0 0 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: 1200px) {
    padding-top: 30px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }

  @media screen and (max-width: 768px) {
    padding-top: 30px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }

  @media screen and (max-width: 600px) {
    padding-top: 30px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    }
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(-50.49deg, rgba(255, 255, 255, 0.03) 81.89%, rgba(196, 196, 196, 0.18) 100.01%);
  color: #0000;
  border-radius: 25px;
  width: 100%;
  max-width: 1300px;
  margin-right: auto; 
  margin-left: auto;
  padding-right: 120px;
  padding-left: 120px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;

    margin-right: auto; 
    margin-left: auto;
    border-radius: 0px;
    }
    
    @media screen and (max-width: 600px) {
    padding-bottom: 20px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto; 
    margin-left: auto;
    }
`;

export const Heading = styled(motion.h1)` 
    font-size: 40px; 
    font-weight: 600; 
    text-align: center;
    color: #fff; 
    margin-top: 50px;
    
    @media screen and (max-width: 1200px) {
        margin-top: 50px;
        justify:center;
        text-align: center;
        font-size: 50px;
        width: 100%;
    }
    
    @media screen and (max-width: 768px) {
        margin-top: 50px;
        justify:center;
        text-align: center;
        font-size: 60px;
        width: 100%;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 35px;
        justify:center;
        text-align: center;
        margin-top: 30px;
        margin-bottom: 0px;
        width: 100%;
    }
`;

export const SubHeading = styled(motion.p)` 
    font-size: 20px; 
    font-weight: 400;
    text-align: center;
    width: 100%;
    color: #fff; 
    
    @media screen and (max-width: 1200px) {
        font-size: 20px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 968px) {
        font-size: 20px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
        margin-bottom: 30px;
    }
    
    @media screen and (max-width: 600px) {
        margin-top: 0px; 
        font-size: 20px;
        margin-left: 15px;
        margin-right: 15px;
        width: 90%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  @media screen and (max-width: 968px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const SkillCard = styled.div`
  width: 320px;
  text-decoration: none;
  border-radius: 6px;
  &:nth-child(3n) { 
    margin: 24px;
  }

`;

export const SkillCardInfo = styled.div`
  font-weight: bolder;
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: #fff;
  text-align: center;
  
`;

export const SkillCardTitle = styled.h4`
margin: 20px 0px 0px 0px;
font-size: 30px;
font-weight: bolder;
`;

export const SkillCardDesc = styled.p`
  margin: 0px 0 0px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  list-style: none;
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const SkillCardImg = styled.div`
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`;

export const SkillCardImg2 = styled.div`

justify-self: flex-start;
cursor: pointer;
text-decoration: none;
display: flex;
align-items: center;
`;

export const SkillImage = styled.img`
    margin: auto;
    width: 100%;
    height: 100%;
`; 
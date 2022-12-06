import styled from 'styled-components'; 
import {motion} from 'framer-motion';

export const SkillSec = styled.div`
  padding: 70px 0 0 0;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 968px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Heading = styled(motion.h1)` 
    font-size: 40px; 
    font-weight: 600; 
    line-height: 0; 
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
        font-size: 35px;
        justify:center;
        text-align: center;
        margin-top: 20px;
        width: 100%;
        line-height: 1;
    }
`;

export const SubHeading = styled(motion.p)` 
    margin-top: 30px; 
    margin-bottom: 100px;
    text-align: center;
    line-height: 1.2;
    color: #fff; 
    font-size: 18px; 
    font-weight: 400;
    width: 100%;
    
    @media screen and (max-width: 968px) {
        font-size: 30px;
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        flex-direction: column; 
        bottom: 0;
    }
    
    @media screen and (max-width: 600px) {
        margin-top: 20px;
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
    width: 100%;
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
  width: 337px;
  text-decoration: none;
  border-radius: 6px;
  &:nth-child(2n) { 
    margin: 24px;
  }

  @media screen and (max-width: 1200px) {
    height: 600px;
    width: 90%;
    &:hover {
      transform: none;
    }
    @media screen and (max-width: 1200px) {
      height: 700px;
      width: 90%;
      &:hover {
        transform: none;
      }
    @media screen and (max-width: 280px) {
      height: 740px;
      width: 90%;
    }
  }
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
  font-size: 20px;
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
margin-top: -90px;
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
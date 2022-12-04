import React from 'react'
import { Container } from '../../globalStyles'

import {
    AboutSec,
    AboutRow,
    AboutRow2,
    AboutColumn,
    TextWrapper,
    TextWrapper2,
    Heading,
    SubHeading,
    Text,
    ImgWrapper,
    ImgWrapper2,
    Img
  } from './AboutElements';

  const About = (props) => {
    const {
      id,
      heading,
      subHeading, 
      text,
      reverse,
      img,
      heading2,
      text2,
      reverse2,
      img2
    } = props;
    const fadeRight = {
      hidden: { opacity: 0, x: 100},
      visible: {opacity: 1, x: 0}
    };

    return (
      <>
      <AboutSec id={id}>
        <Container>
          <AboutRow reverse={reverse}>
            <AboutColumn>
              <TextWrapper>
              <Heading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              >
               {heading}&#128187;
          
              </Heading>
                <SubHeading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                >
                  {subHeading}
                </SubHeading>
                <Text
                variants={fadeRight}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                >{text}</Text>
              </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper>
                <Img src={img} alt="William Matos" whileTap={{ scale: 0.9}} draggable="false"/>
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>

          <AboutRow2 reverse={reverse2}>
            <AboutColumn>
              <TextWrapper2>
              <Heading
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              >
               {heading2}&#127891;
              </Heading>
                <SubHeading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                >
                </SubHeading>
                <Text
                variants={fadeRight}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
                >{text2}</Text>
              </TextWrapper2>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper2>
                <Img src={img2} alt="William Matos" whileTap={{ scale: 0.9}} draggable="false"/>
              </ImgWrapper2>
            </AboutColumn>
          </AboutRow2>
        </Container>
      </AboutSec>
      </>
    )
  }
  
  export default About
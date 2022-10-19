import React from 'react'
import { Container } from '../../globalStyles'

import {
    AboutSec,
    AboutRow,
    AboutColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
    ImgWrapper,
    Img
  } from './AboutElements';

  const About = (props) => {
    const {
      id,
      heading,
      subHeading, 
      text,
      reverse,
      img
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
               {heading}
          
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
                <Img src={img} alt="William Matos" draggable="false"/>
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>
        </Container>
      </AboutSec>
      </>
    )
  }
  
  export default About
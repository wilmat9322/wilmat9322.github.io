import React from 'react'
import "aos/dist/aos.css"; 
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
      img,
    } = props;

    return (
      <>
      <AboutSec id={id}>
        <Container>
          <AboutRow reverse={reverse}>
            <AboutColumn>
              <TextWrapper>
              <Heading
              data-aos="fade-in"
              data-aos-once="true"
              data-aos-offset="100"
              data-aos-duration="900">
               {heading}
          
              </Heading>
                <SubHeading
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900"
                >
                  {subHeading}
                </SubHeading>
                <Text
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                >{text}</Text>
              </TextWrapper>
            </AboutColumn>
            <AboutColumn>
              <ImgWrapper>
                <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                src={img} alt="William Matos"  
                draggable="false"/>
              </ImgWrapper>
            </AboutColumn>
          </AboutRow>
        </Container>
      </AboutSec>
      </>
    )
  }
  
  export default About
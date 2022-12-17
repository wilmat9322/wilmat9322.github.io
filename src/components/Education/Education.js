import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'

import {
    EducationSec,
    EducationRow,
    EducationColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
    ImgWrapper,
    Img
  } from './EducationElements';

const Education = (props) => {
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
    <EducationSec id={id}>
        <Container>
        <EducationRow reverse={reverse}>
            <EducationColumn>
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
                      data-aos-duration="900">
                    {subHeading}
                    </SubHeading>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {text}
                    </Text>
                </TextWrapper>
            </EducationColumn>
            <EducationColumn>
                <ImgWrapper>
                    <Img 
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="100"
                    data-aos-duration="900"
                    src={img} alt="William Matos" 
                    draggable="false"/>
                </ImgWrapper>
            </EducationColumn>
        </EducationRow>
        </Container>
    </EducationSec>
    </>
  )
}

export default Education
import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'

import {
    AwardsSec,
    AwardsRow,
    AwardsColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
    ImgWrapper,
    Img
  } from './AwardsElements';

  const Awards = (props) => {
    const {
      id,
      heading,
      subHeading, 
      text,
      reverse,
      img
    } = props;

    return (
        <>
        <AwardsSec id={id}>
          <Container>
            <AwardsRow reverse={reverse}>
              <AwardsColumn>
                <TextWrapper>
                <Heading
                data-aos="fade-right"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
                 {heading}&#127942;
                </Heading>
                  <SubHeading
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900">
                    {subHeading}
                  </SubHeading>
                  <Text
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text}</Text>
                </TextWrapper>
              </AwardsColumn>
              <AwardsColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img} alt="William Matos" 
                  draggable="false"/>
                </ImgWrapper>
              </AwardsColumn>
            </AwardsRow>
          </Container>
        </AwardsSec>
        </>
      )
    }

export default Awards
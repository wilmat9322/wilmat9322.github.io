import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'

import {
    WindowsSec,
    WindowsRow,
    WindowsColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
  } from './WindowsElements';

const Windows = (props) => {
    const {
        id,
        heading,
        subHeading,
        subHeading2,
        subHeading3,
        text,
        text2,
        text3, 
    } = props;
  return (
    <>
    <WindowsSec id={id}>
        <Container>
        <WindowsRow>
            <WindowsColumn>
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
                </WindowsColumn>
                <WindowsColumn>
                <TextWrapper>
                    <SubHeading
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                    {subHeading2}
                    </SubHeading>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {text2}
                    </Text>
                </TextWrapper>
            </WindowsColumn>
            <WindowsColumn>
                <TextWrapper>
                    <SubHeading
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                    {subHeading3}
                    </SubHeading>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {text3}
                    </Text>
                </TextWrapper>
            </WindowsColumn>
        </WindowsRow>
        </Container>

    </WindowsSec>
    </>
  )
}

export default Windows
import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'

import {
    ExperienceSec,
    Heading,
    TimeLineItem,
    TimeLineContent,
    TimeLineItem2,
    TimeLineContent2,
    Tag,
    Time, 
    Text,
    Text2,
    TimeLink,
    Circle,
    Circle2,
    TimeLineContainer,
    TimeImg,
    ImgWrapper,
    ImgWrapper2
  } from './ExperiencesElements';

  const Experiences = (props) => {
    const {
      id,
      heading,
      img,
      date,
      place,
      position,
      description,

      img2,
      date2,
      place2,
      position2,
      description2,

      img3,
      date3,
      place3,
      position3,
      description3,

      img4,
      date4,
      place4,
      position4,
      mentor,
      description4,

      img5,
      date5,
      place5,
      position5,

      } = props;
 
return (
    <>
    <ExperienceSec id={id}>
        <Container>
            <Heading
            data-aos="fade-in"
            data-aos-once="true"
            data-aos-offset="100"
            data-aos-duration="900">
            {heading}</Heading>
            <TimeLineContainer>

            <TimeLineItem >
                <ImgWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine">
                <TimeImg src={img}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    
                    <Tag
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">{date}</Tag>
                    <Time
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">{place}</Time>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">{position}</Text>
                  
                    <TimeLink
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {description}
                    </TimeLink>
                    <Circle/>
                    
                </TimeLineContent>
            </TimeLineItem>

            <TimeLineItem2>
            <TimeLineContent2>
                <Tag 
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine">
                {date2}</Tag>
                    <Time 
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {place2}</Time>
                    <Text2
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {position2}</Text2>
                        <TimeLink
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-offset="300"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-sine">
                        {description2}
                        </TimeLink>
        
                    <Circle2/>
                    
                </TimeLineContent2>
                <ImgWrapper2>
                <TimeImg 
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                src={img2}></TimeImg>
                </ImgWrapper2>
                </TimeLineItem2>
          
            


            <TimeLineItem>
            <ImgWrapper>
                <TimeImg 
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                src={img3}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    <Tag
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {date3}</Tag>
                    <Time
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {place3}</Time>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {position3}</Text>
                   
                        <TimeLink
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-offset="300"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-sine">
                        {description3}
                        </TimeLink>

                    <Circle/>
                </TimeLineContent>
            </TimeLineItem>


            <TimeLineItem2>
                <TimeLineContent2>
                    <Tag
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {date4}</Tag>
                    <Time
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {place4}</Time>
                    <Text2
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                        {position4}</Text2>
                    <Text2
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {mentor}</Text2>
        
                        <TimeLink
                        data-aos="fade-in"
                        data-aos-once="true"
                        data-aos-offset="300"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-sine">
                        {description4}
                        </TimeLink>
        
                    <Circle2/>
                </TimeLineContent2>
                <ImgWrapper2>
                <TimeImg 
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="300"
                data-aos-duration="900"
                data-aos-easing="ease-in-sine"
                src={img4}></TimeImg>
                </ImgWrapper2>
            </TimeLineItem2>

            <TimeLineItem>
            <ImgWrapper>
                <TimeImg data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine"
                  src={img5}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    <Tag
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {date5}</Tag>
                    <Time
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {place5}</Time>
                    <Text
                    data-aos="fade-in"
                    data-aos-once="true"
                    data-aos-offset="300"
                    data-aos-duration="900"
                    data-aos-easing="ease-in-sine">
                    {position5}</Text>
                        <TimeLink>
                        </TimeLink>
        
                    <Circle/>
                </TimeLineContent>
            </TimeLineItem>

            </TimeLineContainer>           
        </Container>
    </ExperienceSec>
    </>
  );
  }
export default Experiences
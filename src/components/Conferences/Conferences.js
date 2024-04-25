import React from 'react'
import "aos/dist/aos.css"; 
import { IconContext } from 'react-icons/lib';
import { IoDocumentText } from "react-icons/io5";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import {
    ConferencesSec,
    ConferencesContainer,
    ConferencesRow,
    ConferencesColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
    Tools,
    ToolsHeading,
    ButtonContainer,
    Button,
    ImgWrapper,
    Img
  } from './ConferencesElements';

  const Conferences = (props) => {
    const {
      id,
      heading,
      reverse,
      text,
      subHeading,
      img,
    
      text2,
      subHeading2,
      img2,

    } = props;

    return (
        <>
        <ConferencesSec id={id}>  
        <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        
        speed={1000}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: true,
        }}
        
        
        modules={[Keyboard, Autoplay, Pagination, Navigation]}> 
          <SwiperSlide>
          <ConferencesContainer>   
          
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ConferencesRow reverse={reverse}>
              <ConferencesColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Las Vegas, NV - May 2023</ToolsHeading>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text}</Text>
                </TextWrapper>
              </ConferencesColumn>
              <ConferencesColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img}
                  draggable="false"/>
                </ImgWrapper>
              </ConferencesColumn>
            </ConferencesRow>
          </ConferencesContainer>
          </SwiperSlide>

          <SwiperSlide>
          <ConferencesContainer>   
          
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ConferencesRow reverse={reverse}>
              <ConferencesColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading2}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Hollywood, CA - November 2024</ToolsHeading>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text2}</Text>
                </TextWrapper>
              </ConferencesColumn>
              <ConferencesColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img2}
                  draggable="false"/>
                </ImgWrapper>
              </ConferencesColumn>
            </ConferencesRow>
          </ConferencesContainer>
          </SwiperSlide>

          </Swiper>  
        </ConferencesSec>
  
        </>
      )
    }
    
    export default Conferences
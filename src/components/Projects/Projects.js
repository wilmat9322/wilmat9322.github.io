import React from 'react'
import "aos/dist/aos.css"; 
import { IconContext } from 'react-icons/lib';
import { AiFillPlayCircle } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import {
    ProjectsSec,
    ProjectContainer,
    ProjectsRow,
    ProjectsColumn,
    TextWrapper,
    Heading,
    SubHeading,
    Text,
    Tools,
    ToolsHeading,
    ToolList,
    Tool,
    ToolWrapper,
    ToolImage,
    ButtonContainer,
    Button,
    ImgWrapper,
    Img
  } from './ProjectsElements';

  const Projects = (props) => {
    const {
      id,
      heading,
      subHeading, 
      text,
      reverse,
      img,

      subHeading2, 
      text2,
      img2,
      
      subHeading3, 
      text3,
      img3,

      subHeading4, 
      text4,
      img4,
    } = props;

    return (
        <>
        <ProjectsSec id={id}>  
        <Swiper
        keyboard={{
          enabled: true,
        }}
        speed={1000}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: true,
        }}
        
        
        modules={[Keyboard, Autoplay, Pagination, Navigation]}> 
         <SwiperSlide>
          <ProjectContainer>   
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ProjectsRow reverse={reverse}>
              <ProjectsColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Made with:</ToolsHeading>
                        <ToolList>
                            <Tool> 
                                <ToolWrapper href="https://reactjs.org/" target="_blank" alt="ReactJS">
                                <ToolImage src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></ToolImage>
                                </ToolWrapper>

                                <ToolWrapper href="https://www.npmjs.com/" target="_blank" alt="npmjs">
                                <ToolImage src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/npm/npm-original-wordmark.svg"></ToolImage>                      
                                </ToolWrapper>

                                <ToolWrapper href="https://styled-components.com/" target="_blank" alt="HTML5">
                                <ToolImage src="https://styled-components.com/icon.png"></ToolImage>
                                </ToolWrapper>

                                <ToolWrapper href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" alt="HTML5">
                                <ToolImage src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original-wordmark.svg"></ToolImage>
                                </ToolWrapper>

                                <ToolWrapper href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" alt="CSS3">
                                <ToolImage src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"></ToolImage> 
                                </ToolWrapper>

                                <ToolWrapper href="https://www.javascript.com/" target="_blank" alt="JavaScript">
                                <ToolImage src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"></ToolImage> 
                                </ToolWrapper>

                                <ToolWrapper href="https://git-scm.com/" target="_blank" alt="Git">
                                <ToolImage src=" https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"></ToolImage>
                                </ToolWrapper>

                                <ToolWrapper href="https://aws.amazon.com/amplify/" target="_blank" alt="AWS Amplify">
                                <ToolImage src="https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-mobile-en-white_48x29@2x.png"></ToolImage>
                                </ToolWrapper>
                            </Tool>
                        </ToolList>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text}</Text>
                <ButtonContainer href="https://www.applivio.com" target="_blank">
                   <Button>Live Demo 
                   <IconContext.Provider
                    value={{
                      size: "15px",
                      style: { verticalAlign: "middle"},
                    }}
                  >
                    {" "}
                    <AiFillPlayCircle/>
                    </IconContext.Provider>
                    </Button>
                </ButtonContainer>

                </TextWrapper>
              </ProjectsColumn>
              <ProjectsColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img} alt="William Matos" 
                  draggable="false"/>
                </ImgWrapper>
              </ProjectsColumn>
            </ProjectsRow>
         
          </ProjectContainer>
          </SwiperSlide>

          <SwiperSlide>
          <ProjectContainer>   
          
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ProjectsRow reverse={reverse}>
              <ProjectsColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading2}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Research Paper</ToolsHeading>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text2}</Text>
                <ButtonContainer href="https://drive.google.com/file/d/1wx-9ZJmbRyzEg8PHIzBJSJ12NPIWP5mi/view?usp=share_link" target="_blank">
                   <Button>View Paper 
                   <IconContext.Provider
                    value={{
                      size: "15px",
                      style: { verticalAlign: "middle"},
                    }}
                  >
                    {" "}
                    <IoDocumentText/>
                    </IconContext.Provider>
                    </Button>
                </ButtonContainer>

                </TextWrapper>
              </ProjectsColumn>
              <ProjectsColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img2} alt="William Matos" 
                  draggable="false"/>
                </ImgWrapper>
              </ProjectsColumn>
            </ProjectsRow>
         
          </ProjectContainer>
          </SwiperSlide>

          <SwiperSlide>
          <ProjectContainer>   
          
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ProjectsRow reverse={reverse}>
              <ProjectsColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading3}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Research Paper</ToolsHeading>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text3}</Text>
                <ButtonContainer href="https://drive.google.com/file/d/1K0L1VBEH9Lz-DRPnMfJLDsGUE1yFdZwD/view?usp=share_link" target="_blank">
                   <Button>View Paper 
                   <IconContext.Provider
                    value={{
                      size: "15px",
                      style: { verticalAlign: "middle"},
                    }}
                  >
                    {" "}
                    <IoDocumentText/>
                    </IconContext.Provider>
                    </Button>
                </ButtonContainer>

                </TextWrapper>
              </ProjectsColumn>
              <ProjectsColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img3} alt="William Matos" 
                  draggable="false"/>
                </ImgWrapper>
              </ProjectsColumn>
            </ProjectsRow>
         
          </ProjectContainer>
          </SwiperSlide>

          <SwiperSlide>
          <ProjectContainer>   
          
          <Heading
             data-aos="fade-in"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}
                </Heading>
            <ProjectsRow reverse={reverse}>
              <ProjectsColumn>
                <TextWrapper
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900">
              
                  <SubHeading>
                    {subHeading4}
                  </SubHeading>

                  <Tools>
                    <ToolsHeading>Research Paper</ToolsHeading>
                  </Tools>

                  <Text
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="300"
                  data-aos-duration="900"
                  data-aos-easing="ease-in-sine">
                  {text4}</Text>
                <ButtonContainer href="https://drive.google.com/file/d/1Tt40kPDR-Egt7Kc5-k-BsAYURkRc7Mub/view?usp=share_link" target="_blank">
                   <Button>View Paper 
                   <IconContext.Provider
                    value={{
                      size: "15px",
                      style: { verticalAlign: "middle"},
                    }}
                  >
                    {" "}
                    <IoDocumentText/>
                    </IconContext.Provider>
                    </Button>
                </ButtonContainer>

                </TextWrapper>
              </ProjectsColumn>
              <ProjectsColumn>
                <ImgWrapper>
                  <Img
                  data-aos="fade-in"
                  data-aos-once="true"
                  data-aos-offset="100"
                  data-aos-duration="900" 
                  src={img4} alt="William Matos" 
                  draggable="false"/>
                </ImgWrapper>
              </ProjectsColumn>
            </ProjectsRow>
         
          </ProjectContainer>
          </SwiperSlide>
          </Swiper>  
        </ProjectsSec>
  
        </>
      )
    }
    
    export default Projects
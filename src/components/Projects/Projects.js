import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'
import { IconContext } from 'react-icons/lib';
import { AiFillPlayCircle } from "react-icons/ai";
import { RiCodeBoxFill } from "react-icons/ri";


import {
    ProjectsSec,
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
      img
    } = props;

    return (
        <>
        <ProjectsSec id={id}>
          <Container>
          <Heading
             data-aos="fade-left"
             data-aos-once="true"
             data-aos-offset="100"
             data-aos-duration="900">
                 {heading}&#128213;
                </Heading>
            <ProjectsRow reverse={reverse}>
              <ProjectsColumn>
                <TextWrapper
                data-aos="fade-left"
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
                  data-aos="fade-left"
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
          </Container>
        </ProjectsSec>
        </>
      )
    }
    
    export default Projects
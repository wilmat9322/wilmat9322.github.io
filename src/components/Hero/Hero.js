import React, { useEffect } from 'react'
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'
import { MdWork } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";
import { IconContext } from 'react-icons/lib';
import Typewriter from 'typewriter-effect';

import {
  HeroSec,
  HeroRow,
  HeroColumn,
  TextWrapper,
  Heading,
  SubHeading,
  BtnLink,
  Button,
  ImgWrapper,
  Img,
  Text,
  Span
} from './HeroElements';

const Hero = (props) => {
    useEffect(() => {
      AOS.init({ duration: 2000 }); 
    }, []);
  const {
		id,
    heading,
    subHeading, 
    text,
    reverse,
    button1,
    button2,
    img
	} = props;

  return (
    <>
    <HeroSec id={id}>
      <Container>
        <HeroRow reverse={reverse}>
          <HeroColumn>
            <TextWrapper>
            <Heading  
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-offset="100"
              data-aos-duration="900">
             {heading}&#128513;&#9996;
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
                data-aos-offset="100"
                data-aos-duration="900">
              {text}<Span></Span>
              <Typewriter
              options={{
              strings: ['Welcome to my e-portfolio', 'Graduate Student', 'Cybersecurity Student', 'Computer Science Graduate', 'Web Developer', 'CyberCorps SFS Recipient'],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "|",
                        }}/></Text>
              
                <BtnLink
                    href="https://drive.google.com/file/d/1DT9yPbYqk_2jvFUsy7GjX0arND7yxwQ1/view?usp=share_link"
                    target="_blank">
                    <Button>
                    {button1} 
                    <IconContext.Provider
                    value={{
                      size: "20px",
                      style: { verticalAlign: "middle", margin:"0px" },
                    }}>
                    {" "}
                    <MdWork/>
                  </IconContext.Provider>
                  </Button>
                </BtnLink>

                <BtnLink
                    href="https://github.com/wilmat9322"
                    target="_blank"
                >
                    <Button>
                    {button2} 
                    <IconContext.Provider
                    value={{
                      size: "20px",
                      style: { verticalAlign: "middle", margin:"0px" },
                    }}
                  >
                    {" "}
                    <VscGithub/>
                  </IconContext.Provider>
                  </Button>
                </BtnLink>
            </TextWrapper>
          </HeroColumn>
          <HeroColumn>
            <ImgWrapper>
              <Img 
                data-aos="fade-in"
                data-aos-once="true"
                data-aos-offset="100"
                data-aos-duration="900"
              src={img} alt="William Matos" 
              draggable="false"/>
            </ImgWrapper>
          </HeroColumn>
        </HeroRow>
      </Container>
    </HeroSec>
    </>
  )
}

export default Hero
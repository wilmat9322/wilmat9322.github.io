import React from 'react'
import { Container } from '../../globalStyles'

import {
  SkillSec,
  SkillWrapper,
  Heading,
  SubHeading,
  SkillContainer,
  SkillCard,
  SkillCardInfo,
  SkillCardImg,
  SkillCardImg2,
  SkillImage,
  SkillCardTitle,
  SkillCardDesc,
} from './SkillsElements';

const Skills = (props) => {
  const {
    id,
    heading,
    subHeading, 
    img1,
    img2,
    img3,
    channelTitle,
    channelDesc,
    channelTitle2,
    channelDesc2,
    channelTitle3,
    channelDesc3,
  } = props;
  return (
    <>
        <SkillSec id={id}>
          <Container>
          <SkillWrapper>
            <Heading
            data-aos="fade-in"
            data-aos-once="true"
            data-aos-offset="100"
            data-aos-duration="900">
            {heading}</Heading>
              <SubHeading>{subHeading}</SubHeading>
                <SkillContainer>
                  <SkillCard>
                    <SkillCardInfo>

                      <SkillCardImg
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="200">
                        <SkillImage img src={img1}/>
                      </SkillCardImg>

                      <SkillCardTitle
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                        {channelTitle}</SkillCardTitle>

                      <SkillCardDesc 
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                        {channelDesc}</SkillCardDesc>

                    </SkillCardInfo>
                  </SkillCard>

                  <SkillCard>
                    <SkillCardInfo>

                      <SkillCardImg2
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="500">
                        <SkillImage img src={img2}/>
                      </SkillCardImg2>

                      <SkillCardTitle
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                        {channelTitle2}</SkillCardTitle>

                      <SkillCardDesc
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900"
                      >{channelDesc2}</SkillCardDesc>

                    </SkillCardInfo>
                  </SkillCard>

                  <SkillCard>
                    <SkillCardInfo>

                    <SkillCardImg
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-offset="100"
                    data-aos-duration="1000">
                        <SkillImage img src={img3}/>
                      </SkillCardImg>

                      <SkillCardTitle
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                        {channelTitle3}</SkillCardTitle>

                      <SkillCardDesc
                      data-aos="fade-in"
                      data-aos-once="true"
                      data-aos-offset="100"
                      data-aos-duration="900">
                        {channelDesc3}</SkillCardDesc>

                    </SkillCardInfo>
                  </SkillCard>
                </SkillContainer>            
            </SkillWrapper>
          </Container>
        </SkillSec>
    </>
  )
}

export default Skills
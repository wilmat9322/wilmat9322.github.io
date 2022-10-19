import React from 'react'
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
    const fadeRight = {
      hidden: { opacity: 0, x: 100},
      visible: {opacity: 1, x: 0}
    };

    return (
        <>
        <AwardsSec id={id}>
          <Container>
            <AwardsRow reverse={reverse}>
              <AwardsColumn>
                <TextWrapper>
                <Heading
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >
                 {heading}
                </Heading>
                  <SubHeading
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  >
                    {subHeading}
                  </SubHeading>
                  <Text
                  variants={fadeRight}
                  initial='hidden'
                  animate='visible'
                  transition={{ duration: 1 }}
                  >{text}</Text>
                </TextWrapper>
              </AwardsColumn>
              <AwardsColumn>
                <ImgWrapper>
                  <Img src={img} alt="William Matos" draggable="false"/>
                </ImgWrapper>
              </AwardsColumn>
            </AwardsRow>
          </Container>
        </AwardsSec>
        </>
      )
    }

export default Awards
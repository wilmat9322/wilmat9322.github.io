import React from 'react'
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
            <Heading>Experiences &#128188;</Heading>
            <TimeLineContainer>

            <TimeLineItem>
                <ImgWrapper>
                <TimeImg src={img}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    
                    <Tag>{date}</Tag>
                    <Time>{place}</Time>
                    <Text>{position}</Text>
                  
                    <TimeLink>
                    {description}
                    </TimeLink>
                    <Circle/>
                    
                </TimeLineContent>
            </TimeLineItem>

             <TimeLineItem2>
                <TimeLineContent2>
                <Tag>{date2}</Tag>
                    <Time>{place2}</Time>
                    <Text2>{position2}</Text2>
                        <TimeLink>
                        {description2}
                        </TimeLink>
        
                    <Circle2/>
                </TimeLineContent2>
                <ImgWrapper2>
                <TimeImg src={img2}></TimeImg>
                </ImgWrapper2>
            </TimeLineItem2>


            <TimeLineItem>
            <ImgWrapper>
                <TimeImg src={img3}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    <Tag>{date3}</Tag>
                    <Time>{place3}</Time>
                    <Text>{position3}</Text>
                   
                        <TimeLink>
                        {description3}
                        </TimeLink>

                    <Circle/>
                </TimeLineContent>
            </TimeLineItem>


            <TimeLineItem2>
                <TimeLineContent2>
                    <Tag>{date4}</Tag>
                    <Time>{place4}</Time>
                    <Text2>{position4}</Text2>
                    <Text2>{mentor}</Text2>
        
                        <TimeLink>
                        {description4}
                        </TimeLink>
        
                    <Circle2/>
                </TimeLineContent2>
                <ImgWrapper2>
                <TimeImg src={img4}></TimeImg>
                </ImgWrapper2>
            </TimeLineItem2>

            <TimeLineItem>
            <ImgWrapper>
                <TimeImg src={img5}></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    <Tag>{date5}</Tag>
                    <Time>{place5}</Time>
                    <Text>{position5}</Text>
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
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
    TimeLink,
    Circle,
    Circle2,
    TimeLineContainer,
    TimeImg,
    ImgWrapper
  } from './ExperiencesElements';

  const Experiences = (props) => {
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
    <ExperienceSec id={id}>
        <Container>
            <Heading>Experiences &#128188;</Heading>
            <TimeLineContainer>

            <TimeLineItem>
                <ImgWrapper>
                <TimeImg src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-1/12924332_1195196020492911_3494302905941983372_n.png?stp=dst-png_p148x148&_nc_cat=111&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=u-d63XYye8cAX-qNgRn&_nc_ht=scontent-iad3-1.xx&oh=00_AfDg0BVfmG047LbPMhkzc9HILH4il3FfCyvPrH6afBmWQQ&oe=63B34C7B'></TimeImg>
                </ImgWrapper>
                <TimeLineContent>
                    
                    <Tag>June 2022 – July 2022</Tag>
                    <Time>Inter American University of Puerto Rico-Barranquitas</Time>
                    <Text>I worked with IT Systems (Windows Computers) on college campus while
                    giving IT Support. I troubleshooted network problems (DNS and IP Addresses) and,
                    installed, maintained, and upgraded computer hardware and software.</Text>
                  
                        <TimeLink>

                        </TimeLink>
                        <Circle/>
                    
                </TimeLineContent>
            </TimeLineItem>

             <TimeLineItem2>
                
                <TimeLineContent2>
                <Tag>June 2022 – July 2022</Tag>
                    <Time>Inter American University of Puerto Rico-Barranquitas</Time>
                    <Text>I worked with IT Systems (Windows Computers) on college campus while
                    giving IT Support. I troubleshooted network problems (DNS and IP Addresses) and,
                    installed, maintained, and upgraded computer hardware and software.</Text>
                   
                        <TimeLink>
                      
                        </TimeLink>
        
                    <Circle2/>
                </TimeLineContent2>
                <ImgWrapper>
                <TimeImg src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-1/12924332_1195196020492911_3494302905941983372_n.png?stp=dst-png_p148x148&_nc_cat=111&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=u-d63XYye8cAX-qNgRn&_nc_ht=scontent-iad3-1.xx&oh=00_AfDg0BVfmG047LbPMhkzc9HILH4il3FfCyvPrH6afBmWQQ&oe=63B34C7B'></TimeImg>
                </ImgWrapper>
            </TimeLineItem2>


            <TimeLineItem>
                <TimeLineContent>
                    <Tag>Experience #1</Tag>
                    <Time>Experience #1</Time>
                    <Text>Experience #1</Text>
                   
                        <TimeLink>
                        Experience #1
                        </TimeLink>
        
                    <Circle/>
                </TimeLineContent>
            </TimeLineItem>


            <TimeLineItem2>
                <TimeLineContent2>
                    <Tag></Tag>
                    <Time>Experience #1</Time>
                    <Text>Experience #1</Text>
                   
                        <TimeLink>
                        Experience #1
                        </TimeLink>
        
                    <Circle2/>
                </TimeLineContent2>
            </TimeLineItem2>

            <TimeLineItem>
                <TimeLineContent>
                    <Tag>Experience #1</Tag>
                    <Time>Experience #1</Time>
                    <Text>Experience #1</Text>
                   
                        <TimeLink>
                        Experience #1
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
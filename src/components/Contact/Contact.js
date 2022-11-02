import React from 'react'
import { Container } from '../../globalStyles'
import {
    ContactSec,
    ContactRow,
    ContactColumn,
    ContactContainer,
    TextWrapper,
    Heading,
    SubHeading,
    InputBox,
    InputMessage,
    ButtonContainer, 
    Button
} from './ContactElements';

const Contact = () => {
  return (
    <>
    <ContactSec>
        <Container>
            <ContactContainer>
                    <TextWrapper>
                        <Heading>
                            Contact Me
                        </Heading>
                        <SubHeading>
                        Fill out the folling form
                        </SubHeading>
                    </TextWrapper>
                    <ContactRow>
                        <ContactColumn>
                            <InputBox placeholder="Name *" required/>
                            <InputBox placeholder="Email *" required/>
                            <InputBox placeholder="Phone"/>
                        </ContactColumn>
                        <ContactColumn>
                            <InputMessage placeholder="Message *" textarea=""required/>
                        </ContactColumn>
                        <ButtonContainer>
                                <Button>This</Button>
                            </ButtonContainer>
                    </ContactRow>
            </ContactContainer>
        </Container>
    </ContactSec>
    </>
  )
}

export default Contact;
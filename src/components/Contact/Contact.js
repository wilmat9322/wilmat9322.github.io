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
    MessageContainer,
    Button,
    LabelName,
    LabelEmail,
    LabelPhone,
    LabelMessage,
} from './ContactElements';

const Contact = () => {
  return (
    <>
    <ContactSec>
        <Container>
            <ContactContainer>
            <Heading>
                    Contact Me &#128231;
                        </Heading>
                        <SubHeading>
                        Fill out the following form
                        </SubHeading>
                    <ContactRow>
                        <ContactColumn>
                        <TextWrapper>
                        
                    </TextWrapper>
                            <LabelName>Name</LabelName>
                            <InputBox type="text" placeholder="Name *" required/>
                            <LabelEmail>Email</LabelEmail>
                            <InputBox type="email" placeholder="Email *" required/>
                            <LabelPhone>Phone Number</LabelPhone>
                            <InputBox type="tel" placeholder="Phone Number" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        </ContactColumn>
                        <ContactColumn>
                            <MessageContainer>
                            <LabelMessage>Message</LabelMessage>
                            <InputMessage type="message" placeholder="Message *" rows="4" cols="50" maxlength={50}/>
                            </MessageContainer>
                            <ButtonContainer>
                                <Button type="submit" value="Submit">Submit</Button>
                            </ButtonContainer>
                        </ContactColumn>
                       
                    </ContactRow>
            </ContactContainer>
        </Container>
    </ContactSec>
    </>
  )
}

export default Contact;
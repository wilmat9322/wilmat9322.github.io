import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'
import {
    ContactSec,
    ContactRow,
    ContactColumn,
    ContactContainer,
    TextWrapper,
    Heading,
    SubHeading,
    StyledContactForm,
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
        const form = useRef();
    
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_6trqpzf', 'template_a5y1lgq', form.current, 'J0rBB4_YzQLZAiRSR')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        };
        const shoot = () => {
            alert("Great Shot!");
          }
  return (
    <>
    <ContactSec>
        <Container>
            <ContactContainer>
            <Heading
            data-aos="fade-in"
            data-aos-once="true"
            data-aos-offset="100"
            data-aos-duration="900">
                    Contact Me &#128231;
                        </Heading>
                        <SubHeading>
                        Fill out the following form
                        </SubHeading>
                        <StyledContactForm>
                    <form ref={form} onSubmit={sendEmail}>        
                            <LabelName>Name</LabelName>
                            <InputBox type="text" placeholder="Name *" name="user_name" required/>
                            <LabelEmail>Email</LabelEmail>
                            <InputBox type="email" placeholder="Email *" name="user_email" required/>
                            <LabelPhone>Phone Number</LabelPhone>
                            <InputBox type="tel" placeholder="Phone Number" name="phone"/>
                            <LabelMessage>Message</LabelMessage>
                            <InputMessage type="message" placeholder="Message *" rows="4" cols="50" maxlength={50} name="message" required/>
                           
                            <ButtonContainer>
                                <Button type="submit" value="Submit">Submit</Button>
                            </ButtonContainer>     
                                         
                        </form>
                        
                        </StyledContactForm>
            </ContactContainer>
        </Container>
    </ContactSec>
    </>
  )
}

export default Contact;
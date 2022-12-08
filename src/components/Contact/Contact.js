import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "aos/dist/aos.css"; 
import { Container } from '../../globalStyles'
import {
    ContactSec,
    ContactContainer,
    Heading,
    SubHeading,
    StyledContactForm,
    InputBox,
    InputMessage,
    ButtonContainer, 
    Button,
    LabelName,
    LabelEmail,
    LabelPhone,
    LabelMessage,
} from './ContactElements';

const Contact = (props) => {
    const {
        id,
      } = props;
        const form = useRef();
    
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_yeliq64', 'template_i3tjohl', form.current, 'Is6jkaIhZV8jXIJ1K')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
        };
  
  return (
    <>
    <ContactSec id={id}>
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
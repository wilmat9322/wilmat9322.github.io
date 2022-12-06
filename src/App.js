import React, { useState } from 'react'
import GlobalStyle from './globalStyles' //Modulo que carga estilos globales NO TOCAR
import {Navbar, Sidebar, Hero, About, Education, Awards, Skills, Projects, Experiences, Contact, Footer} from './components/manager';
import {BrowserRouter as Router} from 'react-router-dom'
import { sectionHero, sectionAbout, sectionEducation, sectionAwards, sectionSkills, sectionProjects, sectionExperiences } from './data/homeData';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <Router>
      <GlobalStyle /> 
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <Hero {...sectionHero}/>
      <About {...sectionAbout}/>
      <Education {...sectionEducation}/>
      <Awards {...sectionAwards}/>
      <Skills {...sectionSkills}></Skills>
      <Projects {...sectionProjects}/>
      <Experiences {...sectionExperiences}/>
      <Contact />
      <Footer />
   </Router>
  );
}

export default App;
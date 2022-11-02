import React, { useState } from 'react'
import GlobalStyle from './globalStyles' //Modulo que carga estilos globales NO TOCAR
import {Navbar, Sidebar, Hero, About, Awards, Projects, Contact, Footer} from './components/manager';
import {BrowserRouter as Router} from 'react-router-dom'
import { sectionHero, sectionAbout, sectionAwards, sectionProjects } from './data/homeData';

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
      <Awards {...sectionAwards}/>
      <Projects {...sectionProjects}/>
      <Contact />
      <Footer />
   </Router>
  );
}

export default App;
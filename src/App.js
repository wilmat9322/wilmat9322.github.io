import React, { useState } from 'react'
import GlobalStyle from './globalStyles' //Modulo que carga estilos globales NO TOCAR
import {Navbar, Sidebar, Hero, About, Footer} from './components/manager';
import {BrowserRouter as Router} from 'react-router-dom'
import { sectionHero } from './data/homeData';
import { sectionAbout } from './data/homeData';

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
      <Footer/>
   </Router>
  );
}

export default App;
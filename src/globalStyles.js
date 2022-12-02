import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-scroll'

//Aquí se encuentran todos los estilos globales que pueden ser llamados en los archivos que terminan en .elements.js

const GlobalStyle = createGlobalStyle`
/* Propiedades para toda la página, asigna fuente de letra y ajusta espacios demás */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Source Sans Pro', sans-serif;
    font-weight: 500;
}
//Propiedades del cuerpo de la página para que no tenga espacios de más
body {
    width: 100%;
    margin: 0;
    padding: 0;
}
`;

//Propiedades de un contenedor global 
export const FooterCon = styled.div`
width: 100%;
margin-right: auto; 
margin-left: auto;
background: linear-gradient(-50.49deg, rgba(255, 255, 255, 0.03) 81.89%, rgba(196, 196, 196, 0.18) 100.01%);
color: #0000;
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto; 
margin-left: auto;
padding-right: 120px;
padding-left: 120px;
padding-top: 70px;
padding-bottom: 70px;
background: linear-gradient(-50.49deg, rgba(255, 255, 255, 0.03) 81.89%, rgba(196, 196, 196, 0.18) 100.01%);
backdrop-filter: blur(30px);
color: #0000;
border-radius: 25px;

    @media screen and (max-width: 1200px) {
    padding-right: 30px;
    padding-left: 30px;
    margin-right: 30px;
    margin-left: 30px;
    }
    
    @media screen and (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: 30px;
    margin-left: 30px;
    }
`;

export default GlobalStyle;

export const Button = styled(Link)`
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    font-weight: bold;
    text-decoration: none;
    outline: none;
    border: none;
    background-color: #DA2D2D;
    box-shadow: inset 0 0 0 0 #0000;
    transition: ease-in-out 0.30s;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        box-shadow: inset 150px 0 0 0 #F05454;
        transition: all 0.20s ease-out;
        color: #fff;
    }
    
`
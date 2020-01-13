import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import Footer from './Components/Footer'
import { Column, Row, Container } from './Components/Grid';
import Image from './Components/Image'
import images from './image'



const App = () => {
  return (
  <div className="mx-auto">
    <Nav />
      <Jumbotron />
       <Container>
         <Row>
          <Image/>    
        </Row>
       </Container>
      <Footer />
  </div>
        );
  };
export default App;

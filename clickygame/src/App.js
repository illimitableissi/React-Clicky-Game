import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import { Column, Row, Container } from './Components/Grid';
import Image from './Components/Image'
import './images'

const App = () => {
  return (
  <div>
    <Nav />
      <Jumbotron />
       <Container>
         <Row>
          <Image src={images.one}/>
          <Image />
          <Image />
          <Image />  
         </Row>
         <Row>
          <Image />
          <Image />
          <Image />
          <Image />     
         </Row>
         <Row>
          <Image />  
          <Image />  
          <Image />
          <Image />     
        </Row>
       </Container>
      <Footer />
  </div>
        );
  };
export default App;

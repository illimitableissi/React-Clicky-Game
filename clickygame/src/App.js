import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import { Column, Row, Container } from './Components/Grid';

const App = () => {
  return (
  <div>
    <Nav />
      <Jumbotron />
       <Container>
         <Row>
           <Column>
           
           </Column>
         </Row>
         <Row>
           <Column>
           
           </Column>
         </Row>
         <Row>
           <Column>
           
           </Column>
         </Row>
       </Container>
  </div>
        );
  };
export default App;

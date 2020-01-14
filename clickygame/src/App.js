import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Jumbotron from './Components/Jumbotron'
import Footer from './Components/Footer'
import { Column, Row, Container } from './Components/Grid';
import Image from './Components/Image'
import images from './image'

console.log(images)


class App extends React.Component{
  state = {
    images,
    message: "Click any image to start!",
    score: 0,
    topScore: 0
    };
  
    gameOver = () => {
      if (this.state.score > this.state.topScore) {
        this.setState({topScore: this.state.score});
      }
      this.state.images.forEach(img => {
        img.count = 0;
      });
      this.setState({score: 0, message:"You already clicked that!?!"});
      return true;
    }
  
    clickCount = id => {
      this.state.images.find((o, i) => {
        if (o.id === id) {
          if(images[i].count === 0){
            images[i].count = images[i].count + 1;
            this.setState({score : this.state.score + 1, message:"Keep it going!"});
            this.state.images.sort(() => Math.random() - 0.5)
            return true; 
          } else {
            this.gameOver();
          }
        }
      });
    }


render() {
  return (
    <div>
      <Nav message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
          <Container>
            <Row>
              {this.state.images.map(img => (
                <Image id={img.id} alt={img.alt} image={img.imgUrl} clickCount={this.clickCount} />
              ))}         
            </Row>
          </Container>
        <Footer />
    </div>
  );
}



}

export default App;
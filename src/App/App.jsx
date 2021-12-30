import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../Menu/Menu";
import Home from "../Home/Home";
import About from "../About/About";
import { Route, Routes } from "react-router-dom";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        
        <Container>
          <Row> 
            <Col><h1>欢迎光临</h1></Col>
          </Row>
          <Row>
            <Col xs="2">
              <Menu/>
            </Col>
            <Col xs="10">
              <div>
              <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
              </Routes>
              </div>
            </Col>
            
          </Row>
        </Container>
      
      </div>
    );
  }
}

import React, { Component } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter 
} from "reactstrap";
import styled from 'styled-components';
import Onboarding from "./Onboarding.js";
import { Link } from "react-router-dom";
import Login from './Login'
import Footer from './Footer'
import EvaluationQuestions from "./EvaluationQuestions.js";
import { LandingGrid, LandingReg, ModalHeaderFix } from "./Styled";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <div className="LandingBackground">
          <LandingGrid >
            <Navbar light expand="md">
              <h3 style={{color:"white"}}>Dating</h3>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button size="sm" outline color="light" onClick={this.toggle} className="navBtn">Login</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                      <ModalHeaderFix toggle={this.toggle}>Login</ModalHeaderFix>
                      <ModalBody>
                        <Login handleLogin={this.props.handleLogin}/>
                      </ModalBody>
                    </Modal>
                  </NavItem>
              </Nav>
            </Navbar>
            <LandingReg>
              <div>
                <h1 style={{color:"white"}}>Welcome to the next biggest dating site. 
                Lorem ipsum dolor sit amet, mauris mattis nec non, scelerisque nullam placerat ante tincidunt, 
                curabitur vitae neque lacus velit et congue, tempor ipsum. Dictum scelerisque laoreet euismod velit et illum. 
                Molestie morbi ipsum nullam nam curabitur. 
                </h1>
              </div>
              {this.props.children}
            </LandingReg>
          </LandingGrid>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default LandingPage;

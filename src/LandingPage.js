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
import ToS from './ToS'
import EvaluationQuestions from "./EvaluationQuestions.js";
import { LandingGrid, LandingReg, LandingLink, ModalHeaderFix, StyledLink, H3L,H2 } from "./Styled";


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
              <H3L style={{color:"white"}}>DecoDating</H3L>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline color="light" onClick={this.toggle} className="navBtn">Login</Button>
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
                <div style={{color:"white", textAlign:"left"}}>
                  <h1>Welcome to the next biggest dating site.</h1>
                  <div> 
                    Lorem ipsum dolor sit amet, mauris mattis nec non, scelerisque nullam placerat ante tincidunt, 
                    curabitur vitae neque lacus velit et congue, tempor ipsum. Dictum scelerisque laoreet euismod velit et illum. 
                  </div>
                </div>
              </div>
              <div>
              {this.props.children}
              </div>
            </LandingReg>
          </LandingGrid>
      </div>
      <div>
        <h2>For more information</h2>
        <LandingLink to="/termofservices"> Term of Services </LandingLink>
        <LandingLink to="/faq"> Frequently Asked Questions </LandingLink>
        <LandingLink to="/contacts"> Contacts </LandingLink>
      </div>
      </div>
    );
  }
}

export default LandingPage;

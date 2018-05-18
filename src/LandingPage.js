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
      <LandingGrid>
        <Navbar light expand="md">
          <NavbarBrand>Dating</NavbarBrand>
          <Nav className="ml-auto" navbar>
          <NavItem>
            <Button size="sm" outline color="primary" onClick={this.toggle} className="navBtn">Login</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeaderFix toggle={this.toggle}>Register</ModalHeaderFix>
              <ModalBody>
                <Login/>
              </ModalBody>
              </Modal>
              </NavItem>
          </Nav>
        </Navbar>
        <LandingReg>
          <h1>Welcome to the next biggest dating site.</h1>
          {this.props.children}
        </LandingReg>
        <div>
          <h1>Some Tags</h1>
          About FAQ Contact
        </div>
      </LandingGrid>
    );
  }
}

export default LandingPage;

import React, {Component} from 'react'
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import Register from './Register.js'
import Onboarding from './Onboarding.js'
import EvaluationQuestions from './EvaluationQuestions.js'
import { LandingGrid, LandingReg } from './Styled';

class LandingPage extends React.Component{
  render(){
    return(
      <LandingGrid>
        <Navbar light expand="md">
          <NavbarBrand>Dating</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button size="sm"outline color="dark" className="navBtn">
                  Link
                </Button>
              </NavItem>
            </Nav>
        </Navbar>
        <LandingReg>
          <h1>Welcome to the next biggest dating site.</h1>
          <Onboarding/>
        </LandingReg>
        <div>
          <h1>Some Tags</h1>
          About FAQ Contact
        </div>
      </LandingGrid>
    )
  }
}

export default LandingPage
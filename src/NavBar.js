import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
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
} from 'reactstrap';
import styled from 'styled-components';
import Search from './Search'
import {ModalHeaderFix} from './Styled'

const NavModal = styled(Modal)`
  && {
    margin: 0;
    max-width: none;
  }
`;
  
class NavBar extends React.Component{
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      modal: !this.state.modal
    });
  }
  render(){
    return(
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Dating</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/main">Main</Link>
                </Button>
              </NavItem>
              <NavItem>
            <Button size="sm" outline color="primary" onClick={this.toggle} className="navBtn">Search</Button>
              <NavModal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeaderFix toggle={this.toggle}>Please filled in the form to find your best match!</ModalHeaderFix>
              <ModalBody>
                <Search handleSearch={this.props.handleSearch} />
              </ModalBody>
              <ModalFooter>
                <Button size="sm" color="primary" onClick={this.toggle} onSubmit={this.props.handleSearch} className="navBtn">Search</Button>{' '}
                <Button size="sm" color="primary" onClick={this.toggle} className="navBtn">Cancel</Button>
              </ModalFooter>
              </NavModal>
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/">Messages</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/">Notification</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/">Logout</Link>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    
      </div>
    )
  }
}

export default NavBar
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
import {ModalHeaderFix, StyledLink, NavButton, H3} from './Styled'

const NavModal = styled(Modal)`
  && {
    /* margin: 0;
    max-width: none; */
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
  logout = () => {
    fetch('/logout', {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) this.props.history.push('/');
    })
  }
  render(){
    return(
      <div>
        <Navbar className="navBarCSS" color="white" light expand="md">
          <H3>DecoDating</H3>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <button className="navBtns">
                <StyledLink to="/main">Main</StyledLink>
              </button>
            <NavButton onClick={this.toggle} className="navSearchBtn">Search</NavButton>
              <NavModal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeaderFix toggle={this.toggle}>Please filled in the form to find your next best match!</ModalHeaderFix>
              <ModalBody>
                <Search handleSearch={this.props.handleSearch} />
              </ModalBody>
              <ModalFooter>
                <NavButton onClick={this.toggle} onSubmit={this.props.handleSearch} className="navBtns">Enter</NavButton>{' '}
                <Button onClick={this.toggle} className="navBtns">Cancel</Button>
              </ModalFooter>
              </NavModal>
<<<<<<< HEAD
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/messages">Messages</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn">
                  <Link to="/">Notification</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm" outline color="light" className="navBtn" onClick={this.logout}>
                  Logout
                </Button>
              </NavItem>
=======
                <button className="navBtns">
                  <StyledLink to="/messages">Messages</StyledLink>
                </button>
                <button className="navBtns">
                  <StyledLink to="/">Notification</StyledLink>
                </button>
                <button className="navBtns">
                  <StyledLink to="/">Logout</StyledLink>
                </button>
>>>>>>> c6749d27162ab6ceacbf63214dfa495d3fc04c5a
            </Nav>
          </Collapse>
        </Navbar>
    
      </div>
    )
  }
}

export default NavBar
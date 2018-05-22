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
import {ModalHeaderFix, StyledLink, NavButton, NavLogoLink, H3Logo, LogoutButton} from './Styled'

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
        <NavLogoLink className="NavLink" to="/main">
          <H3Logo>DecoDating</H3Logo>
        </NavLogoLink>
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
                <button className="navBtns">
                  <StyledLink to="/messages">Messages</StyledLink>
                </button>
                <button className="navBtns">
                  <StyledLink to="/">Notification</StyledLink>
                </button>
                <LogoutButton className="navBtns" onClick={this.logout}>
                  Logout
                </LogoutButton>
            </Nav>
          </Collapse>
        </Navbar>
    
      </div>
    )
  }
}

export default NavBar
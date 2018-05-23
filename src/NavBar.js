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
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
          <H3Logo><Link style={{textDecoration:"none"}} to="/"><span><i className="fas fa-heart"></i></span> DecoDating </Link></H3Logo>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <button className="navBtns">
                <StyledLink to="/main">Main <span><i class="fas fa-home" fa-sm></i></span></StyledLink>
              </button>
            <NavButton onClick={this.toggle} className="navSearchBtn">Search <span><i class="fas fa-search" fa-sm></i></span></NavButton>
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
                {/* <button className="navBtns">
                  <StyledLink to="/">Notification</StyledLink>
                </button> */}
                <LogoutButton className="navBtns" onClick={this.logout}>
                  Logout
                  <span> <i class="fas fa-sign-out-alt" fa-sm></i></span>
                </LogoutButton>
            </Nav>
          </Collapse>
        </Navbar>
    
      </div>
    )
  }
}

export default NavBar
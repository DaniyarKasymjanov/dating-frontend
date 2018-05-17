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
import Search from './Search'
  
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
            <Button size="sm" outline color="primary" onClick={this.toggle} className="navBtn">Search</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Please filled in the form to find your best match!</ModalHeader>
              <ModalBody>
                <Search/>
              </ModalBody>
              <ModalFooter>
                <Button size="sm"color="light" onClick={this.toggle} onSubmit={this.props.handleSearch} className="navBtn">Search</Button>{' '}
                <Button size="sm"color="light" onClick={this.toggle} className="navBtn">Cancel</Button>
              </ModalFooter>
              </Modal>
              </NavItem>
              <NavItem>
                <Button size="sm"outline color="light" className="navBtn">
                  <Link to="/">Home</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm"outline color="light" className="navBtn">
                  <Link to="/">Messages</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm"outline color="light" className="navBtn">
                  <Link to="/">Notification</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button size="sm"outline color="light" className="navBtn">
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
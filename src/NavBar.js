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
          <NavbarBrand href="/">1NSTAND</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
            <Button outline color="primary" class="btn btn-primary btn-sm" onClick={this.toggle}>Search</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Please filled in the form to find your best match!</ModalHeader>
              <ModalBody>
                <Search/>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" class="btn btn-primary btn-sm" onClick={this.toggle} onSubmit={this.props.handleSearch}>Search</Button>{' '}
                <Button color="secondary" class="btn btn-primary btn-sm" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </Modal>
              </NavItem>
              <NavItem>
                <Button outline color="primary" class="btn btn-primary btn-sm">
                  <Link to="/">Home</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button outline color="primary" class="btn btn-primary btn-sm">
                  <Link to="/">Inbox</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button outline color="primary" class="btn btn-primary btn-sm">
                  <Link to="/">Notification</Link>
                </Button>
              </NavItem>
              <NavItem>
                <Button outline color="primary" class="btn btn-primary btn-sm">
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
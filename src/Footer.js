import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {FooterCSS, StyledFooterLink, H2} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS className={this.props.className}>
        <H2>Need more informations? Check out these links!</H2>
        <StyledFooterLink to="/termofservices">Term of Services </StyledFooterLink> 
        <StyledFooterLink to="/faq">Frequently Asked Questions </StyledFooterLink>
        <StyledFooterLink to="/contacts">Contacts </StyledFooterLink>
      </FooterCSS>
    );
  }
}

export default Footer;

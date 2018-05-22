import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {FooterCSS, StyledLink, H2} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS className={this.props.className}>
        <H2>For more details</H2>
        <StyledLink to="/termofservices">Term of Services </StyledLink> 
        <StyledLink to="/faq">Frequently Asked Questions </StyledLink>
        <StyledLink to="/contacts">Contacts </StyledLink>
      </FooterCSS>
    );
  }
}

export default Footer;

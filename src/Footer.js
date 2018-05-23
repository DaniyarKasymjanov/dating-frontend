import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {FooterCSS, StyledFooterLink, H2} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS style={{backgroundColor:"white",paddingTop: "25px",paddingBottom: "25px", color: "#00334C",margin:"0px", borderTop: "3px solid #005D8C"}} className={this.props.className}>
        <H2  style={{color:"#00334C"}}>Need more informations? Check out these links!</H2>
        <StyledFooterLink style={{color:"#00334C"}} to="/termofservices">Term of Services </StyledFooterLink> 
        <StyledFooterLink style={{color:"#00334C"}} to="/faq">Frequently Asked Questions </StyledFooterLink>
        <StyledFooterLink style={{color:"#00334C"}} to="/contacts">Contacts </StyledFooterLink>
      </FooterCSS>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {FooterCSS} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS>
        <h1>Some Tags</h1>
        <Link to="/termofservices">Term of Services </Link> FAQ Contact
      </FooterCSS>
    );
  }
}

export default Footer;

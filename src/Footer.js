import React, { Component } from "react";
import {FooterCSS} from './Styled'

class Footer extends Component {
  render() {
    return (
      <FooterCSS>
        <h1>Some Tags</h1>
        About FAQ Contact
      </FooterCSS>
    );
  }
}

export default Footer;

import React from "react";
import Footer from "./Footer";
import { StyledContacts, H2 } from "./Styled";
import {Button} from "reactstrap"
 

class Contacts extends React.Component {
  render() {
    return (
      <div>
        <StyledContacts>
          <div>
            <img className="mugshot" src="https://media.licdn.com/dms/image/C4D03AQF8OHNB7T4B9w/profile-displayphoto-shrink_800_800/0?e=1532563200&v=beta&t=dq7Gt3AeArMyGV3U_Jkrq19o0-Yx-kBBwPnTLxUNkAc" />
            <h4>Adam Harper</h4>
            <a href="https://www.linkedin.com/in/adam-harper/"><Button outline color="primary">View LinkedIn's profile</Button></a>
          </div>
          <div>
            <img className="mugshot" src="https://media.licdn.com/dms/image/C5603AQGHytiLK49f5A/profile-displayphoto-shrink_800_800/0?e=1532563200&v=beta&t=IlBfeI_YuqCL7VSSQaIQ3jcqNJZp7-FA0-njESeiVFA"/>
            <h4>Daniyar Kasymjanov</h4>
            <a href="https://www.linkedin.com/in/daniyar-kasymjanov/"><Button outline color="primary">View LinkedIn's profile</Button></a>
          </div>
          <div>
            <img className="mugshot" src="https://media.licdn.com/dms/image/C4D03AQH1-91Briww9A/profile-displayphoto-shrink_800_800/0?e=1532563200&v=beta&t=WSP2t-WswvizU2SrIXUhN1XXLp8pJQHqlRlGqYRs2Xc"/>
            <h4>Dickson Lee</h4>
            <a href="https://www.linkedin.com/in/dickson-thomas-lee/"><Button outline color="primary">View LinkedIn's profile</Button></a>
          </div>
        </StyledContacts>
        <Footer />
      </div>
    );
  }
}

export default Contacts;

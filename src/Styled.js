import styled from "styled-components";
import { ModalHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 85%;
  margin: 10px 5% 0;
  grid-gap: 10px;
  min-height: 85vh;
`;

const MainContentGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;
const ProfileDisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: rgb(255, 128, 128, 0.691);
  min-height: 85vh;
  margin-bottom: 10px;
`;

const LandingReg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 10%;
  grid-gap: 50px;
`;

const LandingLink = styled(Link)`
  color: black;
`

const SpotlightGrid = styled.div`
  margin: 0 10px;
`;
const ModalHeaderFix = styled(ModalHeader)`
  && {
    background: #ff8080;
    color: white;
  }
`;

const ProfileImage = styled.div`
  max-width: 200px;
  & > img {
    max-width: 100%;
  }
`;

const ChatGrid = styled.div`
  display: grid;
  grid-template-columns: auto 85%;
  grid-template-rows: auto 1fr;
  margin: 10px 5% 0;
  grid-gap: 10px;
`;

const FooterCSS = styled.div`
  margin: 120px 0 0 0;
`;

const NavButton = styled(Button)`
  && {
    color: white;
    &:hover {
      color: white;
    }
    background: #ff8080;
    border: 2px solid #ff8080;
    border-radius: 12px 0px;
  }
`;

const H1 = styled.h1`
  && {
    border-bottom: 1px solid #DDD;
  }
`;
const H2 = styled.h2`
  && {
    color: #ff8080;
  }
`;
const H3 = styled.h3`
  && {
    color: #ff8080;
  }
`;

const StyledLink = styled(Link)`
  color: #ff8080;
  &:hover {
    color: #ff8080;
  }
`;

const StyledContent = styled.div`
  border: 0.5px solid #ddd;
`;

export {
  Grid,
  MainGrid,
  LandingGrid,
  LandingReg,
  LandingLink,
  SpotlightGrid,
  ModalHeaderFix,
  MainContentGrid,
  ChatGrid,
  ProfileDisplayGrid,
  ProfileImage,
  FooterCSS,
  NavButton,
  H1,
  H2,
  H3,
  StyledLink,
  StyledContent
};

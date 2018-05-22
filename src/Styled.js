import styled from "styled-components";
import { ModalHeader, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 70%;
  margin: 10px 5% 0;
  grid-gap: 10px;
  min-height: 85vh;
`;

const MainContentGrid = styled.div`
  /* display: grid;
  grid-template-rows: auto 1fr; */
`;
const ProfileDisplayGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 25px 20px 0px 30px;
  border: 0.5px solid #DDD;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: rgb(102, 204, 255, 0.7);
  min-height: 85vh;
  margin-bottom: 10px;
`;

const LandingReg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 10%;
  grid-gap: 200px;
`;

const LandingLink = styled(Link)`
  color: black;
  margin: 0px 70px;
`

const SpotlightGrid = styled.div`
  margin: 15px 10px;
  
`;
const ModalHeaderFix = styled(ModalHeader)`
  && {
    background: #0088cc;
    color: white;
  }
`;

const ProfileImage = styled.div`
  max-width: 300px;
  height: 150px;
  & > img {
    max-width: 100%;
    height: 100%;
  }
`;

const ChatGrid = styled.div`
  display: grid;
  grid-template-columns: auto 85%;
  grid-template-rows: auto 1fr;
  margin: 10px 5% 0;
  grid-gap: 10px;
`;

const  viewMultiple = styled.div`
object-fit: cover;
width: 100%;
height: 300px;
`;


const FooterCSS = styled.div`
  margin: 120px 0 30px 0;
  border-top: 0.5px solid #0088cc;
`;

const NavButton = styled(Button)`
  && {
    color: white;
    &:hover {
      color: white;
      text-decoration: none;
    }
    background: #0088cc;
    border: 2px solid #0088cc;
    border-radius: 12px 0px;
  }
`;

const RegButton = styled(Button)`
  && {
    color: white;
    &:hover {
      color: white;
      background-color:#0088cc;
      border: 2px solid #0088cc;
    }
    background: #0088cc;
    border: 2px solid #0088cc;
  }
`;

const LogoutButton = styled(Button)`
  && {
    color: #0088cc;
    &:hover {
      color: #0088cc;
      background-color: white;
    }
    background: white;
    border: none;
    text-decoration: none;
  }
`;

const NavLogoLink = styled(Link)`
    && {
    color: #0088cc;
    &:hover {
      color: #0088cc;
      background-color: white;
    }
    background: white;
    border: none;
    text-decoration: none;
  }
`

const H1 = styled.h1`
  && {
    border-bottom: 1px solid #DDD;
    text-align: left;
  }
`;
const H2 = styled.h2`
  && {
    color: #0088cc;
  }
`;
const H3 = styled.h3`
  && {
    color: #0088cc;
  }
`;
const H3L = styled.h3`
  && {
    color: #0088cc;
  }
  margin-left: 9%;
`;

const H3Logo = styled.h3`
  && {
    color: #0088cc;
  }
  /* margin-left: 50%; */
`;

const StyledLink = styled(Link)`
  color: #0088cc;
  &:hover {
    color: #0088cc;
  }
`;

const StyledContent = styled.div`
  border: 0.5px solid #ddd;
`;

const StyledCard = styled(Card)`
  &&{
    border: 5px solid #0088cc;
  }
`

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
  NavLogoLink,
  RegButton,
  LogoutButton,
  H1,
  H2,
  H3,
  H3L,
  H3Logo,
  StyledLink,
  StyledContent,
  StyledCard,
  viewMultiple
};

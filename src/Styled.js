import styled from "styled-components";
import { Modal, ModalHeader, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: auto 70%;
  margin: 10px 5% 0;
  grid-gap: 10pxc;
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
  padding: 25px 20px 25px 30px;
  border: 0.5px solid #ddd;
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
  text-decoration: none;
`;

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
  grid-template-columns: auto 75%;
  grid-template-rows: auto 1fr;
  margin-top: 20px;
  grid-gap: 10px;
  margin-left: 20px;
  text-align: left;
`;

const viewMultiple = styled.div`
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

const MessageButton = styled(Button)`
  && {
    color: white;
    &:hover {
      color: #0088cc;
      text-decoration: none;
      background: white;
      border: 2px solid #0088cc;
    }
    background: #0088cc;
    border: 2px solid #0088cc;
    margin: 5px 5px 5px 0px;
    text-decoration: none;
  }
`;

const SCButton = styled(Button)`
  && {
    color: red;
    &:hover {
      color: red;
      text-decoration: none;
      background: white;
      border: 0.5px solid red;
    }
    background: white;
    border: 2px solid red;
    margin: 5px 5px 5px 0px;
  }
`;

const RegButton = styled(Button)`
  && {
    color: white;
    &:hover {
      color: white;
      background-color: #0088cc;
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
const FavoriteButton = styled(Button)`
  && {
    color: #0088cc;
    &:hover {
      color: #0088cc;
      background-color: white;
      text-decoration: none;
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
`;

const H1 = styled.h1`
  && {
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
`;
const H2 = styled.h2`
  && {
    color: #0088cc;
  }
`;
const H3Logo = styled.h3`
  && {
    color: #0088cc;
  }
  /* margin-left: 10%; */
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

const H3V = styled.h3`
  && {
    color: white;
    text-align: center;
    background:#0088cc;
    padding: 10px;
  }
`;

const H2E = styled.h2`
  && {
    background: #0088cc;
    color: white;
    border: 6px solid #0088cc;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  color: #0088cc;
  &:hover {
    color: #0088cc;
    text-decoration: none;
    padding: 5px;
    border-radius: 15px;
  }
  text-decoration: none;
  margin: 3px;
`;
const StyledFooterLink = styled(Link)`
  color: #0088cc;
  &:hover {
    color: #0088cc;
    text-decoration: none;
    padding: 5px;
    border-radius: 15px;
  }
  text-decoration: none;
  margin: 20px;
`;

const StyledContent = styled.div`
  border: 0.5px solid #ddd;
`;

const StyledCard = styled(Card)`
  && {
    border: 5px solid #0088cc;
  }
`;

const StyledModal = styled(Modal)`
  && {
    border-radius: 15px;
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
  MessageButton,
  SCButton,
  FavoriteButton,
  H1,
  H2,
  H2E,
  H3,
  H3L,
  H3V,
  H3Logo,
  StyledLink,
  StyledFooterLink,
  StyledContent,
  StyledCard,
  StyledModal,
  viewMultiple
};

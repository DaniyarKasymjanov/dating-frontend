import styled from "styled-components";
import { ModalHeader } from "reactstrap";

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
  background-color: rgba(248, 31, 103, 0.691);
  min-height: 85vh;
`;

const LandingReg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px 5%;
  grid-gap: 20px;
`;

const SpotlightGrid = styled.div`
  margin: 0 0;
  border: 1px solid black;
`;
const ModalHeaderFix = styled(ModalHeader)`
  && {
    padding: 0.3rem;
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
  margin: 60px 0 10px 0;
`;

// export const StyledButton = styled(Button)`
//   padding: 20px;
//  `

export {
  Grid,
  MainGrid,
  LandingGrid,
  LandingReg,
  SpotlightGrid,
  ModalHeaderFix,
  MainContentGrid,
  ChatGrid,
  ProfileDisplayGrid,
  ProfileImage,
  FooterCSS
};

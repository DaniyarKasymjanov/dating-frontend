import styled from 'styled-components';
import { ModalHeader } from 'reactstrap';

const Grid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 10px 5% 0;
  grid-gap: 10px;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
`

const LandingReg = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 5%;
  grid-gap: 30px;
`

const SpotlightGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin: 0 0
  border: 1px solid black;
`
const ModalHeaderFix = styled(ModalHeader)`
  &&{
    padding: 0.3rem;
  }
`
const MainContentGrid = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`

// export const StyledButton = styled(Button)`
//   padding: 20px;
// `

export { Grid, MainGrid, LandingGrid, LandingReg, SpotlightGrid, ModalHeaderFix, MainContentGrid }
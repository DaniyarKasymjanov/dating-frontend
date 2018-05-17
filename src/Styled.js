import styled from 'styled-components';
import {
  Button
} from 'reactstrap';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0 5%;
  grid-gap: 10px;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 5%;
  grid-gap: 30px;
`

// export const StyledButton = styled(Button)`
//   padding: 20px;
// `

export { MainGrid }
import styled from 'styled-components';

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  margin: 0 5%;
  grid-gap: 10px;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
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

// export const StyledButton = styled(Button)`
//   padding: 20px;
// `

export { MainGrid, LandingGrid, LandingReg, SpotlightGrid }
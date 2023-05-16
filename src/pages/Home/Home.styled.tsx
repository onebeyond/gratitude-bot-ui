import styled from 'styled-components'

export const StyledHomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledTopTriangle = styled.div`

@media (min-width: 900px) {
  background-repeat: no-repeat;
  background-position: right top;
  background-image: url('../../triangle-main-wrapper.svg');
  }
`

export const StyledMiddleTriangle = styled.div`
@media (min-width: 900px) {
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 186px;
  z-index: -1;
  background-image: url('../../triangle-small.svg');
}`

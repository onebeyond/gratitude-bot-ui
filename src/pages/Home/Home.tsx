import { StyledHomeWrapper, StyledTopTriangle, StyledMiddleTriangle } from './Home.styled'

export const Home = () => {
  return (
    <StyledTopTriangle>
      <StyledHomeWrapper>
        <StyledMiddleTriangle />
        <h1>Home</h1>
        <p>Home page content</p>
      </StyledHomeWrapper>
    </StyledTopTriangle>
  )
}

import { StyledHomeWrapper, StyledTopTriangle, StyledMiddleTriangle } from './Home.styled'
import { SlackButton } from '@/components/SlackButton/SlackButton'

export const Home = () => {
  return (
    <StyledTopTriangle>
      <StyledHomeWrapper>
        <StyledMiddleTriangle />
        <SlackButton />
      </StyledHomeWrapper>
    </StyledTopTriangle>
  )
}

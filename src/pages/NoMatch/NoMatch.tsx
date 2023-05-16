import { Link } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <div>
      <h1>🥲 Ooops...</h1>
      <h2>This page doesn´t exist</h2>
      <Link to="/">Send me back!</Link>
    </div>
  )
}

export default NoMatch

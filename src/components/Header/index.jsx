import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { Input } from "../Input"

import { Container, Profile } from "./styles"

export function Header () {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()

  function handleLogOut() {
    navigate('/')
    logOut()
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input label='Search by title'/>
      <Profile>
        <div>

          <strong>{user.name}</strong>

          <button
            onClick={handleLogOut}
          >Log out</button>

        </div>
        <div>
          <img 
          src = 'https://github.com/tarcisioMateus.png'
          alt = "Picture from user"/>
          <Link to='/perfil' className='invisible-link'/>
        </div>
      </Profile>
    </Container>
  )
}
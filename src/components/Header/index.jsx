import { Link } from "react-router-dom"

import { Input } from "../Input"

import { Container, Profile } from "./styles"

export function Header () {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input label='Search by title'/>
      <Profile>
        <div>
          <strong>Tarcísio Mateus</strong>
          <button>Log out</button>
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
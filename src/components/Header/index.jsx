import { Input } from "../Input"

import { Container, Profile } from "./styles"

export function Header () {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Search by title' lable='Search by title'/>
      <Profile>
        <div>
          <strong>Tarcísio Mateus</strong>
          <span>Log out</span>
        </div>
        <img 
        src = 'https://github.com/tarcisioMateus.png'
        alt = "Picture from user"/>
      </Profile>
    </Container>
  )
}
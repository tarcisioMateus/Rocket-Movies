import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from '../../services'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Input } from "../Input"

import { Container, Profile } from "./styles"

export function Header () {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()

  const [avatar, setAvatar] = useState( 
    user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder 
  )

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
          src = {avatar}
          alt = "Picture from user"/>
          <Link to='/perfil' className='invisible-link'/>
        </div>
      </Profile>
    </Container>
  )
}
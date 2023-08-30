import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/auth"

import { api } from '../../services'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { Input } from "../Input"

import { Container, Profile } from "./styles"

export function Header ({ handleHomeSearch = null }) {
  const { logOut, user } = useAuth()
  const navigate = useNavigate()

  const [avatar, setAvatar] = useState( 
    user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder 
  )

  function handleLogOut() {
    navigate('/')
    logOut()
  }

  function handleSearchOutOfHome( event ) {
    const search = event.target.value
    localStorage.setItem('@rocketMovies:search', search)
    navigate('/')
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input label='Search by title'
        onChange={event => {
          return ( handleHomeSearch ? handleHomeSearch(event) : handleSearchOutOfHome(event) )
        }}
      />
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
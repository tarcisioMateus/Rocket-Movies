import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { BsArrowLeft } from 'react-icons/bs'
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Header, Profile, Form } from "./styles"

export function Perfil () {
  const { user, updateUser } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()

  async function handleUpdateUser() {
    const changes = {
      name, 
      email, 
      currentPassword, 
      newPassword
    }
    const userUpdated = Object.assign(user, changes)
    await updateUser({ user: userUpdated })
  }

  return (
    <>
      <Header>
        <ButtonText title='back' icon={BsArrowLeft}
          onClick={ () => navigate(-1)}
        />
      </Header>
      <Form>

        <Profile>
        <img 
        src = 'https://github.com/tarcisioMateus.png'
        alt = "Picture from user"/>
        <label>
          <FiCamera/>
          <input type="file"/>
        </label>
        </Profile>

        <Input label='Name' icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input label='Email' icon={FiMail} 
          value={email}
          type='email'
          onChange={e => setEmail(e.target.value)}
        />
        <Input label='Current password' icon={FiLock} 
          type='password'
          onChange={e => setCurrentPassword(e.target.value)}
        />
        <Input label='New password' icon={FiLock} 
          type='password'
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title='Save'
          onClick={handleUpdateUser}
        />
      </Form>
    </>
  )
}
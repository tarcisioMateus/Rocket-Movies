import { BsArrowLeft } from 'react-icons/bs'
import { FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Header, Profile, Form } from "./styles"

export function Perfil () {
  return (
    <>
      <Header>
        <ButtonText title='back' icon={BsArrowLeft}/>
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
        <Input label='Name' icon={FiUser}/>
        <Input label='Email' icon={FiMail}/>
        <Input label='Current password' icon={FiLock}/>
        <Input label='New password' icon={FiLock}/>
        <Button title='Save'/>
      </Form>
    </>
  )
}
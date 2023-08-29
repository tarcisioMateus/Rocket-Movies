import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services'

import { FiUser, FiMail, FiLock} from 'react-icons/fi'
import { BsArrowLeft } from 'react-icons/bs'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Img } from "./styles"

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) return alert('fill in all the fields')

    api.post('/users', { name, email, password }).then( () => {
      alert('account created successfully!')
      navigate('/')
    }).catch( error => {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to create accont right now, try again later')
      }
    })
  }


  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>To keep up with everyting you watch!</p>
        <h2>Create an account</h2>

        <Input icon={FiUser} label='Name'
          onChange={e => setName(e.target.value)}
        />
        <Input icon={FiMail} label='E-mail' 
          type='email'
          onChange={e => setEmail(e.target.value)}
        />
        <Input icon={FiLock} label='Password' 
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button title='access'
          onClick={handleSignUp}
        />
        <ButtonText title='Back to login' icon={BsArrowLeft} 
          onClick={() => navigate(-1)}
        />
      </Form>
      <Img/>
    </Container>
  )
}
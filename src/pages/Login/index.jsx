import { useNavigate } from 'react-router-dom'
import { FiMail, FiLock} from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Img } from "./styles"

export function Login() {

  const navigate = useNavigate()

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>To keep up with everyting you watch!</p>
        <h2>Login</h2>
        <Input icon={FiMail} label='E-mail' type='email'/>
        <Input icon={FiLock} label='Password' type='password'/>
        <Button title='access'/>
        
        <ButtonText title='Create an account' 
          onClick={ () => navigate('/signup')}
        />
      </Form>
      <Img/>
    </Container>
  )
}
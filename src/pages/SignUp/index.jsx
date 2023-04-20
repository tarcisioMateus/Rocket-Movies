import { FiUser, FiMail, FiLock} from 'react-icons/fi'
import { BsArrowLeft } from 'react-icons/bs'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container, Form, Img } from "./styles"

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>To keep up with everyting you watch!</p>
        <h2>Create an account</h2>
        <Input icon={FiUser} label='Name'/>
        <Input icon={FiMail} label='E-mail' type='email'/>
        <Input icon={FiUser} label='Password' type='password'/>
        <Button title='access'/>
        <ButtonText title='back to login' icon={BsArrowLeft}/>
      </Form>
      <Img/>
    </Container>
  )
}
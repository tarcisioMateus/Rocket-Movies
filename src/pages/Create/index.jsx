import { BsArrowLeft } from 'react-icons/bs'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'

import { Container, Form } from "./styled"

export function Create () {
  return (
    <Container>
      <Header/>
      <Form>
        <ButtonText title='back' icon={BsArrowLeft}/>
        <h2>New Movie</h2>
        <Input placeholder='title'/>
        <Input placeholder='rating (between 0 - 5)'/>
        <TextArea placeholder='details'/>
      </Form>
    </Container>
  )
}
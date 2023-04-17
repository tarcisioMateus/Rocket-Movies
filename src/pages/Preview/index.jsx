import { BsArrowLeft } from 'react-icons/bs'

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"

import { Container } from "./styles"

export function Preview() {
  return (
    <Container>
      <Header/>
      <ButtonText title='back' icon={BsArrowLeft}/>
    </Container>
  )
}
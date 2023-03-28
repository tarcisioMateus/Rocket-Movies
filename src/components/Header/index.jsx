import { Input } from "../Input"

import { Container } from "./styles"

export function Header () {
  return (
    <Container>
      <Input placeholder='Search by title' lable='Search by title'/>
    </Container>
  )
}
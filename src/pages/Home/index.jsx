import { Header } from "../../components/Header"

import { Container } from "./styles"
import { Tag } from "../../components/Tag"

export function Home () {
  return (
    <Container>
      <Header/>
      <Tag title='musical'/>
    </Container>
  )
}
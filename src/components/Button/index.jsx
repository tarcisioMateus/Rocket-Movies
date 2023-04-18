import { Container } from "./styles"

export function Button ({icon: Icon, title, ...rest}) {
  return (
    <Container {...rest} type='button'>
      { Icon && <Icon/>}
      {title}
    </Container>
  )
}
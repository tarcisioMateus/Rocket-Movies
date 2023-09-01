import { Container } from './styles'

export function ButtonText ({ title, selected = false, icon: Icon, ...rest }) {
  return (
    <Container {...rest} 
      type='button'
      $selected = {selected}
    >
      { Icon && <Icon/> }
      {title}
    </Container>
  )
}
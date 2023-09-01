import { Container } from './styles'

export function ButtonText ({ title, isActive = false, icon: Icon, ...rest }) {
  return (
    <Container {...rest} 
      type='button'
      $isactive = {isActive}
    >
      { Icon && <Icon/> }
      {title}
    </Container>
  )
}
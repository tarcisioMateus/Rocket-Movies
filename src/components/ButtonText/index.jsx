import { Link } from 'react-router-dom'

import { Container } from './styles'

export function ButtonText ({ title, icon: Icon, to='', ...rest }) {
  return (
    <Container {...rest} type='button'>
      { Icon && <Icon/> }
      {title}
      { to != '' ? <Link to={to} className='invisible-link'/> : ''}
    </Container>
  )
}
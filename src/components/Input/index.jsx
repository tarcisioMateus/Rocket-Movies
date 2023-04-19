import { Container } from "./styles"

export function Input ({ label, icon: Icon, ...rest}) {
  return (
    <Container>
      <label htmlFor={label} className='sr-only'> {label} </label>
      {Icon && <Icon/>}
      <input {...rest} id={label} placeholder={label}/>
    </Container>
  )
}
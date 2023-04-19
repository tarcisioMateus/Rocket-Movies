import { Container } from "./styles"

export function TextArea ({label, ...rest}) {
  return (
    <Container>
      <textarea {...rest} id={label} placeholder={label}/>
      <label htmlFor={label} className='sr-only'> {label} </label>
    </Container>
  )
}
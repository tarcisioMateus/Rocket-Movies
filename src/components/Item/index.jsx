import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function Item({ isNew = false, ...rest}) {
  return (
    <Container isNew={isNew}>
      <input {...rest} readOnly={!isNew}/>
      <button type="button">
        { isNew ? <FiPlus/> : <FiX/> }
      </button>
    </Container>
  )
}
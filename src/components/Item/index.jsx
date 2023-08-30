import { FiPlus, FiX } from "react-icons/fi"

import { Container } from "./styles"

export function Item({ isNew = false, onClick, ...rest}) {
  return (
    <Container $isnew={isNew} {...rest}>
      <input {...rest} readOnly={!isNew}/>
      <button type="button" onClick={onClick}>
        { isNew ? <FiPlus/> : <FiX/> }
      </button>
    </Container>
  )
}
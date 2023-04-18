import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import { Container } from "./styles"

export function Stars ({amount, large = false}) {

  return (
    <Container large={large}>
      { getStars(amount) }
    </Container>
  )
}

function getArrayRepresentation (amount) {
  switch (amount) {
    case 0:
      return [0,0,0,0,0]
    case 1:
      return [1,0,0,0,0]
    case 2:
      return [1,1,0,0,0]
    case 3:
      return [1,1,1,0,0]
    case 4:
      return [1,1,1,1,0]
    case 5:
      return [1,1,1,1,1]
  }
}

function getStars(amount) {
  const array = getArrayRepresentation (amount)
  let stars = []
  
  for (let i in array){
    if ( array[i] ) {
      stars= [...stars, <AiFillStar key={i}/>]
    } else {
      stars= [...stars, <AiOutlineStar key={i}/>]
    }
  }
  return stars
}
import { Stars } from "../Stars"
import { Tag } from "../Tag"

import { Container } from "./styles"

export function Card ({title, description, tags, stars }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Stars amount={stars}/>
      <p>{description}</p>
      <div className="tags">
        {tags && tags.map(tag => <Tag title={tag.title} key={tag.id}/>)}
      </div>
    </Container>
  )
}


import { Stars } from "../Stars"
import { Tag } from "../Tag"

import { Container } from "./styles"

export function Card ({ title, description, tags, stars, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{title.trim()}</h2>
      <Stars amount={stars}/>
      <p>{description.trim()}</p>
      <div className="tags">
        {tags && tags.map(tag => <Tag title={tag.name} key={String(tag.id)}/>)}
      </div>
    </Container>
  )
}


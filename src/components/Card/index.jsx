import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Tag } from "../Tag"

import { Container } from "./styles"

export function Card ({title, description, tags, stars }) {
  return (
    <Container>
      <h2>{title}</h2>
      <div className="stars">
        {stars.map(s => { if (s) return <AiFillStar/>
        return <AiOutlineStar/>})}
      </div>
      <p>{description}</p>
      <div className="tags">
        {tags && tags.map(tag => <Tag title={tag.title} key={tag.id}/>)}
      </div>
    </Container>
  )
}


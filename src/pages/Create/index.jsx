import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BsArrowLeft } from 'react-icons/bs'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Item } from '../../components/Item'
import { Button } from '../../components/Button'

import { Container, Form } from "./styled"

export function Create () {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rating, setRating] = useState('')

  const [newTag, setNewTag] = useState('')
  const [tags, setTags] = useState([])

  const navigate = useNavigate()

  function addNewTag() {
    if (!newTag) return
    setTags( prev => [...prev, newTag])
    setNewTag('')
  }

  function removeTag(name) {
    setTags( prev => prev.filter(tag => tag !== name))
  }

  return (
    <Container>
      <Header/>
      <Form>
        <ButtonText title='back' icon={BsArrowLeft}
          onClick={ () => navigate(-1)}
        />
        <h2>New Movie</h2>
        <div className="inputs">

          <Input label='title'
            onChange={ e => setTitle(e.target.value)}
          />
          <Input label='rating (between 0 - 5)'
            onChange={ e => setRating(e.target.value)}
          />

        </div>

        <TextArea label='details'
          onChange={ e => setDescription(e.target.value)}
        />
        <section>
          <h3>Tags</h3>
          <div className="tags">

            {
              tags.map((tag, index) => {
                return <Item key={String(index)}
                  value={tag}
                  onClick={() => removeTag(tag)}
                />
              })
            }

            <Item placeholder='New item' isNew
              key='1000'
              value={newTag}
              onChange={ e => setNewTag(e.target.value)}
              onClick={addNewTag}
            />

          </div>
        </section>
        <div className="buttons">
          <Button title='Delete movie'/>
          <Button title='Save changes'/>
        </div>
      </Form>
    </Container>
  )
}
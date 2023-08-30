import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services'

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
  const formRef = useRef(null);

  function addNewTag() {
    if (!newTag) return
    setTags( prev => [...prev, newTag])
    setNewTag('')
  }

  function removeTag(name) {
    setTags( prev => prev.filter(tag => tag !== name))
  }

  async function handleSaveData() {
    if (newTag) return alert('there is a tag field in open, add it or remove it to save this note!')
    
    try {
      await api.post('/movienotes', { title, description, rating, tags })
      alert('file saved successfully!')
      navigate(-1)

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('unable to login into account, try again later')
      }
    }
  }

  function handleCleanAllFields() {
    setTitle('')
    setDescription('')
    setRating('')
    setTags([])
    setNewTag('')

    formRef.current.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container>
      <Header/>
      <Form ref={formRef}>
        <ButtonText title='back' icon={BsArrowLeft}
          onClick={ () => navigate(-1)}
        />
        <h2>New Movie</h2>
        <div className="inputs">

          <Input label='title'
            value={title}
            onChange={ e => setTitle(e.target.value)}
          />
          <Input label='rating (between 0 - 5)'
            value={rating}
            onChange={ e => setRating(e.target.value)}
          />

        </div>

        <TextArea label='details'
          value={description}
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
          <Button title='Clean fields'
            onClick={handleCleanAllFields}
          />
          <Button title='Save changes'
            onClick={handleSaveData}
          />
        </div>
      </Form>
    </Container>
  )
}
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

  const navigate = useNavigate()

  return (
    <Container>
      <Header/>
      <Form>
        <ButtonText title='back' icon={BsArrowLeft}
          onClick={ () => navigate(-1)}
        />
        <h2>New Movie</h2>
        <div className="inputs">
          <Input label='title'/>
          <Input label='rating (between 0 - 5)'/>
        </div>
        <TextArea label='details'/>
        <section>
          <h3>Tags</h3>
          <div className="tags">
            <Item value='React'/>
            <Item placeholder='New item' isNew/>
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
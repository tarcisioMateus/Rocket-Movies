import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from "../../hooks/auth"

import { api } from '../../services'
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg'

import { BsArrowLeft } from 'react-icons/bs'
import { CiClock2 } from 'react-icons/ci'

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Stars } from '../../components/Stars'
import { Tag } from '../../components/Tag'
import { Button } from "../../components/Button"

import { Container, Content, TimeUser } from "./styles"

export function Preview() {
  const { user } = useAuth()

  const navigate = useNavigate()
  const params = useParams()

  const [data, setData] = useState({})
  const [avatar, setAvatar] = useState( 
    user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder 
  )

  function getDateRightlyFormated(dateToBeFormated) {
    const [date, time] = dateToBeFormated.split(' ')
    const [ Y, M, D ] = date.split('-')
    const [ h, m, s] = time.split(':')

    const formatedTime = `${D}/${M}/${Y.slice(-2)} at ${h}:${m}`
    return formatedTime
  }

  async function handleDeleteMovie() {
    const itsOkay = window.confirm('are U sure, that you wanna delete this Movie note?')

    if (itsOkay) {
      await api.delete(`/movienotes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/movienotes/${params.id}`)
      setData(response.data)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header/>

      <Content>
        <ButtonText title='back' icon={BsArrowLeft}
          onClick={ () => navigate(-1)}
        />
        <div className="header">
          <h2>
            {data.title}
          </h2>
          <Stars 
            amount={data.rating} large
          />
        </div>
        <TimeUser>
          <img 
          src = {avatar}
          alt = "Picture from user"/>
          <span>By {user.name}</span>
          <CiClock2/>
          <p>
            {
              data.updated_at &&
              getDateRightlyFormated(data.updated_at)
            }
          </p>
        </TimeUser>
        
        <div className="tags">
          {
            data.tags &&
            data.tags.map( tag => {
              return <Tag
                title={tag.name} key={String(tag.id)}
              />
            })
          }
        </div>
        <p>
          {data.description}
        </p>

        <Button
          title='Delete Movie'
          onClick={handleDeleteMovie}
        />
      </Content>
    </Container>
  )
}
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services'

import { FiPlus } from 'react-icons/fi'
import { FaSadTear } from 'react-icons/fa'

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

import { Container, Menu, Add, Content, NotFound } from "./styles"

export function Home () {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState([])

  const [tags, setTags] = useState([])


  const navigate = useNavigate()

  function handleHomeSearch(event) {
    const latestSearch = event.target.value
    setSearch(latestSearch)
  }

  useEffect(() => {

    function continueSearchThatStartedOutOfHome() {

      const latestSearch = localStorage.getItem('@rocketMovies:search')
      if (latestSearch) {
        const inputSearch = document.getElementById('Search by title')
        inputSearch.value = latestSearch
        inputSearch.focus()
  
        setSearch(latestSearch)
        localStorage.removeItem('@rocketMovies:search')
      }
    }

    async function fetchTags() {
      const response = await api.get('/movietags')
      setTags(response.data)
    }

    continueSearchThatStartedOutOfHome()

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/movienotes?title=${search}`)
      setNotes(response.data)
    }

    fetchMovieNotes()
  }, [search])

  return (
    <Container>
      <Header
        handleHomeSearch= {handleHomeSearch}
      />
      
      <Menu>
        <h2> Tags </h2>

        <ButtonText 
          title='all'
        />
        {
          tags &&
          tags.map( (tag, index) => {
            return <ButtonText
              key={index}
              title={tag}
            />
          })
        }
      </Menu>

      <Add>
        <h1>My Movies</h1>
        <Button icon={FiPlus} title='add movie'
          onClick={ () => navigate('/create')}
        />
      </Add>

      <Content>
        {
          notes &&
          notes.map( note => {
            return <Card
                key={String(note.id)} 
                title={note.title} description={note.description} 
                tags={note.tags} stars={note.rating}
                onClick={() => navigate(`/preview/${note.id}`)}
              />
          })
        }
        
        {
          !notes.length &&
          <NotFound>
            <FaSadTear/>
            <h3>Nothing found</h3>
          </NotFound>
          
        }
      </Content>
    
    </Container>
  )
}
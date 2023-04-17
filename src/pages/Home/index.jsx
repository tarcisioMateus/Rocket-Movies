import { FiPlus } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

import { Container, Add, Content } from "./styles"

export function Home () {
  return (
    <Container>
      <Header/>
      
      <Add>
        <h1>My Movies</h1>
        <Button icon={FiPlus} title='add movie'/>
      </Add>

      <Content>

        <Card title='Interestellar' 
          description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
          agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua
            família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado 
            por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" 
            é uma inteligência desconhecida que está enviando mensagens codificadas através de 
            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação 
            secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições'
          tags={[{title: 'Sci-fi', id: 1}, {title: 'Drama', id: 2}, {title: 'Family', id: 3}]} stars={[1,1,1,1,0]}/>
        
        <Card title='Interestellar' 
          description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
          agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua
            família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado 
            por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" 
            é uma inteligência desconhecida que está enviando mensagens codificadas através de 
            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação 
            secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições'
          tags={[{title: 'Sci-fi', id: 1}, {title: 'Drama', id: 2}, {title: 'Family', id: 3}]} stars={[1,1,1,0,0]}/>
        
        <Card title='Interestellar' 
          description='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade
          agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua
            família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado 
            por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" 
            é uma inteligência desconhecida que está enviando mensagens codificadas através de 
            radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação 
            secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de 
            minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições'
          tags={[{title: 'Sci-fi', id: 1}, {title: 'Drama', id: 2}, {title: 'Family', id: 3}]} stars={[1,1,1,0,0]}/>
        
      </Content>
    
    </Container>
  )
}
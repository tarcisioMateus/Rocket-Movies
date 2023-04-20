import backgroungimg from '../../assets/background.png'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Img = styled.div`
  flex: 1;
  background: url(${backgroungimg}) center no-repeat;
  filter: brightness(0.5);
`

export const Form = styled.form`
  width: 34rem;
  margin: 15rem 10rem;

  >h1 {
    color: ${({theme}) => theme.COLORS.PINK};
    font-size: 4.8rem;
    line-height: 6.3rem;
  }

  >p {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }

  >h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin: 4.8rem 0;
  }

  >div:nth-of-type(2) {
    margin: 0.8rem 0;
  }

  >button:first-of-type {
    margin: 1.6rem 0 4.2rem;
  }

  >button:last-of-type {
    margin: auto;
  }
`
import styled from 'styled-components'

export const Header = styled.header`
  height: 14.4rem;
  background-color: ${ ({theme}) => theme.COLORS.PINKTRANSPARANT};

  display: flex;
  align-items: center;
  padding: 0 14.4rem;
`

export const Profile = styled.div`
  height: 18.6rem;
  width: 18.6rem;
  position: relative;
  
  >img {
    height: 18.6rem;
    width: 18.6rem;
    border-radius: 50%;
  }

  >label {
    background-color: ${ ({theme}) => theme.COLORS.PINK};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 50%;

    position: absolute;
    right: -0.4rem;
    bottom: 0.4rem;
    cursor: pointer;

    >input {
      display: none;
    }

    >svg {
      font-size: 2rem;
      color: ${({theme}) => theme.COLORS.GRAY_500};
    }
  }
`

export const Form = styled.form`
  width: 34rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  position: absolute center;
  margin: auto;
  margin-top: -9.4rem;

  >div:first-of-type {
    margin-bottom: 5.6rem;
  }
  
  >div:nth-of-type(4) {
    margin-top: 1.6rem;
  }
  >button {
    margin-top: 1.6rem;
    margin-bottom: 20rem;
  }
`

import styled from "styled-components"

export const Container = styled.div`
  background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_700 };
  width: 100%;
  height: 5.6rem;

  border-radius: 1rem;
  
  display: flex;
  align-items: center;

  >input {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    padding: 2.4rem;

    &::placeholder {
      font-size: 1.6rem;
      color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    }
  }

  >svg {
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    font-size: 2rem;
    margin-left: 1.6rem;
  }
`
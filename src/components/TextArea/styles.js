import styled  from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 27.4rem;
  padding: 1.9rem 1.6rem;
  border-radius: 1rem;
  border: none;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  color: ${({theme}) => theme.COLORS.WHITE};
  
  
  >textarea {
    resize: none;
    line-height: 1.9rem;
    border: none;
    background: none;
    width: 100%;
    height: 100%;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`
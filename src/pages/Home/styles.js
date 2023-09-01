import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: 
    "header header" 
    "menu add" 
    "menu content";
  grid-template-rows: 11.6rem 13.2 auto;
  grid-template-columns: 35.4rem auto;
`

export const Menu = styled.section`
  grid-area: menu;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4.8rem 6.4rem 5.8rem 12.6rem;

  background-color: ${ ({theme}) => theme.COLORS.PINKTRANSPARANT};
  border-radius: 1.6rem;
  border: none;
  padding: 2.4rem 0;

  >h2 {
    opacity: 0.5;
  }
`

export const Add = styled.div`
  grid-area: add;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4.8rem 12.6rem 3.6rem 0;

  >button {
    width: fit-content;
  }
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-right: 12.6rem;
  margin-bottom: 5.8rem;
  padding-right: 0.8rem;

`

export const NotFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  >svg {
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    font-size: 17rem;
  }

  >h3 {
    font-size: 7rem;
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    font-weight: 400;
  }
`
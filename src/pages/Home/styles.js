import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas: "header" "add" "content";
  grid-template-rows: 11.6rem 13.2 auto;
`

export const Add = styled.div`
  grid-area: add;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 4.8rem 12.6rem 3.6rem;

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
  margin: 0 12.6rem;
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
    font-size: 20rem;
  }

  >h3 {
    font-size: 7.5rem;
    color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    font-weight: 400;
  }
`
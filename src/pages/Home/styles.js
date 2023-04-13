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
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 0 12.6rem;
  padding-bottom: 5.8rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
 
  &::-webkit-scrollbar-track {
    color: transparent;
  }
 
  &::-webkit-scrollbar-thumb {

    background-color: ${ ({theme}) => theme.COLORS.PINK};
    border-radius: 0.8rem;
    outline: none;
  }
`

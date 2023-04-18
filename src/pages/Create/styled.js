import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "header" "form";
  grid-template-rows: 11.6rem auto;
`

export const Form = styled.form`
  grid-area: form;
  overflow-y: auto;
  margin: 4rem 12.3rem 8rem;
  padding-right: 1.6rem;

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
  
  >h2 {
    margin: 2.4rem 0 4rem;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
  }

  .inputs {
    display: flex;
    align-items: center;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  textarea {
    margin-bottom: 4rem;
  }

  section {
    >h3 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.6rem;
      color: ${ ({theme}) => theme.COLORS.GRAY_100};
      margin-bottom: 2.4rem;
    }

    .tags {
      display: flex;
      align-items: center;
      gap: 2.4rem;
      padding: 1.6rem;
      border-radius: 0.8rem;
      background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
      margin-bottom: 4rem;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 4rem;

    button {
      flex: 1;
    }

    button:first-of-type {
      background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_900};
      color: ${ ({theme}) => theme.COLORS.PINK};
    }

  }
`
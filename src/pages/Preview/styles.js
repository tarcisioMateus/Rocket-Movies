import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: 11.6rem auto;
`

export const Content = styled.div`
  grid-area: content ;
  overflow-y: auto;
  margin: 4rem 12.3rem 8rem;
  padding-right: 1.6rem;

  .header {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2.4rem 0;

    >h2 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.8rem;
    margin: 4rem 0;
  }

  >p {
    font-size: 1.6rem;
    line-height: 2.1rem;
  }
`

export const TimeUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;

  >img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
  }

  >svg {
    color: ${ ({theme}) => theme.COLORS.PINK};
  }
`
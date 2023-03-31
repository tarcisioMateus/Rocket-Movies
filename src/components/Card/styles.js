import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${ ({theme}) => theme.COLORS.PINKTRANSPARANT};
  padding: 3.2rem;
  border-radius: 1.6rem;

  >h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 0.8rem;
  }

  .stars {
    display: flex;
    gap: 0.6rem;
    margin-bottom: 1.6rem;

    >svg {
      font-size: 1.2rem;
      color: ${ ({theme}) => theme.COLORS.PINK};
    }
  }

  >p {
    font-size: 1.6rem;
    line-height: 1.9rem;

    height: 3.8rem;
    overflow: hidden;
    margin-bottom: 3rem;
  }
  
  .tags {
    display: flex;
    gap: 0.8rem;
  }
`
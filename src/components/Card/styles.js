import styled from 'styled-components'

export const Container = styled.button`
  background-color: ${ ({theme}) => theme.COLORS.PINKTRANSPARANT};
  padding: 3.2rem;
  border-radius: 1.6rem;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  cursor: pointer;

  >h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 0.8rem;
  }

  >p {
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;

    height: 3.8rem;
    overflow: hidden;
    margin-bottom: 3rem;
  }
  
  .tags {
    display: flex;
    gap: 0.8rem;
  }

  position: relative;
`
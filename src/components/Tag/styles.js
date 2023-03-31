import styled from 'styled-components'

export const Container = styled.span`
  background-color: ${ ({theme}) => theme.COLORS.GRAY_500 };
  color: ${ ({theme}) => theme.COLORS.GRAY_50 };

  border: none;
  border-radius: 0.8rem;
  padding: 0.5rem 1.6rem;

  font-size: 1.2rem;
  line-height: 1.4rem;
`
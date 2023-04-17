import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: ${ ({large}) => large ? "1rem" : "0.6rem"};
  margin-bottom: ${ ({large}) => large ? "0" : "1.6rem"};
  
  font-size: ${ ({large}) => large ? "2rem" : "1.2rem"};
  color: ${ ({theme}) => theme.COLORS.PINK}; 
`

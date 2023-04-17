import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;


  font-size: 1.6rem;
  color: ${ ({ theme}) => theme.COLORS.PINK };
`
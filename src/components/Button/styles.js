import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.2rem;
  gap: 0.8rem;

  height: 4.8rem;
  border-radius: 0.8rem;
  border: none;
  background-color: ${ ({theme}) => theme.COLORS.PINK };

  font-size: 1.6rem;
  color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
`
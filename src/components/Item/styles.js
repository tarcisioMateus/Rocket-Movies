import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.6rem;
  background-color: ${ ({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700 };
  border: ${ ({theme, isNew}) => isNew ? `0.2rem dashed ${theme.COLORS.GRAY_300}` : 'none' };
  border-radius: 1rem;
  width: fit-content;

  >input {
    background: none;
    border: none;

    &::placeholder {
      color: ${ ({theme}) => theme.COLORS.GRAY_300 };
    }
  }

  >button {
    background: none;
    border: none;

    >svg {
      color: ${ ({theme}) => theme.COLORS.PINK };
      font-size: 2.4rem;
    }
  }
`
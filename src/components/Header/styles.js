import styled from "styled-components"

export const Container = styled.header`
  grid-area: header;
  
  display: flex;
  align-items: center;
  gap: 6.4rem;

  height: 11.6rem;
  width: 100%;
  padding: 2.4rem 12.6rem;
  border-bottom: 1px solid #3E3B47;

  >h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${ ({theme}) => theme.COLORS.PINK};
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  >div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 1.8rem;

    strong {
      font-weight: 700;
      white-space: nowrap;
    }

    button {
      color: ${ ({theme}) => theme.COLORS.GRAY_300 };
      background: none;
      border: none;
    }
  }

  >img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;

    cursor: pointer;
  }
`
import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

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
  }

  :root {
    font-size: 62.5%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: none;
  }

  .invisible-link {
    position: absolute;
    inset: 0;
    opacity: 0;
  }
  
  body {
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
  }

  textarea, input, body, button, a {
    font-family: ${ ({theme}) => theme.FONTFAMILY.SLAB };
    color: ${ ({theme}) => theme.COLORS.WHITE };
    font-size: 1.4rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9);
  }
`
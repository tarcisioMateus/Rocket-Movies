import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  body {
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_800 };
  }

  input, body, button, a {
    font-family: ${ ({theme}) => theme.FONTFAMILY.SLAB };
    color: ${ ({theme}) => theme.COLORS.WHITE };
    font-size: 1.6rem;
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
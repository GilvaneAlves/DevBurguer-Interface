import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Poppins", sans-serif;
  }

  button, a {
    cursor: pointer;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: #fff;
    color: #333;
  }
`;

export default GlobalStyle;

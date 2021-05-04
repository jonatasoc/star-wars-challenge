import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root {
    --background: #f2f3f5;
    --gray-line: #dcdde0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --white: #fff;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
    height: 0.6rem;
}

 ::-webkit-scrollbar-track {
    background-color: transparent;
    border: none;
}

::-webkit-scrollbar-thumb {
    background-color: var(--asphalt);
    border-radius: 3px;
    cursor: move;
}


::-webkit-scrollbar-corner {
    border: none;
    background: none;
}

  body {
    background: var(--background);
    color: var(--steel);
    -webkit-font-smoothing: antialiased;

    height: 100vh;
    width: 100vw;
  }

  body, input, button {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;

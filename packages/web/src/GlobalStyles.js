import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    height: 100%;
    background: #242933;
    margin: 0;
  }
  
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #EBEDF1;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyles

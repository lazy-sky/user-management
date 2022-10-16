import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    appearance: none;
    background-color: transparent;
    border: none;
    outline: none;
  }

  ol, ul, li {
    list-style: none;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  
  ::-webkit-scrollbar {
    width: 5px;
    height: 40px; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d4d4d4;
    border-radius: 5px;
  }

  * { 
    scrollbar-width: thin;        
    scrollbar-color: #d4d4d4;  
  }

  select {
    padding: 5px 30px 5px 5px;
    border: none;
    border-radius: 3px; 
    background: white url('./dropdown.svg') no-repeat 90% 50%; 
    font-weight: 300;
    font-size: 15px;
    line-height: 19px;
    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;
  }
    
  select::-ms-expand {
    display: none;
  }

  input[type="checkbox"] {
    width: 14px;
    height: 14px;
    margin: 0;
    border: 1px solid #d4d4d4;
    border-radius: 2px;
    cursor: pointer;
    background: white;
    color: white;
    position: relative;
    &:checked {
      background: #CBC5F0;
      &::after {
        content:'✔';
        position: absolute;
        left: 2px;
        bottom: 0px;
        font-size: 10px;
      }
    }
  }
`

export default GlobalStyle

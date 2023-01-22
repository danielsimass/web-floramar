import { createGlobalStyle } from "styled-components";
import font40 from '../fonts/Belgika-40th.otf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Belgika40';
        src: local('Belgika'),
        url(${font40}) format('opentype');
        font-weight: 300;
        font-style: normal;
        }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    body {
       
    }
`
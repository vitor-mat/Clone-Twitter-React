import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        font-family: 'Fira Code', monospace;
        font-weight: normal;
    }

    h1{
        font-size: 64px;
        font-weight: 500;
    }

    h3{
        font-size: 24px;
    }

    h1, h2, h3{
        font-weight: 700;
        text-transform: uppercase;
    }
`
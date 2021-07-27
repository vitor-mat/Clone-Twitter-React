import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        font-family: 'Fira Code', monospace;
        font-weight: normal;
        font-size: 13px;
    }

    h1{
        font-size: 4rem;
        font-weight: 500;
    }

    h3{
        font-size: 1.5rem;
    }

    h1, h2, h3{
        font-weight: 700;
        text-transform: uppercase;
    }

    button, nav{
        font-family: 'Roboto Mono', monospace;
    }
`
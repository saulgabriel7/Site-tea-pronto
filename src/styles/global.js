import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${props => props.theme.fontUm};
    }

    p, h3 {
        color: ${props => props.theme.corTexto};
    }

    img {
        max-width: 100%;
        height: auto;
    }
`
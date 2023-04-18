import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Saira', sans-serif;
    }

    body {
        max-width: 100%;
        scroll-behavior: smooth;
        color: white;
        background: ${({ theme }) => theme.colors.main_background};
    }

    h1, h2, h3 {
        font-family: 'Rubik', sans-serif;
        font-weight: 700;
    }

    h2 {
        font-size: 2rem;
    }
`

export default GlobalStyles;
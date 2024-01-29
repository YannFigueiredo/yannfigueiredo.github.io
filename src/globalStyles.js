import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Saira', sans-serif;
    }

    @keyframes moveFromBottom {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }

    @keyframes moveFromLeft {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes moveFromRight {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 100%;
      }
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

    h1 {
        font-size: 2.70rem;
    }

    h2 {
        font-size: 2rem;
    }

    img {
        max-width: 100%;
    }
`

export default GlobalStyles;
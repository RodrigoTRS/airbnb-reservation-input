import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    input, h1, h2, h3, button, p, span {
        font-family: "Poppins", sans-serif;
    }
`
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: 0;
        background: none;
    }
    :root {
        --red: #e62429;
        --redHover: #9F0013;

        --black-text: #000000;
        --white-text: #ffffff;
        --gray-text: #5c5c5c;

        --background600: #151515;
        --background500: #202020;
        --backgroundWhite: #fff;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #f1f1f1;
        color: var(--black-text);
        font-family: "RobotoCondensed Bold","Trebuchet MS",Helvetica,Arial,sans-serif;
        font-weight: 400;
    }
    a, button {
        cursor: pointer;
    }
`;

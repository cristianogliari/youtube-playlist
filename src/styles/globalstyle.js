import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-size: 60%;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }
`;
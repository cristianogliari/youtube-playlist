import styled from 'styled-components/macro';

export const Container = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8rem;
    background-color: transparent;
    border: none;
    font-size: 1rem;
    transition: background .3s ease-in-out; 

    svg {
        width: 2rem;
        height: 2rem;
        fill: #606060;
        margin-bottom: 1rem;
    }

    &:hover {
        background-color: #f9f9f9;   
    }

    &:active {
        background-color: #959595;   
    }
`;

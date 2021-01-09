import styled from 'styled-components/macro';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background-color: transparent;
    border: none;
    border-radius: 5rem;
    transition: background .3s ease-in-out; 

    &:hover {
        background-color: #f9f9f9;   
    }

    &:active {
        background-color: #959595;   
    }

    svg {
        fill: #606060;
        height: 24px;
    }

    
`;
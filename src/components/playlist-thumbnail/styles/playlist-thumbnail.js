import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.6rem;
    width: 34rem;

    img {
        width: 300px;
    }
`;

export const Details = styled.div`
    padding: 1.6rem 0;
    display: flex;
    width: 100%;
`;

export const Avatar = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 10rem;
    background-color: #333;
`;

export const Description = styled.div`
    display: flex;
    margin-left: 1.6rem;
    flex-direction: column;

    h3 {
        font-size: 1.6rem;
        color: #030303;
        width: 24ch;
        margin-bottom: 1rem;
    }   

    p {
        color: #656060;
        font-size: 1.2rem;
    }
`;
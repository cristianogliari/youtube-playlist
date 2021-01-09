import styled from 'styled-components/macro';

export const Container = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 8rem;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

export const LeftMenu = styled.ul`
    display: flex;

    li {
        display: flex;
        align-items: center;
        max-width: 80px;
        
        &:not(:last-of-type) {
            margin-right: 1rem;
        }
    }
`;

export const Logo = styled.li`
    width: 206rem;
    font-size: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    
    svg {
        fill: #ff0000;
        height: 24px;
    }
`;

export const SearchBox = styled.div`
    border-radius: 2px 0 0 2px;
    box-shadow: inset 0 1px 2px #CCC;
    border: 1px solid #CCC;
    display: flex;
    align-items: center;
    height: 4rem;
    width: 40%;
    
    input {
        font-size: 1.6rem;
        line-height: 2.4rem;
        border: none;
        min-height: 100%;
        flex: 1;
        padding: 0 1.6rem;
        background-color: transparent;
        flex-basis: 0.000000001px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border: 1px solid transparent;
        border-left: 1px solid #CCC;
        background-color: #f8f8f8;
        border-radius: 0 2px 2px 0;
        font-size: 2.4rem;
        height: 100%;
        width: 8rem;
        transition: background .3s ease-in-out;

        svg {
            width: 2rem;
            height: 2rem;
            fill: #606060;
            transition: fill .3s ease-in-out;
        }

        &:hover {
            background-color: #f0f0f0;

            svg {
                fill: #333;
            }
        }


    }
`;

export const RightMenu = styled(LeftMenu)``;

export const Avatar = styled.div`
    width: 4rem; 
    height: 4rem;
    border-radius: 5rem;
    background-color: #606060;
    cursor: pointer;
`;


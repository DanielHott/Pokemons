import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: red;
    height: 25vh;
    justify-content: center;
    align-items:center;
    input {
        width: 50vw;
        border: none;
        border-radius: 5px;
        padding: 8px;
        background: #fffefe;
        text-align: center;
    }
    @media (min-width: 1000px) {
        input {
        width: 30vw;
        border: none;
        border-radius: 5px;
        padding: 8px;
        background: #fffefe;
        text-align: center;
    }
    }
`;

export const ImageContent = styled.div`
    margin-bottom: 5px;
`;

export const Search = styled.form`
    button {
        padding: 8px;
        border: none;
        border-radius: 4px;
        margin-left: 3px;
    }

`;
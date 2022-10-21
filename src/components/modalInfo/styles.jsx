import styled from "styled-components";

export const Modal = styled.div`
    @media (min-width: 1000px) {
    display: flex;
    opacity: 100%;
    width: 100vw;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 120vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 40%;
    }
    display: flex;
    opacity: 100%;
    width: 100%;
    background-color: black;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 20%;
`;

export const Close = styled.div`
    @media (min-width: 701px) {
    right: 20vw;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    display: flex;
    top: 21vh;
    z-index: 6;
    font-size: 30px;
    position: fixed;
    cursor: pointer;    
    }
    @media (max-width: 700px) {
    right: 80px;
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    display: flex;
    top: 70px;
    z-index: 6;
    font-size: 30px;
    position: absolute;
    cursor: pointer;
    }
`;

export const Container = styled.div`
    @media (min-width: 1000px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const ImageAndTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
    div {
        h5{
            margin-top: -10px;
            margin-bottom: 12px;
        }
    }
`;

export const Infos = styled.div`
@media (min-width: 700px) {
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    display: flex;
    border-radius: 10px;
    flex-direction: column;
    position: fixed;
    background: white;
    top: 19%;
    left: 14.5%;
    padding: 45px;
    z-index: 5;
    color: black;
    opacity: 100%;
}

@media (max-width: 1000px) {
    visibility: ${(props) => (props.isAddOpen ? "visible" : "hidden" )};
    border-radius: 10px;
    position: fixed;
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    top: 10%;
    left: 4%;
    padding: 20px;
    z-index: 5;
    color: black;
    opacity: 100%;
    width: 80vw;
}
`;

export const Habilities = styled.div ` 
    display: flex;
    flex-wrap: wrap;
    table {
        flex-wrap: wrap;
        height: 40px;
        th, td {
        border: 1px solid #3E4C5E;
        padding: 30px;
        max-width: 32rem;
        text-align: center;
    }
    }
`;
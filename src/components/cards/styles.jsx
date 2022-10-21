import styled from "styled-components";

export const ImageContent = styled.div`
  display: flex;
  margin-top: 20vh;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  text-align: center;
`;

export const DiscoveredPokemons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 55vh;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const EachPokemon = styled.div`
  display: flex;
  margin-top: 20px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 7px 7px 13px 12px rgba(50, 50, 50, 0.22);
  padding: 30px;
  width: 250px;
  transition: all 0.3s ease-out;
  :hover {
  transform: translateY(-5px);
  cursor: pointer;
}
`;

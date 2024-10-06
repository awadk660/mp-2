import styled from "styled-components";
import { PokemonCard } from "../interfaces/PokemonCard";

const SinglePokemonDiv = styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: slategray;
    color: black;
    border: 3px black solid;
    font: calc(2px + 1vw);
    text-align: center;
`;

export default function SingleCard({name, type, image}: PokemonCard) {
    return (
        <SinglePokemonDiv>
            <h2>{name}</h2>
            <p><strong>Type:</strong> {type}</p>
            <img src={image} alt="Pokemon Image"></img>
        </SinglePokemonDiv>
    )
}
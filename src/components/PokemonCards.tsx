import styled from "styled-components";
import { PokemonCard } from "../interfaces/PokemonCard";
import SingleCard from "./SingleCard";

const AllCardsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

export default function PokemonCards(props : { data:PokemonCard[] } ) {
    return (
        <AllCardsDiv>
            {props.data.map((pokemon: PokemonCard) => 
                <SingleCard 
                    key={pokemon.id} 
                    id={pokemon.id} 
                    name={pokemon.name} 
                    type={pokemon.type} 
                    image={pokemon.image}
                />
            )}
        </AllCardsDiv>
    )
}
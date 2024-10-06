import { useState, useEffect } from 'react'
import './App.css'
import { PokemonCard } from './interfaces/PokemonCard'
import styled from 'styled-components';
import PokemonCards from './components/PokemonCards';

const ParentDiv=styled.div`
  width: 90vw;
  margin: auto;
  border: 5px black solid;
`;

function App() {
  const [data, setData] = useState<PokemonCard[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.pokemontcg.io/v2/cards");
      const result = await rawData.json()
      let cards: PokemonCard[]
      cards = result.data.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          type: item.types,
          image: item.images.large,
        }});
      setData(cards);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully"))
      .catch((e: Error) => console.log("There was the error: " + e));
  }, [])

  return (
    <ParentDiv>
      {data.length == 0 ? <h1>Loading...</h1> : <PokemonCards data={data} />}
    </ParentDiv>
  )
}

export default App

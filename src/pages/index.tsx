import { useContext, useState } from 'react';
import { useRouter } from 'next/router'

import type { NextPage } from 'next'

import { Player } from '../components';
// import { useRound } from '../hooks';

import { AppContext } from '../store';

const Home: NextPage = (props: any) => {
  const router = useRouter();
  const [numberOfPlayers, setNumberOfPlayers] = useState<number>(2);
  const appContext: any = useContext(AppContext);


  const generatePlayerSeats = (count: number) => Array(count).fill(0).map((player, index) => (
    <Player key={index} />
  ));

const handleSubmitPlayers = () => {
    const { store, gameActions } = appContext;

    gameActions.nextRound(store);
    
    if(store.players.length < 2) return;

    router.push('/game');
  }

  return (
    <>
      <div>
        <h1>How many players?</h1> 
        {generatePlayerSeats(numberOfPlayers)}
        <label>Number of players: </label>
        <span>{numberOfPlayers}</span>
        <button onClick={() => setNumberOfPlayers(numberOfPlayers + 1)}>More</button> 
        <button onClick={() => setNumberOfPlayers(numberOfPlayers - 1)}>Less</button> 
      </div>
      <div>
        <button type="submit" onClick={handleSubmitPlayers}>Start</button>
      </div>
    </>
  )
}

export default Home

import type { NextPage } from 'next'
import { useContext, useState } from 'react';

import { Player } from '../components';
import { GameContext } from '../context';
import { useRound } from '../hooks';

const generatePlayerSeats = (count: number, hasStarted: boolean) => Array(count).fill(0).map((player, index) => <Player key={index} indexPlayer={index+1} />)

const Home: NextPage = () => {
  const [ numberPlayers, setNumberPlayers ] = useState(2);
  const { numberRound, handleNextRound, handleResetRound} = useRound();
  const { store, resetList } = useContext(GameContext);

  const handleChangeNumberPlayers = (event: any) => {
    setNumberPlayers(event.target.value);
  }

  const handlePlayerCount = (operation: string) => operation === '+' ? setNumberPlayers(numberPlayers + 1) : setNumberPlayers(numberPlayers - 1);

  const handleSubmitPlayers = () => {
    if(store.listPlayers.length < 1){
      return;
    }
    handleNextRound();
  }

  const handleSubmitRounds = () => {
    const total = store.listPlayers.map(value => value.goal).reduce((a, b) => a + b);
    if(numberRound > 1 && numberRound == total){
      return false
    }
    console.log("Iniciar", store.listPlayers);
  }

  const handleResetPlayers = () => {
    handleResetRound();
    resetList();
    setNumberPlayers(2);
  }
  
  return (
    <>
      {numberRound < 1 ? 
      <>
        <div>
          <h1>How many players?</h1> 
          {generatePlayerSeats(numberPlayers, numberRound > 1)}
          <label>Number of players:</label>
          <span>{numberPlayers}</span>
          <button onClick={() => handlePlayerCount('+')}>More</button> 
          <button onClick={() => handlePlayerCount('-')}>Less</button> 
        </div>
        <div>
          <button type="submit" onClick={handleSubmitPlayers}>Start</button>
        </div>
      </>
      : 
      <>
        <h1>Round {numberRound}</h1>
        {generatePlayerSeats(numberPlayers, numberRound > 1)}
        <button type="submit" onClick={handleResetPlayers}>Reset Game</button>
        <button type="submit" onClick={handleSubmitRounds}>Save rounds</button>
        <button type="submit" onClick={handleNextRound}>Next round</button>
      </>
      }
    </>
  )
}

export default Home

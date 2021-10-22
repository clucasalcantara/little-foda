import { useContext } from 'react'
import type { NextPage } from 'next'

import { Player } from '../../components';

import { AppContext } from '../../store';

const Game: NextPage = () => {
    const appContext = useContext(AppContext);

    const { store, gameActions }: any = appContext;
  
    return (
        <>
            <h1>Round {store.round}</h1>
            {store.players.map((player: any): any => <Player id={player.id} key={player.id} />)}
            <button type="submit" onClick={() => gameActions.nextRound(store)}>Next round</button>
        </>
    )
}


export default Game;

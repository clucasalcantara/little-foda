import { useContext } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router';

import { Player } from '../../components';

import { AppContext } from '../../store';

const Game: NextPage = () => {
  const router = useRouter();
  const appContext = useContext(AppContext);

    const { store, gameActions }: any = appContext;

    const handleResetGame = () => {
        gameActions.resetGame();
        router.push('/');
    }

    const handleStartRound = () => {
        const total = (store.round && store.players) && 
            store.players
                .reduce(
                    (acc: Number, player: any) => acc = acc + player.goal
                , 0);

        if(store.round > 1 && store.round == total){
            return false
        }
        return true;
    }
  
    return (
        <>
            <h1>Round {store.round}</h1>
            {store.players.map((player: any): any => <Player id={player.id} key={player.id} />)}
            <button type="submit" onClick={handleResetGame}>Reset game</button>
            {!handleStartRound() ? 
                <button type="submit" onClick={handleStartRound}>Start round</button> :
                <button type="submit" onClick={() => gameActions.nextRound(store)}>Next round</button>}
        </>
    )
}


export default Game;

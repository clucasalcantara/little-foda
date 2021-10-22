import { useContext, useState } from 'react';
import { GameContext } from '../../context';
import PlayerInterface from '../../models/player';

interface PlayerProps{
    indexPlayer: number
}

const Player = (props: PlayerProps) => {
    const { store, pushToList, addGoal } = useContext(GameContext);
    const [currentPlayer] = useState(store.listPlayers[props.indexPlayer-1]);

    const handleBlurName = (e: any) => {
        const player: PlayerInterface  = {
            name: e.target.value, 
            number: props.indexPlayer,
            goal: 0
        }
        pushToList(player);
    }

    const handleGoal = (type: string) => currentPlayer && (type === '+' ? addGoal(props.indexPlayer - 1, currentPlayer.goal + 1) : addGoal(props.indexPlayer - 1, currentPlayer.goal + 1));

    return (
        <div>
            {!currentPlayer  ? 
            <>
                <label>Name</label>
                <input type="text" placeholder={`Name Player ${props.indexPlayer}`} onBlur={handleBlurName} />
            </>
            :
            <>
                <label>{currentPlayer.name}</label>
                <button onClick={() => handleGoal('-')}>-</button>
                <h2 onClick={() => addGoal(props.indexPlayer, currentPlayer.goal + 5)}>{currentPlayer.goal}</h2>
                <button onClick={() => handleGoal('+')}>+</button>
            </>}
        </div>
    );
}

export default Player;

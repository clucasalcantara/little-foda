import { useContext } from 'react';
import { AppContext } from '../../store';
import { v4 as uuidv4 } from 'uuid';

import PlayerInterface from '../../models/player';

const Player = ({ id }: { id?: string }) => {
    const { store, gameActions }: any = useContext(AppContext);
    const currentPlayer = store?.players.find((player: any) => player.id === id);

            
    const handleBlurName = (e: any) => {
        const player = {
            name: e.target.value, 
            goal: 0,
            id: uuidv4(),
        }

        player.name && gameActions.addPlayer(store, player);
    };

    const handleGoal = (playerId: string, goal: number) => gameActions.handlePlayerGoal({ currentStore: store, playerId, goal: goal });
    
    const renderPlayerData = () => {
        if (!id) return (
            <>
                <label>Name</label>
                <input type="text" placeholder={`Player name`} onBlur={handleBlurName} />
            </>
        )

        return (
            <>
                <label>{currentPlayer.name}</label>
                <button onClick={() => handleGoal(currentPlayer.id, currentPlayer.goal + 1)}>+</button>
                <h2>{currentPlayer.goal}</h2>
                <button onClick={() => handleGoal(currentPlayer.id, currentPlayer.goal - 1)}>-</button>
            </>
        )
    }
    
    return (
        <div>
            {renderPlayerData()}
        </div>
    );
}

export default Player;

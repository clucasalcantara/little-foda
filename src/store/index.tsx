import { useState, createContext } from 'react';

export const AppContext = createContext({})

import type { StoreInterface, GameEngineInterface, GoalUpdateInterface } from './types';
import { PlayerType } from '../components';

export const ContextWrapper: React.FC = (props) => {
	const [store, setStore] = useState<StoreInterface>({
		players: [],
        round: 0,
	});

    const [gameActions] = useState<GameEngineInterface>({
		addPlayer: (currentStore: StoreInterface, player: PlayerType) => setStore({ ...currentStore, players: currentStore.players.concat(player) }),
		nextRound: (currentStore: any) => {
            currentStore.players.map((player: PlayerType) => player.goal = 0);
            setStore({ ...currentStore, round: currentStore.round += 1 })
        },
        handlePlayerGoal: ({ currentStore, playerId, goal }: GoalUpdateInterface) => {
            const player: PlayerType | undefined =
                currentStore.players.find((player: PlayerType) => player.id === playerId);
            
            if (player) player.goal = goal;
            
            setStore({ ...currentStore });
        },
	});
	
	return (
		<AppContext.Provider value={{ store, gameActions }}>
			{props.children}
		</AppContext.Provider>
	);
}
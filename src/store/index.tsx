import { useState, createContext } from 'react';

export const AppContext = createContext({})


export const ContextWrapper = (props: any) => {
	const [store, setStore] = useState({
		players: [],
        round: 0,
	});

    const [gameActions] = useState({
		addPlayer: (currentStore: any, player: any) => setStore({ ...currentStore, players: currentStore.players.concat(player) }),
		nextRound: (currentStore: any) => {
            currentStore.players.map((player: any) => player.goal = 0);
            setStore({ ...currentStore, round: currentStore.round += 1 })
        },
        handlePlayerGoal: ({ currentStore, playerId, goal }: any) => {
            const player = currentStore.players.find((player: any) => player.id === playerId);
            player.goal = goal;

            currentStore.players[playerId] = player;

            setStore({ ...currentStore });
        },
	});
	
	return (
		<AppContext.Provider value={{ store, gameActions }}>
			{props.children}
		</AppContext.Provider>
	);
}
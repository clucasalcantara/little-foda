import { createContext } from "react";
import PlayerInterface from "../../models/player";

interface Store{
    listPlayers: PlayerInterface[];
    round: number;
}

const store:Store = {
    listPlayers: [] as PlayerInterface[],
    round: 0
};

const pushToList = (player: PlayerInterface) => player && store.listPlayers.push(player);

const resetList = () => store.listPlayers = [];

const addGoal = (indexPlayer: number, numberGoals: number) => {
    const editPlayerGoals = store.listPlayers.findIndex((player, index) => index === indexPlayer)
    store.listPlayers[editPlayerGoals].goal = numberGoals;
}

const contextValue = {
    store,
    pushToList,
    resetList,
    addGoal,
}


export const GameContext = createContext(contextValue);

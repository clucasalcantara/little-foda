import { useEffect, useState } from "react";

const useRound = () => {
    const [numberRound, setNumberRound] = useState(0);
    const handleNextRound = () => setNumberRound(numberRound + 1);
    const handleResetRound = () => setNumberRound(0);

    return {
        numberRound,
        handleNextRound,
        handleResetRound
    };
}

export default useRound;
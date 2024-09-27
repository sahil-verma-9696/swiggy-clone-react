import { useEffect, useState } from "react";

function useCuisines() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetchCards()
    }, []);

    async function fetchCards() {
        const rawData = await fetch("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=26.87560&lng=80.91150");
        const data = await rawData.json();
        setCards(data?.data?.cards);
    }

    return [cards, setCards]
}

export default useCuisines;
import { useEffect, useState } from "react";

const useMenuCards = (resid) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchMenuCard(resid)
    }, [])

    async function fetchMenuCard(resid) {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
        const data = await response.json();
        setCards(data?.data?.cards)
    }

    return cards
}

export default useMenuCards;
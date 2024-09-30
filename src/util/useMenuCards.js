import { useEffect, useState } from "react";

import { data } from './data'

const useMenuCards = (resid) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchMenuCard(resid)
    }, [])

    async function fetchMenuCard(resid) {
        
        // const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`);
        // setCards(data?.data?.cards)


        // for no internet
        setCards(data.data.cards)

    }

    return cards
}

export default useMenuCards;
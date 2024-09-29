import { useEffect, useState } from "react"
import { API_URL } from "../enviroment";

const useCard = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, [])

  const getCards = async () => {
    const rawData = await fetch(API_URL);
    const data = await rawData.json();
    setCards(data?.data?.cards);
  }

  return cards;
}

export default useCard;
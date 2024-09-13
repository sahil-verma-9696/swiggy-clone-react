import useCard from "./util/useCard";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import { createBrowserRouter } from 'react-router-dom'


export const App = ()=>{
  const cards = useCard();
  const [card1] = cards?.filter((e) => e?.card?.card?.id === "whats_on_your_mind");
  const [card2] = cards?.filter((e) => e?.card?.card?.id === "top_brands_for_you");
  const [card3] = cards?.filter((e) => e?.card?.card?.id === "popular_restaurants_title");
  const [card4] = cards?.filter((e) => e?.card?.card?.hasOwnProperty('sortConfigs'));
  const [card5] = cards?.filter((e) => e?.card?.card?.id === "restaurant_grid_listing");

  return (
    <div className="w-full  ">
      <Header cards={{ card1, card2 }} />
      <Main head={card3} cards={{ card4, card5 }} />
    </div>
  );
}



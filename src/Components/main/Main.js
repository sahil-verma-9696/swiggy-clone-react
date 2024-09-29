import Restaurants from "./Restaurants";
import useCard from "./../../util/useCard";
import Header from "./Header";

function Main() {
  const cards = useCard();
  const [card1] = cards?.filter(
    (e) => e?.card?.card?.id === "whats_on_your_mind"
  );
  const [card2] = cards?.filter(
    (e) => e?.card?.card?.id === "top_brands_for_you"
  );
  const [card3] = cards?.filter(
    (e) => e?.card?.card?.id === "popular_restaurants_title"
  );
  const [card4] = cards?.filter((e) =>
    e?.card?.card?.hasOwnProperty("sortConfigs")
  );
  const [card5] = cards?.filter(
    (e) => e?.card?.card?.id === "restaurant_grid_listing"
  );

  return (
    <div className="w-full">
      <Header cards={{ card1, card2 }} />
      <Restaurants head={card3} filterCard={card4} restaurantsCard={card5} />
    </div>
  );
}

export default Main;

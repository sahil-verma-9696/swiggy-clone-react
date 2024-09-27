import Banner from './Banner';
import TopReastaurants from './TopReastaurants';

function Header({ cards }) {
  const { card1, card2 } = cards;
  return (
    <div>
      <Banner card={card1} />
      <TopReastaurants card={card2} />
    </div>
  )
}

export default Header

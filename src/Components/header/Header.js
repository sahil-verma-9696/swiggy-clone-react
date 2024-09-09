import Banner from './Banner';
import Navbar from './Navbar'
import TopReastaurants from './TopReastaurants';

function Header({ cards }) {
  const { card1, card2 } = cards;
  return (
    <div>
      <Navbar />
      <Banner card={card1} />
      <TopReastaurants card={card2} />
    </div>
  )
}

export default Header

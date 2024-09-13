import Restaurants from './Restaurants'

function Main({ head, cards }) {

  return (
    <div className='w-full'>
      <Restaurants head={head} filterCard={cards.card4} restaurantsCard={cards.card5} />
    </div>
  )
}

export default Main

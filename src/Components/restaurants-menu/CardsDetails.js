import React from 'react'
import ItemCardDetails from './ItemCardDetails'

function CardsDetails({ itemCards }) {

    return (
        <div>
            {
                itemCards.map(e => <ItemCardDetails key={e.card.info.id} info={e.card.info} />)
            }
        </div>
    )
}

export default CardsDetails

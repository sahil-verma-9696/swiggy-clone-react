import React from "react";
import ItemCardDetails from "./ItemCardDetails";

function ItemCategory({ card }) {
    return (
        <div>
            <div className="bg-white mb-2 flex items-center justify-between px-2 py-4 cursor-pointer">
                <span className="text-2xl font-bold">
                    {card.title} ({card.itemCards.length})
                </span>
                <span className="cursor-pointer">
                    <i className="fa-solid fa-sort-down text-[#FF6820]"></i>
                </span>
            </div>

            {
                card.itemCards.map(e=><ItemCardDetails key={e.card.info.id} info={e.card.info}/>)
            }
        </div>
    );
}

export default ItemCategory;

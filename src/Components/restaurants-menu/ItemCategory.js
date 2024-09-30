import React from "react";
import CardsDetails from "./CardsDetails";

function ItemCategory({ card,index, showItems, setShowIndex,setShowItems }) {
  function handleItemCardClick() {
    setShowIndex(index);
    setShowItems(!showItems)
  }

  return (
    <div>
      <div
        onClick={handleItemCardClick}
        className="bg-white mb-2 flex items-center justify-between px-2 py-4 cursor-pointer"
      >
        <span className="text-2xl font-bold">
          {card.title} ({card.itemCards.length})
        </span>
        <span className="cursor-pointer">
          <i className="fa-solid fa-sort-down text-[#FF6820]"></i>
        </span>
      </div>

      {showItems && <CardsDetails itemCards={card.itemCards} />}
    </div>
  );
}

export default ItemCategory;

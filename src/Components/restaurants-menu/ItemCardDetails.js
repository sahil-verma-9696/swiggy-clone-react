import React from "react";
import { MENU_IMG_URL } from "../../enviroment";

function ItemCardDetails({ info }) {
  console.log(info);
  const {
    name,
    defaultPrice,
    description,
    imageId,
    price,
    ratings: {
      aggregatedRating: { rating, ratingCountV2 },
    },
  } = info;

  return (
    <div>
      <div className="flex gap-40 justify-between items-center bg-white border-b-2 border-solid py-4 px-2">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm font-bold">
            &#8377; {defaultPrice / 100 || price / 100}
          </p>
          <p className="text-sm font-bold">
            {rating} {ratingCountV2 ? `(${ratingCountV2})` : ""}
          </p>

          <p>{description}</p>
        </div>

        <div className="min-w-[156px] max-w-[156px] min-h-28 rounded-xl overflow-hidden">
          <img
            className="size-full object-cover "
            src={MENU_IMG_URL + imageId}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default ItemCardDetails;

import { useParams } from "react-router-dom";
import useMenuCards from "../../util/useMenuCards";
import ShimmerMenu from "../utils/ShimmerMenu";
import ItemCategory from "./ItemCategory";

function Menu() {
    const { resid } = useParams();

    let rootCards = useMenuCards(resid);

    if (rootCards.length === 0) return <ShimmerMenu />;

    const [
        ,
        ,
        // Skip card0
        // Skip card1
        {
            card: {
                card: {
                    info: {
                        name,
                        locality,
                        avgRatingString,
                        totalRatingsString,
                        costForTwoMessage,
                        cuisines,
                        sla,
                        feeDetails: { message },
                    },
                },
            },
        },
        ,
        {
            groupedCard: {
                cardGroupMap: {
                    REGULAR: { cards },
                },
            },
        },
    ] = rootCards;

    const itemCategory = cards.filter(
        (e) =>
            e.card.card["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // console.log(itemCategory)

    return (
        <div className=" w-[55%] pt-12 m-auto">
            <div className="card rounded-xl p-4 bg-gradient-to-t from-slate-300 to-white">
                {/* Heading */}
                <h1 className="font-bold text-2xl mb-8">{name}</h1>

                {/* Sub card */}

                <div className="sub-card border-solid border-[1px] border-slate-400 rounded-xl bg-white p-4">
                    <div className="flex font-semibold justify-center items-center w-fit gap-1">
                        <div className="bg-green-500 size-5 flex justify-center items-center rounded-full">
                            <i className="fa-solid fa-star text-white fa-xs"></i>
                        </div>
                        <span>{`${avgRatingString} (${totalRatingsString})`}</span>
                        <div className="size-1 rounded-full bg-black"></div>
                        <span>{costForTwoMessage}</span>
                    </div>

                    <div className="underline text-[#FF6820] font-bold">
                        <span>{cuisines?.join(", ")}</span>
                    </div>

                    <div className="mt-4 mb-4 flex">
                        <div className="relative">
                            <div className="flex gap-2 items-center">
                                <div className="inline-block rounded-full size-2 bg-gray-400"></div>
                                <span className="font-bold">Outlet</span>
                                <span>{locality}</span>
                                <span className="cursor-pointer">
                                    <i className="fa-solid fa-sort-down text-[#FF6820]"></i>
                                </span>
                            </div>

                            <div className="w-[2px] h-8 bg-gray-400 absolute top-2 left-[3px]"></div>

                            <div className="flex gap-2 items-center">
                                <div className="inline-block rounded-full size-2 bg-gray-400"></div>
                                <span className="font-semibold">{sla.slaString}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <span>
                            <i className="fa-solid fa-person-biking"></i>
                        </span>
                        {message}
                    </div>
                </div>
            </div>

            <div className="itemCategories bg-gray-200">
                {
                    itemCategory.map(e=><ItemCategory key={e.card.card.title} card={e.card.card}/>)
                }
            </div>
        </div>
    );
}

export default Menu;

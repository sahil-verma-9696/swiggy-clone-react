import useCuisines from "../../util/useCuisines";
function Search() {


    const [cards] = useCuisines();

    console.log(cards[1]?.card?.card?.imageGridCards?.info)
    return (
        <div className="search-component size-full w-[55%] pt-12 m-auto">

            <div className="wrapper w-full">

                <div className="inp-wrapper relative h-fit">
                    <input
                        className=
                        "w-full text-md p-2 pl-4 shadow-[0_0_2px_black] rounded-sm"
                        type="text" placeholder="Search for restaurants and food" />
                    <i className=
                        "fa-solid fa-magnifying-glass absolute right-0 top-1/2 translate-y-[-50%] translate-x-[-50%] text-lg text-slate-600"></i>
                </div>


                <h1 className="text-xl font-extrabold">Popular Cuisines</h1>

                <div className="flex flex-nowrap">
                    {
                        cards[1]?.card?.card?.imageGridCards?.info?.map(e =>
                            <img className="w-[70px]"
                                key={e.id} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + e?.imageId} alt="img not able to load" />
                        )
                    }
                </div>
            </div>

        </div>)
}

export default Search;
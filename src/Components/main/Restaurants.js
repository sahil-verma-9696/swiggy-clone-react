import Card from "../utils/Card";
// import useRestaurants from "../../util/useRestaurants";
import { useEffect, useState } from "react";

function Restaurants({ head, filterCard, restaurantsCard }) {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        setRestaurants(restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }, [restaurantsCard])

    function filte() {
        // restaurants.forEach(e=>console.log(e))
        setRestaurants(restaurants?.filter(e => e?.info?.id === "78862"))
    }

    return (
        <div className="w-3/4  m-auto">
            <h1 className="font-extrabold text-2xl" id={head?.card?.card?.id}>{head?.card?.card?.title}</h1>

            <div className="filter-wrapper w-full">


                <div className="w-full flex items-center gap-3">
                    <button className="filter-btn" onClick={filte}>
                        <span>Filter</span>
                        <i className="fa-solid fa-filter"></i>
                    </button>
                    <button className="filter-btn">
                        <span>Short By</span>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <button className="filter-btn">
                        <span>Fast Delivery</span>
                    </button>
                    <button className="filter-btn">
                        <span>New on Swiggy</span>
                    </button>
                    <button className="filter-btn">
                        <span>Rating 4.0+</span>
                    </button>
                    <button className="filter-btn">
                        <span>Pure veg</span>
                    </button>
                    <button className="filter-btn">
                        <span>Offers</span>
                    </button>
                    <button className="filter-btn">
                        <span>Rs. 300 - 600</span>
                    </button>
                    <button className="filter-btn">
                        <span>Less than Rs. 300</span>
                    </button>
                </div>


                <div className=" hidden menu-wrapper w-[100vw] h-[100vh] bg-black bg-opacity-75 fixed top-0 left-0 z-20 flex justify-center items-center">
                    <form className=" filter-menu w-[831px] h-[495px] bg-white rounded-xl">
                        <div className="filter-menu-top size-full flex justify-between h-12">
                            <h1 className=" rounded-t-xl text-3xl font-extrabold text-slate-800 pt-3 pl-3">Filter</h1>

                            <button className="size-8 flex justify-center items-center mt-3 mr-3 rounded-full shadow-xl">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="filter-menu-bottom flex size-full">
                            <div className="filter-menu-bottom-left bg-red-100 w-2/5 rounded-bl-xl h-full">
                                <ul className="overflow-y-scroll h-full">
                                    <li className="text-xl font-semibold pl-5 hover:text-red-400 mt-9 cursor-pointer">
                                        <label className="cursor-pointer " htmlFor="">
                                            Sort
                                        </label>
                                    </li>
                                    {
                                        filterCard?.card?.card?.facetList?.map((e) => <li key={e?.id} className="text-xl font-semibold pl-5 mt-9 hover:text-red-400 cursor-pointer">
                                            <label className="cursor-pointer" htmlFor="">
                                                {e?.label}
                                            </label>
                                        </li>)
                                    }

                                </ul>
                            </div>
                            <div className="filter-menu-bottom-right bg-green-100 size-full rounded-br-xl">
                                <h1 className="pl-5 pt-3">FILTER BY</h1>
                            </div>
                        </div>
                    </form>
                </div>







                <div className="flex flex-wrap w-full mt-5">

                    {

                        restaurants?.map((e) => <Card key={e?.info?.id} card={e} />)
                    }
                </div>


            </div>
        </div>
    )
}

export default Restaurants

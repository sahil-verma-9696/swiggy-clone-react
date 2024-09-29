import { Link } from 'react-router-dom'
import Card from '../utils/Card'
import ShimerTopRes from '../utils/ShimerTopRes'


function TopReastaurants({ card }) {



    return (card === undefined) ? <ShimerTopRes /> : (
        <div className=' w-3/4 m-auto mt-4'>
            <div className='flex justify-between'>
                <h1 className={`font-extrabold text-2xl pl-[${card?.card?.card?.header?.headerStyling?.padding?.left}px] pt-[${card?.card?.card?.header?.headerStyling?.padding?.top}px] pb-[${card?.card?.card?.header?.headerStyling?.padding?.bottom}px]`} >
                    {card?.card?.card?.header?.title}
                </h1>

                <div className='flex gap-3'>
                    <button className='rounded-full bg-gray-200 p-2 size-8 flex justify-center items-center'>
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button className='rounded-full bg-gray-200 p-2 size-8 flex justify-center items-center'>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>

            <ul className='flex flex-nowrap w-full overflow-x-hidden mt-5'>
                {
                    card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((info) =>
                        <Link key={info?.info?.id} to={"/swiggy-clone-react/restaurant/" + info.info.id} >
                            <Card card={info} />
                        </Link>)
                }
            </ul>

            <hr className='mt-12' />
        </div>
    )
}

export default TopReastaurants

import { RESTAURANT_IMG_URL } from './../../enviroment'
function Card({ card }) {



    return (
        <div className='card-wrapper min-w-[263px] max-w-[263px] h-fit ml-[16px] mb-6'>

            <div className="card-img-wrapper w-full h-[182px] rounded-2xl bg-gray-300 relative">
                <img className='size-full object-cover rounded-2xl' src={RESTAURANT_IMG_URL + card?.info?.cloudinaryImageId} alt="" />
                <div className='absolute size-full bg-gradient-to-b from-transparent from-50% to-black top-0 rounded-2xl'>
                    <p className='text-white absolute bottom-2 text-2xl font-extrabold ml-4'>
                        {
                            card?.info?.aggregatedDiscountInfoV3?.header +" "+ card?.info?.aggregatedDiscountInfoV3?.subHeader
                        }
                    </p>
                </div>
            </div>


            <div className='mt-3 ml-5'>
                <h1 className="font-extrabold text-lg">{card?.info?.name}</h1>
                <div className='flex font-semibold justify-center items-center w-fit gap-1'>
                    <div className='bg-green-500 size-5 flex justify-center items-center rounded-full'><i className="fa-solid fa-star text-white fa-xs"></i></div>
                    <span >{card?.info?.avgRatingString}</span>
                    <div className='size-1 rounded-full bg-black'></div>
                    <span>{card?.info?.sla?.slaString}</span>
                </div>
                <p>{card?.info?.cuisines?.join(", ")}</p>
            </div>
        </div>
    )
}

export default Card

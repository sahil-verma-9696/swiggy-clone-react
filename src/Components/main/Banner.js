import ShimerBanner from '../utils/ShimerBanner'
import { BANNER_IMG_URL } from '../../enviroment'
function Banner({ card }) {

    return (card === undefined) ? <ShimerBanner /> : (
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

            <ul className='flex flex-nowrap w-full overflow-x-hidden'>

                {
                    card?.card?.card?.imageGridCards?.info?.map((e) => <li key={e?.imageId} className="img-wrapper min-w-40 mr-1">
                        <img src={BANNER_IMG_URL + e?.imageId} alt="" />
                    </li>)
                }
            </ul>

            <hr className='mt-12' />
        </div>
    )
}

export default Banner

import React from 'react'

function ShimmerMenu() {
    return (
        <div className=" w-[55%] pt-12 m-auto">

            <div className="card rounded-xl p-4 bg-gradient-to-t from-slate-300 to-white">

                {/* Heading */}
                <h1
                    className="font-bold text-2xl mb-8 w-48 h-4 bg-gray-200 rounded-lg"
                ></h1>

                {/* Sub card */}

                <div className="sub-card border-solid border-[1px] border-slate-400 rounded-xl bg-white p-4">

                    <div
                        className='flex font-semibold justify-center items-center w-fit gap-1'
                    >
                        <div
                            className='bg-green-500 size-5 flex justify-center items-center rounded-full'
                        >
                            <i className="fa-solid fa-star text-white fa-xs"></i>
                        </div>
                        <span className='w-12 h-4 bg-gray-200 rounded-lg'></span>
                        <div className='size-1 rounded-full bg-black'></div>
                        <span className='w-12 h-4 bg-gray-200 rounded-lg'></span>
                    </div>

                    <div
                        className="w-16 h-4 mt-2 bg-gray-200 rounded-lg"
                    ></div>


                    <div
                        className="mt-4 mb-4 flex"
                    >

                        <div className="relative">
                            <div className="flex gap-2 items-center">
                                <div
                                    className="inline-block rounded-full size-2 bg-gray-400"
                                ></div>
                                <span className="font-bold">
                                    <div className='w-12 h-4 bg-gray-200 rounded-lg'></div>
                                </span>
                                <span><div className='w-12 h-4 bg-gray-200 rounded-lg'></div></span>
                                <span className="cursor-pointer"><i className="fa-solid fa-sort-down text-[#FF6820]"></i></span>
                            </div>

                            <div
                                className="w-[2px] h-8 bg-gray-400 absolute top-2 left-[3px]"
                            ></div>

                            <div className="flex gap-2 items-center">
                                <div
                                    className="inline-block rounded-full size-2 bg-gray-400"
                                ></div>
                                <span className="font-semibold">
                                    <div className='w-20 h-4 mt-2 bg-gray-200 rounded-lg'></div>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <span><i className="fa-solid fa-person-biking"></i></span>
                        <div className='w-40 h-4 bg-gray-200 rounded-lg'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShimmerMenu

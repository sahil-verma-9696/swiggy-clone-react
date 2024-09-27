function Menu() {
    return (
        <div className=" w-[55%] pt-12 m-auto">

            <div className="card rounded-r-md bg-gradient-to-b from-transparent from-50% to-[#DDDDE5] top-0">
                <h1 
                className="font-semibold text-2xl "
                >{"Chinese work"}</h1>
                <div className="sub-card">
                    <div className='flex font-semibold justify-center items-center w-fit gap-1'>
                        <div className='bg-green-500 size-5 flex justify-center items-center rounded-full'><i className="fa-solid fa-star text-white fa-xs"></i></div>
                        <span >{`4.3 (1.2K+ ratings)`}</span>
                        <div className='size-1 rounded-full bg-black'></div>
                        <span>{"₹250 for two"}</span>
                    </div>
                    <div>
                        <span>China</span>
                        <span>Asia</span>
                    </div>

                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Menu

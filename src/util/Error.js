import { useRouteError } from 'react-router-dom'
function Error() {
    const err = useRouteError()
    console.table(err.error.stack.split("\n"))
    return (
        <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center'>
            <div className='w-1/2 p-8 bg-transparent border border-white rounded-lg flex flex-col justify-center items-center'>
                <h1 className='text-white font-extrabold text-7xl'> {err.status}</h1>
                <h1 className='text-white font-extrabold text-4xl'> {err.statusText}</h1>
                <h1 className='text-white font-extrabold text-3xl'> {err.error.message}</h1>
                <div className=' rounded-b-xl border border-t-0 border-white w-3/4 p-4 h-1/2 overflow-y-scroll' >
                    {
                        err.error.stack.split("\n").map((e, i) => <h1 key={i} className='text-lg text-wrap border-b font-semibold text-white'>{e}</h1>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Error

import { useEffect, useState } from "react"


function useRestaurants(data) {
    const [x, setX] = useState(data);

    useEffect(() => {
        console.log(data)
        setX(data);
    }, [])


    return [x,setX]
}

export default useRestaurants

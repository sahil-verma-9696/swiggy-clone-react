import { useState } from "react";

const useOnlineStatus = ()=>{

    const [status,setStatus] = useState("online");

    window.addEventListener("online",()=>{

        setStatus("online");
    });

    window.addEventListener("offline",()=>{
        console.log('we are offline')
        setStatus("offline");
    })

    return status;
}

export default useOnlineStatus;
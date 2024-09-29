import { Outlet } from 'react-router-dom'
import Navbar from './Components/header/Navbar'
import useOnlineStatus from './util/useOnlineStatus'
import Offline from './Components/utils/Offline'
function App() {
  const status = useOnlineStatus();
  console.log(status)
  return (
    <div className='w-full'>
      <Navbar />
      {
        status === "offline" ? <Offline/> : <Outlet />
      }
      
    </div>
  )
}

export default App

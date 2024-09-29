import { Outlet } from 'react-router-dom'
import Navbar from './Components/header/Navbar'
function App() {
  return (
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App

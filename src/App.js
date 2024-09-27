import { Outlet } from 'react-router-dom'
import Navbar from './Components/header/Navbar'
function App() {
  return (
    <div className='w-full bg-slate-100'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App

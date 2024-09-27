import logoImg from './swiggy-logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="w-full h-[80px] bg-white shadow-md sticky top-0 z-20">
      <div className="nav-inner h-full w-4/5 m-auto flex justify-between">

        {/* nav-inner-left  */}
        <div className="nav-inner-left h-full flex justify-center items-center gap-8">

          <div className="log-wrapper w-10">
            <img className="w-full" src={logoImg} alt="no img found" />
          </div>

          <section className="flex gap-4 items-center justify-center cursor-pointer">
            <p className="font-semibold underline hover:text-[#FF6820]">Other</p>
            <i className="fa-solid fa-chevron-down text-[#FF6820]"></i>
          </section>

        </div>


        <div className="nav-inner-right flex justify-center items-center">
          <ul className="flex justify-center items-center gap-12">
            <Link className="nav-right-item">
              <i className="fa-solid fa-briefcase"></i>
              <p>Swiggy Corporate</p>
            </Link>
            <Link className="nav-right-item" to={"/search"}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </Link>
            <li className="nav-right-item">
              <i className="fa-solid fa-percent"></i>
              <p>Offers<sup className="text-[#FFBB3B]">NEW</sup></p>
            </li>
            <li className="nav-right-item">
              <i className="fa-solid fa-life-ring"></i>
              <p>Help</p>
            </li>
            <li className="nav-right-item">
              <i className="fa-regular fa-user"></i>
              <p>Sign in</p>
            </li>
            <li className="nav-right-item">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  )
}

export default Navbar

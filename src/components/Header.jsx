import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return(
        <header className="bg-[#fff] w-full font-montserrat">
            <div className="flex justify-between items-center py-1 px-10 max-w-[1440px] my-0 mx-auto">
                <div className="logo">
                    <img className="w-[80px] h-[80px] object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/The_Fresh_Market_logo.svg/2048px-The_Fresh_Market_logo.svg.png" alt="logo" />
                </div>
                <nav className="hidden gap-3 sm:flex">
                    <li className="list-none"><Link to='/' className="text-[#7CFC00] font-montserrat font-bold">Home</Link></li>
                    <li className="list-none"><Link to='/shop' className="text-[#7CFC00] font-montserrat font-bold">Shop</Link></li>
                    <li className="list-none"><Link to='/aboutus' className="text-[#7CFC00] font-montserrat font-bold">About Us</Link></li>
                </nav>
                <FontAwesomeIcon icon={faBars} className="text-[#7CFC00] text-2xl sm:hidden" />   
                <FontAwesomeIcon icon={faCartShopping} className="text-[#7CFC00] text-2xl" />
            </div>
        </header>
    )
}
export default Header
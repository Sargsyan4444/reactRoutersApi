import { Link } from "react-router-dom"

function Header() {
    return(
        <header className="flex justify-between items-center p-8">
            <div className="logo">
                <img className="w-[80px] h-[80px] object-contain" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930" alt="logo" />
            </div>
            <nav className="flex gap-3">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/aboutus'>About Us</Link></li>
            </nav>
        </header>
    )
}
export default Header
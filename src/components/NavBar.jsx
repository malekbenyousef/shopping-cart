import { NavLink} from "react-router"
import "../stlye/navbar.css"
export default function NavBar({ItemCount}){
    return(
        <>

        <nav className="navBar">
        <NavLink to="/" className="HomeLink">Home Page</NavLink>
        <NavLink to="ShopPage" className="shopLink">Shopping Page</NavLink>
        <div className="cartPageContainer">
        <div className="itemCount">
        {ItemCount>0 && ItemCount}
        </div>

        <NavLink to="CartPage" className="cartLink">Cart Page</NavLink>
        </div>
        </nav>
        </>
    )
}

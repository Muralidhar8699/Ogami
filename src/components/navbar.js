import "../styles/navbar.css";
import {LiaSearchSolid} from "react-icons/lia";
import {AiOutlineHeart} from "react-icons/ai";
import {BsBagDash} from "react-icons/bs";
import { Link } from "react-router-dom";
import CartPage from "./cartpage";

export default function Navbar(props) {
    return(
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <img src="https://ogami-react.vercel.app/assets/images/logo.png"/>
          </div>
          <div className="navbar-search-container">
            <span className="navabar-allcategories">
              <select>
                <option>All Categories</option>
                <option>Bread</option>
                <option>Fastfood</option>
                <option>Fresh Meat</option>
                <option>Ocean Foods</option>
                <option>Oranges</option>
                <option>Organic Drinks</option>
                <option>Vegetables</option>
              </select>
            </span>
            <span className="navbar-searchbar">
              <input placeholder="What do you need"/>
            </span>
            <span className="navbar-searchicon">
              <LiaSearchSolid/>
            </span>
          </div>
          <div className="navbar-home">
            <span>Home</span>
            <span>Shop</span>
            <span>Blog</span>
          </div>
          <div className="navbar-aboutus">
            <span>Pages</span>
            <span>About us</span>   
          </div>
          <div className="navbar-cart">
            <AiOutlineHeart/>
            <Link to={"/cart"}>
              <BsBagDash/>
            </Link>
            <span>${props?.cart?.totalPrice?.toFixed(2)}</span>
          </div>
        </div>
    )
}
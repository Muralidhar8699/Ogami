import Banner from "../components/banner.js";
import Navbar from "../components/navbar.js";
import "../styles/cartpage.css"
import { ogamiReactBaseUrl } from "../utils/api.js";
import { Addtocart, deletecart, deleteproduct, removefromcart } from "../utils/cart.js";
export default function CartPage(props) {

    return (
        <div className="cartpage-main-div">
            <Banner />
            <Navbar cart={props.cart} />
            <div className="cartpage-arrows-container">
                <span className="shoppingcart-container">
                    <span className="white-square"></span>
                    <span className="shopping-cart">SHOPPING CART</span>
                    <span className="green-square"></span>
                    <span className="number">01</span>
                </span>
                <span className="shoppingcart-container">
                    <span className="white-square"></span>
                    <span className="shopping-cart">CHECK OUT</span>
                    <span className="green-square"></span>
                    <span className="number">02</span>

                </span>
                <span className="shoppingcart-container">
                    <span className="white-square"></span>
                    <span className="shopping-cart">ORDER COMPLETED</span>
                    <span className="green-square"></span>
                    <span className="number">03</span>
                </span>
            </div>
            <div className="cartpage-product-details-div">
                <div className="cart-products-cartpage">
                    <span className="cartpage-text-1">IMAGE</span>
                    <span className="cartpage-text">PRODUCT NAME</span>
                    <span className="cartpage-text">PRICE</span>
                    <span className="cartpage-text">QUANTITY</span>
                    <span className="cartpage-text">TOTAL</span>
                    <button className="cartpage-btn" onClick={() => props.setcount(deletecart())}>X</button>
                </div>
                <div>
                    {props?.cart?.products?.map((e, index) => {
                        // e.preventDefault()
                        let price = e.price;
                        if (e.discount) price -= e.discount;
                        return (
                            <div className="cartpage-product-price-details" key={index}>

                                <img alt="logo" className="cartpage-product-images" src={ogamiReactBaseUrl + e?.images[0]} />
                                <span>{e?.name}</span>
                                <span>{e.discount && <p>${e.price - e.discount}</p>}
                                    {!e.discount && <p>${e.price}</p>}
                                </span>
                                <span className="quatity-span">
                                    <span className="quantity-value">{e?.productQty}</span>
                                    <span className="plus-minus-btn-span">
                                        <button className="increase-btn" onClick={() => props.setcount(Addtocart(props.cart, e))}>+</button>
                                        <button className="decrease-btn" onClick={() => props.setcount(removefromcart(props.cart, e))}>-</button>
                                    </span>
                                </span>
                                <span>{(e?.productQty * price).toFixed(2)}</span>
                                <button onClick={() => props.setcount(deleteproduct(props.cart, e))}>X</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
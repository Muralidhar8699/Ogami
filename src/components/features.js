import Card from "./card";
import { AiOutlineHeart, AiOutlineEye, AiFillHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import "../styles/features.css";
import { Addtocart } from "../utils/cart";
const Features = (props) => {
    function handlewishlist(product) {
        const FindIndex = props.wishlist.findIndex((e) => e.id == product.id);
        if (FindIndex == -1) {
            return [...props.wishlist, product]

        } else {
            return props.wishlist.filter((e) => e.id !== product.id)
        }
    }
    return (
        <div className="features-container">
            {props?.data?.map((e, index) => {
                const productIndex = props.wishlist.findIndex(
                    (product) => e.id == product.id
                );

                return (
                    <Card key={index} product={e}>
                        <div className="features-icons-div">
                            {productIndex == -1 ? <AiOutlineHeart className="icons" onClick={() => props.setwishlist(handlewishlist(e))} />
                                : <AiFillHeart style={{ color: "red" }} className="icons" onClick={() => props.setwishlist(handlewishlist(e))} />}
                            <BsBag className="icons" onClick={() => props.setcount(Addtocart(props.cart, e))} />
                            <BiShuffle className="icons" />
                            <AiOutlineEye className="icons" />
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}


export default Features;
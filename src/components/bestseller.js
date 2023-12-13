import Card from "./card";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../styles/card.css";
import "../styles/bestseller.css";


export default function Bestseller(props) {
    return(
        <>
        <div className="bestsellers-heading">
        <h1>Best Sellers</h1>
        <div className="bestsellers-list">
            <span>All</span>
            <span>Bread</span>
            <span>Fastfood</span>
            <span>Fresh Meat</span>
            <span>Ocean Foods</span>
            <span>Oranges</span>
        </div>
        </div>
        <div className="bestsellers-container">
            {props?.data?.slice(0,6).map((e,index)=>{
                return(
                    <Card key={index} product={e}>
                         <div className="features-icons-div">
                            <AiOutlineHeart className="icons"/>
                            <BsBag className="icons"/>
                            <BiShuffle className="icons"/>
                            <AiOutlineEye className="icons"/>
                        </div>
                    </Card>
                )
            })}
        </div>
        </>
    )
    
}
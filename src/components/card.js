import "../styles/card.css"
import { Link } from "react-router-dom"

export default function Card(props) {
    return(
        <div className="card-main-container">
            <Link to = {"/" + props.product.slug}>
                <div  className="cards-container" >
                    <img alt="logo" className="card-img" src={"https://ogami-react.vercel.app/" + props.product.coverImage}/>
                    <p className="card-product-category">{props.product.category}</p>
                    <p className="card-product-name">{props.product.name}</p>
                    <p className="card-product-price">{"$"+props.product.price.toFixed(2)}</p>
                </div>
            </Link>
            {props.children}
        </div>
    )
    
}
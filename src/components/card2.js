import "../styles/card2.css"

export default function Card2(props) {

    return (
        <div className="card2-container">
            <div className="card2-products-card">
                <img alt="logo" className="card2-newproducts-img" src={"https://ogami-react.vercel.app/" + props.product.coverImage} />
                <span className="card2-price-div">
                    <span className="card2-product-name">{props.product.name}</span>
                    <span className="card2-price">{"$" + props.product.price.toFixed(2)}</span>
                </span>
            </div>
        </div>
    )
}
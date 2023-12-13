import "../styles/image.css"
export default function image() {
    return(
        <div className="image-container">
          <div className="large-image">
            <span className="text">
                <span>Fruit Fresh</span>
                <span>Orange Lemon</span>
                <span>$14.00<sub>/pakage</sub></span>
                <button>SHOP NOW</button>
            </span>
            <img src="https://ogami-react.vercel.app/assets/images/hero-slider/one/1.png"/>
          </div>
          <div className="small-image">
            <span className="spanimg"><img className="smallimage" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/1.png"/></span>
            <span className="spanimg"><img className="smallimage" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/2.png"/></span>
            <span className="spanimg"><img className="smallimage" src="https://ogami-react.vercel.app/assets/images/hero-slider/two/3.png"/></span>
          </div>
          <div className="heading">
            <h1>Featured products</h1>
          </div>
          <div className="feature-product-lists">
            <span>All</span>
            <span>Bread</span>
            <span>Fastfood</span>
            <span>Fresh Meat</span>
            <span>Ocean Food</span>
            <span>Oranges</span>
          </div>
        </div>
    )
    
}
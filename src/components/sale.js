import "../styles/sale.css";

export default function sale() {
    return(
        <div className="sale-container">
            <div className="sale-div1">
                <img alt="logo" className="sale-img" src="https://ogami-react.vercel.app/assets/images/sections/banner/one/1.png"/>
                <span className="sale-text">
                    <span className="sale-text-span">Strawberry Jam 100% Natural Fruit Juice Sale Off 65%</span>
                    <button className="sale-btn">Shop now</button>
                </span>
            </div>
            <div className="sale-div2">
                <img alt="logo" className="sale-img" src="https://ogami-react.vercel.app/assets/images/sections/banner/one/2.png"/>
                <span className="sale-text">
                    <span className="sale-text-span">Cake 100% Natural Fruit Juice Sale Off 65%</span>
                    <button className="sale-btn">Shop now</button>
                </span>
            </div>
        </div>
    )
}
import "../styles/time.css"
export default function Deal(){
    return(
        <div className="shipping-container">
            <div className="help-conntainer">
                <span className="shipping">
                    <img alt="logo" src="https://ogami-react.vercel.app/assets/images/other/benefits/1.png"/>
                    <span>FREE SHIPPING</span>
                    <span>For all order over 99$</span>
                </span>
                <span className="shipping">
                    <img alt="logo" src="https://ogami-react.vercel.app/assets/images/other/benefits/2.png"/>
                    <span>DELIVERY ON TIME</span>
                    <span>If good have problems</span>
                </span>
                <span className="shipping">
                    <img alt="logo" src="https://ogami-react.vercel.app/assets/images/other/benefits/3.png"/>
                    <span>SECURE PAYMENT</span>
                    <span>100% seure payment</span>
                </span>
                <span className="shipping">
                    <img alt="logo" className="support-img" src="https://ogami-react.vercel.app/assets/images/other/benefits/4.png"/>
                    <span>24/7 SUPPORT</span>
                    <span>Dedicated support</span>
                </span>
            </div>
            <div className="deal-of-the-week">
              <div className="deal-text">
                <span className="dealoftheweek">Deal Of The Week</span>
                <span className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elitt incididunt ut labore</span>
                <span className="time-display">
                  <span>DAYS</span>
                  <span>HR</span>
                  <span>MIN</span>
                  <span>SEC</span>
                </span>
                <button className="time-button">SHOP NOW</button>
              </div>
              <div className="lemon-img">
                <img alt="logo" src="https://ogami-react.vercel.app/assets/images/sections/dale-of-week/two/1.png"/>
              </div>
            </div>
        </div>
    )
}
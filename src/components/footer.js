import "../styles/footer.css";
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoPinterestAlt} from "react-icons/bi"
import {AiFillLinkedin} from "react-icons/ai"

export default function Footer(){
    return(
        <div className="footer-container">
            <div className="footer-div1">
              <span className="footer-logo"> 
                <img src="https://ogami-react.vercel.app/assets/images/logo.png"/>
              </span>
              <span className="footer-adress-div">
                <span>Address: 60-49 Road 11378 New York</span>
                <span>Phone: +65 11.188.888</span>
                <span>Email: info.deercreative@gmail.com</span>
              </span>
              <span className="footer-icons">
              <BiLogoFacebook className="footer-facebook"/>
              <AiOutlineTwitter className="footer-facebook"/>
              <AiFillLinkedin className="footer-facebook"/>
              <BiLogoPinterestAlt className="footer-facebook"/>
              </span>
            </div>
            <div className="footer-div">
                <span className="footer-heading">INFOMATION</span>
                <span className="footer-list" >
                  <span>About us</span>
                  <span>Check out</span>
                  <span>Contact</span>
                  <span>Service</span>
                </span>
            </div>
            <div className="footer-div">
                <span  className="footer-heading">MY ACCOUNT</span>
                <span className="footer-list">
                  <span>My account</span>
                  <span>Contact</span>
                  <span>Shop Cart</span>
                  <span>Tracking Order</span>
                </span>
            </div>
            <div className="footer-div">
                <span  className="footer-heading">QUICK SHOP</span>
                <span className="footer-list">
                  <span>About us</span>
                  <span>Check out</span>
                  <span>Contact</span>
                  <span>Service</span>
                </span>
            </div>
            <div className="footer-div2">
                <span className="footer-heading">Join Our Newsletter Now</span>
                <span className="footer-list">Get E-mail updates about our latest shop and special offers.</span>
                <span className="subscribe">
                    <input className="email" placeholder="Enter your e..."/>
                    <button className="sub-btn">SUBSCRIBE</button>
                </span>
            </div>
        </div>
    )
}
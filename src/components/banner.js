import "../styles/banner.css";
import {FiMail} from "react-icons/fi"
import {IoIosCall} from "react-icons/io"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoPinterestAlt} from "react-icons/bi"
import {AiFillLinkedin} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import { Link } from "react-router-dom";

export default function banner() {
    return(
        <div className="banner-container">
          <div className="banner-first-div">
            <span className="banner-email">
              <FiMail/>
              info.deercreative@gmail.com
            </span>
            <span className="banner-call">
              <IoIosCall/>
              +65 11.188.888
            </span>
          </div>
          <div className="banner-right">
            <span  className="banner-right-icons">
              <BiLogoFacebook className="facebook"/>
              <AiOutlineTwitter className="facebook"/>
              <AiFillLinkedin className="facebook"/>
              <BiLogoPinterestAlt className="facebook"/>
            </span>
            <select className="banner-right-lang">
                <img src="https://ogami-react.vercel.app/assets/images/header/flag-usa.png"/>
              <option>
                English
              </option>
              <option>
                <img src="https://ogami-react.vercel.app/assets/images/header/flag-usa.png"/>
                japan
              </option>
              <option>
                <img src="https://ogami-react.vercel.app/assets/images/header/flag-usa.png"/>
                Vietnam
              </option>
            </select>
            <Link to ={"/signup"}>
            <span className="banner-right-login">
              <CgProfile/>
              Signup
            </span>
            </Link>
            
          </div>
        </div>
    )
    
}
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ogamiBaseUrl, ogamiReactBaseUrl } from "../utils/api";
import Banner from "../components/banner.js"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import {BiLogoFacebook} from "react-icons/bi"
import {AiOutlineTwitter} from "react-icons/ai"
import {BiLogoPinterestAlt} from "react-icons/bi"
import {AiFillLinkedin,AiFillStar} from "react-icons/ai"
import{TiTick} from "react-icons/ti"
import "../styles/productdetails.css"


export default function ProductDetails(){
    const params = useParams();
    console.log(params);
    const [pDetails,setpDetails] = useState();
    const [img,setImg] = useState(null);
    const [tab,settab] = useState(0);

    const fetchData = async()=>{
        const {data} = await axios.get(ogamiBaseUrl +"/api/product?&slug=" + params.productId);
        console.log(data);
        setpDetails(data[0])
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <Banner/>
            <Navbar/>
            <div className="product-details-container">
                <div className="product-imgs-div">
                    {pDetails?.images?.map((e,index) =>{
                        return(
                        <div className="product-imgitem" key={index} onClick={()=>setImg(e)}>
                           <img className="pd-img" src={ogamiReactBaseUrl + e}/> 
                        </div>
                        )
                    })}
                </div>
                <div>
                    <img className="product-img" src={img ? ogamiReactBaseUrl + img :ogamiReactBaseUrl+pDetails?.coverImage}/>
                </div>
                <div className="product-details-div03">
                    <div className="product-details-subdiv1">
                        <span className="product-category">{pDetails?.category}</span>
                        <span className="product-name">{pDetails?.name}</span>
                        <span className="product-lorem">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        </span>
                    </div>
                    <div className="product-details-subdiv2">
                        <span className="subdiv2-mainspan">
                            <span className="subdiv2-spans">
                                <p className="para">SKU:</p>
                                <p  className="subpara">A1359</p>
                            </span>
                            <span className="subdiv2-spans">
                                <p  className="para">Categories:</p>
                                <p className="subpara">fastfood</p>
                            </span>
                            <span className="subdiv2-spans">
                                <p  className="para">Tag:</p>
                                <p className="subpara"> Food,Organic</p>
                            </span>
                        </span>
                        <span className="subdiv2-mainspan2">
                            <span className="span-icons">Share Link:
                            <BiLogoFacebook className="facebook"/>
                            <AiOutlineTwitter className="facebook"/>
                            <AiFillLinkedin className="facebook"/>
                            <BiLogoPinterestAlt className="facebook"/>
                            </span>
                        </span>
                    </div>
                </div>
                <div className="product-details-div04">
                    <span  className="freedelivery">Free delivery</span>
                    <span className="product-details-price">{"$"+pDetails?.price}</span>
                    <span></span>
                    <span className="btn-span">
                        <button className="addcart-btn">Add to cart</button>
                        <button className="addcart-btn" > Add to compare</button>
                    </span>
                    <span className="satisfactory"><TiTick className="tickicon"/>Satisfaction 100% Guaranteed</span>
                    <span className="satisfactory"><TiTick className="tickicon"/>Free shipping on orders over $99</span>
                    <span className="satisfactory"><TiTick className="tickicon"/>14 day easy Return</span>
                </div>
            </div>
            <div className="reviews-specs-container">
                <div className="description-container">
                    <span className= "description" onClick={()=>settab(0)}>DESCRIPTION</span>
                    <span className= "description"  onClick={()=>settab(1)}>SPECIFICATIONS</span>
                    <span className= "description"  onClick={()=>settab(2)}>REVIEWS</span>
                </div>
                <div className="visible-content">
                    {tab == 0 && 
                    <div className="description-content"> 
                        <span>{pDetails?.fullDescription}</span>
                    </div>
                    }
                    {tab == 1 && 
                    <div className="specs-container">
                        <table className="specification-table">
                            <tr>
                                <th >WEIGHT</th>
                                <td >{pDetails?.specifications.weight}</td>
                            </tr>
                            <tr>
                                <th>DIMENSIONS</th>
                                <td>{pDetails?.specifications.dimensions.long}x{pDetails?.specifications.dimensions.width}x{pDetails?.specifications.dimensions.height}</td>
                            </tr>
                            <tr>
                                <th>COLOR</th>
                                <td>{pDetails?.specifications.color}</td>
                            </tr>
                            <tr>
                                <th>SIZE</th>
                                <td>{pDetails?.specifications.size}</td>
                            </tr>
                        </table>
                    </div>
                    }
                    {tab == 2 && 
                    <div>
                        {pDetails?.reviews?.map((e,i)=>{
                            return(
                                <div className="reviews-container" key={i}>
                                    <div className="reviwer-img-div">
                                        <img className="reviewer" src={e?.user?.avatar}/>
                                        <span>
                                            <AiFillStar className="star"/>
                                            <AiFillStar className="star"/>
                                            <AiFillStar className="star"/>
                                            <AiFillStar className="star"/>
                                            <AiFillStar className="star"/>
                                        </span>
                                    </div>
                                    <div className="reviewer-details">
                                        <span className="review-date">{e?.commentDate}</span>
                                        <span className="reviewer-name">{e?.user?.name}</span>
                                        <span className="review-content">{e?.review}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
import Card2 from "./card2";
import "../styles/newproduct.css";


export default function Newproduct(props){
    return(
        <>
        <div className="newproducts-heading">
            <h1>New Products</h1>
        </div>
        <div className="newproduct-container">
            {props?.data?.slice(0,10).map((e,index)=>{
                return(
                    <Card2 key = {index} product = {e}></Card2>
                )
            })}
        </div>
        </>
    )
}
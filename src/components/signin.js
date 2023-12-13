import { useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { baseUrl } from "../utils/api";
import axios from "axios";

export default function Signin(){
    const signinform = useRef(null);
    const [error,setError] = useState(null)
    const Navigate = useNavigate()
    const handlesubmit = (e) =>{
        e.preventDefault(); 
        const data = {
            email: signinform.current.email.value,
            password: signinform.current.password.value,
        }
        const registerUrl = baseUrl + "/users/login";
        axios.post(registerUrl,data)
        .then(result =>{
            const {data} = result;
            console.log(data);
            if(data.token){
                const keys = Object.keys(data);
                keys.forEach(e=> localStorage.setItem(e,data[e]))
                setError(null)
                Navigate('/')
            }else{
                setError(data)
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Link to = {"/signup"}>Sign up</Link>
            <Link to = {"/"}>Home</Link>
            <h1>Signin</h1>
            {error && <p>{error.err}</p>}
            <form ref={signinform} >
                <div>
                    <label>email</label>
                    <input name="email" type="email"/>
                </div>
                <div>
                    <label>password</label>
                    <input name="password" type="password"/>
                </div>
                <button onClick={(e)=>handlesubmit(e)}>submit</button>
            </form>
        </div>
    )
}
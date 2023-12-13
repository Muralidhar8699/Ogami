import { useRef } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/api";
import axios from "axios";

export default function Signup(){
    const formRef = useRef(null)
    const handleRegister =(e)=>{
        e.preventDefault();
        const data = {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            password: formRef.current.password.value,
            phone: formRef.current.phone.value,
            access: formRef.current.access.value,
        }
        const registerUrl = baseUrl + "/users/register";
        // fetch(registerUrl,{
        //     method:"POST",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify(data)
        // })
        // .then(res => res.json())
        // .then(result => console.log(result))
        // .catch(err => console.log(err))

        axios.post(registerUrl,data)
        .then(result => console.log(result))
        .catch(err => console.log(err))

    }
    return(
        <div>
            <Link to = {"/signin"}>Sign in</Link>
            <form ref={formRef}>
                <h1>Signup form</h1>
                <div>
                    <label>Name</label>
                    <input name="name" type="text"/>
                </div>
                <div>
                    <label>email</label>
                    <input name="email" type="email"/>
                </div>
                <div>
                    <label>password</label>
                    <input name="password" type="password"/>
                </div>

                <div>
                    <label>phone</label>
                    <input name="phone" type="text"/>
                </div>

               
                <div>
                    <label>access</label>
                    <input name="access" type="access"/>
                </div>
                <button onClick={(e) => handleRegister(e)}>register</button>
               
            </form>
        </div>
    )
}
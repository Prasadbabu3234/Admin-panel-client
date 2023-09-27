import React,{useState,useEffect} from "react";
import './Home.css'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from "js-cookie";

export default function Home() {


    const [accesstoken, setAccessToken] = useState("")

    const navigate = useNavigate()


    useEffect(() => {
        const token = Cookies.get("jwt_token")
        setAccessToken(token)
        if (!token) {
            navigate('/login')
        }
    }, [])
    return <div>
        <nav className='admin-navbar'>
            <h1>Admin Panel</h1>
            <div className='d-flex gap-5'>
                <Link to={'/'} style={{ textDecoration: "none" }}> <span>Home</span></Link>
                <Link to={'/profiles'} style={{ textDecoration: "none" }}> <span>Profiles</span></Link>
                {accesstoken === "" ? <Link to={'/login'} style={{ textDecoration: "none" }} > <span>Login</span></Link> : <button className='btn btn-danger' onClick={() => {
                    Cookies.remove("jwt_token")
                    setAccessToken("")
                navigate('/')
                }}>Logout</button>}
            </div>
        </nav>
    </div>
}
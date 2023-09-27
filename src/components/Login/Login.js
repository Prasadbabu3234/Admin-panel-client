import React, { useState,useEffect } from 'react'
import './Login.css'
import { url } from '../../url'
import axios from 'axios'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
            color: "white"
        }}
        spin
    />
);

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loader, setLoader] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            username,
            password
        }
        axios.post(`${url}/login`, data).then((res) => {
            if (res.data.token) {
                const { token } = res.data
                Cookies.set("jwt_token", token, 10)
                navigate('/home', { replace: true })
                setLoader(false)
            }
        }).catch(err => {
            if (err.response.status === 403) {
                setError(err.response.data.message)
                setLoader(false)

            }
        })
    }

    useEffect(() => {
        const token = Cookies.get("jwt_token")
        if (token) {
            navigate('/home')
        }
    })

    return (
        <div className='form-conatiner'>
            <form onSubmit={handleLogin}>
                <h1>Admin Login</h1>
                <div className='d-flex flex-column align-items-start gap-2'>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' required className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='d-flex flex-column align-items-start gap-2'>
                    <label htmlFor='password'>Password</label>
                    <input id='password' required type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {loader ? <button type='submit' className='btn btn-primary'><Spin indicator={antIcon} /></button> : <button type='submit' className='btn btn-primary'>Login</button>}
                {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    )
}

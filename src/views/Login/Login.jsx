import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header"

const Login = () => {
return (
    <section className='login'>
        <h1>Login</h1>
    <button><Link to={`/home`}>Home</Link></button>

    </section>
)
}

export default Login
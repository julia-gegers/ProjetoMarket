import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Home = () => {
return (
    <div>
        <h1>Products</h1>
        <button>
            <Link to={`/products/1`}>Produtos</Link>
        </button>
    </div>
)
}

export default Home
import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h1>Produtos</h1>
        <button>
          <Link to={`/pay/1`}>Pagamento</Link>
        </button>
    </div>
  )
}

export default Products
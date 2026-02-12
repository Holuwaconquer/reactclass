import React from 'react'
import { useLocation, useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams()
    console.log('this is the product: ', id);

    const location = useLocation()
    const product = location.state?.product
    console.log(product);
    
    
    
  return (
    <div>
        <div>
            {/* for product image */}
            <div className=''>

            </div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
    </div>
  )
}

export default ProductDetails
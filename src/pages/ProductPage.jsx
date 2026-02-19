import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { CartContext } from '../CartContext'

const ProductPage = () => {
    
    const navigate = useNavigate()
    const [products, setproducts] = useState([])

    let sample = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.'
    // console.log(sample.split(' ').slice(0,5).join(' '));

    const [allContent, setallContent] = useState(5)

    const { cart, addToCart, total } = useContext(CartContext)
    
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            // console.log(data.products); 
            setproducts(data.products) 
            // console.log(products);
        });

    }, [products])

    useEffect(() => {
      console.log('use effect ran');
    }, [])
    
    
    
  return (
    <div className=''>
        <h1>All Products</h1> {cart.length > 0 && <p>cart: {cart.length}</p>} 
        {total > 0 && <p>Total: N{total.toLocaleString()}</p>}
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products.length > 0 ? products.map(product => (
                <div onClick={() => addToCart(product)} key={product.id} className='w-full h-[250] rounded-[10px] bg-white'>
                    <div className='w-full h-[150px] object-cover'>
                        <img src={product.thumbnail} className='w-full h-full object-cover' alt={product.name} />
                    </div>
                    <h1 className='text-center font-bold'>{product.title}</h1>
                    
                    <p className='text-center hover:'>
                        {product.description.split(' ').slice(0, allContent).join(' ')} 

                        {allContent==5 ?
                            <span onClick={() => setallContent(product.description.length)} className='hover:cursor-pointer'>... </span> 
                            : 
                            <span className='hover:cursor-pointer text-red-500' onClick={() => setallContent(5)}>read less</span>
                        }
                    </p>
                    <p>N{product.price.toLocaleString()}</p>
                </div>
            )) :
                <div className=''>
                    <p>no product available</p>
                </div>
            }
        </div>
    </div>
  )
}

export default ProductPage
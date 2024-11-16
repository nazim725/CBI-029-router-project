import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {

    const [products,setProducts]=useState([])

  useEffect(()=>{

    fetch('https://my-json-server.typicode.com/nazim725/Doctors/posts')
    .then(res=>res.json ())
    .then(data=>setProducts(data))
  },[])
    return (
        <div className='products'>
            {
                products.map(product=><Product  jinis={product} key={product.id}/>)
            }
            
        </div>
    );
};

export default Products;
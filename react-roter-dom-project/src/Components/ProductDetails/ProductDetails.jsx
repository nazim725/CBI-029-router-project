import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {


    const {id}=useParams()
    console.log(id)
    const [product,setProduct]=useState({})
    useEffect(()=>{
         const url=`https://my-json-server.typicode.com/nazim725/Doctors/posts/${id}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div>
            <Card>
        <Card.Img variant="top" src={product.img} width={400} height={400} />
        <Card.Body>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Card.Text>
           <h1>${product.fee}</h1>
          </Card.Text>
          <Link to={`/appoinment/${id}`}>
          <Button>Appointment {product.name}</Button>
          </Link>
          
        </Card.Body>
      </Card>
      <br />
      <Card></Card>
        </div>
    );
};

export default ProductDetails;
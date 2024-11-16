import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'; 

const Product = (props) => {
    const {name,designation,description,email,img,address,id,phone,fee}=props.jinis

    return (
        <div>
          <Zoom delay={500} duration={3000}>

          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} height={300} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description.slice(0,100)}
        </Card.Text>
        
        <Link to={`/productDetlais/${id}`}>
        <button className="btn btn-warning fw-bold">See More</button>
        </Link>

        
      </Card.Body>
    </Card>
          </Zoom>
            
        </div>
    );
};

export default Product;
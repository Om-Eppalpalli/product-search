import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ProductCard = ({ image, name, price, rating, review }) => {
    return (
        <div>
            <Card style={{ width: '12rem', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s', backgroundColor: '#f8f9fa', transform: 'translateY(-5px)' }}>
                <Card.Img variant="top" src={image} style={{ height: '240px', objectFit: 'cover', borderRadius: '5px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductCard;

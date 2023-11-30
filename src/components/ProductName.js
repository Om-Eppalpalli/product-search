import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const ProductName = ({ image, name, price, rating, review }) => {
    return (
        <div>
            <div className="">
                <li>{name}</li>
            </div>
        </div>
    );
};

export default ProductName;

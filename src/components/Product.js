import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';
import '../styles/Product.css';

const Product = ({ image, name, price, rating, review }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="product-container">
            <div className="product-image-container">
                <FontAwesomeIcon
                    icon={isFavorite ? solidHeart : regularHeart}
                    className={`heart-icon fa-lg ${isFavorite ? 'favorite' : ''}`}
                    onClick={toggleFavorite}
                />
                <img src={image} alt="Product Thumbnail" className="product-image" />
                <div className="product-overlay">
                    <div className="product-details">
                        <button className="view-product-btn">View Product</button>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="product-name">{name}</div>
                <div className="product-price">₹ {price}</div>
                <div className="product-rating">
                    <StarRating rating={rating} />
                    <span className="review-count">({review} reviews)</span>
                </div>
            </div>
        </div>
    );
};

export default Product;

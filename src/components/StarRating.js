import React from 'react';

const StarRating = ({ rating }) => {
    const fullStars = Math.min(Math.floor(rating), 5);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<span key={i}>&#9733;</span>); // Full star
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;

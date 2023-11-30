import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Wishlist from './Wishlist';
import Product from './Product';
import Filter from './Filter';
import '../styles/Search.css';

const Search = () => {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');
    const [showTrends, setShowTrends] = useState(false);
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState({ price: [], rating: [] });

    // Use a ref to access the search button
    const searchButtonRef = useRef(null);

    // Use useEffect to update searchTerm when the location changes
    useEffect(() => {
        setSearchTerm(new URLSearchParams(location.search).get('term'));

        // Programmatically trigger the button click
        if (searchButtonRef.current) {
            searchButtonRef.current.click();
        }
    }, [location.search]);

    const handleSearch = () => {
        // Generate random products with related images for demonstration
        const allProducts = Array.from({ length: 200 }).map(() => ({
            name: faker.commerce.productName(),
            image: faker.image.url(),
            price: getRandomPrice(),
            rating: getRandomRating(),
            review: getRandomReview(),
        }));

        // Filter products based on the search term
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setProducts(filteredProducts);
        setShowTrends(false); // Hide trends after performing a search
    };

    const getRandomRating = () => {
        return Math.floor(Math.random() * 5) + 1;
    };

    const getRandomReview = () => {
        return Math.floor(Math.random() * 100000);
    };

    const getRandomPrice = () => {
        return Math.floor(Math.random() * 5000) + 1;
    };

    const handleInputFocus = () => {
        setShowTrends(true);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const filterProducts = () => {
        let newFilteredProducts = [...products];

        if (filter.price.includes('0to500')) {
            newFilteredProducts = newFilteredProducts.filter(product => product.price < 500);
        } else if (filter.price.includes('500to1000')) {
            newFilteredProducts = newFilteredProducts.filter(product => product.price >= 500 && product.price < 1000);
        } else if (filter.price.includes('1000to3000')) {
            newFilteredProducts = newFilteredProducts.filter(product => product.price >= 1000 && product.price < 3000);
        } else if (filter.price.includes('3000to5000')) {
            newFilteredProducts = newFilteredProducts.filter(product => product.price >= 3000 && product.price <= 5000);
        } else {
            // console.log('No Price Filter');
        }

        // Star ratings filtering
        if (filter.rating.length > 0) {
            // console.log('Filter: Stars');
            newFilteredProducts = newFilteredProducts.filter(product => filter.rating.includes(product.rating));
        } else {
            // console.log('No Stars Filter');
        }

        // If no price or star ratings filter is selected, display all products
        if (filter.price.length === 0 && filter.rating.length === 0) {
            // console.log('No Price and Stars Filter');
        }

        if (searchTerm === '') {
            newFilteredProducts = '';
        }
        return newFilteredProducts;
    };

    return (
        <div className="search-container">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '2%' }}>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    style={{width: '40%'}}
                    onChange={(e) => setSearchTerm(e.target.value)}
                // onFocus={handleInputFocus}
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`fa-solid fa-magnifying-glass fa-2xl`}
                    style={{ cursor: 'pointer' }}
                    ref={searchButtonRef}
                    onClick={handleSearch}
                />
                <div style={{display: 'none'}}>
                    <button ref={searchButtonRef} onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}>
                    <Filter onFilterChange={handleFilterChange} />
                </div>
                <div style={{ marginTop: '5%', width: '80%', float: 'right' }}>
                    {showTrends && (
                        <div className="trend-suggestions">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index}>{faker.commerce.productName()}</div>
                            ))}
                        </div>
                    )}
                    <div className="suggestion-box" style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '5%' }}>
                        {filterProducts().length === 0 ? (
                            <div className="no-product-message" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div>
                                    <h1 /* style={{ textAlign: 'center' }} */>Products Not Available</h1>
                                </div>
                                <div>
                                    <span dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" height="200" width="250" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>' }} />
                                </div>
                            </div>
                        ) : (
                            filterProducts().map((product, index) => (
                                <div key={index} style={{ marginLeft: '2%', marginBottom: '6%', width: '20%' }}>
                                    <Product image={product.image} name={product.name} price={product.price} rating={product.rating} review={product.review} />
                                    {/* <Wishlist /> */}
                                    {/* {product.name} */}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;

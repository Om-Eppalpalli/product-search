import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Card } from "react-bootstrap";
import ProductCard from './ProductCard.js';
import ProductName from './ProductName.js';
import Filter from './Filter';
import '../styles/SearchPage.css';

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showTrending, setShowTrending] = useState(false);

    // Generate random trending products
    const trendingProducts = Array.from({ length: 5 }).map(() => ({
        name: faker.commerce.productName(),
        image: faker.image.url(),
    }));

    const handleSearch = () => {
        setShowTrending(searchTerm !== '');
        navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    };

    return (
        <div className="search-page-container">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchTerm}
                    style={{ width: '40%' }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowTrending(true)}
                // onBlur={() => setShowTrending(false)}
                />
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`fa-solid fa-magnifying-glass fa-2xl`}
                    style={{cursor: 'pointer'}}
                    onClick={handleSearch}
                />
                {/* <button onClick={handleSearch}>Search</button> */}
            </div>

            {showTrending && (
                <Card style={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', width: '80%' }}>
                    <div style={{ marginBottom: '10px' }}>
                        <div className="trending-products" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <h4>Latest Trends</h4>
                            </div>
                            <div style={{ display: 'flex' }}>
                                {trendingProducts.map((product, index) => (
                                    <ProductCard key={index} image={product.image} name={product.name} />
                                ))}
                            </div>
                        </div>
                        <div style={{marginTop: '3%'}}>
                            <div style={{marginBottom: '2%'}}>
                                <h4 style={{ textAlign: 'center' }}>Popular Suggestions</h4>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                {trendingProducts.map((product, index) => (
                                    <ProductName key={index} image={product.image} name={product.name} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            )}

            {/* Add your search results here based on your search logic */}
        </div>
    );
};

export default SearchPage;

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/Filter.css';

const Filter = ({ onFilterChange }) => {
    const [priceFilter, setPriceFilter] = useState([]);
    const [ratingFilter, setRatingFilter] = useState([]);

    const handlePriceChange = (value) => {
        const updatedFilters = [...priceFilter];
        if (updatedFilters.includes(value)) {
            updatedFilters.splice(updatedFilters.indexOf(value), 1);
        } else {
            updatedFilters.push(value);
        }
        setPriceFilter(updatedFilters);
        onFilterChange({ price: updatedFilters, rating: ratingFilter });
    };

    const handleRatingChange = (value) => {
        const updatedFilters = [...ratingFilter];
        if (updatedFilters.includes(value)) {
            updatedFilters.splice(updatedFilters.indexOf(value), 1);
        } else {
            updatedFilters.push(value);
        }
        setRatingFilter(updatedFilters);
        onFilterChange({ price: priceFilter, rating: updatedFilters });
    };

    const renderStars = (count) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <label key={i} className="form-control star">
                    <FontAwesomeIcon icon={faStar} className={i <= count ? 'golden' : ''} />
                </label>
            );
        }
        return stars;
    };

    return (
        <div className="filter-container">
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Filters</h2>
            <h4 style={{textAlign: 'center'}}>Price Range</h4>
            <div className="price-range" style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="0to500" onChange={() => handlePriceChange("0to500")} />
                                </label>
                            </td>
                            <td>
                                <label htmlFor="0to500" style={{ float: 'left' }}>
                                    <span>{" "}0 - 500</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="500to1000" onChange={() => handlePriceChange("500to1000")} />
                                </label>
                            </td>
                            <td>
                                <label htmlFor="500to1000" style={{ float: 'left' }}>
                                    <span>{" "}500 - 1000</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="1000to3000" onChange={() => handlePriceChange("1000to3000")} />
                                </label>
                            </td>
                            <td>
                                <label htmlFor="1000to3000" style={{ float: 'left' }}>
                                    <span>{" "}1000 - 3000</span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="3000to5000" onChange={() => handlePriceChange("3000to5000")} />
                                </label>
                            </td>
                            <td>
                                <label htmlFor="3000to5000" style={{ float: 'left' }}>
                                    <span>{" "}3000 - 5000</span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4 style={{textAlign: 'center'}}>Ratings</h4>
            <div className="ratings" style={{ display: 'flex', justifyContent: 'center' }}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="1star" onChange={() => handleRatingChange(1)} />
                                </label>
                            </td>
                            <td><div style={{display: 'flex'}}>{renderStars(1)}</div></td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="2star" onChange={() => handleRatingChange(2)} />
                                </label>
                            </td>
                            <td><div style={{display: 'flex'}}>{renderStars(2)}</div></td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="3star" onChange={() => handleRatingChange(3)} />
                                </label>
                            </td>
                            <td><div style={{display: 'flex'}}>{renderStars(3)}</div></td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="4star" onChange={() => handleRatingChange(4)} />
                                </label>
                            </td>
                            <td><div style={{display: 'flex'}}>{renderStars(4)}</div></td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-control">
                                    <input type="checkbox" id="5star" onChange={() => handleRatingChange(5)} />
                                </label>
                            </td>
                            <td><div style={{display: 'flex'}}>{renderStars(5)}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Filter;

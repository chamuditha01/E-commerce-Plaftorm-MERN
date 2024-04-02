import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // Import default styles

const Sidebar = ({ onPriceChange }) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 }); // Initial price range value

    const handlePriceChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
        // Pass the updated price range to the parent component
        onPriceChange(newPriceRange.min, newPriceRange.max);
    };

    return (
        <div className="sidebar" style={{width:'100%'}}>
            {/* Price range input */}
            <label htmlFor="priceRange">Price Range:</label>
            <br></br>
            <br></br>
            <InputRange
                draggableTrack
                minValue={0}
                maxValue={10000}
                value={priceRange}
                onChange={handlePriceChange}
                step={100}
            />
            {/* Display the selected price range */}
            <br></br>
            <p>Selected Price Range: Rs.{priceRange.min} - Rs.{priceRange.max}</p>
        </div>
    );
}

export default Sidebar;

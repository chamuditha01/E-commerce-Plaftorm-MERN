import Navbar from "../../Components/Atoms/Navbar";
import './index.css'; // Import CSS file for styling
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ProductCard from "../../Components/Atoms/ProductCard";
import Sidebar from "../../Components/Atoms/Sidebar";
const Mainpage = () => {    
    
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const handlePriceChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };
    return (
        <div className="main-container">
            <Navbar/>
            <hr />
            <div className="content-container">
                <div className="sidebar">
                    {/* Sidebar content goes here */}
                    Sidebar Content
                    <Sidebar onPriceChange={handlePriceChange} />
                </div>
                <div className="product-display">
                    {/* Product display content goes here */}
                   
                    <ProductCard minPrice={minPrice} maxPrice={maxPrice} />
                </div>
            </div>
        </div>
    );
}
export default Mainpage;

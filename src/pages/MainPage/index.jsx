import Navbar from "../../Components/Atoms/Navbar";
import './index.css'; // Import CSS file for styling
import { useState } from "react";
import ProductCard from "../../Components/Atoms/ProductCard";
import Sidebar from "../../Components/Atoms/Sidebar";

const Mainpage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);

    const handleSearch = (value) => {
        setSearchValue(value);
    };

    const handlePriceChange = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    };

    return (
        <div className="main-container">
            <Navbar handleSearch={handleSearch} />

            <div className="content-container">
                <div className="sidebar">
                    <Sidebar onPriceChange={handlePriceChange} />
                </div>
                <div className="product-display" style={{marginTop:'180px'}}>
                    <ProductCard searchValue={searchValue} minPrice={minPrice} maxPrice={maxPrice} />
                </div>
            </div>
        </div>
    );
}

export default Mainpage;

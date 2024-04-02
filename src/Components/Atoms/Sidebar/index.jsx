import React, { useState,useEffect} from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'; // Import default styles
import './index.css';

const Sidebar = ({ onPriceChange }) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 }); // Initial price range value

    
    const [isMobileView, setIsMobileView] = useState(false); // Track mobile view state
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(false); // Track sidebar visibility state

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    useEffect(() => {
        // Function to check if the screen size is below a certain width (e.g., for mobile view)
        const checkMobileView = () => {
            const screenWidth = window.innerWidth;
            const isMobile = screenWidth < 900; // Define the threshold for mobile view
            setIsMobileView(isMobile);
        };

        // Check the screen size on component mount and on window resize
        checkMobileView();
        window.addEventListener('resize', checkMobileView);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('resize', checkMobileView);
        };
    }, []);

    const handlePriceChange = (newPriceRange) => {
        setPriceRange(newPriceRange);
        // Pass the updated price range to the parent component
        onPriceChange(newPriceRange.min, newPriceRange.max);
    };

    return (
        <div  className={`sidebar ${isSidebarExpanded ? 'expanded' : 'collapsed'}`} style={{width:'100%',marginTop:'-30px'}}>
           {/* Render collapse button only in mobile view */}
           {isMobileView && (
                <div className="collapse-button-mobile">
                    <button className="toggle-sidebar-button" onClick={toggleSidebar}>
                        {isSidebarExpanded ? 'Collapse' : 'Expand Filter'}
                    </button>
                </div>
            )}
            {/* Sidebar content */}
            <div className="sidebar-content">
                <label htmlFor="priceRange">Price Range:</label>
                <InputRange
                    draggableTrack
                    minValue={0}
                    maxValue={10000}
                    value={priceRange}
                    onChange={handlePriceChange}
                    step={100}
                />
                {/* Display the selected price range */}
                <p>Rs.{priceRange.min} - Rs.{priceRange.max}</p>
                {/* Additional content */}
                <div style={{textAlign:'left'}}>
                    <label><input type='checkbox' /> Tools</label><br/>
                    <label><input type='checkbox' /> Garden</label><br/>
                    <label><input type='checkbox' /> Kitchen</label><br/>
                    <label><input type='checkbox' /> Household</label><br/>
                    <label><input type='checkbox' /> Cosmetics</label><br/>
                    <label><input type='checkbox' /> Tools</label>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
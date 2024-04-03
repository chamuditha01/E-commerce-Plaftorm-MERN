import React, { useState } from 'react';
import { IoSearchSharp,IoClose } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const Navbar = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState('');
  

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchInput);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    handleSearch(''); // Trigger search with empty value to clear filter
};

  return (
    <div style={{ position: 'fixed', top: '0', zIndex: '2', width: '100%', backgroundColor: 'white', borderBottom: '1px solid black' }}>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shop Ease
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ zIndex: '2' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu" style={{ borderRadius: "2px" }}>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaRegUser size={25} />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  style={{ borderRadius: "2px" }}
                >
                  <li>
                    <a className="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/sigup">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{backgroundColor:'white',borderBottom:'30px solid white',width:'40%',margin:'auto',marginTop:'15px'}}>
      <form className="d-flex" onSubmit={handleSubmit}>
                            <input
                                style={{
                                    borderTopLeftRadius: '25px',
                                    borderBottomLeftRadius: '25px',
                                    borderColor: 'gray',
                                    borderTopRightRadius: '0px',
                                    borderBottomRightRadius: '0px',
                                }}
                                className="form-control me-2"
                                type="search"
                                placeholder="Search Products"
                                aria-label="Search"
                                value={searchInput}
                                onChange={handleChange}
                            />
                            
                            <button type="submit" style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid gray",
            marginLeft: "-9px",
            borderLeft: "none",
            cursor: "pointer",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            width: "50px",
            backgroundColor: 'blue',
            color: 'white'
          }}>

                                <IoSearchSharp size={24} color="gray" />
                            </button>
                            {searchInput && ( // Render clear search button only if there's text in searchInput
                                <IoClose
                                    className="search-clear-btn"
                                    color="gray"
                                    size={44}
                                    style={{
                                        cursor: 'pointer',
                                        paddingRight: '10px',
                                        borderTopRightRadius: '25px',
                                        borderBottomRightRadius: '25px',
                                    }}
                                    onClick={handleClearSearch}
                                />
                            )}
                        </form></div>
    </div>
  );
};

export default Navbar;

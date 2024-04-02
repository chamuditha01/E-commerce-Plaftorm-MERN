import "./index.css";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div style={{position:'fixed',top:'0',zIndex:'2',width:'100%',backgroundColor:'white',borderBottom:'1px solid black'}}>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Shop Ease
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{zIndex:'2'}}>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul class="dropdown-menu" style={{ borderRadius: "2px" }}>
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="navbar-nav me mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaRegUser size={25} />
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  style={{ borderRadius: "2px" }}
                >
                  <li>
                    <a class="dropdown-item" href="/login">
                      Login
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/sigup">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{backgroundColor:'white',borderBottom:'30px solid white'}}>
      <form class="d-flex" role="search" id="searchbar" >
        <input
          style={{
            borderTopLeftRadius: "25px",
            borderBottomLeftRadius: "25px",
            borderColor: "gray",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          class="form-control me-2"
          type="search"
          placeholder="Search Products"
          aria-label="Search"
        />
        <IoSearchSharp
          id="searchbtn"
          color="blue"
          size={48}
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid gray",
            marginLeft: "-9px",
            borderLeft: "none",
            cursor: "pointer",
            borderTopRightRadius: "25px",
            borderBottomRightRadius: "25px",
            width: "50px",
          }}
        />
      </form></div>
      
    </div>
  );
};
export default Navbar;

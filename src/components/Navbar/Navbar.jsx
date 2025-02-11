import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaSearch } from "react-icons/fa";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const items = useSelector((state) =>state.cart.items);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <div className="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </div>

        <div className={`navItem ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="navListItem">
            <li>
              <NavLink to="/" className="navList">
                Home
              </NavLink>
              <NavLink to="/cart" className="navList">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="icons">
          <div className="cartIcon">
            <NavLink to="/cart">
              <FaShoppingCart className="cartIcon"/>
              {items.length > 0 && <span className="cartCount">{items.length}</span>}
            </NavLink>
          </div>
          <div className={`search-container ${isSearchOpen ? "active" : ""}`}>
            <input type="text" className="search-input" placeholder="Search..." />
            <button id="searchButton" onClick={toggleSearch}>
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


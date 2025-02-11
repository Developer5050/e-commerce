import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-box about-widget">
              <h2 className="widget-title">About us</h2>
              <p>
                Ut enim ad minim veniam perspiciatis unde omnis iste natus error
                sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box get-in-touch">
              <h2 className="widget-title">Get in Touch</h2>
              <ul>
                <li>34/8, East Hukupara, Gifirtok, Sadan.</li>
                <li>support@fruitkha.com</li>
                <li>+00 111 222 3333</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box pages">
              <h2 className="widget-title">Pages</h2>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box subscribe">
              <h2 className="widget-title">Subscribe</h2>
              <p>Subscribe to our mailing list to get the latest updates.</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                <button type="submit">
                  <FaSearch className="fas fa-paper-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <p>
                Copyrights &copy; 2019 -
                <a href="https://imransdesign.com/">Ahmad Shoukat</a>, All
                Rights Reserved.
                <br />
                Distributed By -<a href="https://themewagon.com/"></a>
              </p>
            </div>
            <div class="col-lg-6 text-right col-md-12">
              <div className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="icon facebook" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="icon twitter" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="icon instagram" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;


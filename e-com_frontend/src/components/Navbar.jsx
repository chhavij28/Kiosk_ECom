import React from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

const NavBar = () => {
  // const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="d-flex align-items-center justify-content-between py-4 fw-medium">
      <Link to="/">
        <img src={assets.logo} className="img-fluid" style={{ width: '9rem' }} alt="Logo" />
      </Link>

      <ul className="d-none d-sm-flex gap-4 small text-secondary list-unstyled mb-0">
        <NavLink to="/" className="d-flex flex-column align-items-center gap-1 text-decoration-none text-secondary">
          <p className="mb-0">HOME</p>
          {/* Bootstrap doesn't show hr by default; you can toggle visibility with JS or CSS */}
          <hr className="w-50 border-0 bg-secondary" style={{ height: '1.5px', display: 'none' }} />
        </NavLink>
        <NavLink to="/collection" className="d-flex flex-column align-items-center gap-1 text-decoration-none text-secondary">
          <p className="mb-0">COLLECTION</p>
          <hr className="w-50 border-0 bg-secondary" style={{ height: '1.5px', display: 'none' }} />
        </NavLink>
        <NavLink to="/about" className="d-flex flex-column align-items-center gap-1 text-decoration-none text-secondary">
          <p className="mb-0">ABOUT</p>
          <hr className="w-50 border-0 bg-secondary" style={{ height: '1.5px', display: 'none' }} />
        </NavLink>
        <NavLink to="/contact" className="d-flex flex-column align-items-center gap-1 text-decoration-none text-secondary">
          <p className="mb-0">CONTACT</p>
          <hr className="w-50 border-0 bg-secondary" style={{ height: '1.5px', display: 'none' }} />
        </NavLink>
      </ul>

      <div className="d-flex align-items-center gap-3">
        <img
          // onClick={() => setShowSearch(true)} // Bootstrap doesn't handle this natively; use custom modal or input
          src={assets.search_icon}
          className="cursor-pointer"
          style={{ width: '1.25rem' }}
          alt="Search Products"
        />

        {/* Bootstrap dropdowns require JS or data attributes; this is a custom hover dropdown */}
        {/* <div className="position-relative group">
          <Link to="/login">
            <img src={assets.profile_icon} className="cursor-pointer" style={{ width: '1.25rem' }} alt="Your Profile" />
          </Link>
          <div className="position-absolute end-0 pt-4 d-none group-hover:d-block dropdown-menu">
            <div className="d-flex flex-column gap-2 px-3 py-2 text-secondary rounded bg-light" style={{ width: '9rem' }}>
              <p className="cursor-pointer text-decoration-none hover:text-dark">Profile</p>
              <p className="cursor-pointer text-decoration-none hover:text-dark">Orders</p>
              <p className="cursor-pointer text-decoration-none hover:text-dark">Logout</p>
            </div>
          </div>
        </div> */}

        <Link to="/cart" className="position-relative">
          <img src={assets.cart_icon} className="img-fluid" style={{ width: '1.25rem', minWidth: '1.25rem' }} alt="Cart" />
          {/* <p className="position-absolute end-0 bottom-0 bg-dark text-white rounded-circle text-center" style={{ width: '1rem', height: '1rem', fontSize: '0.5rem', lineHeight: '1rem' }}>
            {getCartCount()}
          </p> */}
        </Link>

        {/* Trigger Bootstrap Offcanvas for mobile menu */}
        <button
          className="btn p-0 border-0 d-sm-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
          aria-controls="mobileMenu"
        >
          <img src={assets.menu_icon} style={{ width: '1.25rem' }} alt="Menu Icon" />
        </button>
      </div>

      {/* INFO: Sidebar menu for smaller screens using Bootstrap Offcanvas */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          <NavLink className="text-decoration-none text-secondary" to="/">HOME</NavLink>
          <NavLink className="text-decoration-none text-secondary" to="/collection">COLLECTION</NavLink>
          <NavLink className="text-decoration-none text-secondary" to="/about">ABOUT</NavLink>
          <NavLink className="text-decoration-none text-secondary" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

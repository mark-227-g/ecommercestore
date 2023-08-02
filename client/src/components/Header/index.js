import React from 'react';
import { Link } from 'react-router-dom';
import logoCart from './../../assets/images/shoppingcart.png';
import hamburger from './../../assets/images/hamburger.png';

//import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
   // Auth.logout();
  };
  return (
    <header className="container-fluid w-100 bg-primary text-light">
      <div className="flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="" to={`/`}>
            <img src={hamburger} alt="Menu" />
          </Link>
          </div>
          <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">The Puzzle Store</h1>
          </Link>
          <p className="m-0">because life is a puzzle</p>
        </div>
        <div>
            <>
              <Link className="btn btn-md btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-md btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
        </div>
        <div>
        <Link className="" to={`/cart`}>
                      <img src={logoCart} alt="Cart" /> 
        </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

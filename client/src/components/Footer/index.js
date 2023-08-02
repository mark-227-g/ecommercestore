import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoFacebook from './../../assets/images/facebook.png';
import logoPinterest from './../../assets/images/pinterest.png';
import logoInstagram from './../../assets/images/instagram.png';
import logoThreads from './../../assets/images/threads.png';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="container-fluid w-100 p-2">
 <div className="flex-row justify-space-between-lg justify-center align-center">
      <div className="">
        About Us / Contact Us / Shipping Info
      </div>
           <div className=" text-center">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
      </div>
      <div id="social" className="mr-4">
            <img src={logoFacebook} alt="Facebook" />
            <img src={logoInstagram} alt="Instagram" />
            <img src={logoPinterest} alt="Pinterest" />
            <img src={logoThreads} alt="Threads" />
      </div>
   </div>

    </footer>
  );
};

export default Footer;

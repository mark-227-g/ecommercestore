import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../assets/images/thepuzzlestore.png';

const Home = () => {

  return (
    <main className="">

      <div className="text-center ">
      <img src={logo} alt="The Puzzle Store" className="mt-4"/>
    </div>
    <div className="text-center">
     <Link className="btn btn-lg btn-info m-2" to="/puzzlecategorys">
         Enter the Store
    </Link>
    </div>
         </main>
  );
};

export default Home;

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
//import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

//import Home from './pages/Home';

import PuzzleCategoryPage from './pages/puzzlecategory';
import PuzzleListPage from './pages/puzzlelist';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Header />
          <div className="">
            <Routes>
            <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/puzzlecategorys" 
                element={<PuzzleCategoryPage />}
              />
             
              <Route 
                path="/puzzles/:puzzlecategoryId" 
                element={<PuzzleListPage />}
              />

            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;

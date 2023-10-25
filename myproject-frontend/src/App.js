import React from 'react';  // Don't forget to import React

import HeaderPage from '../src/header/Header'; // Import your components
import  HomePage  from './HomePage/HomePage';
import  BusListingPage  from './busListing/BusListingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ fontFamily: "'Montserrat', 'Poppins', 'Work Sans', sans-serif" }}>
      <HeaderPage />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/busListing/:from/:to" element={<BusListingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


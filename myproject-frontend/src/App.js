import React,{createContext, useState} from 'react';  // Don't forget to import React

import HeaderPage from '../src/header/Header'; // Import your components
import  HomePage  from './HomePage/HomePage';
import  BusListingPage  from './busListing/BusListingPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

export const Context = createContext()
function App() {
 const [update,setUpdate] = useState('')
   
  return (
    <div className="App" style={{ fontFamily: "'Montserrat', 'Poppins', 'Work Sans', sans-serif" }}>
      <Context.Provider value={[update,setUpdate]}>
      <HeaderPage />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/busListing/:from/:to" element={<BusListingPage />} />
        </Routes>
      </Router>
      </Context.Provider>
    </div>
  );
}

export default App;


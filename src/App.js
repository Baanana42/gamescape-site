import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// importing components
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Footer from './components/Footer'
import Privacy from './components/Privacy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

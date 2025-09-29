import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Datasets from './pages/Datasets';
import Visualization from './pages/Visualization';
import Otolith from './pages/Otolith';
import Taxonomy from './pages/Taxonomy';
import EDNA from './pages/EDNA';
import APIDocs from './pages/APIDocs';
import AI from './pages/AI';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-sand-50 to-coral-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/visualization" element={<Visualization />} />
            <Route path="/otolith" element={<Otolith />} />
            <Route path="/taxonomy" element={<Taxonomy />} />
            <Route path="/edna" element={<EDNA />} />
            <Route path="/api" element={<APIDocs />} />
            <Route path="/ai" element={<AI />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
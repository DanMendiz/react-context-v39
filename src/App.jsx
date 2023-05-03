import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CarsProvider } from './components/contexts/Cars.context';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import CarsList from './pages/CarsList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <CarsProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cars" element={<CarsList />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CarsProvider>
      </Router>
    </div>
  );
}

export default App;

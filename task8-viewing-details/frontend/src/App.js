import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Buyers from './pages/Buyers';
import Products from './pages/Products';
import Transactions from './pages/Transactions';

function App(){
  return (
    <BrowserRouter>
      <div className="container py-4">
        <h2>Task8 - Viewing Details</h2>
        <nav className="mb-3">
          <Link to="/" className="me-3">Buyers</Link>
          <Link to="/products" className="me-3">Products</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Buyers/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/transactions" element={<Transactions/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

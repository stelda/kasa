import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Housing from './components/Housing';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:id" element={< Housing />} />
          <Route path="*" element={<Error404 />} />
      </Routes>

    </Router>
  );
}

export default App;

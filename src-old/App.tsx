import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/nav-bar/Navbar.tsx';
import Home from './pages/home/Home.tsx';

const App: React.FC = () => {
  return (
    <Router basename="/testlink/build">
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />

        </Routes>
    </Router>
  );
};

export default App;

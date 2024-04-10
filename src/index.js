import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import App from './App';
import ThankYou from './ThankYou';
import Date from './Date';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/date" element={<Date />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
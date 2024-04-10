import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import App from './App';
import ThankYou from './ThankYou';
import Date from './Date';
import Activities from './Activities';
import Foods from './Food';
import Desserts from './Dessert';
import LastPage from './LastPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/date" element={<Date />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/deserts" element={<Desserts />} />
        <Route path="/lastpage" element={<LastPage />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
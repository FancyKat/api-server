import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Navbar from './pages/components/navbar';
import Banner from './pages/components/hero_banner';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <Banner />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);


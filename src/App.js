// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navigationBar';
// import Home from './components/home';
// import Offers from './components/offers';
import Footer from './components/footer';
// import Categories from './components/categories';
import Body from './components/body';
// import Menu from './components/cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Body/>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

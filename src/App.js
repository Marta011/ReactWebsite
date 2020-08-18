import React from 'react';
import './App.css';
import Cards from './components/MainPageCards.jsx';
import NavigationHeader from './components/Header.jsx';
import FooterPagePro from './components/FooterPage.jsx';
import ImgCarousel from './components/ImgCarousel.jsx';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <div className="container">
          <Cards />
          <ImgCarousel />
          <FooterPagePro />
      </div>
    </div>
  );
}

export default App;

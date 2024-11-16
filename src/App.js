import React from 'react';
import Header from './components/Header';
import PlayerSection from './components/PlayerSection';
import Footer from './components/Footer';
import './index.css'; // Global styles

const App = () => {
  return (
    <div>
      <Header />
      <PlayerSection />
      <Footer />
    </div>
  );
};

export default App;

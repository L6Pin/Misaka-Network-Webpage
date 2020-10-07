import React from 'react';
import './css/style.css';
import Hero from './sections/hero';
import Overview from './sections/overview';
import Transaction from './sections/transaction';
import Download from './sections/download';
import Footer from './sections/footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Overview />
      <Transaction />
      <Download />
      <Footer />
    </div>
  );
}

export default App;

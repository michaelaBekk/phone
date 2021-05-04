import React, {useState} from 'react';
import './App.css';
import DialPad from './dialpad';
import Buttons from './buttons';
import Menu from './menu';
import Header from './header';
import Footer from './footer';

function App() {
  const [number, setNumber] = useState('');
  return (
    <div className="border">
      <div className="speaker"></div>
      <div className="camera"></div>
      <Header />
      <div className="background">
        <div style={{position:'relative'}}>
          <p className="number">{number}</p>
        </div>
        <div className="calling-container">
          <DialPad setNumber={setNumber} />
          <Buttons number={number} setNumber={setNumber} />
          <Menu />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

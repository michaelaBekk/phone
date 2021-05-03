import './App.css';
import DialPad from './dialpad';
import Menu from './menu';
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="border">
      <div className="speaker"></div>
      <div className="camera"></div>
      <Header />
      <div className="calling-background">
        <DialPad />
        <div style={{textAlign: 'center'}}>
          <button type="button" className="call-button">
            <span style={{color:'white', fontSize:'30px'}} className="material-icons">phone</span>
          </button>
        </div>
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;

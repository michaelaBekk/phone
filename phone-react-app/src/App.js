import './App.css';
import DialPad from './dialpad';

function App() {
  return (
    <div className="border">
      <div className="speaker"></div>
      <div className="camera"></div>
      {/* Header */}
      <div className="flexbox justify-content-between">
        <p className="bolder" style={{marginLeft:'20px'}}>Phone</p>
        <span className="material-icons bolder" style={{marginRight:'20px', marginTop:'12px'}}>search</span>
        {/* <input type="search" name="search" placeholder="search" /> */}
      </div>
      <div className="background">
        <DialPad />
        <div style={{textAlign: 'center'}}>
          <button type="button" className="call-button">
            <span style={{color:'white', fontSize:'30px'}} className="material-icons">phone</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

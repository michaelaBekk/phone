import React, {useState} from 'react';
import './App.css';
import PreCall from './PreCall/precall';
import Calling from './Calling/calling';
import Footer from './footer';

function App() {
  const [callStatus, setCallStatus] = useState();
  const [number, setNumber] = useState('');

  return (
    <div className="border">
      <div className="speaker"></div>
      <div className="camera"></div>
      {callStatus ? <Calling setCallStatus={setCallStatus} /> : <PreCall setCallStatus={setCallStatus} />}
      <Footer callStatus={callStatus} />
    </div>
  );
}

export default App;

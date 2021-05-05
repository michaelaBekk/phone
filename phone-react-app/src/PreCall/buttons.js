import React, {useState} from 'react';

export default function Buttons(props) {
    const [newNumber, setNewNumber] = useState([]);
    const deleteDigit = () => {
        props.number.pop();
        setNewNumber(prevNumber => [...prevNumber, props.number]);
        props.setNumber(newNumber);
    }

    const startCall = () => {
        props.setCallStatus(true);
    }

    return (
        <div className="flexbox justify-content-evenly">
            <span className="material-icons green" style={{fontSize: '30px', marginTop:'10px', cursor: 'pointer'}}>videocam</span>
            <button type="button" onClick={startCall} className="call-button start">
                <span style={{color:'white', fontSize:'30px'}} className="material-icons">phone</span>
            </button>
            <span className="material-icons" onClick={deleteDigit} style={{color:'#595959', fontSize: '23px', marginTop:'12px', cursor: 'pointer'}}>backspace</span>
        </div>
    )
}
import React from 'react';

export default function Buttons(props) {
    const endCall = () => {
        props.setCallStatus(false);
    }

    return (
        <div className="flexbox justify-content-center">
            <button type="button" onClick={endCall} className="call-button end">
                <span style={{color:'#ff3300', fontSize:'30px'}} className="material-icons">call_end</span>
            </button>
        </div>
    )
}
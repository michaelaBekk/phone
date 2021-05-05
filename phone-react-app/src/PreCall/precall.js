import React, {useEffect, useState} from 'react';
import Header from "./header";
import DialPad from '../dialpad';
import Buttons from './buttons';
import Menu from './menu';

export default function PreCall(props) {
    const [callStatus, setCallStatus] = useState(false);
    const [number, setNumber] = useState([]);

    useEffect(() => {
        props.setCallStatus(callStatus);
    }, [callStatus]);

    return (
        <div className="pre-call">
            <Header />
            <div className="background precall">
            <div style={{position:'relative'}}>
                <p className="number">{number}</p>
            </div>
            <div className="content-container">
                <DialPad setNumber={setNumber} />
                <Buttons number={number} setNumber={setNumber} setCallStatus={setCallStatus} />
                <Menu />
            </div>
            </div>
        </div>
    )
}
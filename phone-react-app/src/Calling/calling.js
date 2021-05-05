import React, {useState, useEffect} from 'react';
import Header from './header';
import Buttons from './buttons';
import Menu from './menu';

export default function Calling(props) {
    const [callStatus, setCallStatus] = useState([]);

    useEffect(() => {
      props.setCallStatus(callStatus);
    }, [callStatus]);

    return (
        <div className="calling-background">
          <Header />
          <div className="background calling">
            {/* <div style={{position:'relative'}}>
              <p className="number">{number}</p>
            </div> */}
            <div className="content-container">
              <Menu />
              <Buttons setCallStatus={setCallStatus} />
            </div>
          </div>
        </div>
    )
}
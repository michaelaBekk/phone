import React, {useState} from 'react';
import DialPad from '../dialpad';

export default function Menu() {
    const [menu, setMenu] = useState({
        active: null,
        status: false,
        icons: ['add','videocam', 'bluetooth', 'volume_up', 'mic', 'dialpad'],
        names: ['Add Call', 'Video Call','Bluetooth','Speaker','Mute','Keypad']
    });
    const [number, setNumber] = useState([]);

    const setActive = (index) => {
        setMenu({...menu, active: menu.icons[index], status: !menu.status});
    }

    const toggleMenuIcon = (index) => {
        if(menu.icons[index] === menu.active && menu.status === true) {
            return 'green material-icons';
        }else {
            return 'material-icons';
        }
    }

    return (
        <div className="call-menu flexbox justify-content-evenly flex-wrap" style={{color:'white'}}>
            {menu.active === 'dialpad' ? <DialPad setNumber={setNumber} /> : null}
            {menu.icons.map((icon, index) => {
                return (
                    <div key={index} style={{width:'33%', cursor:'pointer'}} onClick={() => setActive(index)}>
                        <span className={toggleMenuIcon(index)} style={{fontSize:'30px', marginTop:'25px'}}>{icon}</span>
                        <p style={{fontSize: '12px'}}>{menu.names[index]}</p>
                    </div>
                )
            })}
        </div>
    )
}
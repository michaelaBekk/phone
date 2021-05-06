import React, {useState} from 'react';
import DialPad from '../dialpad';

export default function Menu() {
    const [active, setActive] = useState([]);
    const [menu, setMenu] = useState({
        icons: ['add','videocam', 'bluetooth', 'volume_up', 'mic_off', 'dialpad'],
        names: ['Add Call', 'Video Call','Bluetooth','Speaker','Mute','Keypad']
    });
    const [number, setNumber] = useState([]);

    const selectMenu = (index) => {
        if(!active.includes(menu.icons[index])) {
            setActive(prevActive => [...prevActive, menu.icons[index]]);
        }else {
           const unselected = active.filter((item) => item !== menu.icons[index]);
           setActive(unselected);
        }
    }

    // console.log(active)
    
    const toggleMenuIcon = (index) => {
        if(active.includes(menu.icons[index])) {
            return 'green material-icons';
        }else {
            return 'material-icons';
        }
    }

    return (
        <div style={{color:'white'}}>
            {menu.active === 'dialpad' ? (
                <div className="call-menu flexbox justify-content-evenly flex-wrap">
                    <div>
                        <DialPad setNumber={setNumber} />
                    </div>
                    {menu.icons.slice(3,6).map((item, index) => {
                        return (
                            <div key={index} style={{width:'33%', cursor:'pointer'}} onClick={() => selectMenu(index)}>
                                <span className={toggleMenuIcon(index)} style={{fontSize:'30px', marginTop:'25px'}}>{item}</span>
                                {index === 2 ? <p style={{fontSize: '12px'}}>Hide</p> : <p style={{fontSize: '12px'}}>{menu.names.slice(3,6)[index]}</p>}
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="call-menu flexbox justify-content-evenly flex-wrap">
                    {menu.icons.map((icon, index) => {
                        return (
                            <div key={index} style={{width:'33%', cursor:'pointer'}} onClick={() => selectMenu(index)}>
                                {index === 4 && menu.status === true ? <span className={toggleMenuIcon(index)} style={{fontSize:'30px', marginTop:'25px'}}>mic</span> : <span className={toggleMenuIcon(index)} style={{fontSize:'30px', marginTop:'25px'}}>{icon}</span>}
                                <p style={{fontSize: '12px'}}>{menu.names[index]}</p>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
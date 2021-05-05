import React, {useState} from 'react';
import './menu.css';

export default function Menu() {
    const [selected, setSelected] = useState({
        active: "Keypad",
        options: [{item:"Keypad"}, {item:"Recents"}, {item:"Contacts"}]
    });

    const selectNav = (i) => {
        setSelected({...selected, active: selected.options[i].item});
    }

    const toggleNavStyle = (i) => {
        if(selected.options[i].item == selected.active) {
            return "selected";
        }else {
            return "";
        }
    }

    return(
        <div className="menu flexbox justify-content-evenly gray bolder" style={{fontSize: '14px', cursor:'pointer'}}>
            {selected.options.map((value, i) => {
                return (
                    <div key={i} style={{position:'relative'}}>
                        <p className={toggleNavStyle(i)}></p>
                        <p onClick={() => {
                            selectNav(i);
                        }} id={toggleNavStyle(i)}>{value.item}</p>
                    </div>
                )
            })}
        </div>
    )
}
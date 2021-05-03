import React, {useState} from 'react';
import './dialpad.css';

export default function DialPad() {
    const [dialPad, setDialPad] = useState({
        active: null,
        digits: [1,2,3,4,5,6,7,8,9,'*',0,'#'],
        letters: ['voicemail', 'ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ', '', '+']
    });
    const every_nth = (arr) => arr.filter((val, i) => i % 3 === 3 - 1);

    const selectDigit = (index) => {
        setDialPad({...dialPad, active: dialPad.digits[index]});
    }
    
    const toggleDialpadStyle = (index) => {
        if(dialPad.digits[index] === dialPad.active) {
            return "dialed";
        }else {
            return "";
        }
    }

    return (
        <div className="dialpad flexbox justify-content-evenly flex-wrap">
            {dialPad.digits.map((digit, index) => {
            return digit == every_nth(dialPad.digits)[0] || digit == every_nth(dialPad.digits)[1] || digit == every_nth(dialPad.digits)[2] ? (
                <div onClick={() => selectDigit(index)} key={index} style={{width:'33%', position:'relative'}}>
                    <p className={toggleDialpadStyle(index)}></p>
                    <p>{digit}</p>
                    <p className="break"></p> 
                    <span className="gray">{dialPad.letters[index]}</span>
                    <p className="break"></p> 
                </div>
            ): (
                <div onClick={() => selectDigit(index)} key={index} style={{width:'33%', position:'relative'}}>
                    <p className={toggleDialpadStyle(index)}></p>
                    {digit == '*' ? <p style={{fontSize:'35px'}}>{digit}</p> : <p>{digit}</p>}
                    {digit == 1 ? <span className="material-icons gray" style={{fontSize:'16px'}}>{dialPad.letters[index]}</span> : 
                    dialPad.letters[index] == '+' ? <span className="gray" style={{fontSize: '20px'}}>{dialPad.letters[index]}</span> : 
                    <span className="gray">{dialPad.letters[index]}</span>}
                </div>
            )
            })}
      </div>
    )
}
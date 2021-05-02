import './dialpad.css';

export default function DialPad() {
    const digits = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
    const letters = ['voicemail', 'ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ', '', '+'];
    const every_nth = (arr) => arr.filter((val, i) => i % 3 === 3 - 1);
    return (
        <div className="dialpad flexbox justify-content-evenly flex-wrap">
            {digits.map((digit, index) => {
            return digit == every_nth(digits)[0] || digit == every_nth(digits)[1] || digit == every_nth(digits)[2] ? (
                <div style={{width:'33%'}}>
                    <p>{digit}</p>
                    <p className="break"></p> 
                    <span className="gray">{letters[index]}</span>
                    <p className="break"></p> 
                </div>
            ): (
                <div style={{width:'33%'}}>
                    {digit == '*' ? <p style={{fontSize:'35px'}}>{digit}</p> : <p>{digit}</p>}
                    {digit == 1 ? <span className="material-icons gray" style={{fontSize:'16px'}}>{letters[index]}</span> : 
                    letters[index] == '+' ? <span className="gray" style={{fontSize: '20px'}}>{letters[index]}</span> : 
                    <span className="gray">{letters[index]}</span>}
                </div>
            )
            })}
      </div>
    )
}
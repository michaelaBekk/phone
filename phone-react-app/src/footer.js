import './footer.css';

export default function Footer(props) {
    const background = props.callStatus ? 'footerBackground' : '';
    return(
        <div className="flexbox footer justify-content-around gray align-center" id={background}>
            <span className="material-icons">menu</span>
            <span className="square"></span>
            <span className="material-icons">arrow_back_ios</span>
        </div>
    )
}
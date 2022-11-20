import './Card.css';
import qr from './images/image-qr-code.png'; 

const Card = () => {
    return (
        <div className="card">
            <div className="image"><img src={qr} alt="qr" /></div>
            <div className="title">Improve your front-end skills by building projects</div>
            <div className="parrafo">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
        </div>
    );
}

export default Card; 
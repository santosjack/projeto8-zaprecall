import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/logo.svg';


export default function WelcomeScreen(){
    return (
        <div className="container-welcome">
            <img src={logo} alt="ZapRecall logo" />
            <h2>ZapRecall</h2>
            <Link className="link" to="/start">Iniciar Recall!</Link>
        </div>
    );
}
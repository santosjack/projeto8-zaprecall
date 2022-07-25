import logo from '../../assets/logo.svg';
import './style.css';

export default function Header () {
    return (
        <div className="container-header">
                <img src={logo} alt="logo ZapRecall" />
                <h2>ZapRecall</h2>
        </div>
    )
}
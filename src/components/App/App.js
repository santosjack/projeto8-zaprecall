import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainScreen from '../MainScreen/MainScreen';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import './reset.css';
import './style.css';

export default function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/start" element={<MainScreen />} />
            </Routes>
        </BrowserRouter>
    );
}
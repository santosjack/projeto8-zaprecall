import React from 'react';
import Header from '../Header/Header.js';
import Deck from '../Deck/Deck.js';
import Footer from '../Footer/Footer.js';
import './style.css';



export default function MainScreen () {
    const [result, setResult ] = React.useState({
        total: 0,
        numFinished: 0,
        seqResults: []
    }); 

    
  
    return (
        <div className="container-main">
            <Header />
            <Deck props={{result, setResult}}/>
            <Footer props={result}/>
        </div>
    );
}
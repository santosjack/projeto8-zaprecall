import React, { useEffect } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import deck from '../../database/Deck-react';
import './style.css';

export default function Deck (props){

    const {result, setResult } = props.props;

    useEffect(
        () => setResult({...result, total: deck.length}), []
    );

    function showResults (r) {
        setResult({...result, numFinished: result.numFinished+1, seqResults: [...result.seqResults, r]});
        console.log(result)
    }




    

    return (
       <div className="deck">
            {
                deck.map( (item) => (
                    <Flashcard
                        key={item.id}
                        id={item.id}
                        question={item.question}
                        answer={item.answer}
                        showResults={showResults}
                    />
                ))
            }
            <div className="invisible"></div>
       </div>
    );
}
import React, { useEffect } from 'react';
import Flashcard from '../Flashcard/Flashcard';
import deck from '../../database/Deck-react';
import './style.css';

export default function Deck (props){

    const {result, setResult } = props.props;
    const [sortedDeck, setSortedDeck ] = React.useState([]);
   
    let count = 0;

    useEffect(
        () => {
            setResult({...result, total: deck.length});
            setSortedDeck(shuffleArray(deck));
            console.log(sortedDeck);
    }, []
    );

    function showResults (r, type) {
        setResult({...result, numFinished: result.numFinished+1, seqResults: [...result.seqResults, r], [""+type]: result[""+type]+1});
        
    }

    function shuffleArray(arr) {

        let newArr = arr;
        // Loop em todos os elementos
        for (let i = newArr.length - 1; i > 0; i--) {
            // Escolhendo elemento aleatório
            const j = Math.floor(Math.random() * (i + 1));
        // Reposicionando elemento
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
    // Retornando array com aleatoriedade
        return newArr;
    }


    return (
       <div className="deck">
            {
                sortedDeck.map( (item) => (
                    <Flashcard
                        key={item.id}
                        id={++count}
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
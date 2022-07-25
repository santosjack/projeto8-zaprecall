import React from 'react';
import './style.css';

export default function Footer (props) {
    const result = props.props;
    

    function mountResult () {
        if(result.numFinished === result.total){
            
            if(result.numFail > 0){
                return(
                    <div className="result">
                        <div>
                            <span className='emoji'>😥</span>
                            <span>Putz...</span>
                        </div>
                        <div>Ainda faltam alguns... Mas não desanime!</div>
                    </div>
                );
            }else {
                return(
                    <div className="result">
                        <div>
                            <span className='emoji'>🥳</span>
                            <span>Parabéns!</span>
                        </div>
                        <div>Você não esqueceu de nenhum flashcard!</div>
                    </div>
                );
            }
        }
    }

 
    return (
            <div className="container-footer">
                  {mountResult()}
                <div className="progress">{result.numFinished}/{result.total} CONCLUÍDOS</div>
                <div className="progressIcons">
                    {result.seqResults.map(item => item)}
                </div>
            </div>
        
    );
}
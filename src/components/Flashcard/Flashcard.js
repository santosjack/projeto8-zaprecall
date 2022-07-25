import React from "react";
import './style.css';

export default function Flashcard ({id, question, answer, showResults}) {

    const [ isOpen, setIsOpen ] = React.useState(false);
    const [ isFlipped, setIsFlipped ] = React.useState(false);
    const [ isFinished, setIsFineshed ] = React.useState(false);



    const [ status, setStatus ] = React.useState(false);

    function finishCard (stt) {
        setIsFineshed(true);
        setStatus(stt);
        showResults(stt);
    }

    function mountStatus(){
        if(status === "fail"){
            return <ion-icon name="close-circle" className="fail"></ion-icon>
        }

        if(status === "ok"){
            return <ion-icon name="help-circle" className="ok"></ion-icon>
        }

        if(status === "good"){
            return <ion-icon name="checkmark-circle" className="good"></ion-icon>
        }
    }

    function mountFlashcard (){
        if(!isOpen){
            return (
                <div className="closed">
                    <span>Pergunta {id}</span>
                    <div>
                        <ion-icon name="play-outline" onClick={() => setIsOpen(true)}></ion-icon>
                    </div>
                </div>
            );
        }

        if((isOpen && !isFlipped) && !isFinished){
            return (
                <div className="question">
                    <span>{question}</span>
                    <div>
                        <ion-icon name="refresh-outline" onClick={() => setIsFlipped(true)}></ion-icon>
                    </div>
                </div>
            );
        }

        if((isOpen && isFlipped) && !isFinished){
            return (
                <div className="answer">
                    <span>{answer}</span>
                    <div>
                        <button className="red" onClick={() => finishCard("fail")}>Não Lembrei</button>
                        <button className="orange" onClick={() => finishCard("ok")}>Quase não Lembrei</button>
                        <button className="green" onClick={() => finishCard("good")}>Zap!</button>
                    </div>
                </div>
            );
        }

        if(isFinished){
            return (
                <div className={"closed finished " + (!!status ? status : "")}>
                    <span>Pergunta {id}</span>
                    <div>
                        {mountStatus()}
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flashcard">

            {mountFlashcard()}
            
        </div>
    );
}
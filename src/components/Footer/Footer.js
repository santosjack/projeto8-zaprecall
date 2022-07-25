import './style.css';

export default function Footer (props) {
    const result = props.props;

    function mountResult () {
        if(result.numFinished === result.total){
            if(result.numFail > 0){
                return(
                    <>
                        <div>
                            <span>😥</span>
                            <span>Putz...</span>
                        </div>
                        <div>Ainda faltam alguns... Mas não desanime!</div>
                    </>
                );
            }else {
                return(
                    <>
                        <div>
                            <span>🥳</span>
                            <span>Parabéns!</span>
                        </div>
                        <div>Você não esqueceu de nenhum flashcard!</div>
                    </>
                );
            }
        }
    }

 
    return (
            <div className="container-footer">
                <div className="result">
                  {mountResult()}
                </div>
                <div className="progress">{result.numFinished}/{result.total} CONCLUÍDOS</div>
                <div className="progressIcons">
                    {result.seqResults.map(item => item)}
                </div>
            </div>
        
    );
}
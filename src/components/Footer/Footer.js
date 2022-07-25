import './style.css';

export default function Footer (props) {
    const result = props.props;
    return (
            <div className="container-footer">
                <div className="result"></div>
                <div className="progress">{result.numFinished}/{result.total}</div>
                <div className="progressIcons"></div>
                <div className="button"></div>
            </div>
        
    );
}
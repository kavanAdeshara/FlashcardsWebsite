export default function Flashcard(props) {
    const handleClick = (event) => {
        event.currentTarget.classList.toggle('flipped');
      }
    return (
        <div className="flashcard" onClick={handleClick}>
            <div className='flashcard-inner'>
                <div className="front-side">
                    <h2> {props.question} </h2> <br/>
                </div>
                <div className="back-side">
                    <h2> {props.answer} </h2>
                </div>
            </div>
        </div>
    )
}
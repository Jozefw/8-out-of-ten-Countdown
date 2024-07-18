import {forwardRef} from 'react';
const ResultModal = forwardRef( function ResultModal({result, targetTime},ref){
    return(
        <dialog ref={ref} className="result-modal">
            <h3>You {result} won / lost!  </h3>
            <p>Your Target time was <strong>{targetTime} seconds.</strong> </p>
            <p>You stopped the timer with x Seconds remaining.</p>
            <form method='dialog'>
                <button>Close</button>
            </form>
        </dialog>
    )
});

export default ResultModal
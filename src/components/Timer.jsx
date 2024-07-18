import {useState, useRef} from 'react';
import ResultModal from './ResultModal';

export default function Timer({title, targetTime}) {
    const [timerExp,setTimerExp] = useState(false)
    const [timerStart,setTimerStart] = useState(false)

    const timer = useRef();
    const modal = useRef();

    function HandleStart() {
        timer.current = setTimeout(() => {
            setTimerExp(true);
            modal.current.showModal();
        }, targetTime * 1000)
        setTimerStart(true);
    }

    function HandleStop() {
        clearTimeout(timer.current);
    }

    return (
        <>
        <ResultModal ref={modal} targetTime={targetTime} result='lost'> </ResultModal>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button
                        onClick={timerStart ? HandleStop : HandleStart}
                        className="">
                        {timerStart ? 'Stop' : 'Start'}
                        Challenge
                    </button>
                </p>
                <p
                    className={timerStart ? 'active' : undefined}>
                    {timerStart ? 'Time is Running' : 'Timer Not Running'}
                </p>
            </section>
        </>
    )
}
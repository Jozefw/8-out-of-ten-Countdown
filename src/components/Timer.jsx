import {useState, useRef} from 'react';

export default function Timer({title,targetTime}){
const [timerExp,setTimerExp] = useState(false)
const [timerStart,setTimerStart] = useState(false)

const timer = useRef();

function HandleStart(){
    timer.current = setTimeout(()=>{
        setTimerExp(true);
    },targetTime * 1000)
    setTimerStart(true);
}

function HandleStop(){
    clearTimeout(timer.current);
}

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExp && <p>You lost</p>}
            <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's':''}
            </p>
            <p>
                <button onClick={timerStart ? HandleStop : HandleStart} className="">
                    {timerStart ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerStart ? 'active': undefined}>
                    {timerStart ? 'Time is Running' : 'Timer Not Running'}
                </p>
            </p>
        </section>
    )
}
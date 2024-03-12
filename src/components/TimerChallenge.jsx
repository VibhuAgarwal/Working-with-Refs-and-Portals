import React, { useState, useRef } from 'react'
import ResultModal from './ResultModal.jsx';


export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000)
        setTimerStarted(true);
    }

    function handleStop() {
        clearInterval(timer.current);
    }

    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result="lost" />}
            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop Challenge' : 'Start Challenge'}
                    </button>
                </p>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer Inactive'}
                </p>
            </section>
        </>
    )
}
import React, {useEffect, useState} from 'react';

const UseTimer = (onDone, initialTime) => {
    const [time, setTime] = useState(initialTime)
    const [timeId, setTimeId] = useState(null)

    const countDown = () => {
        setTime((prev) => prev-1)
    }

    const reset = () => {
        setTime(initialTime)
    }

    const runTimer = () => {
        if (time === 0) return onDone()
        const timer = setTimeout(() => {
            countDown()
        }, 1000)
        setTimeId(timer)
    }

    useEffect(() => {
        runTimer()
    }, [time])

    return {time, reset}
};

export default UseTimer;
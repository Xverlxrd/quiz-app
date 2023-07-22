import React, { FC } from 'react';
import './TimerComponent.css'
interface TimerProps {
    time: number
}

const TimerComponent:FC<TimerProps> = ({time}) => {


    return (
        <div className={'timer'}>
            <span>{Math.floor(time / 60)}</span>
            <span>
                    {time % 60 < 10 ? `:0${time % 60}` : `:${time % 60}`}
                  </span>
        </div>
    );
};

export default TimerComponent;
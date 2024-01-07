import { useState } from 'react';

export default function TogetherCounters(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);        
    }


    return (
        <div>
            <h1>Counters that update together</h1>
            <ToButton count={count} onClick={handleClick} />
            <ToButton count={count} onClick={handleClick} />
        </div>
    );
}

function ToButton({count, onClick}) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
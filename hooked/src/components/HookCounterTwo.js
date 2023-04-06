import React, { useState } from 'react';

const HookCounterTwo = () => {

    const initialCount=0;
    const [count, setCount] = useState(initialCount)
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            // setCount(count+1) it wont work
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount -1)}>Decrement</button>
            <button onClick={() => incrementFive()}>IncrementFive</button>

        </div>
    );
};

export default HookCounterTwo;
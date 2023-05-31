import React, { useEffect, useState } from 'react';
import UseCounters from './useCounters';

const MAX_CAPACITY = 10;

export default function Accommodate() {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = UseCounters(0);

    useEffect(() => {
        console.log('====================');
        console.log('useEffect() is called');
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count valueL ${count}`);
    }, [count]);
    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: 'red' }}>정원이 가득 찼습니다.</p>}
        </div>
    );
}

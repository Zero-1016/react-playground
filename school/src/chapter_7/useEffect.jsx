import { useEffect } from 'react';
import { useState } from 'react';

const CounterEffect = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `총 ${count} 번 클릭했습니다.`;
    });

    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
};

export default CounterEffect;

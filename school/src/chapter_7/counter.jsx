import { useState } from 'react';

const UseCounters = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>총 {counter}번 클릭했습니다.</p>
            <button onClick={() => setCounter(counter + 1)}>클릭</button>
        </div>
    );
};

export default UseCounters;

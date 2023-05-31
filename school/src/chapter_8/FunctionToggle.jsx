import React, { useState } from 'react';

export default function FunctionToggle() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수 안에 함수로 정의
    function handleClick() {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    // 방법 2. arrow function을 사용하여 정의
    // const handleClick = () => {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // };

    return <button onClick={handleClick}>{isToggleOn ? '켜짐' : '꺼짐'}</button>;
}

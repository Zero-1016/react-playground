import React, { useState } from 'react';

const scaleNames = { c: '섭씨', f: '화씨' };

export default function TemperatureInput(props) {
    console.log(props);

    const onChange = (e) => {
        props.onTemperatureChange(e.target.value);
    };

    return (
        <fieldset>
            <legend>온도를 입력해주세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={onChange} />
        </fieldset>
    );
}

import React, { useState } from 'react';

export const EventPractice = (props) => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;

    const onChange = (e) => {
        setTimeout(() => console.log(e), 500);
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: '',
        });
    };
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };
    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="유저명" value={username} onChange={onChange} />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해보새요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

export default EventPractice;

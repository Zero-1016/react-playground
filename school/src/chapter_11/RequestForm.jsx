import { useState } from 'react';

const RequestForm = (props) => {
    const [value, setValue] = useState('요청사항을 입력하세요');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        alert('입력한 이름' + value);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항 :<textarea value={value} onChange={handleChange} />
            </label>
            <button type={'submit'}>제출</button>
        </form>
    );
};

export default RequestForm;
